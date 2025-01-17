import Button from "../common/Button";
import MenuItem from "../common/MenuItem";
import { PropTypes } from 'prop-types';

const Offer = ({menu}) => {
  return (
    <section className="max-w-[1320px] w-11/12 mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Button
        btnText="Order your favourite food"
        btnStyles="text-footerbg1 block mx-auto px-8 my-8 text-lg"
      />
    </section>
  );
};

Offer.propTypes = {
  menu: PropTypes.array,
}

export default Offer;
