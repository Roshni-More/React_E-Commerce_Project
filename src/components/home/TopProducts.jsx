import ProductCard from "../product/ProductCard";
import productData from "../../data/productData";

const TopProducts = () => {
  return (
    <section className="py-16">

      <div className="container mx-auto px-4">

        <div className="text-center mb-10">

          <h2 className="text-4xl font-bold">
            Top Products
          </h2>

          <p className="text-gray-500 mt-2">
            Most Popular Products
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {productData.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
        </div>

      </div>

    </section>
  );
};

export default TopProducts;