"use client";

import React from "react";
import { Phone, MapPin, Clock } from "@phosphor-icons/react";
import { WhatsappLogo } from "./whatsapp-icon";

export function TopBar() {
  return (
    <div className="bg-slate-900 text-slate-300 text-xs py-2.5 px-4 sm:px-8 border-b border-slate-800/80 font-sans relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: Company Info & Location */}
        <div className="flex items-center gap-4 overflow-hidden">
          <div className="flex items-center gap-1.5 text-slate-200 font-medium whitespace-nowrap">
            <MapPin size={14} className="text-brand-light shrink-0" weight="fill" />
            <span>PT Jaringan Multimedia Cirebon (JMCNET)</span>
          </div>
          <span className="text-slate-700 hidden md:inline">|</span>
          <div className="hidden md:flex items-center gap-1.5 text-slate-400 font-mono">
            <Clock size={14} className="text-brand-light shrink-0" />
            <span>Jam Operasional: Senin - Sabtu (09:00 - 18:00)</span>
          </div>
        </div>

        {/* Right: Quick Actions & Contact */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          <a
            href="https://wa.me/6285179997972"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-200 hover:text-brand-light transition-colors font-medium"
          >
            <WhatsappLogo size={15} className="text-emerald-400" weight="fill" />
            <span>0851-7999-7972</span>
          </a>

          <a
            href="tel:085179997975"
            className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <Phone size={14} className="text-blue-400" weight="fill" />
            <span>0851-7999-7975</span>
          </a>
        </div>
      </div>
    </div>
  );
}
