import { Helmet } from "react-helmet-async";
import Banner from "../../components/common/Banner";
import shopBannerImage from "../../../src/assets/shop/banner2.jpg";
import ItemCard from "../../components/shop/ItemCard";
import Spacer from "../../components/common/Spacer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../../styles/shop.css";
import { useState } from "react";
import useGetMenu from "../../Hooks/useGetMenu";
import { useParams } from "react-router-dom";

const Shop = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useGetMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  const { category } = useParams();
  console.log(category);

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
      <section>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <Spacer height="h-16" />

          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1320px] w-11/12 mx-auto">
              {salad.map((item) => (
                <ItemCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1320px] w-11/12 mx-auto">
              {pizza.map((item) => (
                <ItemCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1320px] w-11/12 mx-auto">
              {soup.map((item) => (
                <ItemCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1320px] w-11/12 mx-auto">
              {dessert.map((item) => (
                <ItemCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1320px] w-11/12 mx-auto">
              {drinks.map((item) => (
                <ItemCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </section>
      <Spacer height="h-32" />
    </>
  );
};

export default Shop;
