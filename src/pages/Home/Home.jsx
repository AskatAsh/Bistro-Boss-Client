import Banner from "../../components/common/Banner";
import Categories from "./sections/Categories";
import HeroBanner from "./sections/HeroBanner";
import { homeBannerContent } from "../../constants";
import PopularMenu from "./sections/PopularMenu";
import Featured from "./sections/Featured";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Categories />
      <Banner bgImage={homeBannerContent?.bgImage} title={homeBannerContent?.title} description={homeBannerContent?.description} dark={false} />
      <PopularMenu />
      <Featured />
    </>
  );
};

export default Home;
