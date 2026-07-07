"use client";

import React from "react";
import { Phone, MapPin, Clock } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import { WhatsappLogo } from "./whatsapp-icon";
import type { SiteSettings } from "@/types";

export function TopBar({ settings }: { settings: SiteSettings | null }) {
  const pathname = usePathname();
  const companyName = settings?.companyName || "PT Jaringan Multimedia Cirebon";
  const operationalHours = settings?.operationalHours || "Senin - Sabtu (09:00 - 18:00)";
  const whatsappCs1 = settings?.whatsappCs1 || "6285179997972";
  const whatsappCs2 = settings?.whatsappCs2 || "6285179997975";

  // Sembunyikan topbar di halaman admin
  if (pathname && pathname.startsWith("/admin")) return null;

  // Format nomor WhatsApp & Telepon agar ramah dibaca (misal: 62851... menjadi 0851...)
  const waLink = `https://wa.me/${whatsappCs1}`;
  const formattedWa = whatsappCs1.startsWith("62") 
    ? `0${whatsappCs1.substring(2).replace(/(\d{4})(\d{4})(\d{4})/, "$1-$2-$3")}` 
    : whatsappCs1;
  const formattedPhone = whatsappCs2.startsWith("62")
    ? `0${whatsappCs2.substring(2).replace(/(\d{4})(\d{4})(\d{4})/, "$1-$2-$3")}`
    : whatsappCs2;

  return (
    <div className="bg-slate-900 text-slate-300 text-xs py-2.5 px-4 sm:px-8 border-b border-slate-800/80 font-sans relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Kiri: Info Perusahaan & Lokasi */}
        <div className="flex items-center gap-4 overflow-hidden">
          <div className="flex items-center gap-1.5 text-slate-200 font-medium whitespace-nowrap">
            <MapPin size={14} className="text-brand-light shrink-0" weight="fill" />
            <span>{companyName}</span>
          </div>
          <span className="text-slate-700 hidden md:inline">|</span>
          <div className="hidden md:flex items-center gap-1.5 text-slate-400 font-mono">
            <Clock size={14} className="text-brand-light shrink-0" />
            <span>Jam Operasional: {operationalHours}</span>
          </div>
        </div>

        {/* Kanan: Tindakan Cepat & Kontak */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-200 hover:text-brand-light transition-colors font-medium"
          >
            <WhatsappLogo size={15} className="text-emerald-400" weight="fill" />
            <span>{formattedWa}</span>
          </a>

          <a
            href={`https://wa.me/${whatsappCs2}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <Phone size={14} className="text-blue-400" weight="fill" />
            <span>{formattedPhone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
