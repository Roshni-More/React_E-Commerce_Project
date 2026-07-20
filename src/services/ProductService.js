import Api from "./Api";

const getProductsByCategory = async (categoryName) => {
    const response = await Api.get(`/products/category/${categoryName}`);
    return response.data.products;
};

const getAllProducts = async () => {
    const response = await Api.get("/products");
    return response.data.products;
};

export default {
    getProductsByCategory,
    getAllProducts,
};