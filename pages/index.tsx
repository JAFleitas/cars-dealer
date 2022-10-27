import type { NextPage } from "next";
import { ShopLayout } from "../components/layout";

const HomePage: NextPage = () => {
  return (
    <ShopLayout
      title="HOME - Cars Dealer"
      pageDescription="find the best cars, trucks, 4x4"
    >
      <h1>HOME PAGE</h1>
    </ShopLayout>
  );
};

export default HomePage;
