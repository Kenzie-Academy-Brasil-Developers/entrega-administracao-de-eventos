import { createContext, useState } from "react";

export const ConfraContext = createContext();

export const ConfraProvider = ({ children }) => {
  const [confraCart, setConfraCart] = useState([]);

  const addToConfraCart = (item) => {
    setConfraCart([...confraCart, item]);
  };

  const removeConfraCart = (id) => {
    let newCart = confraCart.filter((item) => item.id !== id);
    setConfraCart(newCart);
  };

  return (
    <ConfraContext.Provider
      value={{ confraCart, addToConfraCart, removeConfraCart }}
    >
      {children}
    </ConfraContext.Provider>
  );
};
