import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { ItemsMenu } from "./";

export const Navbar = () => {
  return (
    <div className="border-b-2 border-slate-300 shadow-md dark:bg-slate-800 px-10">
      <nav className="flex justify-between items-center h-20 w-full  ">
        <div className="">
          <h1
            className="text-center text-xl tracking-widest
           cursor-pointer font-semibold hover:text-gray-500 text-gray-300"
          >
            Cars Dealer
          </h1>
        </div>

        <div className="lg:flex flex-row w-3/4 justify-end hidden">
          <ItemsMenu />
        </div>
        <div>
          <button className="lg:hidden flex">
            <MenuOutlinedIcon className="text-slate-300 text-center text-3xl " />
          </button>
        </div>
      </nav>
    </div>
  );
};
