import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paket Internet WiFi Unlimited & Harga Bulanan",
  description:
    "Daftar lengkap harga dan paket berlangganan internet WiFi fiber optic JMCNET Cirebon. Pilihan paket SGC Hemat (5 Mbps), SGC Lite (16 Mbps), SGC Socially (26 Mbps), dan SGC Family (56 Mbps) mulai Rp 130.000/bln tanpa batas kuota.",
  alternates: {
    canonical: "https://jmcnet.id/paket",
  },
  openGraph: {
    title: "Paket Internet WiFi Unlimited & Harga Bulanan | JMCNET",
    description:
      "Daftar harga paket internet WiFi fiber optic JMCNET Cirebon. Pilihan paket SGC Hemat, SGC Lite, SGC Socially, dan SGC Family mulai Rp 130.000/bln tanpa batas kuota.",
    url: "https://jmcnet.id/paket",
  },
};

export default function PaketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
