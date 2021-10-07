import { createContext, useState } from "react";

export const FormaturaContext = createContext();

export const FormaturaProvider = ({ children }) => {
  const [formCart, setFormCart] = useState([]);

  const addToFormCart = (item) => {
    setFormCart([...formCart, item]);
  };

  const removeFormCart = (id) => {
    let newCart = formCart.filter((item) => item.id !== id);
    setFormCart(newCart);
  };

  return (
    <FormaturaContext.Provider
      value={{ formCart, addToFormCart, removeFormCart }}
    >
      {children}
    </FormaturaContext.Provider>
  );
};
