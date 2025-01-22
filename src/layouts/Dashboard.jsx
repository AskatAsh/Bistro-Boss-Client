import {
  FaAd,
  FaBook,
  FaCalendar,
  FaClock,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useGetCart from "../Hooks/useGetCart";
import useIsAdmin from "../Hooks/useIsAdmin";
import { useState } from "react";
import { RiMenuFold4Line } from "react-icons/ri";
import { IoCloseCircleOutline } from "react-icons/io5";

const Dashboard = () => {
  const [cart] = useGetCart();
  const [isAdmin] = useIsAdmin();
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="sm:flex">
      {/* sidbar open icon for small device */}
      <button
        className="btn md:hidden fixed top-4 right-4"
        onClick={() => setOpenSidebar(true)}
        aria-label="Open Sidebar"
      >
       Open Sidebar <RiMenuFold4Line size={24} />
      </button>
      {/* dashboard side bar */}
      <div
        className={`min-h-screen absolute md:static z-10 bg-[#00000050] transition-all duration-300 ${
          openSidebar ? "overflow-visible w-full" : "overflow-hidden"
        }`}
      >
        {/* sidebar close icon */}
        <button
          className={`btn btn-circle btn-md text-white bg-red-600 border-none absolute top-0 right-0 m-4 ${
            openSidebar ? "visible" : "hidden"
          }`}
          onClick={() => setOpenSidebar(false)}
          aria-label="Close Sidebar"
        >
          <IoCloseCircleOutline size={32} />
        </button>
        <ul
          className={`menu transition-all duration-300 sm:p-4 h-full md:w-52 lg:w-64 overflow-hidden absolute md:static z-50 bg-darkgold ${
            openSidebar ? "w-52 sm:w-64 p-4" : "w-0 p-0"
          }`}
        >
          {isAdmin ? (
            <>
              <li onClick={() => setOpenSidebar(false)}>
                <NavLink to="/dashboard/adminDashboard">
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li onClick={() => setOpenSidebar(false)}>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils></FaUtensils>
                  Add Items
                </NavLink>
              </li>
              <li onClick={() => setOpenSidebar(false)}>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li onClick={() => setOpenSidebar(false)}>
                <NavLink to="/dashboard/paymentHistory">
                  <FaClock></FaClock>
                  Payment History
                </NavLink>
              </li>
              <li onClick={() => setOpenSidebar(false)}>
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList>
                  Manage Items
                </NavLink>
              </li>
              <li onClick={() => setOpenSidebar(false)}>
                <NavLink to="/dashboard/bookings">
                  <FaBook></FaBook>
                  Manage Bookings
                </NavLink>
              </li>
              <li onClick={() => setOpenSidebar(false)}>
                <NavLink to="/dashboard/users">
                  <FaUsers></FaUsers>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li onClick={() => setOpenSidebar(false)}>
                <NavLink to="/dashboard/userDashboard">
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>
              <li onClick={() => setOpenSidebar(false)}>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar></FaCalendar>
                  Reservation
                </NavLink>
              </li>
              <li onClick={() => setOpenSidebar(false)}>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li onClick={() => setOpenSidebar(false)}>
                <NavLink to="/dashboard/paymentHistory">
                  <FaClock></FaClock>
                  Payment History
                </NavLink>
              </li>
              <li onClick={() => setOpenSidebar(false)}>
                <NavLink to="/dashboard/review">
                  <FaAd></FaAd>
                  Add a Review
                </NavLink>
              </li>
              <li onClick={() => setOpenSidebar(false)}>
                <NavLink to="/dashboard/bookings">
                  <FaList></FaList>
                  My Bookings
                </NavLink>
              </li>
            </>
          )}
          {/* shared nav links */}
          <div className="divider"></div>
          <li onClick={() => setOpenSidebar(false)}>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li onClick={() => setOpenSidebar(false)}>
            <NavLink to="/shop">
              <FaSearch></FaSearch>
              Menu
            </NavLink>
          </li>
          <li onClick={() => setOpenSidebar(false)}>
            <NavLink to="/shop/contact">
              <FaEnvelope></FaEnvelope>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-4 md:p-8 pt-20">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
