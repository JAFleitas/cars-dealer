import { useContext } from "react";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

import { ItemsMenu, CustomLink } from "./";
import { UiContext } from "../../contexts";

export const Navbar = () => {
  //use Uicontext
  const { toggleSideMenu, isMenuOpen } = useContext(UiContext);

  return (
    <div className="border-b-2 border-slate-300 shadow-md dark:bg-slate-800 px-10">
      <nav className="flex justify-between items-center h-20 w-full  ">
        <div className="">
          <CustomLink href="/">
            <HomeRoundedIcon className="text-slate-300 text-center text-3xl cursor-pointer " />
          </CustomLink>
        </div>

        <div
          style={{ display: isMenuOpen ? "none" : undefined }}
          className={` lg:flex
          } flex-row w-3/4 justify-end hidden `}
        >
          <ItemsMenu />
        </div>
        <div className="absolute right-24">
          <CustomLink href="auth/login">
            <h4 className="px-3 text-blue-400 hover:text-blue-600 hover:underline cursor-pointer">
              Iniciar sesion
            </h4>
          </CustomLink>
        </div>

        <div>
          <button onClick={toggleSideMenu} className="">
            <MenuOutlinedIcon className="text-slate-300 text-center text-3xl " />
          </button>
        </div>
      </nav>
    </div>
  );
};
