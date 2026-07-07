"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authService } from "@/services/auth.service";
import { settingsService } from "@/services/settings.service";
import { SignIn, Envelope, Lock, ShieldCheck, WarningCircle, Eye, EyeSlash } from "@phosphor-icons/react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [logoUrl, setLogoUrl] = useState("/logo-removebg.png");
  const [brandName, setBrandName] = useState("JMCNET");

  useEffect(() => {
    settingsService
      .get()
      .then((res) => {
        if (res.data?.success && res.data.data) {
          const data = res.data.data;
          if (data.logo) setLogoUrl(data.logo);
          if (data.brandName) setBrandName(data.brandName);
        }
      })
      .catch((err) => {
        console.error("Gagal mengambil logo settings di halaman login:", err);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await authService.login({ email, password });
      if (response.success) {
        router.push("/admin/dashboard");
        router.refresh();
      } else {
        setError(
          response.message || "Login gagal. Silakan periksa kredensial Anda.",
        );
      }
    } catch (err: any) {
      console.error("Login error:", err);
      setError(
        err.response?.data?.message ||
          "Kombinasi email dan password salah. Silakan coba lagi.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-12 bg-slate-50 selection:bg-sky-500/20">
      {/* Kolom Kiri: Ilustrasi / Branding Portal */}
      <div className="hidden md:flex md:col-span-5 lg:col-span-4 bg-slate-900 text-white p-12 flex-col justify-between relative overflow-hidden border-r border-white/10">
        {/* Dekorasi grid latar belakang */}
        <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay bg-repeat bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZHRoPSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4xIi8+Cjwvc3ZnPg==')]"></div>

        {/* Header Portal Logo */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-100">
              Backstage Portal
            </span>
          </div>
        </div>

        {/* Slogan Tengah */}
        <div className="relative z-10 my-auto py-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            Menghubungkan <span className="text-sky-400 italic font-light">Cirebon</span> Tanpa Batas.
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
            Masuk ke dasbor admin untuk mengelola paket layanan, voucher hotspot, ulasan testimoni, FAQ, dan basis pengetahuan Chatbot AI secara terpusat.
          </p>
        </div>

        {/* Hak Cipta & Info Keamanan */}
        <div className="relative z-10 text-xs text-slate-400 flex items-center gap-2">
          <ShieldCheck size={16} className="text-sky-400" />
          <span>
            © {new Date().getFullYear()} JMCNET. Secured backend environment.
          </span>
        </div>
      </div>

      {/* Kolom Kanan: Container Form Login */}
      <div className="col-span-1 md:col-span-7 lg:col-span-8 flex items-center justify-center p-6 sm:p-12 md:p-16">
        <div className="w-full max-w-md">
          {/* Header Mobile */}
          <div className="md:hidden text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/5 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-sky-500"></span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-700">
                Backstage Portal
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900">
              JMCNET Portal
            </h1>
          </div>

          {/* Kartu Login */}
          <div className="bg-white/80 backdrop-blur-md p-8 sm:p-10 rounded-[2rem] border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="mb-8">
              {/* Logo Brand */}
              <div className="mb-6 flex items-center gap-3.5">
                <div className="w-14 h-14 flex items-center justify-center overflow-hidden">
                  <img
                    src={logoUrl}
                    alt="Logo Perusahaan"
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/logo-removebg.png";
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight leading-tight">
                    {brandName}
                  </h3>
                  <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest block">
                    Admin Control Panel
                  </span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mb-2">
                Selamat Datang Admin
              </h2>
              <p className="text-slate-600 text-sm">
                Silakan masuk menggunakan akun terdaftar untuk melanjutkan ke kontrol panel.
              </p>
            </div>

            {/* Notifikasi Error */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-2xl flex items-start gap-3 animate-fade-in">
                <WarningCircle size={20} className="mt-0.5 flex-shrink-0 text-red-500" />
                <span className="text-xs sm:text-sm font-medium">{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Input Email */}
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-slate-700 mb-2">
                  Alamat Email
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                    <Envelope size={20} />
                  </span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@jmcnet.id"
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-2xl focus:border-sky-500 focus:bg-white focus:outline-none transition-all duration-300 text-slate-900 text-sm placeholder-slate-400/70"
                  />
                </div>
              </div>

              {/* Input Password */}
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-slate-700 mb-2">
                  Kata Sandi
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                    <Lock size={20} />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-12 pr-12 py-3.5 bg-slate-50/50 border border-slate-200 rounded-2xl focus:border-sky-500 focus:bg-white focus:outline-none transition-all duration-300 text-slate-900 text-sm placeholder-slate-400/70"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                  >
                    {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Tombol Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-sky-500 hover:bg-sky-600 disabled:bg-sky-500/60 text-white font-bold rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>Masuk ke Dasbor</span>
                    <SignIn size={18} weight="bold" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
