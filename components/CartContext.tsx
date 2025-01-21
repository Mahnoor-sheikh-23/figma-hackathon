// context/CartContext.tsx
"use client";
import { createContext, useState, useEffect ,  useContext, ReactNode } from "react";

interface CartItem {
  _id: string;
  image: string;
  productName: string;
  category: string;
  color: number;
  price: number;
  description: string;
  inventory: number;
  quantity : number
}

interface CartContextType {
  cartItems: CartItem[];
  cartCount: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((i) => i._id === item._id);
 
      if (itemExists) {
        return prevItems.map((i) =>
          i._id === item._id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prevItems, item];
    });
  };

  useEffect(() => {
    // Retrieve cart items from localStorage when the component mounts
    const storedCartItems = localStorage.getItem('selectedItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);
  useEffect(() => {
    // Save cart items to localStorage whenever they change
    if (cartItems.length > 0) {
      localStorage.setItem('selectedItems', JSON.stringify(cartItems));
    }
  }, [cartItems]);
  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
    localStorage.removeItem('selectedItems')
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, cartCount, addToCart, removeFromCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
