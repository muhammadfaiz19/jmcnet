import { ServiceCategory } from "./serviceCategory";

export interface Package {
  id: number;
  categoryId?: number | null;
  category?: ServiceCategory | null;
  name: string;
  tierLabel: string;
  tierNumber: string;
  description: string;
  speedMbps: number;
  priceMonthly: number;
  activationFee: number;
  features: PackageFeature[] | string;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PackageFeature {
  text: string;
  included: boolean;
}
