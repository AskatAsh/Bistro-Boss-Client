import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../../src/assets/home/01.jpg";
import img2 from "../../../src/assets/home/02.jpg";
import img3 from "../../../src/assets/home/03.png";
import img4 from "../../../src/assets/home/04.jpg";
import img5 from "../../../src/assets/home/05.png";
import img6 from "../../../src/assets/home/06.png";

import '../../../src/styles/heroBanner.css'

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
        style={{height: "700px", border: "2px solid red"}}
      >
        <div className="h-full">
          <img src={img1} className="w-full h-full object-cover" alt="Slide 1" />
        </div>
        <div className="h-full">
          <img src={img2} className="w-full h-full object-cover" alt="Slide 2" />
        </div>
        <div className="h-full">
          <img src={img3} className="w-full h-full object-cover" alt="Slide 3" />
        </div>
        <div className="h-full">
          <img src={img4} className="w-full h-full object-cover" alt="Slide 4" />
        </div>
        <div className="h-full">
          <img src={img5} className="w-full h-full object-cover" alt="Slide 5" />
        </div>
        <div className="h-full">
          <img src={img6} className="w-full h-full object-cover" alt="Slide 6" />
        </div>
      </Carousel>
    </section>
  );
};

export default HeroBanner;