import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import useGetReviews from "./../../../Hooks/useGetReviews";
import SectionTitle from "../../../components/common/SectionTitle";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
// custom css styles
import '../../../styles/testimonials.css'

const Testimonials = () => {
  const [reviews] = useGetReviews();
//   console.log(reviews);

  const customStyles = {
    itemShapes: Star,
    activeFillColor: "#D99904",
    inactiveFillColor: "#E4E4E4",
  };

  return (
    <section className="my-20 max-w-5xl w-11/12 mx-auto">
      <SectionTitle
        subTitle="What Our Client Say"
        title={"Testimonials"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]}>
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-24 my-16">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
                itemStyles={customStyles}
              />
              <p className="py-6">{review.details}</p>
              <h3 className="text-2xl text-golden font-medium">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
