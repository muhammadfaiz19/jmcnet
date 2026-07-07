import api from "@/lib/api";
import type { Faq, ApiResponse } from "@/types";

export const faqService = {
  getAll: async () => {
    const res = await api.get<ApiResponse<Faq[]>>("/faqs");
    return res;
  },
  getById: async (id: number) => {
    const res = await api.get<ApiResponse<Faq>>(`/faqs/${id}`);
    return res;
  },
  create: async (data: Partial<Faq>) => {
    const res = await api.post<ApiResponse<Faq>>("/faqs", data);
    return res.data;
  },
  update: async (id: number, data: Partial<Faq>) => {
    const res = await api.put<ApiResponse<Faq>>(`/faqs/${id}`, data);
    return res.data;
  },
  delete: async (id: number) => {
    const res = await api.delete<ApiResponse<null>>(`/faqs/${id}`);
    return res.data;
  },
};
