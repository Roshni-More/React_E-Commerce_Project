import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import OrderSuccess from "../pages/OrderSuccess";
import NotFound from "../pages/NotFound";



import MainLayout from "../components/layout/MainLayout";
import CategoryProducts from "../pages/CategoryProducts";

const AppRoutes = () => {
  return (
    <Routes>

      <Route element={<MainLayout />}>
        <Route

          path="/category/:categoryName"

          element={<CategoryProducts />}

        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/products" element={<Products />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/order-success" element={<OrderSuccess />} />

      </Route>

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
};

export default AppRoutes;