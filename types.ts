export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  type: 'SIM' | 'ESIM' | 'PHONE' | 'PLAN';
  image?: string;
  brand?: string;
  specs?: string[];
}

export interface Plan extends Product {
  validity: string;
  data: string;
  features: string[];
  isPopular?: boolean;
}

export interface Phone extends Product {
  model: string;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
}

export interface CartItem {
  product: Product | Plan | Phone;
  quantity: number;
}