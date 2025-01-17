import { PropTypes } from "prop-types";

const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex items-start space-x-4">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-24 h-24 object-cover"
        src={image}
        alt={`image of a ${recipe} recipe`}
      />
      <div>
        <h3 className="uppercase mb-2">{name} ----------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object,
};

export default MenuItem;
