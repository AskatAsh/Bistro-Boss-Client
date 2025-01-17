
import { PropTypes } from 'prop-types';
const Spacer = (props) => {
    const {height} = props;
    return (
        <div className={`${height}`}>
        </div>
    );
};

Spacer.propTypes = {
    height: PropTypes.string,
}

export default Spacer;