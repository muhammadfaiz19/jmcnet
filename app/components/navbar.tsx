"use client";

import React, { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname?.startsWith(`${href}/`);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-md shadow-slate-900/5"
          : "bg-white/60 backdrop-blur-sm py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group transition-transform hover:scale-102 shrink-0"
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
        <nav className="hidden lg:flex items-center gap-1.5 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/60">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative px-4 py-2 text-sm transition-colors rounded-full ${
                  active
                    ? "font-bold text-brand-dark"
                    : "font-medium text-slate-600 hover:text-brand-dark"
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white rounded-full -z-10 shadow-sm border border-slate-200/80"
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                )}
                {active && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-light rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block shrink-0">
          <Link
            href="/kontak"
            className={`inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-semibold transition-all shadow-sm ${
              isLinkActive("/kontak")
                ? "bg-brand-dark text-white ring-2 ring-brand-light ring-offset-2"
                : "bg-brand-dark text-white hover:bg-brand-dark/90 active:scale-98 shadow-brand-dark/10"
            }`}
          >
            Hubungi Kami
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-brand-dark hover:bg-slate-100 focus:outline-none transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-slate-200/80 shadow-xl px-6 py-6 flex flex-col gap-2 animate-in fade-in slide-in-from-top-3 duration-200">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between text-base px-4 py-3 rounded-xl transition-all ${
                  active
                    ? "font-bold text-brand-dark bg-brand-light/10 border-l-4 border-brand-dark shadow-xs"
                    : "font-semibold text-slate-700 hover:text-brand-dark hover:bg-slate-50"
                }`}
              >
                <span>{link.label}</span>
                {active && (
                  <span className="w-2 h-2 rounded-full bg-brand-light animate-pulse" />
                )}
              </Link>
            );
          })}
          <div className="pt-2 mt-2 border-t border-slate-100">
            <Link
              href="/kontak"
              onClick={() => setIsOpen(false)}
              className={`w-full inline-flex h-12 items-center justify-center rounded-xl text-base font-bold transition-all shadow-md ${
                isLinkActive("/kontak")
                  ? "bg-brand-dark text-white ring-2 ring-brand-light ring-offset-2"
                  : "bg-brand-dark text-white hover:bg-brand-dark/95 active:scale-98"
              }`}
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
