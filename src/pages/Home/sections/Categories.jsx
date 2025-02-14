import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../src/styles/categories.css";
import { categoryImages, categories } from "../../../constants";
import SectionTitle from "../../../components/common/SectionTitle";
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <section className="max-w-[1320px] w-11/12 mx-auto mb-12">
      <SectionTitle title="Order Online" subtitle="From 11:00am to 10:00pm" />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        className="category-swiper"
      >
        {categoryImages.map((image, idx) => (
          <SwiperSlide key={idx} className="relative">
            <img src={image} alt={`image of category ${categories[idx]}`} />
            <div className="absolute text-text font-cinzel text-xl font-medium  bg-gradient-to-t from-[#00000050] to-transparent w-full py-10">
              <Link to={`/shop/${categories[idx].toLowerCase()}`}>{categories[idx]}</Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Categories;
