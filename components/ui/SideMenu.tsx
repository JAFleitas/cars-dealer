import { useContext, useEffect, useState } from "react";

import { UiContext } from "../../contexts";

export const SideMenu = () => {
  const [inSideMenu, setInSideMenu] = useState<boolean>(false);
  const { isMenuOpen, toggleSideMenu } = useContext(UiContext);

  useEffect(() => {
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  });

  useEffect(() => {
    if (isMenuOpen) {
      setInSideMenu(true);
    }
  }, [isMenuOpen]);

  const handleClick = (e: MouseEvent) => {
    const mouseClick = e.clientX;
    const totalScreem = window.innerWidth;
    const widthMenu: number = 256;
    if (mouseClick < totalScreem - widthMenu && isMenuOpen) {
      toggleSideMenu();
      setTimeout(() => setInSideMenu(false), 800);
    }
  };

  return (
    inSideMenu && (
      <div
        className={`${
          isMenuOpen ? "backdrop-blur-sm" : ""
        } w-full h-full  bg-transparent fixed top-0 left-0 
      
      `}
      >
        <div
          className={` flex absolute text-xl  sm:w-64 bg-slate-50 w-full  top-0 right-0 bottom-0 animate-${
            isMenuOpen ? "openSideMenu" : "closeSideMenu"
          } justify-center `}
        ></div>
      </div>
    )
  );
};
