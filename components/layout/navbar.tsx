"use client";

import React, { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import type { SiteSettings } from "@/types";

export function Navbar({ settings }: { settings: SiteSettings | null }) {
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

  // Sembunyikan navbar di halaman admin
  if (pathname && pathname.startsWith("/admin")) return null;

  const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/tentang" },
    { label: "Keunggulan", href: "/keunggulan" },
    { label: "Paket Internet", href: "/paket" },
    { label: "Panduan", href: "/panduan-berlangganan" },
    { label: "Laporan Kendala", href: "/laporan" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname?.startsWith(`${href}/`);
  };

  const logoUrl = settings?.logo || "/logo-removebg.png";

  return (
    <div className="sticky top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all duration-300">
      <header className="max-w-7xl mx-auto py-3.5 px-4 sm:px-8">
        <div className="h-10 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group transition-transform hover:scale-105 shrink-0 pl-2"
          >
            <Image
              src={logoUrl}
              alt="PT Jaringan Multimedia Cirebon Logo"
              width={110}
              height={32}
              className="h-8 w-auto object-contain"
              style={{ width: "auto" }}
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm transition-colors rounded-full ${
                    active
                      ? "font-bold text-brand-dark"
                      : "font-medium text-slate-600 hover:text-brand-dark hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-brand-light/10 rounded-full -z-10"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block shrink-0 pr-1">
            <Link
              href="/kontak"
              className={`inline-flex h-9 items-center justify-center rounded-full px-5 text-sm font-bold transition-all ${
                isLinkActive("/kontak")
                  ? "bg-brand-dark text-white ring-2 ring-brand-light ring-offset-2"
                  : "bg-brand-dark text-white hover:bg-brand-dark/90 active:scale-95 shadow-md shadow-brand-dark/20"
              }`}
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 mr-1 rounded-full text-slate-700 hover:text-brand-dark hover:bg-slate-100 focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-[4.5rem] left-4 right-4 bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-2xl shadow-xl px-4 py-4 flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between text-sm px-4 py-3 rounded-xl transition-all ${
                  active
                    ? "font-bold text-brand-dark bg-brand-light/10"
                    : "font-semibold text-slate-700 hover:text-brand-dark hover:bg-slate-50"
                }`}
              >
                <span>{link.label}</span>
                {active && (
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-light animate-pulse" />
                )}
              </Link>
            );
          })}
          <div className="pt-2 mt-1 border-t border-slate-100">
            <Link
              href="/kontak"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex h-11 items-center justify-center rounded-xl bg-brand-dark text-white text-sm font-bold transition-all shadow-md shadow-brand-dark/20 hover:bg-brand-dark/95 active:scale-98"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
