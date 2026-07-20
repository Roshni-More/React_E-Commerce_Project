import { useEffect, useState } from "react";
import CategoryService from "../../services/CategoryService";
import CategoryCard from "./CategoryCard";

const CategorySection = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        loadCategories();

    }, []);

   const loadCategories = async () => {

    const data = await CategoryService.getCategories();

    console.log("Categories:", data);

    setCategories(data);


    };

    return (

        <section className="py-12">

            <div className="container mx-auto px-4">

                <div className="text-center mb-10">

                    <h2 className="text-4xl font-bold">

                        Shop By Category

                    </h2>

                    <p className="text-gray-500 mt-2">

                        Browse Products By Category

                    </p>

                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

                    {

                        categories.map((category) => (

                            <CategoryCard
                                key={category}
                                category={category}
                            />

                        ))

                    }

                </div>

            </div>

        </section>

    );

};

export default CategorySection;