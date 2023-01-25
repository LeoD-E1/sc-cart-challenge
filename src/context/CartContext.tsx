import React, { createContext, useState } from "react";
import { CartContextType, Product, Pack } from "../types/cart";

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
      category: ["rosa", "xl", "algodon"],
    },
  ]);

  const [packs, setPacks] = useState<Pack[]>([
    {
      id: 0,
      name: "My Christmas Package",
      price: 120,
      products: [
        {
          id: 0,
          name: "T-shirt",
          price: 13,
          img_url:
            "https://images.pexels.com/photos/13111289/pexels-photo-13111289.jpeg?auto=compress&cs=tinysrgb&w=1600",
          category: ["rosa", "xl", "algodon"],
        },
      ],
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
