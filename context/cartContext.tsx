import getProducts from "@/pages/api/apiUtils";
import { createContext, useEffect, useState } from "react";
import { Product } from "@/lib/utils/types/Product";

export const CartContext = createContext<{
  products: { name: string; id: string; price: number; quantity: number }[];
  getProductQuantity: (productId: string) => number;
  addProductToCart: (
    productId: string,
    productName: string,
    productPrice: number
  ) => void;
  removeOneFromCart: (productId: string) => void;
  deleteFromCart: (productId: string) => void;
  getTotalCost: () => number;
}>({
  products: [],
  getProductQuantity: () => 0,
  addProductToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => 0,
});

export function CartProvider({ children }: any) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  const [cartProducts, setCartProducts] = useState<
    { name: string; id: string; price: number; quantity: number }[]
  >([]);

  function getProductQuantity(productId: string) {
    const quantity = cartProducts.find(
      (product) => product.id === productId
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addProductToCart(
    productId: string,
    productName: string,
    productPrice: number
  ) {
    const quantity = getProductQuantity(productId);

    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        { name: productName, id: productId, price: productPrice, quantity: 1 },
      ]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }

  function removeOneFromCart(productId: string) {
    const quantity = getProductQuantity(productId);

    if (quantity === 1) {
      deleteFromCart(productId);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  function deleteFromCart(productId: string) {
    setCartProducts(cartProducts.filter((product) => product.id !== productId));
  }

  function getTotalCost() {
    let totalCost = 0;

    cartProducts.map((cartItem) => {
      let productData = products.find((product) => product.id === cartItem.id);

      if (productData !== undefined) {
        totalCost += productData.price * cartItem.quantity;
      } else {
        return totalCost;
      }
    });
    return totalCost;
  }

  const contextValue = {
    products: cartProducts,
    getProductQuantity,
    addProductToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
// Provider gives your React app access to all the things in your context
