export type ReportCategory =
  | "GANGGUAN_INTERNET"
  | "INTERNET_LAMBAT"
  | "GANGGUAN_ROUTER"
  | "TAGIHAN"
  | "LAINNYA";

export type ReportStatus =
  | "MENUNGGU"
  | "DIPROSES"
  | "SELESAI"
  | "DITOLAK";

export interface ReportStatusLog {
  id: number;
  reportId: number;
  status: ReportStatus;
  message: string | null;
  photoUrl: string | null;
  createdBy: string | null;
  createdAt: string;
}

export interface Report {
  id: number;
  reportNumber: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  customerId: string | null;
  category: ReportCategory;
  description: string;
  photoUrl: string | null;
  status: ReportStatus;
  statusLogs: ReportStatusLog[];
  createdAt: string;
  updatedAt: string;
}

// Label untuk ditampilkan di UI
export const REPORT_CATEGORY_LABELS: Record<ReportCategory, string> = {
  GANGGUAN_INTERNET: "Internet Mati / Putus",
  INTERNET_LAMBAT: "Internet Lambat",
  GANGGUAN_ROUTER: "Router Bermasalah",
  TAGIHAN: "Masalah Tagihan",
  LAINNYA: "Lainnya",
};

export const REPORT_STATUS_LABELS: Record<ReportStatus, string> = {
  MENUNGGU: "Menunggu",
  DIPROSES: "Diproses",
  SELESAI: "Selesai",
  DITOLAK: "Ditolak",
};

