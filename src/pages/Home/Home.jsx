import Banner from "../../components/common/Banner";
import Categories from "./sections/Categories";
import HeroBanner from "./sections/HeroBanner";
import { homeBannerContent } from "../../constants";
import PopularMenu from "./sections/PopularMenu";
import Featured from "./sections/Featured";
import Testimonials from "./sections/Testimonails";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <HeroBanner />
      <Categories />
      <Banner
        bgImage={homeBannerContent?.bgImage}
        title={homeBannerContent?.title}
        description={homeBannerContent?.description}
        dark={false}
      />
      <PopularMenu />
      <Featured />
      <Testimonials />
    </>
  );
};

export default Home;
