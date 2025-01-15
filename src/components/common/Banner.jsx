import PropTypes from "prop-types";

const Banner = (props) => {
  const {
    bgImage = "",
    title = "Bistro Boss",
    description = "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    dark = false,
  } = props;

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
            : "bg-white py-12 md:py-28 px-4 sm:px-8 md:px-12 lg:px-24"
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
};

export default Banner;