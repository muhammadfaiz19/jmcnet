"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { authService } from "@/services/auth.service";
import { settingsService } from "@/services/settings.service";
import {
  Sliders,
  Package,
  Ticket,
  Question,
  ChatCircleText,
  Robot,
  Gear,
  SignOut,
  List,
  X,
  User,
  ArrowSquareOut,
  Folders,
} from "@phosphor-icons/react";

// Struktur data untuk item navigasi sidebar
interface SidebarItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string; size?: number; weight?: "fill" | "regular" | "bold" }>;
}

const sidebarItems: SidebarItem[] = [
  { label: "Dashboard", href: "/admin/dashboard", icon: Sliders },
  { label: "Kategori Layanan", href: "/admin/dashboard/categories", icon: Folders },
  { label: "Paket Internet", href: "/admin/dashboard/packages", icon: Package },
  { label: "Voucher Hotspot", href: "/admin/dashboard/vouchers", icon: Ticket },
  { label: "FAQ", href: "/admin/dashboard/faqs", icon: Question },
  { label: "Testimonial", href: "/admin/dashboard/testimonials", icon: ChatCircleText },
  { label: "Chatbot AI", href: "/admin/dashboard/chatbot", icon: Robot },
  { label: "Pengaturan Situs", href: "/admin/dashboard/settings", icon: Gear },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [adminEmail, setAdminEmail] = useState<string>("");
  const [logo, setLogo] = useState<string>("/logo-removebg.png");

  // Cek apakah sedang berada di halaman login admin
  const isLoginPage = pathname === "/admin/login";

  // Ambil informasi admin & logo yang sedang login
  useEffect(() => {
    if (!isLoginPage) {
      authService
        .me()
        .then((res) => {
          if (res.success && res.data?.admin) {
            setAdminEmail(res.data.admin.email);
          }
        })
        .catch((err) => {
          console.error("Gagal mengambil profil admin:", err);
        });

      settingsService
        .get()
        .then((res) => {
          if (res.data?.success && res.data.data?.logo) {
            setLogo(res.data.data.logo);
          }
        })
        .catch((err) => {
          console.error("Gagal mengambil logo settings di admin layout:", err);
        });
    }
  }, [isLoginPage, pathname]);

  // Fungsi untuk logout
  const handleLogout = async () => {
    try {
      await authService.logout();
      router.push("/admin/login");
      router.refresh();
    } catch (err) {
      console.error("Logout gagal:", err);
    }
  };

  // Jika di halaman login, tampilkan tanpa sidebar/layout admin
  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 text-slate-800 relative">
      {/* Header Mobile */}
      <div className="md:hidden flex items-center justify-between p-4 bg-slate-900 text-white z-30 shadow-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center p-1 shrink-0">
            <Image
              src={logo}
              alt="JMCNET Logo"
              width={24}
              height={24}
              className="object-contain w-auto h-auto max-h-full"
            />
          </div>
          <Link href="/admin/dashboard" className="font-bold text-base text-slate-100">
            JMCNET Backstage
          </Link>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-slate-100 cursor-pointer"
        >
          {mobileOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Sidebar - Desktop & Mobile Drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 bg-slate-900 text-white p-6 flex flex-col justify-between border-r border-white/10 transition-transform duration-300 md:translate-x-0 md:static md:shrink-0 md:h-screen md:z-10 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8 grow">
          {/* Header Sidebar */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-1.5 shrink-0 shadow-sm border border-white/10">
                <Image
                  src={logo}
                  alt="JMCNET Admin Logo"
                  width={32}
                  height={32}
                  className="object-contain w-auto h-auto max-h-full"
                />
              </div>
              <div>
                <Link href="/admin/dashboard" className="font-bold text-base text-slate-100 block leading-tight">
                  JMCNET Admin
                </Link>
                <span className="text-[9px] tracking-widest uppercase text-sky-400 font-bold block mt-0.5">
                  Control Room
                </span>
              </div>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="md:hidden p-1.5 rounded-lg bg-white/10 text-white/70 hover:text-white cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Menu Navigasi */}
          <nav className="flex flex-col gap-1.5 grow overflow-y-auto pr-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === "/admin/dashboard"
                  ? pathname === "/admin/dashboard"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 group ${
                    isActive
                      ? "bg-sky-500 text-white shadow-md shadow-sky-500/20 font-semibold"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon
                    size={20}
                    className={`transition-transform duration-300 group-hover:scale-110 ${
                      isActive ? "text-white" : "text-sky-400"
                    }`}
                  />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Sidebar (Profil & Logout) */}
        <div className="pt-6 border-t border-white/10 flex flex-col gap-4 mt-auto">
          {adminEmail && (
            <div className="flex items-center gap-3 px-3 py-2 bg-white/5 rounded-2xl">
              <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-sm">
                <User size={16} className="text-sky-400" />
              </div>
              <div className="overflow-hidden">
                <span className="text-xs font-semibold block text-slate-200 truncate">
                  Admin Aktif
                </span>
                <span className="text-[10px] text-slate-400 truncate block">
                  {adminEmail}
                </span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/"
              target="_blank"
              className="px-3 py-2 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all text-xs rounded-xl flex items-center justify-center gap-1.5 border border-white/5 font-semibold"
            >
              <span>Situs</span>
              <ArrowSquareOut size={14} />
            </Link>

            <button
              onClick={handleLogout}
              className="px-3 py-2 bg-red-950/20 hover:bg-red-900/40 text-red-300 hover:text-red-200 transition-all text-xs rounded-xl flex items-center justify-center gap-1.5 border border-red-950/30 font-semibold cursor-pointer"
            >
              <span>Logout</span>
              <SignOut size={14} />
            </button>
          </div>
        </div>
      </aside>

      {/* Area Konten Utama */}
      <div className="grow flex flex-col min-w-0 md:h-screen md:overflow-y-auto">
        <main className="p-6 md:p-10 lg:p-12 relative z-10 flex flex-col gap-8 grow pb-24 md:pb-12">
          {children}
        </main>
      </div>

      {/* Overlay Drawer Mobile */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-30 md:hidden"
        ></div>
      )}
    </div>
  );
}
