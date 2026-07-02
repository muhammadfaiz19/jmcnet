import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami - Profil PT Jaringan Multimedia Cirebon",
  description:
    "Mengenal profil PT Jaringan Multimedia Cirebon (JMCNET), visi & misi perintis provider internet fiber optic lokal berkualitas tinggi dengan komitmen melayani masyarakat Cirebon dan sekitarnya.",
  alternates: {
    canonical: "https://jmcnet.id/tentang",
  },
  openGraph: {
    title: "Tentang Kami - Profil PT Jaringan Multimedia Cirebon | JMCNET",
    description:
      "Mengenal profil PT Jaringan Multimedia Cirebon (JMCNET), perintis provider internet fiber optic lokal berkualitas di Cirebon.",
    url: "https://jmcnet.id/tentang",
  },
};

export default function TentangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
