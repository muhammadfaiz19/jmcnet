"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/logo-removebg.png"
                alt="PT Jaringan Multimedia Cirebon Logo"
                width={120}
                height={36}
                className="h-9 w-auto object-contain"
                style={{ width: "auto" }}
              />
            </Link>
          </div>
          <p className="text-xs leading-relaxed">
            Penyedia layanan internet fiber optic terpercaya di wilayah Cirebon.
            Koneksi stabil, tanpa batas kuota.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">
            Navigasi Halaman
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link
                href="/"
                className="hover:text-white transition-colors"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="/tentang"
                className="hover:text-white transition-colors"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                href="/keunggulan"
                className="hover:text-white transition-colors"
              >
                Keunggulan &amp; Teknologi
              </Link>
            </li>
            <li>
              <Link href="/paket" className="hover:text-white transition-colors">
                Paket &amp; Harga
              </Link>
            </li>
            <li>
              <Link
                href="/panduan-berlangganan"
                className="hover:text-white transition-colors"
              >
                Panduan &amp; Dokumen
              </Link>
            </li>
            <li>
              <Link
                href="/kontak"
                className="hover:text-white transition-colors"
              >
                Hubungi Kami
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">
            Kontak Layanan
          </h4>
          <ul className="space-y-2 text-xs">
            <li>info@jmcnet.id</li>
            <li>Cs 1: 0851-7999-7972</li>
            <li>Cs 2: 0851-7999-7975</li>
            <li>Arjawinangun, Cirebon</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">
            Misi
          </h4>
          <p className="text-xs leading-relaxed">
            Menghubungkan masyarakat Cirebon dengan koneksi internet serat optik
            berkualitas tinggi dan harga bersahabat.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px]">
        <p>
          © 2026 PT Jaringan Multimedia Cirebon. Hak Cipta Dilindungi
          Undang-Undang.
        </p>
        <div className="flex gap-4">
          <span className="text-slate-500">
            Arjawinangun, Cirebon, Jawa Barat
          </span>
        </div>
      </div>
    </footer>
  );
}
