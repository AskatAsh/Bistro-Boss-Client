import Button from "../common/Button";
import cardImage from "../../../src/assets/home/slide1.jpg";
const ItemCard = () => {
  return (
    <div className="bg-dark7">
      <img
        className="w-full max-h-[300px] object-cover"
        src={cardImage}
        alt={`Image of food`}
      />
      <div className="px-6 lg:px-10 py-4 lg:py-8">
        <h3 className="font-semibold text-2xl text-center">Caeser Salad</h3>
        <p className="text-dark3 pt-2 mb-6">
          Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
        </p>
        <Button
          btnText="Add to Cart"
          btnStyles="block mx-auto text-golden border-golden bg-dark6 hover:bg-footerbg2"
        />
      </div>
    </div>
  );
};

export default ItemCard;
