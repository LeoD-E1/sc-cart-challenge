import React, { createContext, useState } from "react";
import { CartContextType, Product, Pack, Cart } from "../types/cart";

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

const CartProvider = (props: any) => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      quantity: 1,
      name: "Camera ESX-342",
      price: 130,
      img_url:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: ["black", "professional", "titanium"],
    },
    {
      id: 2,
      quantity: 1,
      name: "Camera ESX-342 Lens",
      price: 150,
      img_url:
        "https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: ["black", "titanium"],
    },
    {
      id: 3,
      quantity: 3,
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
      quantity: 1,
      name: "My Christmas Pack",
      product_ids: [2, 3, 1],
    },
  ]);

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
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
