"use client";

import React, { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/tentang" },
    { label: "Keunggulan", href: "/keunggulan" },
    { label: "Paket Internet", href: "/paket" },
    { label: "Panduan & Dokumen", href: "/panduan-berlangganan" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group transition-transform hover:scale-102"
        >
          <Image
            src="/logo-removebg.png"
            alt="PT Jaringan Multimedia Cirebon Logo"
            width={120}
            height={36}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-dark transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/kontak"
            className="inline-flex h-10 items-center justify-center rounded-full bg-brand-dark px-5 text-sm font-semibold text-white transition-all hover:bg-brand-dark/90 active:scale-98 shadow-sm shadow-brand-dark/10"
          >
            Hubungi Kami
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-brand-dark focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-lg px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5 duration-250">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-slate-700 hover:text-brand-dark py-2 border-b border-slate-50 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontak"
            onClick={() => setIsOpen(false)}
            className="mt-2 inline-flex h-11 items-center justify-center rounded-xl bg-brand-dark text-base font-bold text-white transition-all hover:bg-brand-dark/95 active:scale-98"
          >
            Hubungi Kami
          </Link>
        </div>
      )}
    </header>
  );
}
