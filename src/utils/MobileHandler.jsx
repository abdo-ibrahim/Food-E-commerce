import { createContext, useContext, useEffect, useState } from "react";

const MobileHandlerContext = createContext();
const MobileHandlerProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState();
  const isMobileHandler = (e) => {
    setIsMobile(e.matches);
  };
  useEffect(() => {
    window
      .matchMedia("(max-width:767px)")
      .addEventListener("change", isMobileHandler);
    setIsMobile(window.matchMedia("(max-width:767px)").matches);
  }, []);
  return (
    <MobileHandlerContext.Provider value={{ isMobile }}>
      {children}
    </MobileHandlerContext.Provider>
  );
};
export { MobileHandlerProvider, MobileHandlerContext };
export const useMobileContext = () => {
  return useContext(MobileHandlerContext);
};
