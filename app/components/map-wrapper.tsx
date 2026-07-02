"use client";

import React from "react";

export function MapWrapper() {
  return (
    <div className="w-full h-full min-h-[320px] rounded-2xl overflow-hidden relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2412885946565!2d108.38501927499381!3d-6.616916893377223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6edd64a37edc41%3A0x9dcc0fdc20b10ee8!2sJMCNET%20Jaringan%20Multimedia%20Cirebon%20(SGC%20NETWORK)!5e0!3m2!1sen!2sid!4v1782890890216!5m2!1sen!2sid"
        className="absolute inset-0 w-full h-full border-0"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="Kantor Pusat JMCNET (SGC NETWORK)"
      />
    </div>
  );
}
