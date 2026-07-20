import React from 'react';

import { ShoppingBag, Truck, ShieldCheck, Headphones } from "lucide-react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We are committed to delivering high-quality products at affordable
            prices with a seamless shopping experience for every customer.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900"
            alt="Our Store"
            className="rounded-xl shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Who We Are
          </h2>

          <p className="text-gray-600 leading-8 mb-4">
            Welcome to our online shopping platform. We believe shopping should
            be simple, secure, and enjoyable. Our mission is to provide premium
            quality products with fast delivery and excellent customer support.
          </p>

          <p className="text-gray-600 leading-8">
            From electronics to fashion and home essentials, we carefully
            select every product to ensure the best quality for our customers.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gray-100 rounded-xl p-6 text-center shadow hover:shadow-lg transition">
              <ShoppingBag className="mx-auto text-slate-700" size={45} />
              <h3 className="font-semibold text-xl mt-4 mb-2">
                Quality Products
              </h3>
              <p className="text-gray-600">
                We provide premium products from trusted brands.
              </p>
            </div>

            <div className="bg-gray-100 rounded-xl p-6 text-center shadow hover:shadow-lg transition">
              <Truck className="mx-auto text-slate-700" size={45} />
              <h3 className="font-semibold text-xl mt-4 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Quick and secure delivery to your doorstep.
              </p>
            </div>

            <div className="bg-gray-100 rounded-xl p-6 text-center shadow hover:shadow-lg transition">
              <ShieldCheck className="mx-auto text-slate-700" size={45} />
              <h3 className="font-semibold text-xl mt-4 mb-2">
                Secure Payment
              </h3>
              <p className="text-gray-600">
                Safe and encrypted payment methods for every purchase.
              </p>
            </div>

            <div className="bg-gray-100 rounded-xl p-6 text-center shadow hover:shadow-lg transition">
              <Headphones className="mx-auto text-slate-700" size={45} />
              <h3 className="font-semibold text-xl mt-4 mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Friendly customer support whenever you need assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h2 className="text-4xl font-bold">10K+</h2>
            <p className="text-gray-300 mt-2">Happy Customers</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">5K+</h2>
            <p className="text-gray-300 mt-2">Products</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">100+</h2>
            <p className="text-gray-300 mt-2">Brands</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">99%</h2>
            <p className="text-gray-300 mt-2">Customer Satisfaction</p>
          </div>
        </div>
      </section>
    </div>
  );
};


export default About;
