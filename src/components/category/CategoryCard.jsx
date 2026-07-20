import { useNavigate } from "react-router-dom";

const CategoryCard=({category})=>{

const navigate=useNavigate();

return(

<div

onClick={()=>navigate(`/category/${category}`)}

className="cursor-pointer bg-white shadow rounded-xl p-6 hover:shadow-lg duration-300"

>

<h5 className="capitalize">

{category.replaceAll("-"," ")}

</h5>

</div>

)

}

export default CategoryCard;