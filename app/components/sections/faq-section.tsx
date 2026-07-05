"use client";

import React from "react";
import { FAQAccordion } from "../faq-accordion";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="py-20 bg-white relative"
    >
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Cari tahu jawaban dari berbagai pertanyaan umum seputar layanan
            internet fiber optic kami.
          </p>
        </div>

        <FAQAccordion />
      </div>
    </section>
  );
}
