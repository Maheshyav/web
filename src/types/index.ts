export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  subcategory?: string;
  image?: string;
  media?: ProductMedia[];
  inStock?: boolean;
  createdAt: string;
  updatedAt: string;
  sizes?: string[];
}

export interface ProductMedia {
  url: string;
  type: 'image' | 'video';
}

export interface CartItem extends Product {
  quantity: number;
  size?: string;
}

export interface ToastProps {
  show: boolean;
  message: string;
  onClose: () => void;
  duration?: number;
}