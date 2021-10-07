import { createContext, useState } from "react";

export const CasamentoContext = createContext();

export const CasamentoProvider = ({ children }) => {
  const [casamentoCart, setCasamentoCart] = useState([]);

  const addToCasamentoCart = (item) => {
    setCasamentoCart([...casamentoCart, item]);
  };

  const removeCasamentoCart = (id) => {
    let newCart = casamentoCart.filter((item) => item.id !== id);
    setCasamentoCart(newCart);
  };

  return (
    <CasamentoContext.Provider
      value={{ casamentoCart, addToCasamentoCart, removeCasamentoCart }}
    >
      {children}
    </CasamentoContext.Provider>
  );
};
