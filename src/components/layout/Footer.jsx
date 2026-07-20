import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">

      {/* Top Footer */}

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Company */}

        <div>

          <h2 className="text-3xl font-bold text-white mb-4">
            ShopEasy
          </h2>

          <p className="leading-7">
            ShopEasy is your trusted online shopping destination
            offering quality products, secure payments and fast
            delivery.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-xl font-semibold text-white mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3">

            <li>
              <Link
                to="/"
                className="hover:text-blue-400 duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                className="hover:text-blue-400 duration-300"
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-blue-400 duration-300"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-blue-400 duration-300"
              >
                Contact
              </Link>
            </li>

          </ul>

        </div>

        {/* Categories */}

        <div>

          <h3 className="text-xl font-semibold text-white mb-5">
            Categories
          </h3>

          <ul className="space-y-3">

            <li className="hover:text-blue-400 cursor-pointer">
              Electronics
            </li>

            <li className="hover:text-blue-400 cursor-pointer">
              Fashion
            </li>

            <li className="hover:text-blue-400 cursor-pointer">
              Furniture
            </li>

            <li className="hover:text-blue-400 cursor-pointer">
              Beauty
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-semibold text-white mb-5">
            Contact
          </h3>

          <div className="space-y-4">

            <div className="flex items-center gap-3">

              <MapPin size={18} />

              <span>Pune, Maharashtra</span>

            </div>

            <div className="flex items-center gap-3">

              <Phone size={18} />

              <span>+91 9876543210</span>

            </div>

            <div className="flex items-center gap-3">

              <Mail size={18} />

              <span>support@shopeasy.com</span>

            </div>

          </div>

        </div>

      </div>

      {/* Divider */}

      <div className="border-t border-gray-700"></div>

      {/* Bottom Footer */}

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-5">

        <p className="text-sm text-center md:text-left">
          © 2026 ShopEasy. All Rights Reserved.
        </p>

        <div className="flex items-center gap-5">
 <FaFacebookF className="text-xl cursor-pointer hover:text-blue-500 transition" />

  <FaInstagram className="text-xl cursor-pointer hover:text-pink-500 transition" />

  <FaTwitter className="text-xl cursor-pointer hover:text-sky-400 transition" />

  <FaLinkedinIn className="text-xl cursor-pointer hover:text-blue-400 transition" />


        </div>

      </div>

    </footer>
  );
};

export default Footer;