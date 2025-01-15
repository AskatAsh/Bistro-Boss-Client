import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import images from "../../../../src/constants";
import "../../../../src/styles/heroBanner.css";

const HeroBanner = () => {
  return (
    <section>
      <Carousel
        showArrows={true}
        showIndicators={true}
        autoPlay={true}
        infiniteLoop={true}
        className="h-full overflow-hidden"
        dynamicHeight={true}
        lazyLoad={true}
      >
        {images.map((image, idx) => (
          <div key={idx} className="h-full">
            <img
              src={image}
              className="w-full h-full object-cover"
              alt={`image of slide ${idx + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroBanner;
