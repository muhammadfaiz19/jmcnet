"use client";

import { useState, useEffect } from "react";
import { serviceCategoryService } from "@/services/serviceCategory.service";
import type { ServiceCategory } from "@/types";
import { AlertDialog } from "@/components/ui/alert-dialog";
import {
  Plus,
  Pencil,
  Trash,
  X,
  CheckCircle,
  WarningCircle,
  Folders,
} from "@phosphor-icons/react";

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<ServiceCategory[]>([]);
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
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");

  const [formLoading, setFormLoading] = useState(false);

  // Ambil semua kategori
  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await serviceCategoryService.getAll();
      if (res.data?.success) {
        setCategories(res.data.data || []);
      }
    } catch (err: any) {
      console.error("Gagal mengambil data kategori:", err);
      setError("Gagal memuat kategori layanan.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Buka modal untuk tambah kategori baru
  const handleOpenAdd = () => {
    setIsEdit(false);
    setCurrentId(null);
    setName("");
    setSlug("");
    setDescription("");
    setError("");
    setModalOpen(true);
  };

  // Buka modal untuk edit kategori
  const handleOpenEdit = (category: ServiceCategory) => {
    setIsEdit(true);
    setCurrentId(category.id);
    setName(category.name);
    setSlug(category.slug);
    setDescription(category.description || "");
    setError("");
    setModalOpen(true);
  };

  // Otomatis buat slug ketika mengetik nama kategori (jika mode tambah baru)
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setName(val);
    if (!isEdit) {
      const autoSlug = val
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
      setSlug(autoSlug);
    }
  };

  // Aksi Hapus Kategori
  const handleDeleteClick = (id: number) => {
    setIdToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (idToDelete === null) return;
    setIsDeleting(true);
    try {
      const res = await serviceCategoryService.delete(idToDelete);
      if (res.success) {
        setSuccess("Kategori berhasil dihapus!");
        setTimeout(() => setSuccess(""), 3000);
        fetchCategories();
      } else {
        setError(res.message || "Gagal menghapus kategori.");
      }
    } catch (err: any) {
      console.error(err);
      setError("Gagal menghapus kategori.");
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
      name,
      slug,
      description: description || null,
    };

    try {
      if (isEdit && currentId !== null) {
        const res = await serviceCategoryService.update(currentId, payload);
        if (res.success) {
          setSuccess("Kategori berhasil diperbarui!");
          setModalOpen(false);
          fetchCategories();
        } else {
          setError(res.message || "Gagal memperbarui kategori.");
        }
      } else {
        const res = await serviceCategoryService.create(payload);
        if (res.success) {
          setSuccess("Kategori baru berhasil dibuat!");
          setModalOpen(false);
          fetchCategories();
        } else {
          setError(res.message || "Gagal membuat kategori.");
        }
      }
      setTimeout(() => setSuccess(""), 3000);
    } catch (err: any) {
      console.error(err);
      setError("Terjadi kesalahan sistem saat menyimpan kategori.");
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
            Kelola Kategori Layanan
          </h1>
          <p className="text-xs text-slate-500">
            Kategori master untuk mengelompokkan Paket Internet, Voucher Hotspot, dan FAQ.
          </p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="px-4 py-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
        >
          <Plus size={16} weight="bold" />
          <span>Tambah Kategori Baru</span>
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
            <span>Memuat data kategori...</span>
          </div>
        ) : categories.length === 0 ? (
          <div className="p-12 text-center text-slate-400">
            <Folders size={48} className="mx-auto mb-4 text-slate-300 animate-pulse" />
            <p className="text-sm font-semibold">Belum ada data kategori terdaftar.</p>
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
                  <th className="px-6 py-4">Nama Kategori</th>
                  <th className="px-6 py-4">Slug</th>
                  <th className="px-6 py-4">Deskripsi</th>
                  <th className="px-6 py-4">Statistik Relasi</th>
                  <th className="px-6 py-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
                {categories.map((category) => (
                  <tr key={category.id} className="hover:bg-slate-50/50 transition-all">
                    <td className="px-6 py-4 font-bold text-slate-900">
                      {category.name}
                    </td>
                    <td className="px-6 py-4 text-xs font-mono text-slate-400">
                      {category.slug}
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-500 max-w-[250px] truncate" title={category.description || "-"}>
                      {category.description || "-"}
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-500">
                      <div className="flex gap-2">
                        <span className="bg-sky-50 text-sky-700 px-2 py-0.5 rounded-md font-bold">
                          {category._count?.packages || 0} Paket
                        </span>
                        <span className="bg-teal-50 text-teal-700 px-2 py-0.5 rounded-md font-bold">
                          {category._count?.voucherPlans || 0} Voucher
                        </span>
                        <span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-md font-bold">
                          {category._count?.faqs || 0} FAQ
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="inline-flex gap-2">
                        <button
                          onClick={() => handleOpenEdit(category)}
                          className="p-2 bg-slate-100 hover:bg-sky-500 hover:text-white rounded-xl transition-all cursor-pointer text-slate-600"
                          title="Edit"
                        >
                          <Pencil size={14} weight="bold" />
                        </button>
                        <button
                          onClick={() => handleDeleteClick(category.id)}
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

      {/* Modal Form Kategori */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white w-full max-w-xl rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-scale-up">
            {/* Header Modal */}
            <div className="p-6 border-b border-slate-150 flex items-center justify-between bg-slate-50">
              <div>
                <h3 className="text-lg font-black text-slate-900">
                  {isEdit ? "Edit Kategori Layanan" : "Tambah Kategori Layanan Baru"}
                </h3>
                <p className="text-xs text-slate-500">Tentukan nama, slug, dan deskripsi kategori.</p>
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
                  Nama Kategori
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={handleNameChange}
                  placeholder="e.g. Internet Dedicated Bisnis"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
                />
              </div>

              {/* Input Slug */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                  Slug (URL)
                </label>
                <input
                  type="text"
                  required
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="e.g. internet-dedicated-bisnis"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-mono focus:border-sky-500 focus:bg-white focus:outline-none"
                />
              </div>

              {/* Input Deskripsi */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                  Deskripsi Kategori (Opsional)
                </label>
                <textarea
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="e.g. Paket dengan bandwidth dedicated simetris..."
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none resize-none leading-relaxed"
                />
              </div>

              {/* Tombol Footer */}
              <div className="pt-4 border-t border-slate-150 flex items-center justify-end gap-2.5 bg-slate-55">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-xs font-bold transition-all cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={formLoading}
                  className="px-4 py-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-xl text-xs font-bold transition-all disabled:opacity-50 flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  {formLoading && (
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  )}
                  <span>{isEdit ? "Simpan Perubahan" : "Buat Kategori"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Dialog Konfirmasi Hapus */}
      <AlertDialog
        isOpen={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Hapus Kategori?"
        description="Apakah Anda yakin ingin menghapus kategori layanan ini? Tindakan ini akan melepas status kategori dari semua produk atau FAQ terkait (menjadi Tanpa Kategori)."
        confirmText="Ya, Hapus"
        cancelText="Batal"
        isLoading={isDeleting}
      />
    </div>
  );
}
