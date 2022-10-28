import { createContext } from "react";

interface ContextProps {
  isMenuOpen: boolean;

  //method
  toggleSideMenu: () => void;
}

export const UiContext = createContext({} as ContextProps);
