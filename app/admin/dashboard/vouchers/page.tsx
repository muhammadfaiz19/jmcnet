"use client";

import { useState, useEffect } from "react";
import { voucherPlanService } from "@/services/voucherPlan.service";
import { serviceCategoryService } from "@/services/serviceCategory.service";
import type { VoucherPlan, ServiceCategory } from "@/types";
import { AlertDialog } from "@/components/ui/alert-dialog";
import {
  Plus,
  Pencil,
  Trash,
  X,
  CheckCircle,
  WarningCircle,
  Ticket,
} from "@phosphor-icons/react";

export default function AdminVouchersPage() {
  const [vouchers, setVouchers] = useState<VoucherPlan[]>([]);
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
  const [name, setName] = useState("");
  const [type, setType] = useState<"retail" | "reseller">("retail");
  const [tagLabel, setTagLabel] = useState("");
  const [price, setPrice] = useState(3000);
  const [priceUnit, setPriceUnit] = useState("/ voucher");
  const [duration, setDuration] = useState("");
  const [minPurchase, setMinPurchase] = useState("");
  const [features, setFeatures] = useState<string[]>([""]);
  const [categories, setCategories] = useState<ServiceCategory[]>([]);

  const [formLoading, setFormLoading] = useState(false);

  // Ambil semua voucher
  const fetchVouchers = async () => {
    setLoading(true);
    try {
      const res = await voucherPlanService.getAll();
      if (res.data?.success) {
        setVouchers(res.data.data || []);
      }
    } catch (err: any) {
      console.error("Gagal mengambil data voucher:", err);
      setError("Gagal memuat voucher hotspot.");
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
    fetchVouchers();
    fetchCategories();
  }, []);

  // Buka modal untuk tambah voucher baru
  const handleOpenAdd = () => {
    setIsEdit(false);
    setCurrentId(null);
    setCategoryId("");
    setName("");
    setType("retail");
    setTagLabel("Pengguna Langsung");
    setPrice(3000);
    setPriceUnit("/ voucher");
    setDuration("Masa aktif 8 jam sejak login");
    setMinPurchase("");
    setFeatures([""]);
    setError("");
    setModalOpen(true);
  };

  // Buka modal untuk edit voucher
  const handleOpenEdit = (v: VoucherPlan) => {
    setIsEdit(true);
    setCurrentId(v.id);
    setCategoryId(v.categoryId || "");
    setName(v.name);
    setType(v.type);
    setTagLabel(v.tagLabel);
    setPrice(v.price);
    setPriceUnit(v.priceUnit);
    setDuration(v.duration);
    setMinPurchase(v.minPurchase || "");
    
    // Parse features jika berbentuk string JSON dari database
    let parsedFeatures: string[] = [];
    if (typeof v.features === "string") {
      try {
        parsedFeatures = JSON.parse(v.features);
      } catch (_) {
        parsedFeatures = [];
      }
    } else {
      parsedFeatures = v.features || [];
    }

    setFeatures(
      parsedFeatures.length > 0 ? parsedFeatures : [""]
    );
    setError("");
    setModalOpen(true);
  };

  // Hapus baris fitur
  const handleRemoveFeature = (index: number) => {
    const newFeatures = features.filter((_, i) => i !== index);
    setFeatures(newFeatures.length > 0 ? newFeatures : [""]);
  };

  // Tambah baris fitur baru
  const handleAddFeature = () => {
    setFeatures([...features, ""]);
  };

  // Ubah input teks fitur
  const handleFeatureTextChange = (index: number, val: string) => {
    const newFeatures = [...features];
    newFeatures[index] = val;
    setFeatures(newFeatures);
  };

  // Aksi Hapus voucher
  const handleDeleteClick = (id: number) => {
    setIdToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (idToDelete === null) return;
    setIsDeleting(true);
    try {
      const res = await voucherPlanService.delete(idToDelete);
      if (res.success) {
        setSuccess("Voucher plan berhasil dihapus!");
        setTimeout(() => setSuccess(""), 3000);
        fetchVouchers();
      } else {
        setError(res.message || "Gagal menghapus voucher.");
      }
    } catch (err: any) {
      console.error(err);
      setError("Gagal menghapus voucher plan.");
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

    // Bersihkan fitur kosong
    const cleanedFeatures = features.filter((f) => f.trim() !== "");
    if (cleanedFeatures.length === 0) {
      setError("Harap isi minimal satu deskripsi fitur.");
      setFormLoading(false);
      return;
    }

    const payload = {
      categoryId: categoryId === "" ? null : Number(categoryId),
      name,
      type,
      tagLabel,
      price: Number(price),
      priceUnit,
      duration,
      minPurchase: minPurchase.trim() !== "" ? minPurchase : null,
      features: JSON.stringify(cleanedFeatures),
    };

    try {
      if (isEdit && currentId !== null) {
        const res = await voucherPlanService.update(currentId, payload);
        if (res.success) {
          setSuccess("Voucher plan berhasil diperbarui!");
          setModalOpen(false);
          fetchVouchers();
        } else {
          setError(res.message || "Gagal memperbarui voucher.");
        }
      } else {
        const res = await voucherPlanService.create(payload);
        if (res.success) {
          setSuccess("Voucher plan baru berhasil dibuat!");
          setModalOpen(false);
          fetchVouchers();
        } else {
          setError(res.message || "Gagal membuat voucher.");
        }
      }
      setTimeout(() => setSuccess(""), 3000);
    } catch (err: any) {
      console.error(err);
      setError("Terjadi kesalahan sistem saat menyimpan voucher plan.");
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
            Kelola Voucher Hotspot & Reseller
          </h1>
          <p className="text-xs text-slate-500">
            Daftar paket eceran hotspot atau grosir mitra reseller yang aktif untuk dipasarkan.
          </p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="px-4 py-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
        >
          <Plus size={16} weight="bold" />
          <span>Tambah Voucher Baru</span>
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
            <span>Memuat data voucher...</span>
          </div>
        ) : vouchers.length === 0 ? (
          <div className="p-12 text-center text-slate-400">
            <Ticket size={48} className="mx-auto mb-4 text-slate-300" />
            <p className="text-sm font-semibold">Belum ada data voucher terdaftar.</p>
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
                  <th className="px-6 py-4">Nama Voucher</th>
                  <th className="px-6 py-4">Kategori</th>
                  <th className="px-6 py-4">Tipe</th>
                  <th className="px-6 py-4">Label Tag</th>
                  <th className="px-6 py-4">Harga</th>
                  <th className="px-6 py-4">Masa Aktif</th>
                  <th className="px-6 py-4">Min. Beli</th>
                  <th className="px-6 py-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
                {vouchers.map((v) => (
                  <tr key={v.id} className="hover:bg-slate-50/50 transition-all">
                    <td className="px-6 py-4 font-bold text-slate-900">{v.name}</td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-semibold text-slate-600 bg-sky-50 text-sky-800 px-2 py-0.5 rounded">
                        {v.category?.name || "Tanpa Kategori"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                        v.type === "retail" 
                          ? "bg-sky-50 text-sky-600" 
                          : "bg-amber-50 text-amber-600"
                      }`}>
                        {v.type === "retail" ? "Eceran" : "Reseller"}
                      </span>
                    </td>
                    <td className="px-6 py-4">{v.tagLabel}</td>
                    <td className="px-6 py-4 font-extrabold text-slate-900">
                      Rp {v.price.toLocaleString("id-ID")}{v.priceUnit}
                    </td>
                    <td className="px-6 py-4 text-xs">{v.duration}</td>
                    <td className="px-6 py-4 text-xs text-slate-500">
                      {v.minPurchase || <span className="text-slate-300">-</span>}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="inline-flex gap-2">
                        <button
                          onClick={() => handleOpenEdit(v)}
                          className="p-2 bg-slate-100 hover:bg-sky-500 hover:text-white rounded-xl transition-all cursor-pointer text-slate-600"
                          title="Edit"
                        >
                          <Pencil size={14} weight="bold" />
                        </button>
                        <button
                          onClick={() => handleDeleteClick(v.id)}
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

      {/* Modal dialog Form (Tambah/Edit) */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white w-full max-w-2xl rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-scale-up">
            {/* Header Modal */}
            <div className="p-6 border-b border-slate-150 flex items-center justify-between bg-slate-50">
              <div>
                <h3 className="text-lg font-black text-slate-900">
                  {isEdit ? "Edit Voucher Plan" : "Tambah Voucher Plan Baru"}
                </h3>
                <p className="text-xs text-slate-500">Isi formulir detail voucher plan Anda.</p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1.5 rounded-lg bg-slate-200 text-slate-600 hover:bg-slate-350 transition-all cursor-pointer"
              >
                <X size={18} weight="bold" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="overflow-y-auto flex-grow p-6 space-y-6">
              {/* Notifikasi Error */}
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-2xl flex items-start gap-2.5 text-xs font-bold">
                  <WarningCircle size={18} weight="fill" className="text-red-500 flex-shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Kategori Layanan */}
                <div className="sm:col-span-2">
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

                {/* Nama Voucher */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                    Nama Voucher (e.g. Voucher 8 Jam)
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Voucher Eceran (8 Jam)"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
                  />
                </div>

                {/* Tipe Voucher */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                    Tipe Voucher
                  </label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value as "retail" | "reseller")}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none cursor-pointer"
                  >
                    <option value="retail">Eceran (Retail)</option>
                    <option value="reseller">Reseller (Grosir Mitra)</option>
                  </select>
                </div>

                {/* Tag Label */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                    Tag Label (e.g. Harga Grosir Mitra)
                  </label>
                  <input
                    type="text"
                    required
                    value={tagLabel}
                    onChange={(e) => setTagLabel(e.target.value)}
                    placeholder="Pengguna Langsung"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
                  />
                </div>

                {/* Durasi / Masa Aktif */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                    Durasi / Masa Aktif
                  </label>
                  <input
                    type="text"
                    required
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="Masa aktif 8 jam sejak login"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
                  />
                </div>

                {/* Harga */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                    Harga (Rp)
                  </label>
                  <input
                    type="number"
                    required
                    min={0}
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
                  />
                </div>

                {/* Satuan Harga */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                    Satuan Harga (e.g. / voucher)
                  </label>
                  <input
                    type="text"
                    required
                    value={priceUnit}
                    onChange={(e) => setPriceUnit(e.target.value)}
                    placeholder="/ voucher"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              {/* Minimal Pembelian (Optional) */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                  Minimal Pembelian (Kosongkan jika tidak ada batasan)
                </label>
                <input
                  type="text"
                  value={minPurchase}
                  onChange={(e) => setMinPurchase(e.target.value)}
                  placeholder="e.g. Min. 25 Pcs (Modal Rp 50k)"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
                />
              </div>

              {/* Fitur / Jaminan (Dinamis) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-150 pb-2">
                  <span className="text-[11px] uppercase tracking-wider font-extrabold text-slate-700">
                    Fasilitas / Ketentuan Layanan Voucher
                  </span>
                  <button
                    type="button"
                    onClick={handleAddFeature}
                    className="px-2.5 py-1 bg-sky-50 hover:bg-sky-100 text-sky-600 rounded-lg text-xs font-extrabold transition-all cursor-pointer"
                  >
                    + Tambah Baris
                  </button>
                </div>

                <div className="space-y-2">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      {/* Input teks deskripsi fitur */}
                      <input
                        type="text"
                        required
                        value={feature}
                        onChange={(e) => handleFeatureTextChange(idx, e.target.value)}
                        placeholder="e.g. Bebas login di area Hotspot SGC Network"
                        className="flex-grow px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:border-sky-500 focus:bg-white focus:outline-none"
                      />

                      {/* Tombol Hapus Baris */}
                      <button
                        type="button"
                        onClick={() => handleRemoveFeature(idx)}
                        className="p-2.5 bg-slate-100 hover:bg-red-50 hover:text-white rounded-lg text-slate-500 transition-all cursor-pointer"
                        title="Hapus Baris"
                      >
                        <Trash size={14} weight="bold" />
                      </button>
                    </div>
                  ))}
                </div>
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
        title="Hapus Voucher Hotspot"
        description="Apakah Anda yakin ingin menghapus voucher plan ini? Tindakan ini tidak dapat dibatalkan."
        isLoading={isDeleting}
      />
    </div>
  );
}
