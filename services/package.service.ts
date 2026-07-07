import api from "@/lib/api";
import type { Package, ApiResponse } from "@/types";

export const packageService = {
  getAll: async () => {
    const res = await api.get<ApiResponse<Package[]>>("/packages");
    return res;
  },
  getById: async (id: number) => {
    const res = await api.get<ApiResponse<Package>>(`/packages/${id}`);
    return res;
  },
  create: async (data: Partial<Package>) => {
    const res = await api.post<ApiResponse<Package>>("/packages", data);
    return res.data;
  },
  update: async (id: number, data: Partial<Package>) => {
    const res = await api.put<ApiResponse<Package>>(`/packages/${id}`, data);
    return res.data;
  },
  delete: async (id: number) => {
    const res = await api.delete<ApiResponse<null>>(`/packages/${id}`);
    return res.data;
  },
};
