import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/slices/cartSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Checkout = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cartItems = useSelector(state => state.cart.cartItems);

    const totalAmount = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        address: "",
        city: "",
        pincode: "",
        payment: "COD"
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleOrder = () => {

        if (
            !formData.name ||
            !formData.mobile ||
            !formData.address ||
            !formData.city ||
            !formData.pincode
        ) {
            Swal.fire({
                icon: "warning",
                title: "Please fill all fields"
            });

            return;
        }

        dispatch(clearCart());

        Swal.fire({
            icon: "success",
            title: "Order Placed Successfully",
            text: "Thank you for shopping with us!"
        }).then(() => {

            navigate("/");

        });

    };

    return (

        <div className="max-w-7xl mx-auto py-10 px-4">

            <div className="grid md:grid-cols-2 gap-10">

                <div className="bg-white shadow rounded-lg p-6">

                    <h2 className="text-2xl font-bold mb-5">
                        Delivery Address
                    </h2>

                    <input
                        name="name"
                        placeholder="Full Name"
                        onChange={handleChange}
                        className="w-full border p-3 rounded mb-4"
                    />

                    <input
                        name="mobile"
                        placeholder="Mobile Number"
                        onChange={handleChange}
                        className="w-full border p-3 rounded mb-4"
                    />

                    <textarea
                        name="address"
                        placeholder="Address"
                        onChange={handleChange}
                        className="w-full border p-3 rounded mb-4"
                    />

                    <input
                        name="city"
                        placeholder="City"
                        onChange={handleChange}
                        className="w-full border p-3 rounded mb-4"
                    />

                    <input
                        name="pincode"
                        placeholder="Pincode"
                        onChange={handleChange}
                        className="w-full border p-3 rounded mb-4"
                    />

                    <h3 className="font-bold text-lg mt-6 mb-3">
                        Payment Method
                    </h3>

                    <div className="space-y-2">

                        <label className="flex gap-2">
                            <input
                                type="radio"
                                name="payment"
                                value="COD"
                                checked={formData.payment === "COD"}
                                onChange={handleChange}
                            />

                            Cash On Delivery
                        </label>

                        <label className="flex gap-2">

                            <input
                                type="radio"
                                name="payment"
                                value="UPI"
                                onChange={handleChange}
                            />

                            UPI

                        </label>

                        <label className="flex gap-2">

                            <input
                                type="radio"
                                name="payment"
                                value="Card"
                                onChange={handleChange}
                            />

                            Debit / Credit Card

                        </label>

                    </div>

                </div>

                <div className="bg-white shadow rounded-lg p-6">

                    <h2 className="text-2xl font-bold mb-5">
                        Order Summary
                    </h2>

                    {
                        cartItems.map(item => (

                            <div
                                key={item.id}
                                className="flex justify-between mb-3"
                            >

                                <span>

                                    {item.title} × {item.quantity}

                                </span>

                                <span>

                                    ₹ {item.price * item.quantity}

                                </span>

                            </div>

                        ))
                    }

                    <hr className="my-4"/>

                    <div className="flex justify-between text-xl font-bold">

                        <span>Total</span>

                        <span>

                            ₹ {totalAmount}

                        </span>

                    </div>

                    <button
                        onClick={handleOrder}
                        className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
                    >
                        Confirm Order
                    </button>

                </div>

            </div>

        </div>

    );

};

export default Checkout;