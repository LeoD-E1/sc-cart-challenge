export interface Product {
  id: number;
  name: string;
  price: number;
  img_url: string;
  category: string[];
}

export interface Pack {
  id: number;
  name: string;
  price: number;
  products: Product[];
}

export interface Cart {
  elements: Product[] | Pack[] | (Pack[] & Product[]);
}

export interface CartContextType {
  products: Product[];
  packs: Pack[];
  removeProduct: (product: Product) => void;
  removePack: (pack: Pack) => void;
}
