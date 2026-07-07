import React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { CtaCardSection } from "@/components/sections/cta-card-section";
import { PackagesSection } from "@/components/sections/packages-section";
import { packageService } from "@/services/package.service";
import { voucherPlanService } from "@/services/voucherPlan.service";
import { settingsService } from "@/services/settings.service";
import { Check, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { WhatsappLogo } from "@/components/layout/whatsapp-icon";

export const metadata: Metadata = {
  title: "Pilihan Paket Internet & Voucher Wifi Murah Cirebon",
  description:
    "Cari tahu harga berlangganan internet bulanan fiber optic murni JMCNET serta paket voucher hotspot dan reseller termurah untuk area Cirebon dan sekitarnya.",
};

export default async function PaketPage() {
  // Ambil data API secara paralel untuk optimasi performa loading
  const [packagesRes, vouchersRes, settingsRes] = await Promise.allSettled([
    packageService.getAll(),
    voucherPlanService.getAll(),
    settingsService.get(),
  ]);

  const packages = packagesRes.status === "fulfilled" ? packagesRes.value.data?.data || [] : [];
  const voucherPlans = vouchersRes.status === "fulfilled" ? vouchersRes.value.data?.data || [] : [];
  const settings = settingsRes.status === "fulfilled" ? settingsRes.value.data?.data || null : null;

  const whatsappCs1 = settings?.whatsappCs1 || "6285179997972";
  const registrationFormUrl = settings?.registrationForm || "/doc/formulir-pendaftaran-jmcnet.pdf";
  const serviceContractUrl = settings?.serviceContract || "/KONTRAK BERLANGGANAN LAYANAN SGC NETWORK.docx";

  const isFormPdf = registrationFormUrl.toLowerCase().endsWith(".pdf");
  const isContractPdf = serviceContractUrl.toLowerCase().endsWith(".pdf");

  return (
    <div className="flex-1 bg-white text-slate-900 font-sans selection:bg-brand-light/20 selection:text-brand-dark overflow-x-hidden">
      {/* Hero Header */}
      <PageHeader
        eyebrow="DAFTAR PAKET RESMI"
        title="Pilihan Paket Internet"
        highlight="Tanpa Batas."
        subtitle="Kecepatan stabil murni 100% Fiber Optic. Harga flat setiap bulan, sudah termasuk PPN 11% dan sewa perangkat modem."
      />

      {/* Bagian Grid Paket Dinamis dari database */}
      <PackagesSection packages={packages} voucherPlans={voucherPlans} settings={settings} />

      {/* Corporate / Dedicated Info */}
      <CtaCardSection
        eyebrow="Layanan Korporasi & Instansi"
        title="Membutuhkan Dedicated Bandwidth atau IP Public Khusus?"
        description="Kami menyediakan solusi Dedicated Internet Access (DIA), interkoneksi antar kantor (VPN/VLAN), serta paket kustom untuk instansi pemerintahan, sekolah, perhotelan, dan bisnis korporasi di Cirebon."
        bgClassName="py-20 bg-gradient-to-tr from-slate-50 via-indigo-50/20 to-slate-50 relative border-b border-slate-100"
        actions={[
          {
            label: "Konsultasi Solusi Korporasi",
            href: "/kontak",
            variant: "primary",
          },
        ]}
      />

      {/* Dokumen & Syarat Pendaftaran */}
      <section className="py-20 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-brand-dark uppercase block">
              Persyaratan Pendaftaran
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Proses Transparan &amp; Resmi
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Kami menjamin transparansi harga sejak awal pendaftaran. Calon pelanggan cukup melampirkan identitas KTP dan melunasi pembayaran awal sebelum instalasi dilakukan.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <Check size={18} className="text-brand-dark shrink-0" weight="bold" />
                <span>Biaya aktivasi Rp 150.000 mencakup sewa perangkat modem &amp; instalasi penuh.</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <Check size={18} className="text-brand-dark shrink-0" weight="bold" />
                <span>Pembayaran rutin jatuh tempo tanggal 5 (maksimal tgl 10 sebelum terkena isolir).</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <Check size={18} className="text-brand-dark shrink-0" weight="bold" />
                <span>Garansi perangkat modem gratis selama masa aktif berlangganan.</span>
              </div>
            </div>
          </div>

          {/* Unduh Dokumen Dinamis dari Database / Fallback */}
          <div className="lg:col-span-6 bg-slate-50 p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
            <h3 className="text-xl font-bold text-slate-900">
              Unduh Formulir &amp; Kontrak
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Anda dapat mempelajari secara lengkap hak serta kewajiban pelanggan atau mengisi formulir pendaftaran secara offline melalui berkas berikut:
            </p>
            <div className="space-y-3">
              <a
                href={registrationFormUrl}
                download={isFormPdf ? "Formulir_Berlangganan_JMCNET.pdf" : "Formulir_Berlangganan_JMCNET.docx"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex h-12 items-center justify-between px-5 rounded-xl bg-brand-dark text-xs font-bold text-white hover:bg-brand-dark/95 transition-all shadow-sm shadow-brand-dark/15"
              >
                <span className="flex items-center gap-2.5">
                  <DownloadSimple size={18} className="text-brand-light" weight="bold" />
                  <span>Formulir Berlangganan JMCNET ({isFormPdf ? "PDF" : "Word"})</span>
                </span>
                <span className="text-[10px] bg-white/15 px-2 py-0.5 rounded text-slate-300">Unduh</span>
              </a>
              <a
                href={serviceContractUrl}
                download={isContractPdf ? "KONTRAK_BERLANGGANAN_LAYANAN_SGC_NETWORK.pdf" : "KONTRAK_BERLANGGANAN_LAYANAN_SGC_NETWORK.docx"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex h-12 items-center justify-between px-5 rounded-xl bg-white border border-slate-300 text-xs font-bold text-slate-800 hover:bg-slate-100 transition-all shadow-2xs"
              >
                <span className="flex items-center gap-2.5">
                  <DownloadSimple size={18} className="text-brand-dark" weight="bold" />
                  <span>Kontrak Berlangganan SGC Network ({isContractPdf ? "PDF" : "Word"})</span>
                </span>
                <span className="text-[10px] bg-slate-200/80 px-2 py-0.5 rounded text-slate-600 font-mono">Unduh</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Card */}
      <CtaCardSection
        eyebrow="Butuh Bantuan?"
        title="Masih Bingung Memilih Paket?"
        description="Konsultasikan kebutuhan internet rumah, kafe, atau kantor Anda secara gratis dengan tim teknisi dan customer service kami via WhatsApp."
        actions={[
          {
            label: "Konsultasi Gratis via WA",
            href: `https://wa.me/${whatsappCs1}`,
            isExternal: true,
            icon: <WhatsappLogo size={18} weight="fill" className="text-emerald-600" />,
            variant: "primary",
          },
          {
            label: "Hubungi Kontak Resmi",
            href: "/kontak",
            variant: "secondary",
          },
        ]}
      />
    </div>
  );
}
