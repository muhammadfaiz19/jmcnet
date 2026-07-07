"use client";

import { useState, useEffect, useRef } from "react";
import { settingsService } from "@/services/settings.service";
import type { SiteSettings } from "@/types";
import {
  Gear,
  CheckCircle,
  WarningCircle,
  UploadSimple,
  FilePdf,
  FileDoc,
  Image as ImageIcon,
} from "@phosphor-icons/react";

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [activeTab, setActiveTab] = useState<"general" | "contact" | "hero_about" | "documents">("general");

  // Input Fields
  const [companyName, setCompanyName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [tagline, setTagline] = useState("");
  const [whatsappCs1, setWhatsappCs1] = useState("");
  const [whatsappCs2, setWhatsappCs2] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [operationalHours, setOperationalHours] = useState("");
  const [heroHeadline, setHeroHeadline] = useState("");
  const [heroSubtext, setHeroSubtext] = useState("");
  const [aboutTitle, setAboutTitle] = useState("");
  const [aboutDescription, setAboutDescription] = useState("");

  // File Inputs
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [registrationFormFile, setRegistrationFormFile] = useState<File | null>(null);
  const [serviceContractFile, setServiceContractFile] = useState<File | null>(null);

  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [formLoading, setFormLoading] = useState(false);

  const logoInputRef = useRef<HTMLInputElement>(null);
  const doc1InputRef = useRef<HTMLInputElement>(null);
  const doc2InputRef = useRef<HTMLInputElement>(null);

  // Ambil data pengaturan situs
  const fetchSettings = async () => {
    setLoading(true);
    try {
      const res = await settingsService.get();
      if (res.data?.success && res.data.data) {
        const s = res.data.data;
        setSettings(s);
        setCompanyName(s.companyName);
        setBrandName(s.brandName);
        setTagline(s.tagline);
        setWhatsappCs1(s.whatsappCs1);
        setWhatsappCs2(s.whatsappCs2);
        setEmail(s.email);
        setAddress(s.address);
        setOperationalHours(s.operationalHours);
        setHeroHeadline(s.heroHeadline);
        setHeroSubtext(s.heroSubtext);
        setAboutTitle(s.aboutTitle);
        setAboutDescription(s.aboutDescription);
        setLogoPreview(s.logo);
      }
    } catch (err: any) {
      console.error("Gagal mengambil data pengaturan:", err);
      setError("Gagal memuat pengaturan situs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  // Handler pilih file logo
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setLogoFile(file);
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  // Submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setError("");
    setSuccess("");

    const formData = new FormData();
    formData.append("companyName", companyName);
    formData.append("brandName", brandName);
    formData.append("tagline", tagline);
    formData.append("whatsappCs1", whatsappCs1);
    formData.append("whatsappCs2", whatsappCs2);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("operationalHours", operationalHours);
    formData.append("heroHeadline", heroHeadline);
    formData.append("heroSubtext", heroSubtext);
    formData.append("aboutTitle", aboutTitle);
    formData.append("aboutDescription", aboutDescription);

    if (logoFile) {
      formData.append("logo", logoFile);
    }
    if (registrationFormFile) {
      formData.append("registrationForm", registrationFormFile);
    }
    if (serviceContractFile) {
      formData.append("serviceContract", serviceContractFile);
    }

    try {
      const res = await settingsService.update(formData);
      if (res.success) {
        setSuccess("Pengaturan situs berhasil diperbarui!");
        
        // Bersihkan input file pilihan
        setLogoFile(null);
        setRegistrationFormFile(null);
        setServiceContractFile(null);
        
        if (logoInputRef.current) logoInputRef.current.value = "";
        if (doc1InputRef.current) doc1InputRef.current.value = "";
        if (doc2InputRef.current) doc2InputRef.current.value = "";

        fetchSettings();
      } else {
        setError(res.message || "Gagal memperbarui pengaturan.");
      }
    } catch (err: any) {
      console.error("Gagal update settings:", err);
      setError(
        err.response?.data?.message ||
          "Terjadi kesalahan sistem saat menyimpan pengaturan.",
      );
    } finally {
      setFormLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Halaman */}
      <div>
        <h1 className="text-2xl font-black text-slate-900">
          Pengaturan Utama Situs
        </h1>
        <p className="text-xs text-slate-500">
          Ubah profil perusahaan, kontak bantuan WhatsApp, teks headline beranda, logo, serta unggah dokumen resmi.
        </p>
      </div>

      {/* Notifikasi Status */}
      {success && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl flex items-center gap-2 text-xs font-bold animate-fade-in">
          <CheckCircle size={18} weight="fill" className="text-emerald-500" />
          <span>{success}</span>
        </div>
      )}
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-2xl flex items-center gap-2 text-xs font-bold animate-fade-in">
          <WarningCircle size={18} weight="fill" className="text-red-500" />
          <span>{error}</span>
        </div>
      )}

      {loading ? (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-12 text-center text-slate-500 font-medium">
          <div className="w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <span>Memuat data pengaturan situs...</span>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Switcher Tab */}
          <div className="flex gap-2 border-b border-slate-200 pb-px overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab("general")}
              className={`px-5 py-3 border-b-2 text-xs md:text-sm font-bold transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === "general"
                  ? "border-sky-500 text-sky-600 font-extrabold"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <span>Identitas &amp; Logo</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("contact")}
              className={`px-5 py-3 border-b-2 text-xs md:text-sm font-bold transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === "contact"
                  ? "border-sky-500 text-sky-600 font-extrabold"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <span>Kontak &amp; Alamat</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("hero_about")}
              className={`px-5 py-3 border-b-2 text-xs md:text-sm font-bold transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === "hero_about"
                  ? "border-sky-500 text-sky-600 font-extrabold"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <span>Konten Website (Hero/About)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("documents")}
              className={`px-5 py-3 border-b-2 text-xs md:text-sm font-bold transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === "documents"
                  ? "border-sky-500 text-sky-600 font-extrabold"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <span>Dokumen &amp; Formulir</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section 1: Logo & Brand */}
            {activeTab === "general" && (
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm space-y-6">
                <h2 className="text-base font-extrabold text-slate-900 pb-3 border-b border-slate-100 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-sky-500 rounded-full"></span>
                  <span>Identitas & Logo Brand</span>
                </h2>

                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Logo Preview & Upload */}
                  <div className="flex flex-col items-center gap-3 w-full md:w-auto">
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-500">
                      Logo Website
                    </span>
                    <div className="w-32 h-32 rounded-3xl bg-slate-900 border border-slate-700/50 flex items-center justify-center p-3 overflow-hidden relative group">
                      {logoPreview ? (
                        <img
                          src={logoPreview}
                          alt="Preview Logo"
                          className="max-w-full max-h-full object-contain"
                        />
                      ) : (
                        <ImageIcon size={48} className="text-slate-600" />
                      )}
                    </div>
                    <label className="px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-250 text-slate-700 text-xs font-bold rounded-xl cursor-pointer transition-all flex items-center gap-1.5 shadow-sm">
                      <UploadSimple size={14} weight="bold" />
                      <span>Pilih Logo</span>
                      <input
                        type="file"
                        ref={logoInputRef}
                        accept="image/*"
                        onChange={handleLogoChange}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Teks Identitas */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow w-full">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                        Nama Perusahaan (PT)
                      </label>
                      <input
                        type="text"
                        required
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="PT Jaringan Multimedia Cirebon"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                        Nama Singkat / Brand
                      </label>
                      <input
                        type="text"
                        required
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        placeholder="JMCNET"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                        Slogan / Tagline Brand
                      </label>
                      <input
                        type="text"
                        required
                        value={tagline}
                        onChange={(e) => setTagline(e.target.value)}
                        placeholder="100% Fiber Optic Cirebon"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section 2: Kontak & Lokasi */}
            {activeTab === "contact" && (
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm space-y-6">
                <h2 className="text-base font-extrabold text-slate-900 pb-3 border-b border-slate-100 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-sky-500 rounded-full"></span>
                  <span>Informasi Kontak & Jam Kerja</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                      Nomor WhatsApp CS 1 (Format: 628xxx)
                    </label>
                    <input
                      type="text"
                      required
                      value={whatsappCs1}
                      onChange={(e) => setWhatsappCs1(e.target.value)}
                      placeholder="6285179997972"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                      Nomor WhatsApp CS 2 (Format: 628xxx)
                    </label>
                    <input
                      type="text"
                      required
                      value={whatsappCs2}
                      onChange={(e) => setWhatsappCs2(e.target.value)}
                      placeholder="6285179997975"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                      Alamat Email Kantor
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="info@jmcnet.id"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                      Jam Operasional CS
                    </label>
                    <input
                      type="text"
                      required
                      value={operationalHours}
                      onChange={(e) => setOperationalHours(e.target.value)}
                      placeholder="Senin - Sabtu (09:00 - 18:00)"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                      Alamat Lengkap Kantor
                    </label>
                    <textarea
                      required
                      rows={2}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Jl. Arjawinangun..."
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none resize-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Section 3: Headline & Profile Teks */}
            {activeTab === "hero_about" && (
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm space-y-6">
                <h2 className="text-base font-extrabold text-slate-900 pb-3 border-b border-slate-100 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-sky-500 rounded-full"></span>
                  <span>Teks Beranda & Tentang Kami</span>
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                      Headline Utama Hero Section
                    </label>
                    <input
                      type="text"
                      required
                      value={heroHeadline}
                      onChange={(e) => setHeroHeadline(e.target.value)}
                      placeholder="Dedikasi Menghubungkan Cirebon Tanpa Batas"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                      Sub-Teks Hero Section
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={heroSubtext}
                      onChange={(e) => setHeroSubtext(e.target.value)}
                      placeholder="Kami hadir untuk memberikan..."
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none resize-none leading-relaxed"
                    />
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                        Judul Utama Halaman Tentang Kami
                      </label>
                      <input
                        type="text"
                        required
                        value={aboutTitle}
                        onChange={(e) => setAboutTitle(e.target.value)}
                        placeholder="PT Jaringan Multimedia Cirebon (SGC Network)"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-extrabold text-slate-700 mb-1.5">
                        Deskripsi Lengkap Tentang Kami
                      </label>
                      <textarea
                        required
                        rows={6}
                        value={aboutDescription}
                        onChange={(e) => setAboutDescription(e.target.value)}
                        placeholder="Didirikan dengan visi untuk..."
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-sky-500 focus:bg-white focus:outline-none resize-none leading-relaxed"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section 4: Berkas & Dokumen Unduhan */}
            {activeTab === "documents" && (
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm space-y-6">
                <h2 className="text-base font-extrabold text-slate-900 pb-3 border-b border-slate-100 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-sky-500 rounded-full"></span>
                  <span>Unggah Berkas & Dokumen Administrasi</span>
                </h2>
                <p className="text-xs text-slate-500 leading-relaxed -mt-2">
                  Unggah berkas untuk menggantikan file pendaftaran manual dan file kontrak statis di halaman **Panduan Berlangganan**.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Berkas 1: Formulir Pendaftaran */}
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-rose-50 text-rose-600 rounded-lg flex items-center justify-center">
                          <FilePdf size={20} weight="fill" />
                        </div>
                        <span className="text-sm font-bold text-slate-900">Formulir Pendaftaran</span>
                      </div>
                      <p className="text-xs text-slate-500">
                        Format dokumen yang valid: **PDF (.pdf) atau Word (.doc, .docx)**.
                      </p>
                      
                      {settings?.registrationForm && (
                        <div className="text-[11px] text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200 font-medium truncate">
                          <span className="font-bold text-slate-500 block text-[9px] uppercase tracking-wider mb-0.5">Berkas Aktif saat ini:</span>
                          <a href={settings.registrationForm} target="_blank" className="text-sky-600 hover:underline">
                            {settings.registrationForm.split("/").pop()}
                          </a>
                        </div>
                      )}
                    </div>

                    <label className="w-full inline-flex py-2.5 bg-white border border-slate-250 hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-xl transition-all cursor-pointer items-center justify-center gap-2 shadow-sm">
                      <UploadSimple size={14} weight="bold" />
                      <span>{registrationFormFile ? registrationFormFile.name : "Unggah Formulir Baru"}</span>
                      <input
                        type="file"
                        ref={doc1InputRef}
                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setRegistrationFormFile(e.target.files[0]);
                          }
                        }}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Berkas 2: Kontrak Berlangganan */}
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                          <FileDoc size={20} weight="fill" />
                        </div>
                        <span className="text-sm font-bold text-slate-900">Kontrak Layanan</span>
                      </div>
                      <p className="text-xs text-slate-500">
                        Format dokumen yang valid: **PDF (.pdf) atau Word (.doc, .docx)**.
                      </p>

                      {settings?.serviceContract && (
                        <div className="text-[11px] text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200 font-medium truncate">
                          <span className="font-bold text-slate-500 block text-[9px] uppercase tracking-wider mb-0.5">Berkas Aktif saat ini:</span>
                          <a href={settings.serviceContract} target="_blank" className="text-sky-600 hover:underline">
                            {settings.serviceContract.split("/").pop()}
                          </a>
                        </div>
                      )}
                    </div>

                    <label className="w-full inline-flex py-2.5 bg-white border border-slate-250 hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-xl transition-all cursor-pointer items-center justify-center gap-2 shadow-sm">
                      <UploadSimple size={14} weight="bold" />
                      <span>{serviceContractFile ? serviceContractFile.name : "Unggah Kontrak Baru"}</span>
                      <input
                        type="file"
                        ref={doc2InputRef}
                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setServiceContractFile(e.target.files[0]);
                          }
                        }}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={formLoading}
                className="px-6 py-4 bg-sky-500 hover:bg-sky-600 disabled:bg-sky-500/60 text-white font-bold rounded-2xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
              >
                {formLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Gear size={18} weight="bold" />
                    <span>Simpan Perubahan Pengaturan</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
