import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Keunggulan & Teknologi Fiber Optic Murni",
  description:
    "Pelajari keunggulan teknologi backbone 100% fiber optic dari PT Jaringan Multimedia Cirebon (JMCNET). Koneksi stabil tanpa FUP, latency rendah, serta dukungan teknisi lokal profesional 24/7.",
  alternates: {
    canonical: "https://jmcnet.id/keunggulan",
  },
  openGraph: {
    title: "Keunggulan & Teknologi Fiber Optic Murni | JMCNET",
    description:
      "Keunggulan teknologi backbone 100% fiber optic JMCNET. Koneksi stabil tanpa FUP, latency rendah, dan teknisi profesional 24/7.",
    url: "https://jmcnet.id/keunggulan",
  },
};

export default function KeunggulanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
