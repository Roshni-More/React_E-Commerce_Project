import { useDispatch } from "react-redux";

import { addToCart } from "../../redux/slices/cartSlice";

const ProductCard=({product})=>{

const dispatch=useDispatch();

return(

<div className="bg-white rounded-xl shadow hover:shadow-lg p-4">

<img

src={product.thumbnail}

className="w-full h-48 object-cover rounded-lg"

/>

<h5 className="mt-3 font-semibold">

{product.title}

</h5>

<p className="text-green-600 font-bold">

${product.price}

</p>

<button

onClick={()=>dispatch(addToCart(product))}

className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"

>

Add To Cart

</button>

</div>

)

}

export default ProductCard;