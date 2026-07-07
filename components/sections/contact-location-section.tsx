"use client";

import React from "react";
import { MapPin, Envelope, Phone } from "@phosphor-icons/react";
import { WhatsappLogo } from "../layout/whatsapp-icon";
import { MapWrapper } from "../ui/map-wrapper";
import { CtaCardSection } from "./cta-card-section";

import type { SiteSettings } from "@/types";

export function ContactLocationSection({ settings }: { settings: SiteSettings | null }) {
  const address = settings?.address || "Blok 04 Assa'idiyah RT.03 RW.03\nDesa Tegalgubug Lor, Kecamatan Arjawinangun\nKabupaten Cirebon, Jawa Barat 45162";
  const email = settings?.email || "info@jmcnet.id";
  const whatsappCs1 = settings?.whatsappCs1 || "6285179997972";
  const whatsappCs2 = settings?.whatsappCs2 || "6285179997975";

  // Format nomor agar rapi
  const formattedCs1 = whatsappCs1.startsWith("62") 
    ? `0${whatsappCs1.substring(2).replace(/(\d{4})(\d{4})(\d{4})/, "$1-$2-$3")}` 
    : whatsappCs1;
  const formattedCs2 = whatsappCs2.startsWith("62")
    ? `0${whatsappCs2.substring(2).replace(/(\d{4})(\d{4})(\d{4})/, "$1-$2-$3")}`
    : whatsappCs2;

  return (
    <>
      {/* 11. Contact CTA Section */}
      <CtaCardSection
        eyebrow="Layanan Pelanggan"
        title="Siap Menikmati Internet Cepat Tanpa Batas?"
        description="Hubungi tim JMCNET sekarang dan nikmati koneksi internet fiber optik murni yang stabil untuk rumah maupun bisnis Anda."
        bgClassName="py-20 bg-gradient-to-b from-slate-50 to-slate-100/60 border-t border-slate-200/80 relative"
        actions={[
          {
            label: `CS 1: ${formattedCs1}`,
            href: `https://wa.me/${whatsappCs1}`,
            isExternal: true,
            icon: <WhatsappLogo size={18} weight="fill" className="text-emerald-600" />,
            variant: "primary",
          },
          {
            label: `CS 2: ${formattedCs2}`,
            href: `https://wa.me/${whatsappCs2}`,
            isExternal: true,
            icon: <WhatsappLogo size={18} weight="fill" className="text-emerald-400" />,
            variant: "secondary",
          },
          {
            label: "Lihat Paket",
            href: "/paket",
            variant: "outline",
          },
        ]}
      />

      {/* 12. Office & Contact Details Grid */}
      <section className="py-16 bg-slate-100/60 border-t border-slate-200/60 relative">
        <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-12">
          {/* Info Details */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-800">
               Kontak & Lokasi Kantor
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-[45ch]">
              Kami selalu siap melayani pertanyaan Anda mengenai ketersediaan
              jaringan, pemasangan baru, maupun keluhan teknis.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-dark shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Alamat Kantor
                  </h4>
                  <p className="text-slate-700 text-sm mt-1 leading-relaxed whitespace-pre-line">
                    {address}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Envelope size={20} className="text-brand-dark shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Email
                  </h4>
                  <a
                    href={`mailto:${email}`}
                    className="text-slate-700 hover:text-brand-dark text-sm mt-1 block"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={20} className="text-brand-dark shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Telepon / WhatsApp
                  </h4>
                  <div className="space-y-1 mt-1">
                    <a
                      href={`https://wa.me/${whatsappCs1}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 hover:text-brand-dark text-sm block"
                    >
                      Cs 1: {formattedCs1}
                    </a>
                    <a
                      href={`https://wa.me/${whatsappCs2}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 hover:text-brand-dark text-sm block"
                    >
                      Cs 2: {formattedCs2}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed Leaflet */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-3xl overflow-hidden p-2 sm:p-3 shadow-sm relative w-full h-[320px] sm:h-[400px] md:h-[450px] lg:h-full lg:min-h-[460px]">
            <MapWrapper />
          </div>
        </div>
      </section>
    </>
  );
}
