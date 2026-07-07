import api from "@/lib/api";
import type { SiteSettings, ApiResponse } from "@/types";

export const settingsService = {
  get: async () => {
    const res = await api.get<ApiResponse<SiteSettings>>("/settings");
    return res;
  },
  update: async (data: FormData) => {
    const res = await api.put<ApiResponse<SiteSettings>>("/settings", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  },
};
