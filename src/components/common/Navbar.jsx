import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaUserCircle,
  FaShoppingCart,
  FaSignOutAlt,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const navlinks = (
    <>
      <a to="#home" className="hover:text-accent transition-all duration-200">
        Home
      </a>
      <a to="#about" className="hover:text-accent transition-all duration-200">
        About
      </a>
      <a
        to="#services"
        className="hover:text-accent transition-all duration-200"
      >
        Services
      </a>
      <a
        to="#contact"
        className="hover:text-accent transition-all duration-200"
      >
        Contact
      </a>
    </>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[rgba(21,21,21,0.5)] backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-semibold">
          <a href="/" className="text-text">
            BrandLogo
          </a>
        </div>

        <div className="flex items-center justify-end gap-4">
          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-6">{navlinks}</nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <span className="flex items-center gap-1">
                  <span className="max-[500px]:hidden">Our Shop </span>
                  <FaShoppingCart className="text-lg cursor-pointer hover:text-accent" />
                </span>
                <span className="flex items-center gap-1">
                  <span className="max-[500px]:hidden">Sign Out </span>
                  <FaSignOutAlt className="text-xl cursor-pointer hover:text-accent" />
                </span>
                <FaUserCircle className="text-xl cursor-pointer hover:text-accent" />
              </>
            ) : (
              <a
                href="#login"
                className="bg-[rgba(238,255,37,1)] text-black px-4 py-2 rounded-md hover:bg-yellow-300"
              >
                Login
              </a>
            )}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
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
          <nav className="flex flex-col items-center space-y-6 text-xl">
            <a
              to="#home"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-accent"
            >
              Home
            </a>
            <a
              to="#about"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-accent"
            >
              About
            </a>
            <a
              to="#services"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-accent"
            >
              Services
            </a>
            <a
              to="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-accent"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
