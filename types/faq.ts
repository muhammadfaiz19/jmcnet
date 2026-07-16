import { ServiceCategory } from "./serviceCategory";

export interface Faq {
  id: number;
  categoryId?: number | null;
  category?: ServiceCategory | null;
  question: string;
  answer: string;
  createdAt: string;
  updatedAt: string;
}
