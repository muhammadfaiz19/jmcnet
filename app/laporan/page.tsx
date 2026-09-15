"use client";

import { useState } from "react";
import { PageHeader } from "@/components/sections/page-header";
import { reportService } from "@/services/report.service";
import {
  ReportCategory,
  REPORT_CATEGORY_LABELS,
  REPORT_STATUS_LABELS,
  REPORT_STATUS_COLORS,
  Report,
} from "@/types/report";
import {
  CheckCircle,
  WarningCircle,
  Copy,
  MagnifyingGlass,
  PaperPlaneTilt,
  Clock,
  User,
  MapPin,
  Tag,
  Note,
  Image as ImageIcon,
} from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export default function LaporanPage() {
  const [activeTab, setActiveTab] = useState<"buat" | "cek">("buat");

  // State untuk form Buat Laporan
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [category, setCategory] = useState<ReportCategory>("GANGGUAN_INTERNET");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);

  const [createLoading, setCreateLoading] = useState(false);
  const [createError, setCreateError] = useState("");
  const [createdReport, setCreatedReport] = useState<Report | null>(null);

  // State untuk Cek Status
  const [searchNumber, setSearchNumber] = useState("");
  const [checkLoading, setCheckLoading] = useState(false);
  const [checkError, setCheckError] = useState("");
  const [reportResult, setReportResult] = useState<Report | null>(null);

  const [copySuccess, setCopySuccess] = useState(false);

  const handleCreateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreateLoading(true);
    setCreateError("");

    const formData = new FormData();
    formData.append("customerName", name);
    formData.append("customerPhone", phone);
    formData.append("customerAddress", address);
    if (customerId) formData.append("customerId", customerId);
    formData.append("category", category);
    formData.append("description", description);
    if (photo) formData.append("photo", photo);

    try {
      const res = await reportService.create(formData);
      if (res.success && res.data) {
        setCreatedReport(res.data);
      } else {
        setCreateError(res.message || "Gagal membuat laporan.");
      }
    } catch (err: any) {
      setCreateError(
        err.response?.data?.message || "Terjadi kesalahan sistem saat mengirim laporan."
      );
    } finally {
      setCreateLoading(false);
    }
  };

  const handleCheckSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchNumber) return;

    setCheckLoading(true);
    setCheckError("");
    setReportResult(null);

    try {
      const res = await reportService.checkStatus(searchNumber);
      if (res.success && res.data) {
        setReportResult(res.data);
      } else {
        setCheckError(res.message || "Laporan tidak ditemukan.");
      }
    } catch (err: any) {
      setCheckError(
        err.response?.data?.message || "Laporan tidak ditemukan. Pastikan nomor benar."
      );
    } finally {
      setCheckLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  return (
    <div className="flex-1 bg-white text-slate-900 font-sans selection:bg-brand-light/20 selection:text-brand-dark min-h-screen pb-20">
      <PageHeader
        eyebrow="LAYANAN PELANGGAN"
        title="Laporan Kendala"
        highlight="Layanan"
        subtitle="Laporkan gangguan internet atau kendala teknis Anda. Tim kami akan segera menindaklanjuti untuk memastikan koneksi Anda kembali normal."
      />

      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-10">
        {/* Tab Navigation */}
        <div className="flex bg-white rounded-2xl shadow-sm border border-slate-200 p-1 mb-8 overflow-hidden">
          <button
            onClick={() => setActiveTab("buat")}
            className={`flex-1 py-3 px-4 text-sm font-bold rounded-xl transition-all duration-300 ${
              activeTab === "buat"
                ? "bg-sky-500 text-white shadow-md"
                : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            Buat Laporan Baru
          </button>
          <button
            onClick={() => setActiveTab("cek")}
            className={`flex-1 py-3 px-4 text-sm font-bold rounded-xl transition-all duration-300 ${
              activeTab === "cek"
                ? "bg-sky-500 text-white shadow-md"
                : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            Cek Status Laporan
          </button>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "buat" && (
            <motion.div
              key="buat"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {createdReport ? (
                // Success View
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12 text-center">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} weight="fill" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
                    Laporan Berhasil Dikirim!
                  </h2>
                  <p className="text-slate-600 mb-8 max-w-lg mx-auto">
                    Terima kasih telah melaporkan kendala Anda. Simpan nomor laporan di bawah ini untuk mengecek status penanganan.
                  </p>

                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 max-w-sm mx-auto mb-8">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-2">
                      Nomor Laporan
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-xl md:text-2xl font-black text-sky-600 tracking-wider">
                        {createdReport.reportNumber}
                      </span>
                      <button
                        onClick={() => copyToClipboard(createdReport.reportNumber)}
                        className="p-2 bg-white rounded-lg border border-slate-200 text-slate-500 hover:text-sky-600 hover:border-sky-200 transition-all cursor-pointer"
                        title="Salin nomor"
                      >
                        {copySuccess ? <CheckCircle size={20} className="text-emerald-500" /> : <Copy size={20} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => {
                        setSearchNumber(createdReport.reportNumber);
                        setActiveTab("cek");
                        handleCheckSubmit({ preventDefault: () => {} } as any);
                      }}
                      className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl transition-all cursor-pointer"
                    >
                      Cek Status Sekarang
                    </button>
                    <button
                      onClick={() => {
                        setCreatedReport(null);
                        setName("");
                        setPhone("");
                        setAddress("");
                        setCustomerId("");
                        setDescription("");
                        setPhoto(null);
                      }}
                      className="px-6 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-xl transition-all cursor-pointer"
                    >
                      Buat Laporan Lain
                    </button>
                  </div>
                </div>
              ) : (
                // Form View
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-10">
                  <form onSubmit={handleCreateSubmit} className="space-y-6">
                    {createError && (
                      <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-2xl flex items-start gap-2.5 text-sm font-bold">
                        <WarningCircle size={20} weight="fill" className="text-red-500 flex-shrink-0 mt-0.5" />
                        <span>{createError}</span>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs uppercase tracking-wider font-extrabold text-slate-700 mb-2">
                          Nama Lengkap <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Masukkan nama lengkap Anda"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider font-extrabold text-slate-700 mb-2">
                          No. HP / WhatsApp <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="08xxxxxxxxxx"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-extrabold text-slate-700 mb-2">
                        Alamat Pemasangan <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={2}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Detail alamat pemasangan layanan"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs uppercase tracking-wider font-extrabold text-slate-700 mb-2">
                          Kategori Masalah <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={category}
                          onChange={(e) => setCategory(e.target.value as ReportCategory)}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none transition-colors appearance-none"
                        >
                          {Object.entries(REPORT_CATEGORY_LABELS).map(([key, label]) => (
                            <option key={key} value={key}>{label}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider font-extrabold text-slate-700 mb-2">
                          ID Pelanggan <span className="text-slate-400 font-normal ml-1">(Opsional)</span>
                        </label>
                        <input
                          type="text"
                          value={customerId}
                          onChange={(e) => setCustomerId(e.target.value)}
                          placeholder="PLG-XXX (kosongkan jika tidak ingat)"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-extrabold text-slate-700 mb-2">
                        Deskripsi Kendala <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        minLength={10}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Ceritakan detail kendala yang dialami. Contoh: Internet mati sejak pagi, lampu LOS di router berkedip merah..."
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-extrabold text-slate-700 mb-2">
                        Foto Bukti Kendala <span className="text-slate-400 font-normal ml-1">(Opsional)</span>
                      </label>
                      <input
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        onChange={(e) => {
                          if (e.target.files && e.target.files.length > 0) {
                            setPhoto(e.target.files[0]);
                          }
                        }}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100 transition-colors"
                      />
                      <p className="text-[10px] text-slate-500 mt-2">
                        Upload foto router atau screenshot kendala (max 5MB, format JPG/PNG/WEBP).
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={createLoading}
                      className="w-full py-4 bg-sky-500 hover:bg-sky-600 disabled:bg-sky-500/60 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-4"
                    >
                      {createLoading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <PaperPlaneTilt size={20} weight="fill" />
                          <span>Kirim Laporan</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === "cek" && (
            <motion.div
              key="cek"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-10">
                <form onSubmit={handleCheckSubmit} className="max-w-xl mx-auto mb-10">
                  <label className="block text-center text-sm font-bold text-slate-700 mb-4">
                    Masukkan Nomor Laporan Anda
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      required
                      value={searchNumber}
                      onChange={(e) => setSearchNumber(e.target.value.toUpperCase())}
                      placeholder="LPR-XXXXXXXX-XXXX"
                      className="flex-1 px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-center sm:text-left text-lg font-bold tracking-widest uppercase focus:border-sky-500 focus:bg-white focus:outline-none transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={checkLoading || !searchNumber}
                      className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-900/60 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {checkLoading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <MagnifyingGlass size={20} weight="bold" />
                          <span>Cek</span>
                        </>
                      )}
                    </button>
                  </div>
                  {checkError && (
                    <p className="text-red-500 text-sm font-bold text-center mt-4">
                      {checkError}
                    </p>
                  )}
                </form>

                {reportResult && (
                  <div className="max-w-2xl mx-auto">
                    <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                      {/* Header Card */}
                      <div className="bg-slate-50 p-6 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                            Laporan #{reportResult.reportNumber}
                          </p>
                          <h3 className="text-xl font-black text-slate-900">
                            {reportResult.customerName}
                          </h3>
                        </div>
                        <div
                          className={`px-4 py-2 rounded-full inline-flex items-center gap-2 text-sm font-bold ${
                            REPORT_STATUS_COLORS[reportResult.status].bg
                          } ${REPORT_STATUS_COLORS[reportResult.status].text}`}
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${
                              REPORT_STATUS_COLORS[reportResult.status].dot
                            }`}
                          ></div>
                          {REPORT_STATUS_LABELS[reportResult.status]}
                        </div>
                      </div>

                      {/* Info Laporan */}
                      <div className="p-6 grid sm:grid-cols-2 gap-6 bg-white">
                        <div>
                          <p className="text-xs font-bold text-slate-500 flex items-center gap-1 mb-1">
                            <Tag size={14} /> Kategori
                          </p>
                          <p className="text-sm font-medium text-slate-900">
                            {REPORT_CATEGORY_LABELS[reportResult.category]}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-500 flex items-center gap-1 mb-1">
                            <Clock size={14} /> Tanggal Laporan
                          </p>
                          <p className="text-sm font-medium text-slate-900">
                            {formatDate(reportResult.createdAt)}
                          </p>
                        </div>
                        <div className="sm:col-span-2">
                          <p className="text-xs font-bold text-slate-500 flex items-center gap-1 mb-1">
                            <Note size={14} /> Deskripsi Kendala
                          </p>
                          <p className="text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                            {reportResult.description}
                          </p>
                        </div>
                        {reportResult.photoUrl && (
                          <div className="sm:col-span-2">
                            <p className="text-xs font-bold text-slate-500 flex items-center gap-1 mb-2">
                              <ImageIcon size={14} /> Foto Bukti Kendala
                            </p>
                            <a
                              href={reportResult.photoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative h-32 w-48 block rounded-xl overflow-hidden border border-slate-200 hover:opacity-90 transition-opacity"
                            >
                              <Image
                                src={reportResult.photoUrl}
                                alt="Foto kendala"
                                fill
                                className="object-cover"
                                unoptimized
                              />
                            </a>
                          </div>
                        )}
                      </div>

                      {/* Timeline Riwayat */}
                      <div className="p-6 bg-slate-50 border-t border-slate-200">
                        <h4 className="text-sm font-black text-slate-900 mb-6 flex items-center gap-2">
                          <Clock size={18} className="text-sky-500" />
                          Riwayat Penanganan
                        </h4>
                        
                        <div className="relative pl-6 space-y-8 before:absolute before:inset-y-0 before:left-[11px] before:w-0.5 before:bg-slate-200">
                          {reportResult.statusLogs.map((log, idx) => (
                            <div key={log.id} className="relative">
                              {/* Timeline Dot */}
                              <div
                                className={`absolute -left-[31px] w-4 h-4 rounded-full border-2 border-white ring-4 ring-slate-50 ${
                                  REPORT_STATUS_COLORS[log.status].bg
                                } ${REPORT_STATUS_COLORS[log.status].text.replace('text', 'bg')}`}
                              ></div>
                              
                              <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                  <span
                                    className={`text-[10px] px-2 py-0.5 rounded uppercase font-bold tracking-wider ${
                                      REPORT_STATUS_COLORS[log.status].bg
                                    } ${REPORT_STATUS_COLORS[log.status].text}`}
                                  >
                                    {REPORT_STATUS_LABELS[log.status]}
                                  </span>
                                  <span className="text-xs text-slate-400 font-medium">
                                    {formatDate(log.createdAt)}
                                  </span>
                                </div>
                                <p className="text-sm text-slate-700 leading-relaxed mb-2">
                                  {log.message || "Status diperbarui."}
                                </p>
                                {log.photoUrl && (
                                  <a
                                    href={log.photoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative h-20 w-32 block rounded-lg overflow-hidden border border-slate-200 mt-2"
                                  >
                                    <Image
                                      src={log.photoUrl}
                                      alt="Lampiran admin"
                                      fill
                                      className="object-cover"
                                      unoptimized
                                    />
                                  </a>
                                )}
                                {log.createdBy && (
                                  <p className="text-[10px] text-slate-400 mt-3 flex items-center gap-1">
                                    <User size={12} /> Diperbarui oleh: {log.createdBy}
                                  </p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
