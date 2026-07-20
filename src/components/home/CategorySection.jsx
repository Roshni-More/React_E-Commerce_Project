import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CategoryCard from "../category/CategoryCard";
import CategoryService from "../../services/CategoryService";
import { setCategories } from "../../redux/slices/categorySlice";

const CategorySection = () => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const data = await CategoryService.getCategories();
      dispatch(setCategories(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Shop By Category
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <CategoryCard
            key={category}
            category={category}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;