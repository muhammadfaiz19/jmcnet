import { ServiceCategory } from "./serviceCategory";

export interface VoucherPlan {
  id: number;
  categoryId?: number | null;
  category?: ServiceCategory | null;
  name: string;
  type: "retail" | "reseller";
  tagLabel: string;
  price: number;
  priceUnit: string;
  duration: string;
  minPurchase: string | null;
  features: string[] | string;
  createdAt: string;
  updatedAt: string;
}
