import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panduan Berlangganan & Download Formulir PDF",
  description:
    "Simak panduan mudah pasang WiFi baru JMCNET di Cirebon, syarat & ketentuan resmi prabayar, serta unduh Formulir Pendaftaran Berlangganan (PDF) secara langsung.",
  alternates: {
    canonical: "https://jmcnet.id/panduan-berlangganan",
  },
  openGraph: {
    title: "Panduan Berlangganan & Download Formulir PDF | JMCNET",
    description:
      "Panduan pasang WiFi baru JMCNET di Cirebon, syarat & ketentuan resmi prabayar, serta unduh Formulir Pendaftaran Berlangganan PDF.",
    url: "https://jmcnet.id/panduan-berlangganan",
  },
};

export default function PanduanBerlanggananLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
