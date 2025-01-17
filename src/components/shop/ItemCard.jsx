import Button from "../common/Button";
import { PropTypes } from 'prop-types';
const ItemCard = ({item}) => {
  const {image, name, recipe, price} = item;
  return (
    <div className="bg-dark7 relative flex flex-col h-full">
      <span className="absolute top-3 right-3 bg-footerbg2 font-semibold text-text px-3 py-1 text-sm">${price}</span>
      <img
        className="w-full max-h-[300px] object-cover"
        src={image}
        alt={`Image of ${name}`}
      />
      <div className="px-6 lg:px-10 py-4 lg:py-8 flex flex-col flex-1">
        <h3 className="font-semibold text-2xl text-center">{name}</h3>
        <p className="text-dark3 pt-2 pb-4 text-center flex-grow">
          {recipe}
        </p>
        <Button
          btnText="Add to Cart"
          btnStyles="block mx-auto text-golden border-golden bg-dark6 hover:bg-footerbg2"
        />
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  item: PropTypes.object,
}

export default ItemCard;
