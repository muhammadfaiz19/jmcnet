"use client";

import { useState, useEffect } from "react";
import { chatbotService } from "@/services/chatbot.service";
import type { ChatbotContext, ChatbotFile } from "@/types";
import { AlertDialog } from "@/components/ui/alert-dialog";
import {
  Robot,
  FloppyDisk,
  WarningCircle,
  Check,
  ArrowsClockwise,
  FileText,
  UploadSimple,
  Trash,
  FileXls,
  Brain,
  DownloadSimple,
} from "@phosphor-icons/react";

type TabType = "context" | "files";

export default function AdminChatbotPage() {
  const [activeTab, setActiveTab] = useState<TabType>("context");

  // === State Konteks ===
  const [context, setContext] = useState<ChatbotContext | null>(null);
  const [contextText, setContextText] = useState("");
  const [contextLoading, setContextLoading] = useState(true);
  const [savingContext, setSavingContext] = useState(false);
  const [contextSuccess, setContextSuccess] = useState(false);

  // === State Berkas/Files ===
  const [files, setFiles] = useState<ChatbotFile[]>([]);
  const [filesLoading, setFilesLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  // State untuk delete modal kustom
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [fileIdToDelete, setFileIdToDelete] = useState<number | null>(null);

  // ==========================================
  // FUNGSI KONTEKS TEKS
  // ==========================================
  const fetchContext = async () => {
    setContextLoading(true);
    try {
      const res = await chatbotService.getContextByName("Profil JMCNET");
      if (res.data?.success && res.data.data) {
        setContext(res.data.data);
        setContextText(res.data.data.context);
      } else {
        setContext(null);
        setContextText("");
      }
    } catch (err: any) {
      if (err.response?.status !== 404) {
        console.error("Gagal mengambil konteks chatbot:", err);
      }
      setContext(null);
      setContextText("");
    } finally {
      setContextLoading(false);
    }
  };

  const handleSaveContext = async () => {
    setSavingContext(true);
    try {
      const res = await chatbotService.upsertContextByName("Profil JMCNET", contextText);
      if (res.data?.success) {
        setContext(res.data.data ?? null);
        setContextSuccess(true);
        setTimeout(() => setContextSuccess(false), 3000);
      }
    } catch (err) {
      console.error("Gagal menyimpan konteks chatbot:", err);
      alert("Gagal memperbarui ingatan chatbot. Coba beberapa saat lagi.");
    } finally {
      setSavingContext(false);
    }
  };

  // ==========================================
  // FUNGSI PENGELOLAAN FILE
  // ==========================================
  const fetchFiles = async () => {
    setFilesLoading(true);
    try {
      const res = await chatbotService.getFiles();
      if (res.data?.success) {
        setFiles(res.data.data ?? []);
      }
    } catch (err) {
      console.error("Gagal mengambil file chatbot:", err);
    } finally {
      setFilesLoading(false);
    }
  };

  const handleUploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const res = await chatbotService.uploadFile(file);
      if (res.data?.success) {
        fetchFiles();
      }
    } catch (err: any) {
      console.error("Gagal mengupload berkas chatbot:", err);
      alert(err.response?.data?.message || "Gagal mengupload berkas. Pastikan format berkas sesuai (PDF/Excel).");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  const handleDeleteFileClick = (id: number) => {
    setFileIdToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDeleteFile = async () => {
    if (fileIdToDelete === null) return;
    const id = fileIdToDelete;
    setDeletingId(id);
    try {
      const res = await chatbotService.deleteFile(id);
      if (res.data?.success) {
        fetchFiles();
      }
    } catch (err) {
      console.error("Gagal menghapus file:", err);
      alert("Gagal menghapus berkas referensi.");
    } finally {
      setDeletingId(null);
      setFileIdToDelete(null);
      setDeleteDialogOpen(false);
    }
  };

  // ==========================================
  // LOAD PERTAMA
  // ==========================================
  useEffect(() => {
    fetchContext();
    fetchFiles();
  }, []);

  return (
    <div className="space-y-6">
      {/* Header Halaman */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900">
            Konteks &amp; Pengetahuan Chatbot AI
          </h1>
          <p className="text-xs text-slate-500">
            Kelola data profil perusahaan dan unggah berkas referensi (PDF/Excel) agar respon chatbot AI tepat sasaran.
          </p>
        </div>
        <button
          onClick={() => {
            fetchContext();
            fetchFiles();
          }}
          className="px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-600 rounded-xl text-xs font-bold border border-slate-200 flex items-center gap-1.5 cursor-pointer shadow-sm"
        >
          <ArrowsClockwise size={16} weight="bold" />
          <span>Refresh Data</span>
        </button>
      </div>

      {/* Switcher Tab */}
      <div className="flex gap-2">
        <button
          onClick={() => setActiveTab("context")}
          className={`px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
            activeTab === "context"
              ? "bg-sky-500 text-white shadow-md"
              : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 shadow-sm"
          }`}
        >
          <Brain size={18} weight="fill" />
          <span>Ingatan Teks (Konteks)</span>
        </button>
        <button
          onClick={() => setActiveTab("files")}
          className={`px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
            activeTab === "files"
              ? "bg-sky-500 text-white shadow-md"
              : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 shadow-sm"
          }`}
        >
          <FileText size={18} weight="fill" />
          <span>Berkas Dokumen</span>
          {files.length > 0 && (
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                activeTab === "files"
                  ? "bg-white/20 text-white"
                  : "bg-sky-100 text-sky-600"
              }`}
            >
              {files.length}
            </span>
          )}
        </button>
      </div>

      {/* ==========================================
          TAB 1: INGATAN KONTEKS (TEXT EDITOR)
          ========================================== */}
      {activeTab === "context" && (
        <div className="space-y-6">
          {/* Petunjuk Teks */}
          <div className="p-5 bg-sky-500/10 border border-sky-500/20 rounded-3xl flex items-start gap-3 text-slate-800">
            <WarningCircle size={20} weight="fill" className="text-sky-500 flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm space-y-1">
              <p className="font-extrabold text-slate-900">💡 Cara Mengisi Konteks Chatbot:</p>
              <p className="leading-relaxed text-slate-600">
                Tulis aturan perilaku, kontak resmi, info jam kerja, keunggulan, serta panduan yang spesifik. Konten ini akan langsung digunakan chatbot untuk menyusun jawaban ke pengunjung website.
              </p>
            </div>
          </div>

          {/* Editor Konteks */}
          {contextLoading ? (
            <div className="py-20 flex flex-col items-center justify-center bg-white rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-sm text-slate-500 font-medium">Memuat memori AI...</p>
            </div>
          ) : (
            <div className="bg-white p-6 sm:p-8 rounded-[2rem] border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center">
                    <Robot size={20} weight="fill" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900">Profil JMCNET</h3>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                      {context ? `ID Memori: #${context.id}` : "Ingatan Baru (Belum Disimpan)"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {contextSuccess && (
                    <span className="px-3 py-1.5 bg-emerald-500/10 text-emerald-600 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <Check size={14} weight="bold" />
                      <span>Berhasil Disimpan</span>
                    </span>
                  )}

                  <button
                    onClick={handleSaveContext}
                    disabled={savingContext}
                    className="px-4.5 py-2.5 bg-sky-500 hover:bg-sky-600 disabled:bg-sky-500/60 text-white rounded-xl text-xs font-bold transition-all shadow-md hover:shadow-lg flex items-center gap-1.5 cursor-pointer"
                  >
                    {savingContext ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <FloppyDisk size={16} weight="bold" />
                        <span>Simpan Ingatan</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <textarea
                value={contextText}
                onChange={(e) => setContextText(e.target.value)}
                placeholder="Tulis ingatan / konteks chatbot di sini...&#10;&#10;Contoh: Kamu adalah asisten virtual resmi JMCNET (PT Jaringan Multimedia Cirebon), penyedia layanan internet fiber optic terpercaya di wilayah Cirebon..."
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-sky-500 focus:bg-white focus:outline-none transition-all duration-300 text-sm h-80 resize-none leading-relaxed shadow-inner"
              />
            </div>
          )}
        </div>
      )}

      {/* ==========================================
          TAB 2: DOKUMEN KONTEKS (PDF/EXCEL UPLOAD)
          ========================================== */}
      {activeTab === "files" && (
        <div className="space-y-6">
          {/* Petunjuk File */}
          <div className="p-5 bg-sky-500/10 border border-sky-500/20 rounded-3xl flex items-start gap-3 text-slate-800">
            <WarningCircle size={20} weight="fill" className="text-sky-500 flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm space-y-1">
              <p className="font-extrabold text-slate-900">📄 Berkas Referensi Chatbot:</p>
              <p className="leading-relaxed text-slate-600">
                Unggah dokumen eksternal seperti brosur paket lengkap, panduan SLA, rincian kelurahan yang ter-cover, atau kebijakan pemeliharaan jaringan. Backend akan otomatis mengekstrak konten teks dari file tersebut untuk memperkaya wawasan chatbot.
              </p>
            </div>
          </div>

          {/* Peringatan Token Limit */}
          <div className="p-5 bg-amber-500/10 border border-amber-500/25 rounded-3xl flex items-start gap-3 text-slate-800">
            <WarningCircle size={20} weight="fill" className="text-amber-500 flex-shrink-0 mt-0.5 animate-pulse" />
            <div className="text-xs sm:text-sm space-y-1">
              <p className="font-extrabold text-amber-800">⚠️ Peringatan Penggunaan Token:</p>
              <p className="leading-relaxed text-slate-600">
                Mengunggah berkas dengan ukuran besar atau berisi sangat banyak teks akan mengonsumsi kuota token API LLM/Chatbot dengan cepat. Untuk menghindari pembatasan kuota (rate limit) atau biaya berlebih, pastikan hanya mengunggah dokumen penting dan ringkas.
              </p>
            </div>
          </div>

          {/* Area Upload File */}
          <div className="bg-white p-6 sm:p-8 rounded-[2rem] border border-slate-200 shadow-sm">
            <label
              className={`border-2 border-dashed rounded-2xl flex flex-col items-center justify-center py-10 transition-all duration-300 cursor-pointer ${
                uploading
                  ? "border-sky-500/40 bg-sky-500/5"
                  : "border-slate-300 bg-slate-50/50 hover:bg-slate-100 hover:border-sky-500"
              }`}
            >
              {uploading ? (
                <>
                  <div className="w-8 h-8 border-3 border-sky-500 border-t-transparent rounded-full animate-spin mb-3"></div>
                  <span className="text-sm font-bold text-sky-500">Mengupload & mengekstrak konten berkas...</span>
                </>
              ) : (
                <>
                  <UploadSimple size={32} className="text-sky-500 mb-3" />
                  <span className="text-sm font-bold text-slate-700">Pilih dokumen PDF atau Excel untuk diunggah</span>
                  <span className="text-xs text-slate-400 mt-1">Ekstensi yang didukung: .pdf, .xlsx, .xls</span>
                </>
              )}
              <input
                type="file"
                accept=".pdf,.xlsx,.xls,application/pdf,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
                onChange={handleUploadFile}
                disabled={uploading}
                className="hidden"
              />
            </label>
          </div>

          {/* Daftar File */}
          {filesLoading ? (
            <div className="py-20 flex flex-col items-center justify-center bg-white rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-sm text-slate-500 font-medium">Memuat berkas referensi...</p>
            </div>
          ) : files.length === 0 ? (
            <div className="py-16 text-center bg-white rounded-3xl border border-slate-200 shadow-sm">
              <FileText size={48} className="text-slate-300 mx-auto mb-3" />
              <p className="text-sm font-bold text-slate-900">Belum Ada Dokumen Referensi</p>
              <p className="text-xs text-slate-500 mt-1">Unggah file PDF / Excel pertama Anda untuk melatih kecerdasan asisten virtual.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {files.map((file) => (
                <div
                  key={file.id}
                  className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between gap-4 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center flex-shrink-0">
                      {file.filename.endsWith(".pdf") ? (
                        <FileText size={22} weight="fill" />
                      ) : (
                        <FileXls size={22} weight="fill" />
                      )}
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-bold text-slate-900 truncate">
                        {file.filename}
                      </p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">
                        ID: #{file.id} • {file.content.length > 0 ? `${file.content.length.toLocaleString()} karakter terekstrak` : "Teks kosong"}
                      </p>
                      {file.createdAt && (
                        <p className="text-[9px] text-slate-400 font-medium mt-0.5">
                          Diupload pada: {new Date(file.createdAt).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <a
                      href={file.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-100 hover:bg-emerald-500 text-slate-600 hover:text-white rounded-xl transition-all cursor-pointer border border-slate-200 flex items-center justify-center"
                      title="Unduh File"
                      download={file.filename}
                    >
                      <DownloadSimple size={14} weight="bold" />
                    </a>

                    <button
                      onClick={() => handleDeleteFileClick(file.id)}
                      disabled={deletingId === file.id}
                      className="p-2 bg-slate-100 hover:bg-red-500 text-slate-600 hover:text-white rounded-xl transition-all cursor-pointer border border-slate-200 disabled:opacity-50"
                      title="Hapus File"
                    >
                      {deletingId === file.id ? (
                        <div className="w-3.5 h-3.5 border-2 border-slate-400 border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <Trash size={14} weight="bold" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* AlertDialog Kustom untuk konfirmasi hapus */}
      <AlertDialog
        isOpen={deleteDialogOpen}
        onClose={() => {
          setDeleteDialogOpen(false);
          setFileIdToDelete(null);
        }}
        onConfirm={handleConfirmDeleteFile}
        title="Hapus Berkas Referensi"
        description="Apakah Anda yakin ingin menghapus berkas referensi ini? Tindakan ini tidak dapat dibatalkan."
        isLoading={deletingId !== null}
      />
    </div>
  );
}
