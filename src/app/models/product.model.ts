export type Category = 'Electronics' | 'Wearables' | 'Photography' | 'Furniture' | 'Accessories' | 'Gaming';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: Category;
  rating: number;
  imageUrl: string;
  inStock: boolean;
}
