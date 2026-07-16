"use client";

import { useState, useEffect } from "react";
import { faqService } from "@/services/faq.service";
import { serviceCategoryService } from "@/services/serviceCategory.service";
import type { Faq, ServiceCategory } from "@/types";
import { AlertDialog } from "@/components/ui/alert-dialog";
import {
  Plus,
  Pencil,
  Trash,
  X,
  CheckCircle,
  WarningCircle,
  Question,
} from "@phosphor-icons/react";

export default function AdminFaqsPage() {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // State untuk form modal
  const [modalOpen, setModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentId, setCurrentId] = useState<number | null>(null);

  // State untuk delete modal kustom
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState<number | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Field form
  const [categoryId, setCategoryId] = useState<number | "">("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [categories, setCategories] = useState<ServiceCategory[]>([]);

  const [formLoading, setFormLoading] = useState(false);

  // Ambil semua FAQ
  const fetchFaqs = async () => {
    setLoading(true);
    try {
      const res = await faqService.getAll();
      if (res.data?.success) {
        setFaqs(res.data.data || []);
      }
    } catch (err: any) {
      console.error("Gagal mengambil data FAQ:", err);
      setError("Gagal memuat tanya jawab FAQ.");
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await serviceCategoryService.getAll();
      if (res.data?.success) {
        setCategories(res.data.data || []);
      }
    } catch (err) {
      console.error("Gagal mengambil kategori:", err);
    }
  };

  useEffect(() => {
    fetchFaqs();
    fetchCategories();
  }, []);

  // Buka modal untuk tambah FAQ baru
  const handleOpenAdd = () => {
    setIsEdit(false);
    setCurrentId(null);
    setCategoryId("");
    setQuestion("");
    setAnswer("");
    setError("");
    setModalOpen(true);
  };

  // Buka modal untuk edit FAQ
  const handleOpenEdit = (faq: Faq) => {
    setIsEdit(true);
    setCurrentId(faq.id);
    setCategoryId(faq.categoryId || "");
    setQuestion(faq.question);
    setAnswer(faq.answer);
    setError("");
    setModalOpen(true);
  };

  // Aksi Hapus FAQ
  const handleDeleteClick = (id: number) => {
    setIdToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (idToDelete === null) return;
    setIsDeleting(true);
    try {
      const res = await faqService.delete(idToDelete);
      if (res.success) {
        setSuccess("FAQ berhasil dihapus!");
        setTimeout(() => setSuccess(""), 3000);
        fetchFaqs();
      } else {
        setError(res.message || "Gagal menghapus FAQ.");
      }
    } catch (err: any) {
      console.error(err);
      setError("Gagal menghapus FAQ.");
    } finally {
      setIsDeleting(false);
      setDeleteDialogOpen(false);
      setIdToDelete(null);
    }
  };

  // Aksi Submit Form (Tambah/Edit)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setError("");

    const payload = {
      categoryId: categoryId === "" ? null : Number(categoryId),
      question,
      answer,
    };

    try {
      if (isEdit && currentId !== null) {
        const res = await faqService.update(currentId, payload);
        if (res.success) {
          setSuccess("FAQ berhasil diperbarui!");
          setModalOpen(false);
          fetchFaqs();
        } else {
          setError(res.message || "Gagal memperbarui FAQ.");
        }
      } else {
        const res = await faqService.create(payload);
        if (res.success) {
          setSuccess("FAQ baru berhasil dibuat!");
          setModalOpen(false);
          fetchFaqs();
        } else {
          setError(res.message || "Gagal membuat FAQ.");
        }
      }
      setTimeout(() => setSuccess(""), 3000);
    } catch (err: any) {
      console.error(err);
      setError("Terjadi kesalahan sistem saat menyimpan FAQ.");
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Halaman */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900">
            Kelola Tanya Jawab (FAQ)
          </h1>
          <p className="text-xs text-slate-500">
            Daftar pertanyaan umum dan jawabannya yang akan tampil di halaman FAQ website.
          </p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="px-4 py-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
        >
          <Plus size={16} weight="bold" />
          <span>Tambah FAQ Baru</span>
        </button>
      </div>

      {/* Notifikasi Sukses */}
      {success && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl flex items-center gap-2 text-xs font-bold animate-fade-in">
          <CheckCircle size={18} weight="fill" className="text-emerald-500" />
          <span>{success}</span>
        </div>
      )}

      {/* Tabel Data */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-slate-500 font-medium">
            <div className="w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <span>Memuat data FAQ...</span>
          </div>
        ) : faqs.length === 0 ? (
          <div className="p-12 text-center text-slate-400">
            <Question size={48} className="mx-auto mb-4 text-slate-300 animate-pulse" />
            <p className="text-sm font-semibold">Belum ada data FAQ terdaftar.</p>
            <button
              onClick={handleOpenAdd}
              className="text-xs text-sky-500 font-bold mt-2 hover:underline cursor-pointer"
            >
              Buat sekarang
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-[10px] font-extrabold uppercase tracking-wider">
                  <th className="px-6 py-4 max-w-[250px]">Pertanyaan</th>
                  <th className="px-6 py-4">Kategori</th>
                  <th className="px-6 py-4">Jawaban (Singkat)</th>
                  <th className="px-6 py-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
                 {faqs.map((faq) => (
                  <tr key={faq.id} className="hover:bg-slate-50/50 transition-all">
                    <td className="px-6 py-4 font-bold text-slate-900 max-w-[250px] truncate" title={faq.question}>
                      {faq.question}
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-semibold text-slate-600 bg-sky-50 text-sky-800 px-2 py-0.5 rounded">
                        {faq.category?.name || "Tanpa Kategori"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-500 max-w-[400px] truncate" title={faq.answer}>
                      {faq.answer}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="inline-flex gap-2">
                        <button
                          onClick={() => handleOpenEdit(faq)}
                          className="p-2 bg-slate-100 hover:bg-sky-500 hover:text-white rounded-xl transition-all cursor-pointer text-slate-600"
                          title="Edit"
                        >
                          <Pencil size={14} weight="bold" />
                        </button>
                        <button
                          onClick={() => handleDeleteClick(faq.id)}
                          className="p-2 bg-slate-100 hover:bg-red-500 hover:text-white rounded-xl transition-all cursor-pointer text-slate-600"
                          title="Hapus"
                        >
                          <Trash size={14} weight="bold" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal Form FAQ */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white w-full max-w-xl rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-scale-up">
            {/* Header Modal */}
            <div className="p-6 border-b border-slate-150 flex items-center justify-between bg-slate-50">
              <div>
                <h3 className="text-lg font-black text-slate-900">
                  {isEdit ? "Edit Tanya Jawab FAQ" : "Tambah Tanya Jawab FAQ Baru"}
                </h3>
                <p className="text-xs text-slate-500">Tuliskan detail pertanyaan dan jawabannya.</p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1.5 rounded-lg bg-slate-200 text-slate-600 hover:bg-slate-350 transition-all cursor-pointer"
              >
                <X size={18} weight="bold" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="overflow-y-auto flex-grow p-6 space-y-5">
              {/* Notifikasi Error */}
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-2xl flex items-start gap-2.5 text-xs font-bold">
                  <WarningCircle size={18} weight="fill" className="text-red-500 flex-shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              {/* Kategori Layanan */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                  Kategori Layanan
                </label>
                <select
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value === "" ? "" : Number(e.target.value))}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none cursor-pointer"
                >
                  <option value="">-- Tanpa Kategori --</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Input Pertanyaan */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                  Pertanyaan FAQ
                </label>
                <input
                  type="text"
                  required
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="e.g. Apakah ada biaya sewa modem tambahan?"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
                />
              </div>

              {/* Input Jawaban */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                  Jawaban FAQ
                </label>
                <textarea
                  required
                  rows={6}
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="e.g. Tidak kak, biaya bulanan sudah termasuk gratis sewa modem ONT..."
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none resize-none leading-relaxed"
                />
              </div>

              {/* Tombol Footer */}
              <div className="pt-4 border-t border-slate-150 flex items-center justify-end gap-2.5 bg-slate-55">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-all cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={formLoading}
                  className="px-5 py-2.5 bg-sky-500 hover:bg-sky-600 disabled:bg-sky-500/60 text-white text-xs font-bold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-1.5 cursor-pointer"
                >
                  {formLoading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <span>Simpan</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* AlertDialog Kustom untuk konfirmasi hapus */}
      <AlertDialog
        isOpen={deleteDialogOpen}
        onClose={() => {
          setDeleteDialogOpen(false);
          setIdToDelete(null);
        }}
        onConfirm={handleConfirmDelete}
        title="Hapus FAQ"
        description="Apakah Anda yakin ingin menghapus FAQ ini? Tindakan ini tidak dapat dibatalkan."
        isLoading={isDeleting}
      />
    </div>
  );
}
