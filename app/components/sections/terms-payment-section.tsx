"use client";

import React from "react";

export function TermsPaymentSection() {
  return (
    <section
      id="ketentuan"
      className="py-20 bg-white border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-12">
        {/* Left Column: Syarat & Ketentuan */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-brand-dark uppercase block">
            Ketentuan Layanan
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Syarat &amp; Ketentuan Berlangganan
          </h2>
          <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-dark/10 flex items-center justify-center shrink-0 text-brand-dark font-bold text-xs mt-0.5">
                1
              </span>
              <p>
                Melampirkan Kartu Tanda Pengenal (<strong>KTP</strong>) untuk
                pendaftaran.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-dark/10 flex items-center justify-center shrink-0 text-brand-dark font-bold text-xs mt-0.5">
                2
              </span>
              <p>
                Sistem berlangganan bersifat <strong>PRABAYAR</strong>,
                pembayaran dilakukan di muka sebelum masa penggunaan.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-dark/10 flex items-center justify-center shrink-0 text-brand-dark font-bold text-xs mt-0.5">
                3
              </span>
              <p>
                Pembayaran jatuh tempo setiap tanggal{" "}
                <strong>5</strong>, batas maksimal tanggal <strong>10</strong> setiap bulannya.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-dark/10 flex items-center justify-center shrink-0 text-brand-dark font-bold text-xs mt-0.5">
                4
              </span>
              <p>
                Pemutusan sementara (isolir layanan) dapat dilakukan apabila pelanggan
                melewati tanggal 10 tanpa adanya konfirmasi terlebih dahulu kepada admin CS.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-dark/10 flex items-center justify-center shrink-0 text-brand-dark font-bold text-xs mt-0.5">
                5
              </span>
              <p>
                Biaya aktivasi merupakan biaya sewa pakai perangkat berupa{" "}
                <strong>Router/modem</strong> dan Instalasi. Diberikan garansi
                alat jika terjadi kerusakan (kecuali kelalaian konsumen).
              </p>
            </div>
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-dark/10 flex items-center justify-center shrink-0 text-brand-dark font-bold text-xs mt-0.5">
                6
              </span>
              <p>
                Berhenti atau nonaktif sementara (maksimal 2 bulan) harus
                mengisi formulir berhenti berlangganan sebelum masa tagihan
                bulan berikutnya.
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-500 pt-2 italic">
            * Rincian hak, kewajiban, dan ketentuan hukum secara lengkap tercantum dalam{" "}
            <a
              href="/KONTRAK BERLANGGANAN LAYANAN SGC NETWORK.docx"
              download="KONTRAK BERLANGGANAN LAYANAN SGC NETWORK.docx"
              className="text-brand-dark font-bold hover:underline"
            >
              Kontrak Berlangganan Layanan SGC Network (DOCX)
            </a>.
          </p>
        </div>

        {/* Right Column: Pembayaran & Download Form */}
        <div className="lg:col-span-5 space-y-8 bg-slate-50 border border-slate-100 p-8 rounded-3xl flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-800">
              Pembayaran Sewa Bulanan
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Pembayaran bulanan dapat ditransfer langsung melalui rekening
              resmi perusahaan berikut:
            </p>

            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 space-y-3 shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Bank Transfer
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-black text-slate-800">
                  Bank BRI
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  0107010045 - 39304
                </span>
              </div>
              <div className="border-t border-slate-150 pt-2.5">
                <p className="text-xs text-slate-500">Atas Nama Rekening:</p>
                <p className="text-sm font-bold text-slate-800 mt-0.5">
                  PT JARINGAN MULTIMEDIA CIREBON
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-200">
            <p className="text-xs text-slate-500">
              Unduh dokumen resmi di bawah ini untuk kelengkapan administrasi dan pendaftaran berlangganan.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="/doc/formulir-pendaftaran-jmcnet.pdf"
                download="Formulir_Berlangganan_JMCNET.pdf"
                className="w-full inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-brand-dark text-xs font-bold text-white hover:bg-brand-dark/95 active:scale-98 transition-all shadow-md shadow-brand-dark/10"
              >
                <svg
                  className="w-4.5 h-4.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span>Download Formulir Berlangganan (PDF)</span>
              </a>
              <a
                href="/KONTRAK BERLANGGANAN LAYANAN SGC NETWORK.docx"
                download="KONTRAK BERLANGGANAN LAYANAN SGC NETWORK.docx"
                className="w-full inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 active:scale-98 transition-all shadow-sm"
              >
                <svg
                  className="w-4.5 h-4.5 shrink-0 text-slate-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>Download Kontrak Berlangganan (DOCX)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
