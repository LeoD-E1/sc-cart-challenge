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
  retrieveProdsInPack: (ids: number[]) => Product[];
  editQuantityProduct: (id: number, quantity: number) => void;
  editQuantityPack: (id: number, quantity: number) => void;
  fetchProducts: () => Promise<void>;
  fetchPacks: () => Promise<void>;
}
