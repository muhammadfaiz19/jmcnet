import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Kami & Customer Service 24/7",
  description:
    "Hubungi Customer Service resmi PT Jaringan Multimedia Cirebon (JMCNET). Layanan bantuan teknis & pendaftaran cepat via WhatsApp (Cs 1: 0851-7999-7972 / Cs 2: 0851-7999-7975) atau kunjungi kantor kami di Arjawinangun, Cirebon.",
  alternates: {
    canonical: "https://jmcnet.id/kontak",
  },
  openGraph: {
    title: "Hubungi Kami & Customer Service 24/7 | JMCNET",
    description:
      "Hubungi Customer Service resmi JMCNET Cirebon. Layanan bantuan teknis & pendaftaran cepat via WhatsApp atau kunjungi kantor kami di Arjawinangun.",
    url: "https://jmcnet.id/kontak",
  },
};

export default function KontakLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
