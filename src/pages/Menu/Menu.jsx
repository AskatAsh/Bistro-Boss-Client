import Banner from "../../components/common/Banner";
import menuBannerImage from "../../../src/assets/menu/banner3.jpg";
import { Helmet } from "react-helmet-async";
import Offer from "../../components/menu/Offer";

const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Banner
        bgImage={menuBannerImage}
        title="Our Menu"
        description="Would you like to try a dish?"
        cover={true}
      />
      <Offer />
    </>
  );
};

export default Menu;
