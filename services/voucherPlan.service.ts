import api from "@/lib/api";
import type { VoucherPlan, ApiResponse } from "@/types";

export const voucherPlanService = {
  getAll: async () => {
    const res = await api.get<ApiResponse<VoucherPlan[]>>("/voucher-plans");
    return res;
  },
  getById: async (id: number) => {
    const res = await api.get<ApiResponse<VoucherPlan>>(`/voucher-plans/${id}`);
    return res;
  },
  create: async (data: Partial<VoucherPlan>) => {
    const res = await api.post<ApiResponse<VoucherPlan>>("/voucher-plans", data);
    return res.data;
  },
  update: async (id: number, data: Partial<VoucherPlan>) => {
    const res = await api.put<ApiResponse<VoucherPlan>>(`/voucher-plans/${id}`, data);
    return res.data;
  },
  delete: async (id: number) => {
    const res = await api.delete<ApiResponse<null>>(`/voucher-plans/${id}`);
    return res.data;
  },
};
