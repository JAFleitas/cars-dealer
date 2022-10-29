import { CustomLink } from './';
import { textFormatter } from '../../utils';

const items = [
  'financia-tu-auto',
  'compra-tu-auto',
  'vende-tu-auto',
  'nosotros',
];

export const ItemsMenu = () => {
  return (
    <ul className="flex lg:flex-row w-3/4 text-center py-5 mx-2 flex-col ">
      {items.map((item, index) => (
        <CustomLink key={index} href={item}>
          <li className="mr-6 cursor-pointer text-gray-200 hover:text-white md:font-sans font-serif font-thin md:font-medium">
            {textFormatter.URLFormatter(item)}
          </li>
        </CustomLink>
      ))}
    </ul>
  );
};
