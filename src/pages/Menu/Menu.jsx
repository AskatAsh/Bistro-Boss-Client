import Banner from "../../components/common/Banner";
import menuBannerImage from "../../../src/assets/menu/banner3.jpg";
import dessertImage from "../../../src/assets/menu/dessert-bg.jpeg";
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
      <Banner bgImage={dessertImage} title="Desert" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." dark={true} fixed={true} />
    </>
  );
};

export default Menu;
