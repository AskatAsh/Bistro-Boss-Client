import Banner from "../../components/common/Banner";
import SectionTitle from "../../components/common/SectionTitle";
import Categories from "./sections/Categories";
import HeroBanner from "./sections/HeroBanner";
import { homeBannerContent } from "../../constants";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <SectionTitle />
      <Categories />
      <Banner bgImage={homeBannerContent?.bgImage} title={homeBannerContent?.title} description={homeBannerContent?.description} dark={true} />
    </>
  );
};

export default Home;
