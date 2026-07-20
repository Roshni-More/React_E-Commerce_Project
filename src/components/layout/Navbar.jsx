import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  X,
  Store,
  PackageCheck,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

 const cartItems = useSelector((state) => state.cart.cartItems);

const cartCount = cartItems.reduce(
  (total, item) => total + item.quantity,
  0
);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">

      <div className="max-w-7xl mx-auto px-4">

        <div className="h-20 flex items-center justify-between gap-5">

          {/* Logo */}

          <Link
            to="/"
            className="text-3xl font-bold text-blue-600 whitespace-nowrap"
          >
            ShopEasy
          </Link>

          {/* Search */}

          <div className="hidden md:flex flex-1 max-w-2xl">

            <div className="relative w-full">

              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                type="text"
                placeholder="Search Products, Brands and More..."
                className="w-full bg-gray-100 rounded-lg pl-12 pr-4 py-3 outline-none border border-transparent focus:border-blue-500"
              />

            </div>

          </div>

          {/* Desktop Menu */}

          <div className="hidden lg:flex items-center gap-7">

            <button className="flex items-center gap-2 hover:text-blue-600 transition">

              <Store size={20} />

              <span>Become Seller</span>

            </button>

            <button className="flex items-center gap-2 hover:text-blue-600 transition">

              <PackageCheck size={20} />

              <span>Returns</span>

            </button>

            <Link
              to="/wishlist"
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >

              <Heart size={20} />

              <span>Wishlist</span>

            </Link>

            <Link
              to="/cart"
              className="relative flex items-center gap-2 hover:text-blue-600 transition"
            >

              <ShoppingCart size={22} />

              <span>Cart</span>

              {cartCount > 0 && (
  <span
    className="absolute
    -top-2
    left-4
    bg-red-500
    text-white
    w-5
    h-5
    rounded-full
    text-xs
    flex
    items-center
    justify-center"
  >
    {cartCount}
  </span>
)}

            </Link>

            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">

              <User size={18} />

              Login

            </button>

          </div>

          {/* Mobile Right */}

          <div className="flex lg:hidden items-center gap-4">

            <Link to="/cart" className="relative">

              <ShoppingCart size={24} />

              {cartCount > 0 && (
  <span
    className="absolute
    -top-2
    -right-2
    bg-red-500
    text-white
    text-xs
    w-5
    h-5
    rounded-full
    flex
    items-center
    justify-center"
  >
    {cartCount}
  </span>
)}
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>

        </div>

      </div>

      {/* Mobile Menu */}

      {isOpen && (

        <div className="lg:hidden border-t bg-white">

          <div className="px-5 py-4">

            <div className="relative mb-5">

              <Search
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                placeholder="Search..."
                className="w-full bg-gray-100 rounded-lg py-3 pl-10 outline-none"
              />

            </div>

            <div className="flex flex-col gap-5">

              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>

              <Link to="/products" onClick={() => setIsOpen(false)}>
                Products
              </Link>

              <Link to="/wishlist" onClick={() => setIsOpen(false)}>
                Wishlist
              </Link>

              <Link to="/cart" onClick={() => setIsOpen(false)}>
                Cart
              </Link>

              <button className="text-left">
                Become Seller
              </button>

              <button className="text-left">
                Returns
              </button>

              <button className="bg-blue-600 text-white rounded-lg py-3">
                Login
              </button>

            </div>

          </div>

        </div>

      )}

    </header>
  );
};

export default Navbar;