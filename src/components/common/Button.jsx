
import { PropTypes } from 'prop-types';
const Button = (props) => {
    const {btnText = "Click Here", btnStyles = ""} = props;
  return (
    <button className={`btn btn-outline border-0 border-b-4 uppercase text-medium text-lg ${btnStyles}`}>
      {btnText}
    </button>
  );
};

Button.propTypes = {
    btnText: PropTypes.string,
    btnStyles: PropTypes.string,
}

export default Button;
