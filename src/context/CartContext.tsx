import { createContext, useState, useEffect } from "react";
import { CartContextType, Product, Pack } from "../types/cart";

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

const CartProvider = (props: any) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [packs, setPacks] = useState<Pack[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const calculateTotalPrice = () => {
    const totalArrayPrice = (arr: Product[]): number => {
      return arr.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };
    const totalPriceProducts = totalArrayPrice(products);
    const totalPricePacks = packs
      .map((pack) => totalArrayPrice(pack.products) * pack.quantity)
      .reduce((acc, prices) => acc + prices, 0);
    setTotalPrice(totalPriceProducts + totalPricePacks);
  };

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

  useEffect(() => {
    calculateTotalPrice();
  }, [products, packs]);

  return (
    <CartContext.Provider
      value={{
        products,
        packs,
        totalPrice,
        removePack,
        removeProduct,
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
