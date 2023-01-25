import React, { createContext, useState } from "react";
import { CartContextType, Product, Pack, Cart } from "../types/cart";

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

const CartProvider = (props: any) => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 0,
      name: "T-shirt",
      price: 13,
      img_url:
        "https://images.pexels.com/photos/13111289/pexels-photo-13111289.jpeg?auto=compress&cs=tinysrgb&w=1600",
      category: ["pink", "xl", "coton"],
    },
    {
      id: 1,
      name: "Camera ESX-342",
      price: 130,
      img_url:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: ["black", "professional", "titanium"],
    },
    {
      id: 2,
      name: "Camera ESX-342 Lens",
      price: 150,
      img_url:
        "https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: ["black", "titanium"],
    },
    {
      id: 3,
      name: "Titanium watch",
      price: 1300,
      img_url:
        "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg",
      category: ["gray", "titanium"],
    },
  ]);

  const [packs, setPacks] = useState<Pack[]>([
    {
      id: 0,
      name: "My Christmas Package",
      price: 120,
      product_ids: [0, 1, 2],
    },
  ]);

  const removeProduct = (product: Product): void => {};
  const removePack = (product: Pack): void => {};

  return (
    <CartContext.Provider
      value={{
        products,
        packs,
        removePack,
        removeProduct,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
