import { Product } from './product';

export interface Purchase {
  id: string;
  items: Product[];
  createdAt: Date;
  updatedAt: Date;
  sharedWith: string[];
}
