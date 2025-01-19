
import { PropTypes } from 'prop-types';
const Button = (props) => {
    const {btnText = "Click Here", btnStyles = "", btnFunction} = props;
  return (
    <button onClick={btnFunction} className={`btn btn-outline border-0 border-b-[3px] uppercase text-medium ${btnStyles}`}>
      {btnText}
    </button>
  );
};

Button.propTypes = {
    btnText: PropTypes.string,
    btnStyles: PropTypes.string,
    btnFunction: PropTypes.func,
}

export default Button;
