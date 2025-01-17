import Banner from "../../components/common/Banner";
import menuBannerImage from "../../../src/assets/menu/banner3.jpg";
import dessertImage from "../../../src/assets/menu/dessert-bg.jpeg";
import { Helmet } from "react-helmet-async";
import Offer from "../../components/menu/Offer";
import SectionTitle from "../../components/common/SectionTitle";
import useGetMenu from "../../Hooks/useGetMenu";

const Menu = () => {
  const [menu] = useGetMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");

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
      <SectionTitle title="Today's Offer" subtitle="Don't miss" />
      <Offer menu={offered} />
      <Banner
        bgImage={dessertImage}
        title="Desert"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        dark={true}
        fixed={true}
      />
      <Offer menu={dessert} />
    </>
  );
};

export default Menu;
