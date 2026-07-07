"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { packageService } from "@/services/package.service";
import { voucherPlanService } from "@/services/voucherPlan.service";
import { faqService } from "@/services/faq.service";
import { testimonialService } from "@/services/testimonial.service";
import {
  Package,
  Ticket,
  Question,
  ChatCircleText,
  Plus,
  ArrowRight,
  Sparkle,
  Robot,
} from "@phosphor-icons/react";

interface QuickStat {
  label: string;
  value: number | string;
  icon: any;
  color: string;
  bgColor: string;
  href: string;
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<QuickStat[]>([
    {
      label: "Paket Internet",
      value: "...",
      icon: Package,
      color: "#0ea5e9", // Sky-500
      bgColor: "bg-sky-500/10",
      href: "/admin/dashboard/packages",
    },
    {
      label: "Voucher Hotspot",
      value: "...",
      icon: Ticket,
      color: "#f59e0b", // Amber-500
      bgColor: "bg-amber-500/10",
      href: "/admin/dashboard/vouchers",
    },
    {
      label: "FAQ Aktif",
      value: "...",
      icon: Question,
      color: "#10b981", // Emerald-500
      bgColor: "bg-emerald-500/10",
      href: "/admin/dashboard/faqs",
    },
    {
      label: "Ulasan Testimoni",
      value: "...",
      icon: ChatCircleText,
      color: "#8b5cf6", // Violet-500
      bgColor: "bg-violet-500/10",
      href: "/admin/dashboard/testimonials",
    },
  ]);

