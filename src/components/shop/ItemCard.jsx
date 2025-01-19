import Button from "../common/Button";
import { PropTypes } from "prop-types";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ItemCard = ({ item }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { _id, image, name, recipe, price, category } = item;

  const handleAddToCart = () => {
    const cartItem = {
      itemId: _id,
      name,
      image,
      recipe,
      price,
      userEmail: user?.email,
      userName: user?.displayName,
    };
    if (user && user?.email) {
      // add item to cart using axios
      axiosSecure
        .post("/carts", cartItem)
        .then((res) => {
          // console.log(res);
          if (res?.data?.acknowledged && res?.data?.insertedId) {
            Swal.fire({
              title: "Success!",
              text: "Added to cart successfully!",
              icon: "success",
            });
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${error}`,
          });
        });
    } else {
      Swal.fire({
        title: "You are not Logged in",
        text: "Please log in to add items to cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to Login"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/auth/login', { state: { from: {pathname: `/shop/${category}`} } });
        }
      });
    }
  };
  return (
    <div className="bg-dark7 relative flex flex-col h-full">
      <span className="absolute top-3 right-3 bg-footerbg2 font-semibold text-text px-3 py-1 text-sm">
        ${price}
      </span>
      <img
        className="w-full max-h-[300px] object-cover"
        src={image}
        alt={`Image of ${name}`}
      />
      <div className="px-6 lg:px-10 py-4 lg:py-8 flex flex-col flex-1">
        <h3 className="font-semibold text-2xl text-center">{name}</h3>
        <p className="text-dark3 pt-2 pb-4 text-center flex-grow">{recipe}</p>
        <Button
          btnFunction={handleAddToCart}
          btnText="Add to Cart"
          btnStyles="block mx-auto text-golden border-golden bg-dark6 hover:bg-footerbg2"
        />
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  item: PropTypes.object,
};

export default ItemCard;
