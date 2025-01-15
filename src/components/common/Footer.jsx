import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white">
      {/* Gradient Background */}
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {/* Left Section - First Gradient Color */}
        <div className="bg-footerbg1 px-4 py-16 text-center">
          <h2 className="text-lg font-semibold mb-2">CONTACT US</h2>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>

        {/* Right Section - Second Gradient Color */}
        <div className="bg-footerbg2 px-4 py-16 text-center">
          <h2 className="text-lg font-semibold mb-2">Follow US</h2>
          <p>Join us on social media</p>
          <div className="flex justify-center gap-4 mt-2">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-gray-400 text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-gray-400 text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-gray-400 text-xl"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-dark1 text-center py-4 text-sm">
        Copyright © CulinaryCloud. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;