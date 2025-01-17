import PropTypes from "prop-types";

const Banner = (props) => {
  const {
    bgImage = "",
    title = "Bistro Boss",
    description = "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    dark = false,
    cover = false,
  } = props;

  if (cover) {
    return (
      <section
        className={`w-full pt-40 pb-24 md:pt-48 md:pb-32 px-4 sm:px-8 md:px-16 lg:px-32 bg-fixed`}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className={`flex items-center justify-center text-center bg-dark1/60 text-white py-16 md:py-32 px-4 sm:px-8 md:px-12 lg:px-24`}
        >
          <div
            className={`max-w-xl sm:max-w-2xl lg:max-w-4xl xl:max-w-[1320px] mx-auto w-full`}
          >
            <h2
              className={`text-3xl md:text-5xl lg:text-7xl font-cinzel pb-3 font-bold`}
            >
              {title}
            </h2>
            <p className="text-base md:text-xl font-cinzel font-semibold">{description}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`${
        dark
          ? "w-full py-16 md:py-32 px-4 sm:px-8 md:px-16 lg:px-32"
          : "max-w-[1320px] w-11/12 mx-auto py-12 md:py-28 px-4 sm:px-8 md:px-16 lg:px-28"
      }`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`flex items-center justify-center text-center ${
          dark
            ? "bg-dark1/60 text-white py-16 md:py-32 px-4 sm:px-8 md:px-12 lg:px-24"
            : "bg-white/90 py-12 md:py-28 px-4 sm:px-8 md:px-12 lg:px-24"
        }`}
      >
        <div
          className={`${
            dark
              ? "max-w-xl sm:max-w-2xl lg:max-w-4xl mx-auto w-full"
              : "max-w-lg sm:max-w-xl lg:max-w-3xl w-full"
          }`}
        >
          <h2
            className={`text-2xl sm:text-3xl lg:text-5xl font-cinzel pb-3 ${
              dark ? "font-semibold" : "font-medium"
            }`}
          >
            {title}
          </h2>
          <p className="text-sm sm:text-base">{description}</p>
        </div>
      </div>
    </section>
  );
};

Banner.propTypes = {
  bgImage: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  dark: PropTypes.bool,
  cover: PropTypes.bool,
};

export default Banner;
