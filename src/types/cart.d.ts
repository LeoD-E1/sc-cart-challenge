export interface Product {
  id: number;
  name: string;
  price: number;
  img_url: string;
  category: string[];
  quantity: number;
}

export interface Pack {
  id: number;
  name: string;
  price: number;
  product_ids: number[];
  quantity: number;
}

export interface Cart {
  elements: (Product & Pack)[];
}

export interface CartContextType {
  products: Product[];
  packs: Pack[];
  removeProduct: (product: Product) => void;
  removePack: (pack: Pack) => void;
}
