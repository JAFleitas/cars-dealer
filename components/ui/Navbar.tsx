import { CustonLink } from "./CustonLink";
import { URLFormatter } from "../../utils/textFormatter";
const items = [
  "compra-tu-auto",
  "vende-tu-auto",
  "financia-tu-auto",
  "nosotros",
];
export const Navbar = () => {
  return (
    <div className="border-b-2 border-slate-300 shadow-md dark:bg-slate-800">
      <nav className="flex justify-between items-center h-20 w-full  ">
        <div className="w-1/4 mx-6">
          <h1
            className="text-center text-xl tracking-widest
           cursor-pointer font-semibold hover:text-gray-500 text-gray-300"
          >
            Cars Dealer
          </h1>
        </div>

        <div className="flex flex-row w-3/4 justify-end">
          <ul className="flex flex-row w-3/4 text-center py-5 mx-2">
            {items.map((item, index) => (
              <CustonLink key={index} href={item}>
                <li className="mr-6 cursor-pointer text-gray-300 hover:text-white font-serif font-thin">
                  {URLFormatter(item)}
                </li>
              </CustonLink>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
