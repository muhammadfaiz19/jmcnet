"use client";

import { useState, useEffect } from "react";
import { packageService } from "@/services/package.service";
import { serviceCategoryService } from "@/services/serviceCategory.service";
import type { Package, PackageFeature, ServiceCategory } from "@/types";
import { AlertDialog } from "@/components/ui/alert-dialog";
import {
  Plus,
  Pencil,
  Trash,
  X,
  CheckCircle,
  XCircle,
  WarningCircle,
  Sparkle,
  Package as PackageIcon,
} from "@phosphor-icons/react";

export default function AdminPackagesPage() {
  const [packages, setPackages] = useState<Package[]>([]);
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
  const [tierLabel, setTierLabel] = useState("");
  const [tierNumber, setTierNumber] = useState("");
  const [description, setDescription] = useState("");
  const [speedMbps, setSpeedMbps] = useState(10);
  const [priceMonthly, setPriceMonthly] = useState(150000);
  const [activationFee, setActivationFee] = useState(150000);
  const [isFeatured, setIsFeatured] = useState(false);
  const [features, setFeatures] = useState<PackageFeature[]>([
    { text: "", included: true },
  ]);
  const [categories, setCategories] = useState<ServiceCategory[]>([]);

  const [formLoading, setFormLoading] = useState(false);

  // Ambil semua paket internet
  const fetchPackages = async () => {
    setLoading(true);
    try {
      const res = await packageService.getAll();
      if (res.data?.success) {
        setPackages(res.data.data || []);
      }
    } catch (err: any) {
      console.error("Gagal mengambil data paket:", err);
      setError("Gagal memuat paket internet.");
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
    fetchPackages();
    fetchCategories();
  }, []);

  // Buka modal untuk tambah paket baru
  const handleOpenAdd = () => {
    setIsEdit(false);
    setCurrentId(null);
    setCategoryId("");
    setName("");
    setTierLabel("");
    setTierNumber("");
    setDescription("");
    setSpeedMbps(20);
    setPriceMonthly(150000);
    setActivationFee(150000);
    setIsFeatured(false);
    setFeatures([{ text: "", included: true }]);
    setError("");
    setModalOpen(true);
  };

  // Buka modal untuk edit paket
  const handleOpenEdit = (pkg: Package) => {
    setIsEdit(true);
    setCurrentId(pkg.id);
    setCategoryId(pkg.categoryId || "");
    setName(pkg.name);
    setTierLabel(pkg.tierLabel);
    setTierNumber(pkg.tierNumber);
    setDescription(pkg.description);
    setSpeedMbps(pkg.speedMbps);
    setPriceMonthly(pkg.priceMonthly);
    setActivationFee(pkg.activationFee);
    setIsFeatured(pkg.isFeatured);
    
    // Parse features jika berbentuk string JSON dari database
    let parsedFeatures: PackageFeature[] = [];
    if (typeof pkg.features === "string") {
      try {
        parsedFeatures = JSON.parse(pkg.features);
      } catch (_) {
        parsedFeatures = [];
      }
    } else {
      parsedFeatures = pkg.features || [];
    }

    setFeatures(
      parsedFeatures.length > 0 ? parsedFeatures : [{ text: "", included: true }]
    );
    setError("");
    setModalOpen(true);
  };

  // Hapus baris fitur
  const handleRemoveFeature = (index: number) => {
    const newFeatures = features.filter((_, i) => i !== index);
    setFeatures(newFeatures.length > 0 ? newFeatures : [{ text: "", included: true }]);
  };

  // Tambah baris fitur baru
  const handleAddFeature = () => {
    setFeatures([...features, { text: "", included: true }]);
  };

  // Ubah input teks fitur
  const handleFeatureTextChange = (index: number, val: string) => {
    const newFeatures = [...features];
    newFeatures[index].text = val;
    setFeatures(newFeatures);
  };

  // Ubah centang status included fitur
  const handleFeatureIncludedChange = (index: number, val: boolean) => {
    const newFeatures = [...features];
    newFeatures[index].included = val;
    setFeatures(newFeatures);
  };

  // Aksi Hapus paket
  const handleDeleteClick = (id: number) => {
    setIdToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (idToDelete === null) return;
    setIsDeleting(true);
    try {
      const res = await packageService.delete(idToDelete);
      if (res.success) {
        setSuccess("Paket internet berhasil dihapus!");
        setTimeout(() => setSuccess(""), 3000);
        fetchPackages();
      } else {
        setError(res.message || "Gagal menghapus paket.");
      }
    } catch (err: any) {
      console.error(err);
      setError("Gagal menghapus paket internet.");
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
    const cleanedFeatures = features.filter((f) => f.text.trim() !== "");
    if (cleanedFeatures.length === 0) {
      setError("Harap isi minimal satu fitur paket.");
      setFormLoading(false);
      return;
    }

    const payload = {
      categoryId: categoryId === "" ? null : Number(categoryId),
      name,
      tierLabel,
      tierNumber,
      description,
      speedMbps: Number(speedMbps),
      priceMonthly: Number(priceMonthly),
      activationFee: Number(activationFee),
      features: JSON.stringify(cleanedFeatures),
      isFeatured,
    };

    try {
      if (isEdit && currentId !== null) {
        const res = await packageService.update(currentId, payload);
        if (res.success) {
          setSuccess("Paket internet berhasil diperbarui!");
          setModalOpen(false);
          fetchPackages();
        } else {
          setError(res.message || "Gagal memperbarui paket.");
        }
      } else {
        const res = await packageService.create(payload);
        if (res.success) {
          setSuccess("Paket internet baru berhasil dibuat!");
          setModalOpen(false);
          fetchPackages();
        } else {
          setError(res.message || "Gagal membuat paket.");
        }
      }
      setTimeout(() => setSuccess(""), 3000);
    } catch (err: any) {
      console.error(err);
      setError("Terjadi kesalahan sistem saat menyimpan paket.");
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
            Kelola Paket Internet Bulanan
          </h1>
          <p className="text-xs text-slate-500">
            Daftar paket internet fiber optic (Unlimited Tanpa FUP) yang tampil di beranda website.
          </p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="px-4 py-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
        >
          <Plus size={16} weight="bold" />
          <span>Tambah Paket Baru</span>
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
            <span>Memuat data paket internet...</span>
          </div>
        ) : packages.length === 0 ? (
          <div className="p-12 text-center text-slate-400">
            <PackageIcon size={48} className="mx-auto mb-4 text-slate-300" />
            <p className="text-sm font-semibold">Belum ada data paket internet terdaftar.</p>
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
                  <th className="px-6 py-4">Nama Paket</th>
                  <th className="px-6 py-4">Kategori</th>
                  <th className="px-6 py-4">Tier / Level</th>
                  <th className="px-6 py-4">Kecepatan</th>
                  <th className="px-6 py-4">Harga Bulanan</th>
                  <th className="px-6 py-4">Biaya Pasang</th>
                  <th className="px-6 py-4 text-center">Rekomendasi</th>
                  <th className="px-6 py-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
                {packages.map((pkg) => (
                  <tr key={pkg.id} className="hover:bg-slate-50/50 transition-all">
                    <td className="px-6 py-4 font-bold text-slate-900">{pkg.name}</td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-semibold text-slate-600 bg-sky-50 text-sky-800 px-2 py-0.5 rounded">
                        {pkg.category?.name || "Tanpa Kategori"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                        {pkg.tierNumber} - {pkg.tierLabel}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-extrabold text-sky-500">{pkg.speedMbps} Mbps</td>
                    <td className="px-6 py-4">Rp {pkg.priceMonthly.toLocaleString("id-ID")}/bln</td>
                    <td className="px-6 py-4">Rp {pkg.activationFee.toLocaleString("id-ID")}</td>
                    <td className="px-6 py-4 text-center">
                      {pkg.isFeatured ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-500/10 text-amber-600 rounded-full text-[10px] font-extrabold uppercase tracking-wider">
                          <Sparkle size={10} weight="fill" />
                          <span>Populer</span>
                        </span>
                      ) : (
                        <span className="text-slate-400 font-normal">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="inline-flex gap-2">
                        <button
                          onClick={() => handleOpenEdit(pkg)}
                          className="p-2 bg-slate-100 hover:bg-sky-500 hover:text-white rounded-xl transition-all cursor-pointer text-slate-600"
                          title="Edit"
                        >
                          <Pencil size={14} weight="bold" />
                        </button>
                        <button
                          onClick={() => handleDeleteClick(pkg.id)}
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
                  {isEdit ? "Edit Paket Internet" : "Tambah Paket Internet Baru"}
                </h3>
                <p className="text-xs text-slate-500">Isi formulir dengan detail paket Anda.</p>
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

                {/* Nama Paket */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                    Nama Paket (e.g. SGC LITE)
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="SGC LITE"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
                  />
                </div>

                {/* Level Tier */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                    Nomor Tier (e.g. Tier 1)
                  </label>
                  <input
                    type="text"
                    required
                    value={tierNumber}
                    onChange={(e) => setTierNumber(e.target.value)}
                    placeholder="Tier 1"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
                  />
                </div>

                {/* Tier Label */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                    Label Kategori (e.g. Rumah Tangga)
                  </label>
                  <input
                    type="text"
                    required
                    value={tierLabel}
                    onChange={(e) => setTierLabel(e.target.value)}
                    placeholder="Rumah Tangga"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
                  />
                </div>

                {/* Kecepatan Mbps */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                    Kecepatan (Mbps)
                  </label>
                  <input
                    type="number"
                    required
                    min={1}
                    value={speedMbps}
                    onChange={(e) => setSpeedMbps(Number(e.target.value))}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
                  />
                </div>

                {/* Harga Bulanan */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                    Harga Langganan Bulanan (Rp)
                  </label>
                  <input
                    type="number"
                    required
                    min={0}
                    value={priceMonthly}
                    onChange={(e) => setPriceMonthly(Number(e.target.value))}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
                  />
                </div>

                {/* Biaya Aktivasi */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                    Biaya Pasang Baru / Aktivasi (Rp)
                  </label>
                  <input
                    type="number"
                    required
                    min={0}
                    value={activationFee}
                    onChange={(e) => setActivationFee(Number(e.target.value))}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              {/* Deskripsi Singkat */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                  Deskripsi Singkat Paket
                </label>
                <textarea
                  required
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Pilihan pas untuk..."
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none resize-none"
                />
              </div>

              {/* Checkbox Featured */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="featured-checkbox"
                  checked={isFeatured}
                  onChange={(e) => setIsFeatured(e.target.checked)}
                  className="w-4 h-4 text-sky-500 border-slate-300 rounded focus:ring-sky-500 cursor-pointer"
                />
                <label htmlFor="featured-checkbox" className="text-xs font-bold text-slate-700 cursor-pointer select-none">
                  Tandai sebagai Paket Populer (Featured Badge)
                </label>
              </div>

              {/* Fitur / Layanan Dinamis */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-150 pb-2">
                  <span className="text-[11px] uppercase tracking-wider font-extrabold text-slate-700">
                    Daftar Fitur / Fasilitas Paket
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
                      {/* Checkbox Included */}
                      <div className="flex flex-col items-center">
                        <input
                          type="checkbox"
                          checked={feature.included}
                          onChange={(e) => handleFeatureIncludedChange(idx, e.target.checked)}
                          className="w-4 h-4 text-emerald-500 border-slate-300 rounded focus:ring-emerald-500 cursor-pointer"
                          title={feature.included ? "Tersedia (✓)" : "Tidak Tersedia (X)"}
                        />
                      </div>

                      {/* Input teks deskripsi fitur */}
                      <input
                        type="text"
                        required
                        value={feature.text}
                        onChange={(e) => handleFeatureTextChange(idx, e.target.value)}
                        placeholder="e.g. WiFi High-Speed Unlimited"
                        className="flex-grow px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:border-sky-500 focus:bg-white focus:outline-none"
                      />

                      {/* Tombol Hapus Baris */}
                      <button
                        type="button"
                        onClick={() => handleRemoveFeature(idx)}
                        className="p-2 bg-slate-100 hover:bg-red-50 hover:text-white rounded-lg text-slate-500 transition-all cursor-pointer"
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
        title="Hapus Paket Internet"
        description="Apakah Anda yakin ingin menghapus paket internet ini? Tindakan ini tidak dapat dibatalkan."
        isLoading={isDeleting}
      />
    </div>
  );
}
