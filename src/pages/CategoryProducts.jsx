import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";

import ProductService from "../services/ProductService";
import { setProducts } from "../redux/slices/productSlice";

import ProductGrid from "../components/product/ProductGrid";

const CategoryProducts=()=>{

const {categoryName}=useParams();

const dispatch=useDispatch();

const {products}=useSelector(state=>state.product);

useEffect(()=>{

loadProducts();

},[categoryName]);

const loadProducts=async()=>{

const data=await ProductService.getProductsByCategory(categoryName);

dispatch(setProducts(data));

}

return(

<div className="container mx-auto py-10">

<h2 className="text-3xl font-bold mb-8 capitalize">

{categoryName.replaceAll("-"," ")}

</h2>

<ProductGrid products={products}/>

</div>

)

}

export default CategoryProducts;