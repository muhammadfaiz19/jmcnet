import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laporan Kendala - PT Jaringan Multimedia Cirebon",
  description:
    "Laporkan kendala internet atau gangguan layanan JMCNET Cirebon. Dapatkan nomor laporan dan pantau status penanganan secara real-time.",
};

export default function LaporanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
