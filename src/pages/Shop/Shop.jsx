import { Helmet } from "react-helmet-async";
import Banner from "../../components/common/Banner";
import shopBannerImage from "../../../src/assets/shop/banner2.jpg";
import ItemCard from "../../components/shop/ItemCard";
import Spacer from "../../components/common/Spacer";

const Shop = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* Today's Offer section */}
      <Banner
        bgImage={shopBannerImage}
        title="Our Shop"
        description="Would you like to try a dish?"
        cover={true}
      />

      <Spacer height="h-32" />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1320px] w-11/12 mx-auto">
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </section>
      <Spacer height="h-32" />
    </>
  );
};

export default Shop;
