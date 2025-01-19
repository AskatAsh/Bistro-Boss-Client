import { useContext, useState } from "react";
import { FaBars, FaTimes, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import cartIcon from "../../../src/assets/icon/cart-100.png";
import { AuthContext } from "../../providers/AuthProvider";
import { Bounce, toast } from "react-toastify";
import useGetCart from "../../Hooks/useGetCart";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useGetCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged out Successfully.", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((error) => console.log(error));
  };

  const navlinks = (
    <>
      <NavLink
        to="/"
        onClick={() => setIsMenuOpen(false)}
        className={({ isActive }) =>
          isActive
            ? "text-accent"
            : "hover:text-accent transition-all duration-200"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/contact"
        onClick={() => setIsMenuOpen(false)}
        className={({ isActive }) =>
          isActive
            ? "text-accent"
            : "hover:text-accent transition-all duration-200"
        }
      >
        Contact Us
      </NavLink>
      <NavLink
        to="/contact"
        onClick={() => setIsMenuOpen(false)}
        className={({ isActive }) =>
          isActive
            ? "text-accent"
            : "hover:text-accent transition-all duration-200"
        }
      >
        About Us
      </NavLink>
      <NavLink
        to="/menu"
        onClick={() => setIsMenuOpen(false)}
        className={({ isActive }) =>
          isActive
            ? "text-accent"
            : "hover:text-accent transition-all duration-200"
        }
      >
        Our Menu
      </NavLink>
      <NavLink
        to="/shop"
        onClick={() => setIsMenuOpen(false)}
        className={({ isActive }) =>
          isActive
            ? "text-accent flex items-center"
            : "hover:text-accent transition-all duration-200"
        }
      >
        <span className="max-[500px]:hidden uppercase font-medium text-base">
          Our Shop{" "}
        </span>
      </NavLink>
      {user && user?.email ? (
        <>
          <NavLink
            to="/dashboard/cart"
            onClick={() => setIsMenuOpen(false)}
            className="indicator"
          >
            <span className="indicator-item badge bg-red-600 text-text border-none p-1 text-xs">+{cart.length}</span>
            <img className="w-8" src={cartIcon} alt="shopping cart icon" />
          </NavLink>

          <button
            onClick={handleLogOut}
            className="flex items-center gap-1 hover:text-accent"
          >
            <span className="max-[500px]:hidden uppercase font-medium text-base">
              Sign Out{" "}
            </span>
            <FaSignOutAlt className="text-xl cursor-pointer" />
          </button>

          <NavLink
            to="/profile"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-accent flex items-center"
                : "hover:text-accent transition-all duration-200 flex items-center"
            }
          >
            <span className="uppercase font-medium mr-1 text-base sm:hidden">
              My Profile
            </span>
            <FaUserCircle className="text-2xl cursor-pointer hover:text-accent" />
          </NavLink>
        </>
      ) : (
        <NavLink
          to="/auth/login"
          onClick={() => setIsMenuOpen(false)}
          className="bg-[rgba(238,255,37,1)] text-black px-4 py-2 rounded-md hover:bg-yellow-300 uppercase font-medium"
        >
          Login
        </NavLink>
      )}
    </>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[rgba(21,21,21,0.35)] text-white">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-semibold">
          <Link href="/" className="text-text font-cinzel flex flex-col">
            <span className="font-black text-base sm:text-xl lg:text-2xl tracking-wider">
              BISTRO BOSS
            </span>
            <span className="text-sm sm:text-lg lg:text-xl tracking-[0.25em] md:tracking-[0.3em]">
              RESTAURANT
            </span>
          </Link>
        </div>

        <div className="flex items-center justify-end gap-4">
          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 uppercase font-medium">
            {navlinks}
          </nav>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <FaBars
              className="text-xl cursor-pointer hover:text-accent"
              onClick={() => setIsMenuOpen(true)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background bg-opacity-90 flex flex-col items-center justify-center text-text transition-all duration-300 z-50">
          {/* Close Icon */}
          <FaTimes
            className="absolute top-5 right-5 text-3xl cursor-pointer hover:text-accent"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Mobile Nav Links */}
          <nav className="flex flex-col items-center space-y-6 text-lg">
            {navlinks}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
