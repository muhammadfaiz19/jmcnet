"use client";

import React from "react";
import Link from "next/link";
import { PageHeader } from "../components/page-header";
import { CtaCardSection } from "../components/cta-card-section";
import {
  DownloadSimple,
  FileDoc,
  FilePdf,
  CheckCircle,
  Bank,
  ArrowRight,
  ClipboardText,
  Wrench,
  WifiHigh,
  WhatsappLogo,
} from "@phosphor-icons/react";

export default function PanduanBerlanggananPage() {
  return (
    <div className="flex-1 bg-white text-slate-900 font-sans selection:bg-brand-light/20 selection:text-brand-dark overflow-x-hidden">
      {/* Hero Header */}
      <PageHeader
        eyebrow="PANDUAN & ADMINISTRASI"
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

          <div className="grid gap-8 md:grid-cols-3 relative">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 space-y-5 relative">
              <div className="w-12 h-12 rounded-2xl bg-brand-dark text-white flex items-center justify-center font-black text-lg shadow-md shadow-brand-dark/20">
                1
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <ClipboardText size={22} className="text-brand-dark" />
                  <span>Pilih Paket &amp; Registrasi</span>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Pilih paket (16 Mbps, 26 Mbps, atau 56 Mbps). Kirim foto identitas KTP beserta alamat pasang via WhatsApp atau isi formulir PDF pendaftaran.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 space-y-5 relative">
              <div className="w-12 h-12 rounded-2xl bg-brand-dark text-white flex items-center justify-center font-black text-lg shadow-md shadow-brand-dark/20">
                2
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Bank size={22} className="text-brand-dark" />
                  <span>Pembayaran Awal</span>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Lakukan pembayaran aktivasi (Rp 150.000 + iuran bulan pertama) melalui transfer ke rekening resmi Bank BRI PT Jaringan Multimedia Cirebon.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 space-y-5 relative">
              <div className="w-12 h-12 rounded-2xl bg-brand-dark text-white flex items-center justify-center font-black text-lg shadow-md shadow-brand-dark/20">
                3
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Wrench size={22} className="text-brand-dark" />
                  <span>Instalasi &amp; Aktivasi</span>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Tim teknisi kami akan menjadwalkan kunjungan penarikan kabel fiber optik dan penyetelan router Wi-Fi hingga internet aktif 100%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unduhan Dokumen Resmi Section */}
      <section className="py-20 bg-white border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-brand-dark uppercase block">
              Pusat Unduhan Berkas
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Dokumen &amp; Kontrak Resmi
            </h2>
            <p className="text-slate-600 text-base">
              Unduh berkas resmi di bawah ini untuk kelengkapan administrasi, pendaftaran offline, atau rincian klausul layanan.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {/* Card PDF */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
                  <FilePdf size={34} weight="fill" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">Formulir Pendaftaran JMCNET</h3>
                  <p className="text-xs font-mono text-slate-400 mt-1">Format: PDF Document</p>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Formulir aplikasi berlangganan untuk diisi data diri pelanggan (Nama, NIK KTP, Alamat Lengkap, Pilihan Paket, dan Kontak darurat).
                </p>
              </div>

              <a
                href="/doc/formulir-pendaftaran-jmcnet.pdf"
                download="Formulir_Berlangganan_JMCNET.pdf"
                className="w-full inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-brand-dark text-sm font-bold text-white hover:bg-brand-dark/95 shadow-md shadow-brand-dark/15 transition-all"
              >
                <DownloadSimple size={20} weight="bold" />
                <span>Unduh Formulir PDF</span>
              </a>
            </div>

            {/* Card DOCX */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FileDoc size={34} weight="fill" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">Kontrak Berlangganan SGC Network</h3>
                  <p className="text-xs font-mono text-slate-400 mt-1">Format: DOCX Word Document</p>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Dokumen perjanjian kesepakatan layanan yang mencakup rincian hak dan kewajiban hukum pelanggan, spesifikasi SLA jaringan, dan ketentuan garansi.
                </p>
              </div>

              <a
                href="/KONTRAK BERLANGGANAN LAYANAN SGC NETWORK.docx"
                download="KONTRAK BERLANGGANAN LAYANAN SGC NETWORK.docx"
                className="w-full inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-brand-dark text-sm font-bold text-white hover:bg-brand-dark/95 shadow-md shadow-brand-dark/15 transition-all"
              >
                <DownloadSimple size={20} weight="bold" />
                <span>Unduh Kontrak DOCX</span>
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
                  Pembayaran tagihan bulanan jatuh tempo setiap tanggal <strong>1 (satu)</strong> setiap bulannya.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-dark/10 flex items-center justify-center shrink-0 text-brand-dark font-bold text-xs mt-0.5">
                  4
                </span>
                <p>
                  Pemutusan sementara/sepihak dapat dilakukan apabila pelanggan tidak melakukan pelunasan tagihan sampai batas waktu yang telah ditentukan.
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
                  Permohonan berhenti berlangganan atau non-aktif sementara (maksimal 2 bulan) wajib mengisi formulir pemberhentian selambatnya sebelum masuk siklus tagihan bulan berikutnya.
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
            href: "https://wa.me/6285179997972",
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
