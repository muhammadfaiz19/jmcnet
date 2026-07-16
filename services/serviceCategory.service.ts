import api from "@/lib/api";
import type { ServiceCategory, ApiResponse } from "@/types";

export const serviceCategoryService = {
  getAll: async () => {
    const res = await api.get<ApiResponse<ServiceCategory[]>>("/service-categories");
    return res;
  },
  getById: async (id: number) => {
    const res = await api.get<ApiResponse<ServiceCategory>>(`/service-categories/${id}`);
    return res;
  },
  create: async (data: Partial<ServiceCategory>) => {
    const res = await api.post<ApiResponse<ServiceCategory>>("/service-categories", data);
    return res.data;
  },
  update: async (id: number, data: Partial<ServiceCategory>) => {
    const res = await api.put<ApiResponse<ServiceCategory>>(`/service-categories/${id}`, data);
    return res.data;
  },
  delete: async (id: number) => {
    const res = await api.delete<ApiResponse<null>>(`/service-categories/${id}`);
    return res.data;
  },
};
