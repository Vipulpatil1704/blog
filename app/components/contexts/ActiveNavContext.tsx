'use client'

import { ReactNode, useState, createContext} from "react";
export type ActiveNavContextType = {
  activeNav: string,
  setActiveNav : (nav:string) => void,
}

export const ActiveNavContext = createContext<ActiveNavContextType | undefined>(undefined);
export const ActiveNavProvider = ({ children }: { children: ReactNode }) => {
    const [activeNav, setActiveNav] = useState<string>("Home");
    return (
      <ActiveNavContext.Provider value={{activeNav, setActiveNav}}>
        {children}
      </ActiveNavContext.Provider>
    );
  };