import api from "@/lib/api";
import type { Report, ApiResponse } from "@/types";

export const reportService = {
  // ========== PUBLIK (Pelanggan) ==========

  // Buat laporan baru (pakai FormData karena ada upload foto opsional)
  create: async (formData: FormData) => {
    const res = await api.post<ApiResponse<Report>>("/reports", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  },

  // Cek status laporan by nomor laporan
  checkStatus: async (reportNumber: string) => {
    const res = await api.get<ApiResponse<Report>>(`/reports/check/${reportNumber}`);
    return res.data;
  },

  // ========== ADMIN ==========

  // Ambil semua laporan (bisa filter by status)
  getAll: async (status?: string) => {
    const params = status ? `?status=${status}` : "";
    const res = await api.get<ApiResponse<Report[]>>(`/reports${params}`);
    return res;
  },

  // Ambil detail laporan by ID
  getById: async (id: number) => {
    const res = await api.get<ApiResponse<Report>>(`/reports/${id}`);
    return res;
  },

  // Admin ubah status (pakai FormData karena ada upload foto opsional)
  updateStatus: async (id: number, formData: FormData) => {
    const res = await api.patch<ApiResponse<Report>>(`/reports/${id}/status`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  },

  // Admin hapus laporan
  delete: async (id: number) => {
    const res = await api.delete<ApiResponse<null>>(`/reports/${id}`);
    return res.data;
  },
};
