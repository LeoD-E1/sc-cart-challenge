import React, { createContext, useState } from "react";
import { CartContextType, Product, Pack } from "../types/cart";

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

const CartProvider = (props: any) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [packs, setPacks] = useState<Pack[]>([]);

  const fetchProducts = async () => {
    try {
      const resp = await fetch("products.json");
      const data = await resp.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPacks = async () => {
    try {
      const resp = await fetch("packs.json");
      const data = await resp.json();
      setPacks(data);
    } catch (error) {
      console.error(error);
    }
  };

  const removeProduct = (product: Product): void => {
    setProducts(products.filter((p) => p.id !== product.id));
  };

  const removePack = (pack: Pack): void => {
    setPacks(packs.filter((p) => p.id !== pack.id));
  };

  const retrieveProdsInPack = (ids: number[]) => {
    const retrieved = products.filter((p) => {
      return ids.includes(p.id);
    });
    return retrieved;
  };

  const editQuantityProduct = (productId: number, quantity: number): void => {
    setProducts(
      products.map((p) => {
        if (p.id === productId) {
          return {
            ...p,
            quantity,
          };
        }
        return p;
      })
    );
  };
  const editQuantityPack = (packId: number, quantity: number): void => {
    setPacks(
      packs.map((p) => {
        if (p.id === packId) {
          return {
            ...p,
            quantity,
          };
        }
        return p;
      })
    );
  };

  return (
    <CartContext.Provider
      value={{
        products,
        packs,
        removePack,
        removeProduct,
        retrieveProdsInPack,
        editQuantityProduct,
        editQuantityPack,
        fetchProducts,
        fetchPacks,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
