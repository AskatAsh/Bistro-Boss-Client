import Banner from "../../components/common/Banner";
import menuBannerImage from "../../../src/assets/menu/banner3.jpg";
import dessertImage from "../../../src/assets/menu/dessert-bg.jpeg";
import pizzaImage from "../../../src/assets/menu/pizza-bg.jpg";
import saladImage from "../../../src/assets/menu/salad-bg.jpg";
import soupImage from "../../../src/assets/menu/soup-bg.jpg";
import { Helmet } from "react-helmet-async";
import Offer from "../../components/menu/Offer";
import SectionTitle from "../../components/common/SectionTitle";
import useGetMenu from "../../Hooks/useGetMenu";
import Spacer from "../../components/common/Spacer";

const Menu = () => {
  const [menu] = useGetMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* Today's Offer section */}
      <Banner
        bgImage={menuBannerImage}
        title="Our Menu"
        description="Would you like to try a dish?"
        cover={true}
      />
      <SectionTitle title="Today's Offer" subtitle="Don't miss" />
      <Offer menu={offered} />
      <Spacer height="h-16" />

      {/* Dessert category menu offers */}
      <Banner
        bgImage={dessertImage}
        title="Deserts"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        dark={true}
        fixed={true}
      />
      <Spacer height="h-16" />
      <Offer menu={dessert} />
      <Spacer height="h-16" />

      {/* Pizza category menu offers */}
      <Banner
        bgImage={pizzaImage}
        title="Pizza"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        dark={true}
        fixed={true}
      />
      <Spacer height="h-16" />
      <Offer menu={pizza} />
      <Spacer height="h-16" />

      {/* Salad category menu offers */}
      <Banner
        bgImage={saladImage}
        title="Salad"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        dark={true}
        fixed={true}
      />
      <Spacer height="h-16" />
      <Offer menu={salad} />
      <Spacer height="h-16" />

      {/* Soup category menu offers */}
      <Banner
        bgImage={soupImage}
        title="Soup"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        dark={true}
        fixed={true}
      />
      <Spacer height="h-16" />
      <Offer menu={soup} />
      <Spacer height="h-16" />
    </>
  );
};

export default Menu;