  const [recentPackages, setRecentPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [pkgRes, vouchRes, faqRes, testRes] = await Promise.all([
          packageService.getAll(),
          voucherPlanService.getAll(),
          faqService.getAll(),
          testimonialService.getAll(),
        ]);

        const pkgCount = pkgRes.data?.data?.length ?? 0;
        const vouchCount = vouchRes.data?.data?.length ?? 0;
        const faqCount = faqRes.data?.data?.length ?? 0;
        const testCount = testRes.data?.data?.length ?? 0;

        setStats([
          {
            label: "Paket Internet",
            value: pkgCount,
            icon: Package,
            color: "#0ea5e9",
            bgColor: "bg-sky-500/10",
            href: "/admin/dashboard/packages",
          },
          {
            label: "Voucher Hotspot",
            value: vouchCount,
            icon: Ticket,
            color: "#f59e0b",
            bgColor: "bg-amber-500/10",
            href: "/admin/dashboard/vouchers",
          },
          {
            label: "FAQ Aktif",
            value: faqCount,
            icon: Question,
            color: "#10b981",
            bgColor: "bg-emerald-500/10",
            href: "/admin/dashboard/faqs",
          },
          {
            label: "Ulasan Testimoni",
            value: testCount,
            icon: ChatCircleText,
            color: "#8b5cf6",
            bgColor: "bg-violet-500/10",
            href: "/admin/dashboard/testimonials",
          },
        ]);

        setRecentPackages(pkgRes.data?.data?.slice(0, 4) ?? []);
      } catch (err) {
        console.error("Gagal memuat data statistik dashboard:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="space-y-10 animate-fade-in">
      {/* Banner Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 bg-slate-900 text-white rounded-[2rem] border border-white/10 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500 rounded-full filter blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-500/20 text-sky-400 rounded-full text-xs font-semibold">
            <Sparkle size={14} weight="fill" />
            <span>Sistem Terintegrasi</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold">
            Ruang Kontrol <span className="text-sky-400 italic font-light">Backstage</span>
          </h1>
          <p className="text-slate-300 text-sm max-w-md">
            Kelola data paket internet fiber optic, paket voucher hotspot, daftar tanya jawab FAQ, testimoni, dan basis pengetahuan Chatbot AI resmi JMCNET.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 relative z-10">
          <Link
            href="/admin/dashboard/packages"
            className="px-5 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-2xl text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
          >
            <Plus size={16} weight="bold" />
            <span>Tambah Paket</span>
          </Link>
          <Link
            href="/"
            target="_blank"
            className="px-5 py-3 bg-white/10 hover:bg-white/15 text-slate-100 rounded-2xl text-sm font-bold transition-all duration-300 border border-white/10 flex items-center gap-2 cursor-pointer"
          >
            <span>Lihat Website</span>
            <ArrowRight size={16} weight="bold" />
          </Link>
        </div>
      </div>

      {/* Grid Statistik */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <Link
              key={i}
              href={stat.href}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01] flex items-center justify-between group"
            >
              <div className="space-y-1">
                <span className="text-slate-500 text-xs font-bold uppercase tracking-wider block">
                  {stat.label}
                </span>
                <span className="text-3xl font-black text-slate-900">
                  {stat.value}
                </span>
              </div>
              <div
                className={`w-12 h-12 rounded-2xl ${stat.bgColor} flex items-center justify-center transition-transform duration-300 group-hover:rotate-6`}
              >
                <Icon size={24} color={stat.color} weight="fill" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Pembagian Tata Letak Tengah */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Daftar Paket Terbaru (Col span 2) */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Daftar Paket Terbaru
              </h2>
              <p className="text-xs text-slate-500">
                Layanan paket internet bulanan aktif yang terdaftar di database.
              </p>
            </div>
            <Link
              href="/admin/dashboard/packages"
              className="text-sky-500 hover:text-sky-600 text-xs font-bold flex items-center gap-1 group"
            >
              <span>Kelola Semua</span>
              <ArrowRight size={14} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {loading ? (
            <div className="space-y-4 py-8">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="h-16 w-full bg-slate-100 rounded-2xl animate-pulse"
                ></div>
              ))}
            </div>
          ) : recentPackages.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
              <Package size={48} className="text-sky-500/30 mx-auto mb-3" />
              <p className="text-sm text-slate-500 font-medium">
                Belum ada paket internet terdaftar.
              </p>
              <Link
                href="/admin/dashboard/packages"
                className="inline-flex items-center gap-1.5 text-xs text-sky-500 font-bold mt-2 hover:underline"
              >
                Buat paket pertama Anda <Plus size={14} weight="bold" />
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {recentPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-150 shadow-inner hover:bg-slate-100/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-sky-500/10 flex items-center justify-center flex-shrink-0">
                      <Package size={22} className="text-sky-500" weight="fill" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-sm font-bold text-slate-900 truncate block">
                        {pkg.name}
                      </span>
                      <span className="text-[11px] font-bold text-sky-500 uppercase tracking-wider block">
                        {pkg.speedMbps} Mbps - {pkg.tierLabel}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-xs font-extrabold text-slate-700">
                      Rp {pkg.priceMonthly.toLocaleString("id-ID")}/bln
                    </span>
                    {pkg.isFeatured && (
                      <span className="hidden sm:inline-block px-2.5 py-1 bg-amber-500/10 text-amber-600 rounded-full text-[10px] font-extrabold uppercase tracking-wider">
                        Populer
                      </span>
                    )}
                    <Link
                      href={`/admin/dashboard/packages`}
                      className="p-2 bg-white hover:bg-sky-500 text-slate-500 hover:text-white rounded-xl transition-all shadow-sm border border-slate-200"
                    >
                      <ArrowRight size={14} weight="bold" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Widget Chatbot AI (Col span 1) */}
        <div className="space-y-6">
          <div className="bg-slate-900 text-white p-8 rounded-[2rem] border border-white/10 shadow-md flex flex-col justify-between h-full min-h-[300px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500 rounded-full filter blur-2xl opacity-10"></div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-widest uppercase text-sky-400 font-bold">
                  Asisten Digital
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              <h3 className="text-xl font-bold">
                Chatbot AI <span className="text-sky-400 italic font-light">Online</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                Sistem chatbot asisten virtual aktif melayani calon pelanggan secara otomatis. Chatbot memproses pertanyaan seputar paket internet, promo, area cover, hingga memandu pengisian formulir pendaftaran.
              </p>
            </div>

            <div className="pt-6 border-t border-white/5 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Model AI</span>
                <span className="font-semibold text-slate-200">
                  Llama-3 (Groq API)
                </span>
              </div>
              <Link
                href="/admin/dashboard/chatbot"
                className="w-full py-3 bg-white/10 hover:bg-sky-500 text-slate-100 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-white/5 cursor-pointer"
              >
                <span>Kelola Knowledge Base</span>
                <ArrowRight size={14} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
