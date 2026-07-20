import Api from "./Api";

const getCategories = async () => {

    const response = await Api.get("/products/category-list");

    return response.data;
};

export default {

    getCategories

};