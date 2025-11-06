import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem("cart_v1");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart_v1", JSON.stringify(cart));
    } catch {}
  }, [cart]);

  const addToCart = (product, qty = 1) => {
    if (!product || product.id === undefined) return;
    setCart((prev) => {
      const index = prev.findIndex((it) => it.id === product.id);
      if (index !== -1) {
        return prev.map((it, i) =>
          i === index ? { ...it, quantity: (it.quantity || 1) + qty } : it
        );
      }
      return [...prev, { ...product, quantity: qty }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((it) => it.id !== id));
  };

  const updateQuantity = (id, qty) => {
    setCart((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, quantity: Math.max(1, qty) } : it
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
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
