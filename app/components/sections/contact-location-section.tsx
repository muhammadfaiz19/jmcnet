"use client";

import React from "react";
import { WhatsappLogo, MapPin, Envelope, Phone } from "@phosphor-icons/react";
import { MapWrapper } from "../map-wrapper";

export function ContactLocationSection() {
  return (
    <>
      {/* 11. Contact CTA Section */}
      <section id="kontak" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-brand-dark to-slate-900 rounded-3xl p-8 md:p-12 lg:p-16 text-white grid gap-8 lg:grid-cols-12 items-center relative overflow-hidden shadow-xl">
            {/* Decorative background visual glow */}
            <div className="absolute w-[300px] h-[300px] rounded-full bg-brand-light/20 blur-[120px] -right-20 -top-20 pointer-events-none" />
            <div className="absolute w-[200px] h-[200px] rounded-full bg-brand-dark/20 blur-[80px] -left-20 -bottom-20 pointer-events-none" />

            {/* Text details */}
            <div className="lg:col-span-7 space-y-4 z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                Siap Menikmati Internet Cepat Tanpa Batas?
              </h2>
              <p className="text-slate-300 text-base max-w-[50ch] leading-relaxed">
                Hubungi tim JMCNET sekarang dan nikmati koneksi internet yang
                stabil untuk rumah maupun bisnis Anda.
              </p>
            </div>

            {/* CTA action buttons */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3.5 justify-end z-10 flex-wrap">
              <a
                href="https://wa.me/6285179997972"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-xs font-bold text-brand-dark transition-all hover:bg-slate-100 active:scale-98 shadow-md"
              >
                <WhatsappLogo size={16} weight="fill" />
                <span>CS 1: 0851-7999-7972</span>
              </a>
              <a
                href="https://wa.me/6285179997975"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-xs font-bold text-brand-dark transition-all hover:bg-slate-100 active:scale-98 shadow-md"
              >
                <WhatsappLogo size={16} weight="fill" />
                <span>CS 2: 0851-7999-7975</span>
              </a>
              <a
                href="/paket"
                className="inline-flex h-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 text-xs font-bold text-white transition-all hover:bg-white/20 active:scale-98"
              >
                Lihat Paket
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Office & Contact Details Grid */}
      <section className="py-16 bg-slate-50 border-t border-slate-150">
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
                  <p className="text-slate-700 text-sm mt-1 leading-relaxed">
                    Blok 04 Assa&apos;idiyah RT.03 RW.03
                    <br />
                    Desa Tegalgubug Lor, Kecamatan Arjawinangun
                    <br />
                    Kabupaten Cirebon, Jawa Barat 45162
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
                    href="mailto:info@jmcnet.id"
                    className="text-slate-700 hover:text-brand-dark text-sm mt-1 block"
                  >
                    info@jmcnet.id
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
                      href="https://wa.me/6285179997972"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 hover:text-brand-dark text-sm block"
                    >
                      Cs 1: 0851-7999-7972
                    </a>
                    <a
                      href="https://wa.me/6285179997975"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 hover:text-brand-dark text-sm block"
                    >
                      Cs 2: 0851-7999-7975
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed Leaflet */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-3xl overflow-hidden p-2 aspect-[16/9] shadow-sm relative min-h-[320px]">
            <MapWrapper />
          </div>
        </div>
      </section>
    </>
  );
}
