export interface ServiceCategory {
  id: number;
  name: string;
  slug: string;
  description?: string | null;
  _count?: {
    packages: number;
    voucherPlans: number;
    faqs: number;
  };
  createdAt?: string;
  updatedAt?: string;
}
