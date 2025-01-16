import { PropTypes } from "prop-types";

const SectionTitle = (props) => {
  const {
    subtitle = "Section Subtitle",
    title = "Section Title",
    bgdark = false,
  } = props;
  return (
    <div className="max-w-md mx-auto text-center my-12">
      <i className="text-golden">---{subtitle}---</i>
      <h2
        className={`uppercase text-4xl py-4 border-y-4 mt-4 ${
          bgdark ? "text-text border-text" : "text-dark1 border-dark6"
        }`}
      >
        {title}
      </h2>
    </div>
  );
};

SectionTitle.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  bgdark: PropTypes.bool,
};

export default SectionTitle;
