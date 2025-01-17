import { Helmet } from 'react-helmet-async';
import Banner from '../../components/common/Banner';
import shopBannerImage from '../../../src/assets/shop/banner2.jpg';

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
    </>
  );
};

export default Shop;
