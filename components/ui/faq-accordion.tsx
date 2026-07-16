"use client";

import React, { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

const defaultFaqs: FAQItem[] = [
  {
    question: "Apakah ada FUP (Fair Usage Policy) pada paket JMCNET?",
    answer:
      "Tidak ada. Semua paket internet JMCNET bersifat Unlimited tanpa batasan kuota maupun penurunan kecepatan (Tanpa FUP). Anda bebas mendownload, streaming, dan berselancar sepuasnya kapan saja.",
  },
  {
    question: "Berapa lama proses instalasi jaringan internet?",
    answer:
      "Proses instalasi biasanya memakan waktu 1 sampai 3 hari kerja setelah pendaftaran disetujui. Tim teknisi profesional kami akan melakukan survei lokasi dan pemasangan kabel fiber optic secara cepat dan rapi.",
  },
  {
    question:
      "Apa saja persyaratan dokumen untuk mendaftar berlangganan JMCNET?",
    answer:
      "Calon pelanggan cukup melampirkan foto Kartu Tanda Pengenal (KTP) yang sah serta mengisi formulir pendaftaran berlangganan.",
  },
  {
    question: "Bagaimana sistem pembayaran bulanan dan kapan jatuh temponya?",
    answer:
      "Sistem berlangganan bersifat PRABAYAR (pembayaran dilakukan di muka). Jatuh tempo pembayaran tagihan bulanan adalah setiap tanggal 5, dengan batas maksimal pembayaran tanggal 10. Jika melewati tanggal 10 tanpa konfirmasi sebelumnya kepada admin, maka koneksi internet terancam terkena isolir sementara. Pembayaran dapat dilakukan melalui transfer ke rekening resmi kami: Bank BRI 0107010045 - 39304 a.n. PT JARINGAN MULTIMEDIA CIREBON.",
  },
  {
    question: "Apakah ada biaya untuk ganti password atau nama Wi-Fi (SSID)?",
    answer:
      "Tidak ada biaya sama sekali (Free). Anda dapat meminta bantuan ganti password atau nama Wi-Fi kapanpun secara gratis dengan menghubungi Customer Service kami via WhatsApp.",
  },
  {
    question: "Apakah pindah lokasi atau pemindahan alat Wi-Fi dikenakan biaya?",
    answer:
      "Ya, untuk permintaan pindah alat Wi-Fi atau pemindahan jalur modem akan dikenakan biaya tambahan (charge). Besaran biaya tergantung pada jarak dan lokasi perpindahan tersebut.",
  },
  {
    question: "Apakah modem router Wi-Fi dipinjamkan secara gratis?",
    answer:
      "Ya, kami meminjamkan Fiber Modem ONT berkualitas secara gratis selama masa berlangganan. Biaya aktivasi Rp 150.000 merupakan biaya sewa pakai alat tersebut sekaligus instalasi kabel fiber.",
  },
  {
    question:
      "Bagaimana jika saya ingin berhenti berlangganan atau menonaktifkan layanan sementara?",
    answer:
      "Untuk berhenti berlangganan atau nonaktif sementara (maksimal 2 manual), Anda wajib mengisi formulir berhenti berlangganan sebelum tagihan bulan berikutnya masuk agar tagihan tidak terus berjalan.",
  },
  {
    question: "Apakah layanan internet JMCNET tersedia untuk kebutuhan bisnis?",
    answer:
      "Tentu saja. Kami menyediakan solusi koneksi internet berkecepatan tinggi yang stabil untuk kebutuhan UMKM, perkantoran, sekolah, dan perusahaan skala besar dengan jaminan kehandalan jaringan yang prima.",
  },
  {
    question: "Bagaimana jika terjadi gangguan atau penurunan kecepatan?",
    answer:
      "Tim Support kami siap membantu selama jam operasional (Senin - Sabtu: 09:00 - 18:00 WIB, Minggu Libur). Anda dapat menghubungi Customer Service kami melalui WhatsApp, Telepon, atau Email. Teknisi kami akan segera memecahkan masalah atau melakukan kunjungan jika diperlukan.",
  },
  {
    question: "Bagaimana cara mendaftar dan berlangganan JMCNET?",
    answer:
      "Caranya sangat mudah. Anda hanya perlu memilih paket yang diinginkan, kemudian klik tombol WhatsApp untuk terhubung langsung dengan tim sales kami. Kami akan mendata alamat Anda untuk survei lokasi dan penjadwalan instalasi.",
  },
  {
    question: "Apakah JMCNET menyediakan layanan Voucher Wi-Fi harian atau jam-jaman?",
    answer:
      "Ya! Kami menyediakan Voucher Wi-Fi Hotspot SGC Network dengan harga Rp 3.000/voucher untuk masa aktif 8 jam. Selain itu, kami juga membuka peluang usaha bagi Anda yang ingin menjadi Mitra Reseller (menjual kembali voucher) dengan harga grosir Rp 2.000/voucher (minimal pembelian 25 voucher).",
  },
];

import type { Faq } from "@/types";

export function FAQAccordion({ faqs = [] }: { faqs?: Faq[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const displayFaqs = faqs.length > 0 ? faqs : defaultFaqs;

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {displayFaqs.map((faq, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            key={index}
            className="border border-slate-100 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-200"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-800 hover:text-brand-dark transition-colors focus:outline-none"
              aria-expanded={isOpen}
            >
              <div className="flex flex-col gap-1 items-start">
                {(faq as any).category?.name && (
                  <span className="text-[9px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md uppercase tracking-wider mb-1">
                    {(faq as any).category.name}
                  </span>
                )}
                <span className="text-base md:text-lg leading-snug">
                  {faq.question}
                </span>
              </div>
              <span
                className={`ml-4 text-slate-400 p-1 rounded-full bg-slate-50 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-brand-dark bg-slate-100" : ""
                }`}
              >
                <CaretDown size={18} weight="bold" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-5 text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-50 pt-3">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
