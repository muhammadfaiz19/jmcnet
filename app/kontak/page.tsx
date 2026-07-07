import React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { MapWrapper } from "@/components/ui/map-wrapper";
import {
  MapPin,
  Envelope,
  Clock,
} from "@phosphor-icons/react/dist/ssr";
import { WhatsappLogo } from "@/components/layout/whatsapp-icon";
import { settingsService } from "@/services/settings.service";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Hubungi Kami - PT Jaringan Multimedia Cirebon",
  description:
    "Hubungi layanan pelanggan dan teknisi support JMCNET Cirebon. Temukan kontak WhatsApp, email, jam operasional, dan lokasi kantor pelayanan kami.",
};

export default async function KontakPage() {
  // Ambil data settings dari backend API secara dinamis
  const settingsRes = await settingsService.get().catch(() => null);
  const settings = settingsRes?.data?.data || null;

  const email = settings?.email || "info@jmcnet.id";
  const whatsappCs1 = settings?.whatsappCs1 || "6285179997972";
  const whatsappCs2 = settings?.whatsappCs2 || "6285179997975";
  const address = settings?.address || "Blok 04 Assa'idiyah RT.03 RW.03\nDesa Tegalgubug Lor, Kecamatan Arjawinangun\nKabupaten Cirebon, Jawa Barat 45162";

  // Format nomor untuk label
  const formattedCs1 = whatsappCs1.startsWith("62") 
    ? `0${whatsappCs1.substring(2).replace(/(\d{4})(\d{4})(\d{4})/, "$1-$2-$3")}` 
    : whatsappCs1;
  const formattedCs2 = whatsappCs2.startsWith("62")
    ? `0${whatsappCs2.substring(2).replace(/(\d{4})(\d{4})(\d{4})/, "$1-$2-$3")}`
    : whatsappCs2;

  return (
    <div className="flex-1 bg-white text-slate-900 font-sans selection:bg-brand-light/20 selection:text-brand-dark overflow-x-hidden">
      {/* Hero Header */}
      <PageHeader
        eyebrow="LAYANAN PELANGGAN &amp; TEKNIS"
        title="Hubungi Tim"
        highlight="JMCNET Cirebon."
        subtitle="Punya pertanyaan ketersediaan jaringan atau mengalami kendala teknis? Tim kami siap memberikan solusi terbaik dengan cepat dan responsif."
      />

      {/* Contact Direct Cards */}
      <section className="py-20 bg-gradient-to-b from-slate-50 via-sky-50/30 to-white border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: CS 1 */}
          <a
            href={`https://wa.me/${whatsappCs1}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between space-y-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <WhatsappLogo size={26} weight="fill" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Customer Service 1
              </span>
              <h3 className="text-lg font-bold text-slate-800 mt-1">{formattedCs1}</h3>
              <p className="text-xs text-slate-500 mt-1">Chat langsung untuk info pasang baru.</p>
            </div>
          </a>

          {/* Card 2: CS 2 */}
          <a
            href={`https://wa.me/${whatsappCs2}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between space-y-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <WhatsappLogo size={26} weight="fill" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Customer Service 2
              </span>
              <h3 className="text-lg font-bold text-slate-800 mt-1">{formattedCs2}</h3>
              <p className="text-xs text-slate-500 mt-1">Bantuan kendala teknis &amp; tagihan.</p>
            </div>
          </a>

          {/* Card 3: Email */}
          <a
            href={`mailto:${email}`}
            className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between space-y-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-brand-dark/10 text-brand-dark flex items-center justify-center group-hover:bg-brand-dark group-hover:text-white transition-colors">
              <Envelope size={26} weight="fill" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Email Resmi
              </span>
              <h3 className="text-lg font-bold text-slate-800 mt-1">{email}</h3>
              <p className="text-xs text-slate-500 mt-1">Kemitraan &amp; surat menyurat resmi.</p>
            </div>
          </a>

          {/* Card 4: Support Hours */}
          <div className="bg-slate-900 text-white p-7 rounded-3xl flex flex-col justify-between space-y-4 shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-white/10 text-brand-light flex items-center justify-center">
              <Clock size={26} weight="fill" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Jam Operasional
              </span>
              <h3 className="text-base font-bold mt-1">Senin - Sabtu: 09:00 - 18:00</h3>
              <p className="text-xs text-rose-300 font-semibold mt-1">Minggu: Libur</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Form & Office Location Grid */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-12 items-start">
          {/* Form Konsultasi Client Component */}
          <ContactForm settings={settings} />

          {/* Alamat Kantor & Peta */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-brand-dark uppercase block">
                Lokasi Kantor Pusat
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                Kunjungi Kantor Layanan Kami
              </h2>
              <div className="flex items-start gap-3.5 bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
                <MapPin size={26} className="text-brand-dark shrink-0 mt-0.5" weight="fill" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    PT Jaringan Multimedia Cirebon
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed mt-1 whitespace-pre-line">
                    {address}
                  </p>
                </div>
              </div>
            </div>

            {/* Map Leaflet */}
            <div className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden p-2 sm:p-3 shadow-sm relative w-full h-[320px] sm:h-[400px] md:h-[480px] lg:h-[540px]">
              <MapWrapper />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
