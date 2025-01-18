import { Helmet } from "react-helmet-async";
import Banner from "../../components/common/Banner";
import shopBannerImage from "../../../src/assets/shop/banner2.jpg";
import ItemCard from "../../components/shop/ItemCard";
import Spacer from "../../components/common/Spacer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../../styles/shop.css";
import { useEffect, useMemo, useState } from "react";
import useGetMenu from "../../Hooks/useGetMenu";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Shop = () => {
  const [menuItems, setMenuItems] = useState([]);
  const { category } = useParams();
  const categories = useMemo(
    () => ["salad", "pizza", "soup", "dessert", "drinks"],
    []
  );
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(
    initialIndex !== -1 ? initialIndex : 0
  );
  const [menu] = useGetMenu();

  // swiper slider pagination custom bullets pagination
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  useEffect(() => {
    const category = categories[tabIndex];
    const items = menu.filter((item) => item.category === category);

    let totalItems = [];
    for (let i = 0; i < items.length; i += 6) {
      totalItems.push(items.slice(i, i + 6));
    }

    setMenuItems(totalItems);
  }, [tabIndex, categories, menu]);

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
            {categories.map((category, index) => (
              <Tab key={index}>{category.toUpperCase()}</Tab>
            ))}
          </TabList>

          <Spacer height="h-16" />

          {categories.map((category, index) => (
            <TabPanel key={index}>
              <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
              >
                {menuItems.map((menuItem, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1320px] w-full mx-auto">
                      {menuItem.map((item) => (
                        <ItemCard key={item._id} item={item} />
                      ))}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </TabPanel>
          ))}
        </Tabs>
      </section>
      <Spacer height="h-32" />
    </>
  );
};

export default Shop;
