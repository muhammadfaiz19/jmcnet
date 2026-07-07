"use client";

import { useState, useEffect } from "react";
import { testimonialService } from "@/services/testimonial.service";
import type { Testimonial } from "@/types";
import {
  Plus,
  Pencil,
  Trash,
  X,
  CheckCircle,
  WarningCircle,
  ChatCircleText,
} from "@phosphor-icons/react";

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // State untuk form modal
  const [modalOpen, setModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentId, setCurrentId] = useState<number | null>(null);

  // Field form
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [quote, setQuote] = useState("");

  const [formLoading, setFormLoading] = useState(false);

  // Ambil semua testimoni
  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const res = await testimonialService.getAll();
      if (res.data?.success) {
        setTestimonials(res.data.data || []);
      }
    } catch (err: any) {
      console.error("Gagal mengambil data testimoni:", err);
      setError("Gagal memuat ulasan pelanggan.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Buka modal untuk tambah testimoni baru
  const handleOpenAdd = () => {
    setIsEdit(false);
    setCurrentId(null);
    setName("");
    setRole("");
    setQuote("");
    setError("");
    setModalOpen(true);
  };

  // Buka modal untuk edit testimoni
  const handleOpenEdit = (t: Testimonial) => {
    setIsEdit(true);
    setCurrentId(t.id);
    setName(t.name);
    setRole(t.role);
    setQuote(t.quote);
    setError("");
    setModalOpen(true);
  };

  // Aksi Hapus testimoni
  const handleDelete = async (id: number) => {
    if (!confirm("Apakah Anda yakin ingin menghapus testimoni ini?")) return;
    try {
      const res = await testimonialService.delete(id);
      if (res.success) {
        setSuccess("Testimoni berhasil dihapus!");
        setTimeout(() => setSuccess(""), 3000);
        fetchTestimonials();
      } else {
        setError(res.message || "Gagal menghapus testimoni.");
      }
    } catch (err: any) {
      console.error(err);
      setError("Gagal menghapus testimoni.");
    }
  };

  // Aksi Submit Form (Tambah/Edit)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setError("");

    const payload = {
      name,
      role,
      quote,
    };

    try {
      if (isEdit && currentId !== null) {
        const res = await testimonialService.update(currentId, payload);
        if (res.success) {
          setSuccess("Testimoni berhasil diperbarui!");
          setModalOpen(false);
          fetchTestimonials();
        } else {
          setError(res.message || "Gagal memperbarui testimoni.");
        }
      } else {
        const res = await testimonialService.create(payload);
        if (res.success) {
          setSuccess("Testimoni baru berhasil dibuat!");
          setModalOpen(false);
          fetchTestimonials();
        } else {
          setError(res.message || "Gagal membuat testimoni.");
        }
      }
      setTimeout(() => setSuccess(""), 3000);
    } catch (err: any) {
      console.error(err);
      setError("Terjadi kesalahan sistem saat menyimpan testimoni.");
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
            Kelola Testimonial Pelanggan
          </h1>
          <p className="text-xs text-slate-500">
            Ulasan kepuasan pelanggan JMCNET yang ditampilkan di bagian bawah beranda website.
          </p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="px-4 py-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
        >
          <Plus size={16} weight="bold" />
          <span>Tambah Ulasan Baru</span>
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
            <span>Memuat data ulasan...</span>
          </div>
        ) : testimonials.length === 0 ? (
          <div className="p-12 text-center text-slate-400">
            <ChatCircleText size={48} className="mx-auto mb-4 text-slate-300" />
            <p className="text-sm font-semibold">Belum ada data ulasan terdaftar.</p>
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
                  <th className="px-6 py-4">Nama Pelanggan</th>
                  <th className="px-6 py-4">Pekerjaan / Lokasi (Role)</th>
                  <th className="px-6 py-4">Isi Ulasan (Quote)</th>
                  <th className="px-6 py-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
                {testimonials.map((t) => (
                  <tr key={t.id} className="hover:bg-slate-50/50 transition-all">
                    <td className="px-6 py-4 font-bold text-slate-900">{t.name}</td>
                    <td className="px-6 py-4 text-xs text-slate-500">{t.role}</td>
                    <td className="px-6 py-4 text-xs text-slate-500 max-w-[350px] truncate" title={t.quote}>
                      "{t.quote}"
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="inline-flex gap-2">
                        <button
                          onClick={() => handleOpenEdit(t)}
                          className="p-2 bg-slate-100 hover:bg-sky-500 hover:text-white rounded-xl transition-all cursor-pointer text-slate-600"
                          title="Edit"
                        >
                          <Pencil size={14} weight="bold" />
                        </button>
                        <button
                          onClick={() => handleDelete(t.id)}
                          className="p-2 bg-slate-100 hover:bg-red-50 hover:text-white rounded-xl transition-all cursor-pointer text-slate-600"
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

      {/* Modal Form Testimonial */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white w-full max-w-xl rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-scale-up">
            {/* Header Modal */}
            <div className="p-6 border-b border-slate-150 flex items-center justify-between bg-slate-50">
              <div>
                <h3 className="text-lg font-black text-slate-900">
                  {isEdit ? "Edit Ulasan Pelanggan" : "Tambah Ulasan Pelanggan Baru"}
                </h3>
                <p className="text-xs text-slate-500">Tulis ulasan jujur dari pelanggan setia Anda.</p>
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

              {/* Input Nama */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                  Nama Lengkap Pelanggan
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Budi Santoso"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
                />
              </div>

              {/* Input Pekerjaan / Lokasi */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                  Pekerjaan / Lokasi Pelanggan (Role)
                </label>
                <input
                  type="text"
                  required
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="e.g. Pelanggan Rumah Tangga (Arjawinangun)"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
                />
              </div>

              {/* Input Kutipan Ulasan */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                  Kutipan Ulasan (Quote)
                </label>
                <textarea
                  required
                  rows={4}
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  placeholder="e.g. Layanan internet sangat stabil, proses instalasi rapi..."
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
    </div>
  );
}
