import { createContext } from "react";

export const Context = createContext();
const ThemeContext = (props) => {

  return <Context.Provider value="root-v1">{props.children}</Context.Provider>;
};

export default ThemeContext;
