import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Your Cart is Empty
        </h2>

        <p className="text-gray-500 mb-8">
          Looks like you haven't added any products yet.
        </p>

        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <h1 className="text-3xl font-bold mb-8">
        Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Cart Items */}

        <div className="lg:col-span-2 space-y-6">

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-5 flex flex-col md:flex-row gap-6"
            >

              {/* Product Image */}

              <div className="flex justify-center">

                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-40 h-40 object-contain"
                />

              </div>

              {/* Product Details */}

              <div className="flex-1">

                <h2 className="text-2xl font-semibold">
                  {item.title}
                </h2>

                <p className="text-gray-500 mt-2">
                  ₹ {item.price}
                </p>

                <div className="flex items-center mt-5 border rounded-lg overflow-hidden w-fit">

                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
                  >
                    -
                  </button>

                  <span className="px-5 font-bold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
                  >
                    +
                  </button>

                </div>

                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="mt-5 text-red-600 hover:underline font-medium"
                >
                  Remove Item
                </button>

              </div>

              {/* Item Total */}

              <div className="flex items-center">

                <h3 className="text-2xl font-bold">
                  ₹ {item.price * item.quantity}
                </h3>

              </div>

            </div>

          ))}

        </div>
                {/* Order Summary */}

        <div className="bg-white rounded-xl shadow-md p-6 h-fit sticky top-24">

          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between mb-4">
            <span>Total Items</span>
            <span className="font-semibold">
              {totalItems}
            </span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Subtotal</span>
            <span>
              ₹ {totalAmount}
            </span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Delivery</span>
            <span className="text-green-600 font-semibold">
              FREE
            </span>
          </div>

          <hr className="my-5" />

          <div className="flex justify-between text-2xl font-bold">
            <span>Total</span>
            <span>
              ₹ {totalAmount}
            </span>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
          >
            Place Order
          </button>

          <Link
            to="/"
            className="block text-center mt-4 text-blue-600 hover:underline"
          >
            Continue Shopping
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Cart;