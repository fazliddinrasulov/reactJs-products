import { createContext, useContext } from "react";
import { useState } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }) => {
  const [myBasket, setMyBasket] = useState([]);

  console.log(myBasket);

  const value = { myBasket, setMyBasket };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
