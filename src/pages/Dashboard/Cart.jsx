import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useGetCart from "../../Hooks/useGetCart";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useGetCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((total, item) => total + item?.price, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-between mb-8">
        <h2 className="text-3xl font-semibold">Items: {cart.length}</h2>
        <h2 className="text-3xl font-semibold">
          Total Price: ${totalPrice.toFixed(2)}
        </h2>
        {cart.length > 0 ? (
          <Link to="/dashboard/payment">
            <button className="btn bg-darkgold border-none text-white">
              Pay
            </button>
          </Link>
        ) : (
          <button disabled className="btn bg-darkgold border-none text-white">
            Pay
          </button>
        )}
      </div>
      <div className="overflow-x-auto border">
        <table className="table  w-full">
          {/* head */}
          <thead>
            <tr className="bg-darkgold text-white">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id} className="hover:bg-dark1/5">
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-md hover:bg-dark1/10"
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