// Warna badge status (Tailwind classes)
export const REPORT_STATUS_COLORS: Record<ReportStatus, { bg: string; text: string; dot: string }> = {
  MENUNGGU: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
  DIPROSES: { bg: "bg-sky-50", text: "text-sky-700", dot: "bg-sky-500" },
  SELESAI: { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
  DITOLAK: { bg: "bg-red-50", text: "text-red-700", dot: "bg-red-500" },
};

// ============================================================
// Template rekomendasi pesan admin saat mengubah status laporan
// Dikelompokkan berdasarkan status target DAN kategori kendala
// ============================================================

export interface MessageTemplate {
  label: string;   // Judul singkat (ditampilkan di chip/tombol)
  message: string; // Isi pesan lengkap
}

// Template UMUM berlaku untuk semua kategori
const GENERAL_TEMPLATES: Record<ReportStatus, MessageTemplate[]> = {
  MENUNGGU: [
    {
      label: "Antrian diterima",
      message: "Laporan Anda telah kami terima dan masuk dalam antrian penanganan. Tim teknis kami akan segera menindaklanjuti. Terima kasih atas kesabarannya.",
    },
  ],
  DIPROSES: [
    {
      label: "Teknisi ditugaskan",
      message: "Laporan Anda sedang ditangani oleh tim teknisi kami. Mohon menunggu, kami akan memberikan update perkembangan secepat mungkin.",
    },
    {
      label: "Teknisi menuju lokasi",
      message: "Teknisi kami sedang dalam perjalanan menuju lokasi Anda. Mohon pastikan ada orang dewasa di lokasi untuk menerima teknisi.",
    },
    {
      label: "Sedang investigasi",
      message: "Kami sedang melakukan investigasi lebih lanjut terhadap laporan Anda. Harap menunggu update dari tim teknis kami.",
    },
  ],
  SELESAI: [
    {
      label: "Masalah teratasi",
      message: "Kendala yang Anda laporkan telah berhasil diselesaikan. Silakan cek kembali layanan Anda. Jika masih ada masalah, jangan ragu untuk membuat laporan baru. Terima kasih!",
    },
    {
      label: "Perbaikan selesai",
      message: "Proses perbaikan telah selesai dilakukan oleh teknisi kami. Layanan Anda seharusnya sudah normal kembali. Mohon konfirmasi jika masih terdapat kendala.",
    },
  ],
  DITOLAK: [
    {
      label: "Data tidak lengkap",
      message: "Mohon maaf, laporan Anda tidak dapat kami proses karena data yang diberikan kurang lengkap. Silakan buat laporan baru dengan informasi yang lebih detail.",
    },
    {
      label: "Bukan area layanan",
      message: "Mohon maaf, alamat yang Anda laporkan berada di luar jangkauan area layanan kami. Silakan hubungi CS untuk informasi lebih lanjut.",
    },
    {
      label: "Laporan duplikat",
      message: "Laporan ini merupakan duplikat dari laporan sebelumnya yang sudah kami tangani. Silakan cek status laporan Anda yang sebelumnya.",
    },
  ],
};

// Template SPESIFIK per kategori kendala
const CATEGORY_TEMPLATES: Record<ReportCategory, Partial<Record<ReportStatus, MessageTemplate[]>>> = {
  GANGGUAN_INTERNET: {
    DIPROSES: [
      {
        label: "Cek jalur fiber",
        message: "Tim teknisi sedang melakukan pengecekan jalur fiber optik di area Anda. Kemungkinan terjadi gangguan pada kabel utama. Kami akan segera menginformasikan hasilnya.",
      },
      {
        label: "Perbaikan di ODP",
        message: "Kami mendeteksi adanya gangguan pada perangkat ODP (Optical Distribution Point) di area Anda. Teknisi sedang melakukan perbaikan. Estimasi waktu penanganan 1-3 jam.",
      },
      {
        label: "Restart perangkat pusat",
        message: "Kami sedang melakukan restart pada perangkat jaringan di wilayah Anda. Internet mungkin akan mati sesaat selama proses ini berlangsung (±15 menit).",
      },
    ],
    SELESAI: [
      {
        label: "Kabel fiber diperbaiki",
        message: "Gangguan telah berhasil diperbaiki. Penyebabnya adalah kabel fiber yang putus/terganggu di area Anda. Koneksi internet seharusnya sudah kembali normal.",
      },
      {
        label: "Perangkat OLT direset",
        message: "Perangkat jaringan OLT telah kami reset dan konfigurasi ulang. Internet Anda sudah kembali aktif. Silakan restart router Anda jika belum otomatis terhubung.",
      },
    ],
  },
  INTERNET_LAMBAT: {
    DIPROSES: [
      {
        label: "Monitoring bandwidth",
        message: "Tim kami sedang memonitor kualitas bandwidth di jalur koneksi Anda. Kami akan menganalisis penyebab perlambatan dan melakukan optimasi.",
      },
      {
        label: "Cek kapasitas jaringan",
        message: "Kami sedang mengecek kapasitas jaringan di area Anda. Kemungkinan terjadi overload pada jam-jam tertentu. Tim sedang melakukan penyeimbangan beban jaringan.",
      },
    ],
    SELESAI: [
      {
        label: "Bandwidth dioptimasi",
        message: "Kecepatan internet Anda telah kami optimasi. Penyebab perlambatan telah diidentifikasi dan diperbaiki. Silakan lakukan speed test untuk memastikan kecepatan sudah sesuai paket Anda.",
      },
      {
        label: "Perlu upgrade router",
        message: "Setelah pengecekan, kami menemukan bahwa router Anda memerlukan update firmware atau penggantian. Silakan hubungi CS kami untuk jadwal penggantian/update perangkat.",
      },
    ],
  },
  GANGGUAN_ROUTER: {
    DIPROSES: [
      {
        label: "Konfigurasi ulang router",
        message: "Teknisi kami sedang melakukan konfigurasi ulang pada router Anda secara remote. Mohon jangan mencabut kabel daya router selama proses berlangsung (±10 menit).",
      },
      {
        label: "Jadwal kunjungan teknisi",
        message: "Router Anda memerlukan penanganan langsung. Teknisi kami akan mengunjungi lokasi Anda pada [tanggal]. Mohon pastikan ada orang di rumah untuk menerima teknisi.",
      },
    ],
    SELESAI: [
      {
        label: "Router dikonfigurasi ulang",
        message: "Router Anda telah berhasil dikonfigurasi ulang dan berfungsi normal kembali. WiFi dan koneksi internet sudah aktif. Jika lampu indikator masih berkedip merah, silakan restart router.",
      },
      {
        label: "Router diganti",
        message: "Router lama Anda telah diganti dengan perangkat baru. Nama WiFi dan password default tertera di stiker bawah router. Silakan ubah password sesuai keinginan Anda.",
      },
    ],
  },
  TAGIHAN: {
    DIPROSES: [
      {
        label: "Verifikasi pembayaran",
        message: "Tim billing kami sedang memverifikasi status pembayaran Anda. Proses ini membutuhkan waktu 1x24 jam kerja. Kami akan menginformasikan hasilnya segera.",
      },
      {
        label: "Cek riwayat tagihan",
        message: "Kami sedang mengecek riwayat tagihan dan pembayaran Anda. Mohon siapkan bukti transfer/pembayaran terakhir jika diperlukan untuk verifikasi.",
      },
    ],
    SELESAI: [
      {
        label: "Tagihan sudah dikoreksi",
        message: "Tagihan Anda telah kami koreksi sesuai dengan paket berlangganan yang aktif. Silakan cek kembali status tagihan Anda. Terima kasih atas laporannya.",
      },
      {
        label: "Pembayaran dikonfirmasi",
        message: "Pembayaran Anda telah kami konfirmasi dan tercatat dalam sistem. Status layanan sudah aktif kembali. Terima kasih atas kesabarannya.",
      },
    ],
    DITOLAK: [
      {
        label: "Tagihan sudah benar",
        message: "Setelah kami periksa, nominal tagihan yang tertera sudah sesuai dengan paket dan pemakaian Anda. Jika ada pertanyaan lebih lanjut, silakan hubungi CS kami di jam kerja.",
      },
    ],
  },
  LAINNYA: {
    DIPROSES: [
      {
        label: "Sedang ditindaklanjuti",
        message: "Laporan Anda sedang kami tindaklanjuti oleh tim terkait. Kami akan memberikan update perkembangan sesegera mungkin.",
      },
    ],
    SELESAI: [
      {
        label: "Kendala telah ditangani",
        message: "Kendala yang Anda laporkan telah selesai ditangani oleh tim kami. Terima kasih atas laporannya. Jangan ragu untuk menghubungi kami kembali jika diperlukan.",
      },
    ],
  },
};

/**
 * Mengambil daftar template pesan yang relevan berdasarkan status target dan kategori laporan.
 * Menggabungkan template spesifik-kategori (ditampilkan duluan) dengan template umum.
 */
export function getMessageTemplates(status: ReportStatus, category: ReportCategory): MessageTemplate[] {
  const categorySpecific = CATEGORY_TEMPLATES[category]?.[status] || [];
  const general = GENERAL_TEMPLATES[status] || [];
  return [...categorySpecific, ...general];
}
