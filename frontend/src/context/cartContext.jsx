// src/context/CartContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  // inicializamos desde localStorage si existe, sino []
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem("cart_v1");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  // persistir cada vez que cart cambia
  useEffect(() => {
    try {
      localStorage.setItem("cart_v1", JSON.stringify(cart));
    } catch {}
  }, [cart]);

  // addToCart usando actualización funcional y comparando por id
  const addToCart = (product, qty = 1) => {
    if (!product || product.id === undefined) {
      console.warn("addToCart: producto inválido", product);
      return;
    }

    setCart((prev) => {
      const index = prev.findIndex((it) => it.id === product.id);
      if (index !== -1) {
        // existe: devolver nuevo array con la cantidad incrementada
        return prev.map((it, i) =>
          i === index ? { ...it, quantity: (it.quantity || 1) + qty } : it
        );
      } else {
        // no existe: agregar copia del producto con quantity
        const itemToAdd = { ...product, quantity: qty };
        return [...prev, itemToAdd];
      }
    });
    console.log(cart)
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((it) => it.id !== productId));
  };

  const updateQuantity = (productId, newQty) => {
    setCart((prev) =>
      prev.map((it) =>
        it.id === productId ? { ...it, quantity: Math.max(1, newQty) } : it
      )
    );
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, it) => sum + (it.price || 0) * (it.quantity || 0), 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
