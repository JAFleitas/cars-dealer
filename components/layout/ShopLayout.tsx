import { FC, PropsWithChildren } from "react";
import Head from "next/head";

import { Navbar, SideMenu } from "../ui/";

interface Props {
  title: string;
  pageDescription: string;
  imageFullURL?: string;
}
export const ShopLayout: FC<PropsWithChildren<Props>> = ({
  children,
  title,
  pageDescription,
  imageFullURL,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        {imageFullURL && <meta name="og:image" content={imageFullURL} />}
      </Head>
      <nav>
        <Navbar />
      </nav>
      <SideMenu />

      <main className="my-20 mx-auto py-0 px-10 max-w-screen-2xl ">
        {children}
      </main>
    </>
  );
};
