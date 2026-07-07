"use client";

import React, { useState } from "react";
import { PaperPlaneRight } from "@phosphor-icons/react";
import type { SiteSettings } from "@/types";

export function ContactForm({ settings }: { settings: SiteSettings | null }) {
  const [formData, setFormData] = useState({
    nama: "",
    noWhatsapp: "",
    kategori: "Pemasangan Baru",
    alamat: "",
    pesan: "",
  });

  const whatsappCs1 = settings?.whatsappCs1 || "6285179997972";

  const handleSendToWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo JMCNET,%0A%0A*Nama:* ${formData.nama}%0A*No WA:* ${formData.noWhatsapp}%0A*Kategori:* ${formData.kategori}%0A*Alamat:* ${formData.alamat}%0A*Pesan/Pertanyaan:* ${formData.pesan}`;
    window.open(`https://wa.me/${whatsappCs1}?text=${text}`, "_blank");
  };

  return (
    <div className="lg:col-span-6 bg-slate-50 border border-slate-200/80 p-8 md:p-10 rounded-3xl space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-extrabold text-slate-900">
          Kirim Pertanyaan Langsung
        </h2>
        <p className="text-slate-600 text-sm">
          Isi formulir di bawah ini untuk menghasilkan pesan WhatsApp terformat otomatis kepada tim CS kami.
        </p>
      </div>

      <form onSubmit={handleSendToWhatsapp} className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Nama Lengkap
          </label>
          <input
            type="text"
            required
            placeholder="Contoh: Budi Santoso"
            value={formData.nama}
            onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
            className="w-full h-11 px-4 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-brand-dark transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Nomor WhatsApp
            </label>
            <input
              type="tel"
              required
              placeholder="08123456xxxx"
              value={formData.noWhatsapp}
              onChange={(e) => setFormData({ ...formData, noWhatsapp: e.target.value })}
              className="w-full h-11 px-4 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-brand-dark transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Kategori Keperluan
            </label>
            <select
              value={formData.kategori}
              onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
              className="w-full h-11 px-4 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-brand-dark transition-colors"
            >
              <option value="Pemasangan Baru">Pemasangan Baru</option>
              <option value="Cek Jangkauan Area">Cek Jangkauan Area</option>
              <option value="Laporan Kendala Teknis">Laporan Kendala Teknis</option>
              <option value="Pertanyaan Umum / Pembayaran">Pertanyaan Umum / Pembayaran</option>
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Alamat Lengkap / Wilayah Pasang
          </label>
          <input
            type="text"
            placeholder="Contoh: Arjawinangun / Tegalgubug Lor"
            value={formData.alamat}
            onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
            className="w-full h-11 px-4 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-brand-dark transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Pesan / Detail Pertanyaan
          </label>
          <textarea
            rows={4}
            required
            placeholder="Tuliskan pertanyaan atau kendala yang ingin Anda tanyakan..."
            value={formData.pesan}
            onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
            className="w-full p-4 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-brand-dark transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full h-12 rounded-xl bg-brand-dark text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-brand-dark/95 active:scale-98 transition-all shadow-md shadow-brand-dark/15 cursor-pointer"
        >
          <PaperPlaneRight size={18} weight="fill" />
          <span>Kirim via WhatsApp CS</span>
        </button>
      </form>
    </div>
  );
}
