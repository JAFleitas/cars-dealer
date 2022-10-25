import { FC, PropsWithChildren } from "react";
import Link from "next/link";

interface Props {
  href: string;
}
export const CustonLink: FC<PropsWithChildren<Props>> = ({
  href,
  children,
}) => {
  return (
    <Link href={`/${href}`} passHref>
      {children}
    </Link>
  );
};
