import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/page-header";
import { CtaCardSection } from "@/components/sections/cta-card-section";
import { settingsService } from "@/services/settings.service";
import {
  DownloadSimple,
  FileDoc,
  FilePdf,
  CheckCircle,
  ArrowRight,
  ClipboardText,
  Wrench,
  WifiHigh,
} from "@phosphor-icons/react/dist/ssr";
import { WhatsappLogo } from "@/components/layout/whatsapp-icon";

export const metadata: Metadata = {
  title: "Panduan Berlangganan & Dokumen Resmi - JMCNET",
  description:
    "Pelajari alur pendaftaran, cara pembayaran tagihan bulanan, serta unduh formulir registrasi PDF dan draf kontrak berlangganan resmi JMCNET.",
};

export default async function PanduanBerlanggananPage() {
  // Ambil data settings dari backend API secara dinamis
  const settingsRes = await settingsService.get().catch(() => null);
  const settings = settingsRes?.data?.data || null;

  const whatsappCs1 = settings?.whatsappCs1 || "6285179997972";
  const registrationFormUrl = settings?.registrationForm || "/doc/formulir-pendaftaran-jmcnet.pdf";
  const serviceContractUrl = settings?.serviceContract || "/KONTRAK BERLANGGANAN LAYANAN SGC NETWORK.docx";

  const isFormPdf = registrationFormUrl.toLowerCase().endsWith(".pdf");
  const isContractPdf = serviceContractUrl.toLowerCase().endsWith(".pdf");

  return (
    <div className="flex-1 bg-white text-slate-900 font-sans selection:bg-brand-light/20 selection:text-brand-dark overflow-x-hidden">
      {/* Hero Header */}
      <PageHeader
        eyebrow="PANDUAN &amp; ADMINISTRASI"
        title="Panduan Berlangganan &"
        highlight="Dokumen Resmi."
        subtitle="Semua informasi mengenai prosedur pendaftaran, pengunduhan kontrak berkas resmi SGC Network, hingga tata cara pembayaran bulanan."
      />

      {/* 3 Langkah Mudah Walkthrough */}
      <section className="py-20 bg-gradient-to-b from-slate-50 via-sky-50/30 to-white relative">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-brand-dark uppercase block">
              Prosedur Registrasi
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Alur Pemasangan Baru
            </h2>
            <p className="text-slate-600 text-base">
              Hanya butuh 3 langkah sederhana hingga internet cepat siap digunakan di lokasi Anda.
            </p>
          </div>

          {/* Alur Detail */}
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4 hover:border-brand-dark/40 transition-colors">
              <span className="text-3xl font-black text-brand-light font-mono">01.</span>
              <h3 className="text-lg font-bold text-slate-900">Daftar &amp; Cek Lokasi</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Hubungi Customer Service kami via WhatsApp. Kirimkan detail alamat lengkap atau share lokasi rumah Anda untuk pengecekan ketersediaan ODP di area Anda.
              </p>
            </div>
            {/* Step 2 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4 hover:border-brand-dark/40 transition-colors">
              <span className="text-3xl font-black text-brand-light font-mono">02.</span>
              <h3 className="text-lg font-bold text-slate-900">Isi Formulir &amp; Jadwal</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Setelah ODP dipastikan tersedia di area Anda, Anda dapat mengisi formulir berlangganan (unduh di bawah) dan menyepakati jadwal pemasangan wifi dengan teknisi kami.
              </p>
            </div>
            {/* Step 3 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4 hover:border-brand-dark/40 transition-colors">
              <span className="text-3xl font-black text-brand-light font-mono">03.</span>
              <h3 className="text-lg font-bold text-slate-900">Instalasi &amp; Aktivasi</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Tim teknisi kami akan berkunjung ke rumah untuk penarikan kabel fiber optik, setting wifi router, dan aktivasi internet. Anda siap berselancar cepat!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unduhan Dokumen */}
      <section className="py-20 bg-white relative border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-brand-dark uppercase block">
              Unduhan File Resmi
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Dokumen Administrasi Pelanggan
            </h2>
            <p className="text-slate-600 text-base">
              Unduh berkas kelengkapan pendaftaran offline maupun draf surat perjanjian kesepakatan berlangganan layanan JMCNET.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl">
            {/* Card PDF / Word 1 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                  isFormPdf ? "bg-rose-50 text-rose-600" : "bg-blue-50 text-blue-600"
                }`}>
                  {isFormPdf ? <FilePdf size={34} weight="fill" /> : <FileDoc size={34} weight="fill" />}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">Formulir Pendaftaran JMCNET</h3>
                  <p className="text-xs font-mono text-slate-400 mt-1">Format: {isFormPdf ? "PDF Document" : "Word Document"}</p>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Formulir aplikasi berlangganan untuk diisi data diri pelanggan (Nama, NIK KTP, Alamat Lengkap, Pilihan Paket, dan Kontak darurat).
                </p>
              </div>

              <a
                href={registrationFormUrl}
                download={isFormPdf ? "Formulir_Berlangganan_JMCNET.pdf" : "Formulir_Berlangganan_JMCNET.docx"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-brand-dark text-sm font-bold text-white hover:bg-brand-dark/95 shadow-md shadow-brand-dark/15 transition-all cursor-pointer"
              >
                <DownloadSimple size={20} weight="bold" />
                <span>Unduh Formulir {isFormPdf ? "PDF" : "Word"}</span>
              </a>
            </div>

            {/* Card PDF / Word 2 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                  isContractPdf ? "bg-rose-50 text-rose-600" : "bg-blue-50 text-blue-600"
                }`}>
                  {isContractPdf ? <FilePdf size={34} weight="fill" /> : <FileDoc size={34} weight="fill" />}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">Kontrak Berlangganan SGC Network</h3>
                  <p className="text-xs font-mono text-slate-400 mt-1">Format: {isContractPdf ? "PDF Document" : "Word Document"}</p>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Dokumen perjanjian kesepakatan layanan yang mencakup rincian hak dan kewajiban hukum pelanggan, spesifikasi SLA jaringan, dan ketentuan garansi.
                </p>
              </div>

              <a
                href={serviceContractUrl}
                download={isContractPdf ? "KONTRAK_BERLANGGANAN_LAYANAN_SGC_NETWORK.pdf" : "KONTRAK_BERLANGGANAN_LAYANAN_SGC_NETWORK.docx"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-brand-dark text-sm font-bold text-white hover:bg-brand-dark/95 shadow-md shadow-brand-dark/15 transition-all cursor-pointer"
              >
                <DownloadSimple size={20} weight="bold" />
                <span>Unduh Kontrak {isContractPdf ? "PDF" : "Word"}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Syarat & Ketentuan Lengkap */}
      <section className="py-20 bg-gradient-to-tr from-slate-50 via-indigo-50/20 to-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-brand-dark uppercase block">
              Ketentuan Berlangganan
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Syarat &amp; Ketentuan Layanan
            </h2>
            <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-dark/10 flex items-center justify-center shrink-0 text-brand-dark font-bold text-xs mt-0.5">
                  1
                </span>
                <p>
                  Melampirkan Kartu Tanda Pengenal (<strong>KTP</strong>) yang masih berlaku pada saat pendaftaran.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-dark/10 flex items-center justify-center shrink-0 text-brand-dark font-bold text-xs mt-0.5">
                  2
                </span>
                <p>
                  Sistem berlangganan bersifat <strong>PRABAYAR</strong>, pembayaran sewa bulanan dilakukan di muka sebelum masa penggunaan berjalan.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-dark/10 flex items-center justify-center shrink-0 text-brand-dark font-bold text-xs mt-0.5">
                  3
                </span>
                <p>
                  Pembayaran tagihan bulanan jatuh tempo setiap tanggal <strong>5</strong> (batas maksimal tanggal <strong>10</strong> setiap bulannya).
                </p>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-dark/10 flex items-center justify-center shrink-0 text-brand-dark font-bold text-xs mt-0.5">
                  4
                </span>
                <p>
                  Pemutusan sementara (isolir layanan) dapat dilakukan apabila pelanggan tidak melakukan pembayaran melewati tanggal 10 tanpa adanya konfirmasi terlebih dahulu kepada admin CS.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-dark/10 flex items-center justify-center shrink-0 text-brand-dark font-bold text-xs mt-0.5">
                  5
                </span>
                <p>
                  Biaya aktivasi Rp 150.000 merupakan biaya sewa pakai perangkat berupa <strong>Router/Modem Fiber Optic</strong> dan instalasi. Perangkat digaransi penuh selama tidak ada kerusakan fisik akibat kelalaian pelanggan.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-dark/10 flex items-center justify-center shrink-0 text-brand-dark font-bold text-xs mt-0.5">
                  6
                </span>
                <p>
                  Permohonan berhenti berlangganan atau non-aktif sementara (maksimal 2 bulan) wajib menghubungi sales / admin sebelum siklus tagihan bulan berikutnya berjalan.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 border border-slate-200/80 p-8 rounded-3xl flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-800">
                Pembayaran Sewa Bulanan
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Pembayaran rutin bulanan maupun aktivasi awal dapat ditransfer ke rekening bank resmi perusahaan berikut:
              </p>

              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-3 shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Bank Transfer Resmi
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-black text-slate-800">Bank BRI</span>
                  <span className="text-sm text-slate-600 font-mono font-bold">0107010045 - 39304</span>
                </div>
                <div className="border-t border-slate-100 pt-3">
                  <p className="text-xs text-slate-400">Atas Nama Rekening:</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">
                    PT JARINGAN MULTIMEDIA CIREBON
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <Link
                href="/kontak"
                className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-900 text-xs font-bold text-white hover:bg-slate-800 transition-all"
              >
                <span>Konfirmasi Pembayaran ke CS</span>
                <ArrowRight size={16} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Card */}
      <CtaCardSection
        eyebrow="Bantuan Registrasi"
        title="Siap Mengajukan Pemasangan Baru?"
        description="Unduh formulir atau langsung hubungi tim customer service kami via WhatsApp untuk pemeriksaan jangkauan jaringan di lokasi Anda."
        actions={[
          {
            label: "Daftar Langsung via WA",
            href: `https://wa.me/${whatsappCs1}`,
            isExternal: true,
            icon: <WhatsappLogo size={18} weight="fill" className="text-emerald-600" />,
            variant: "primary",
          },
          {
            label: "Lihat Pilihan Paket",
            href: "/paket",
            variant: "secondary",
          },
        ]}
      />
    </div>
  );
}
