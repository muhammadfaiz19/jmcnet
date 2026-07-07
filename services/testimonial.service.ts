import api from "@/lib/api";
import type { Testimonial, ApiResponse } from "@/types";

export const testimonialService = {
  getAll: async () => {
    const res = await api.get<ApiResponse<Testimonial[]>>("/testimonials");
    return res;
  },
  getById: async (id: number) => {
    const res = await api.get<ApiResponse<Testimonial>>(`/testimonials/${id}`);
    return res;
  },
  create: async (data: Partial<Testimonial>) => {
    const res = await api.post<ApiResponse<Testimonial>>("/testimonials", data);
    return res.data;
  },
  update: async (id: number, data: Partial<Testimonial>) => {
    const res = await api.put<ApiResponse<Testimonial>>(`/testimonials/${id}`, data);
    return res.data;
  },
  delete: async (id: number) => {
    const res = await api.delete<ApiResponse<null>>(`/testimonials/${id}`);
    return res.data;
  },
};
