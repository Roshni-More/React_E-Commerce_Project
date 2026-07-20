import laptop1 from "../assets/images/laptop1.png";
import phone from "../assets/images/phone.png";
import headphone from "../assets/images/headphone.png";
import Pulse from "../assets/images/Pulse.png";

const productData = [
  {
    id: 1,
    name: "HP Pavilion Laptop",
    image: laptop1,
    category: "Laptop",
    price: 65000,
    oldPrice: 72000,
    rating: 4.8,
    discount: 10
  },
  {
    id: 2,
    name: "iPhone 15",
    image: phone,
    category: "Mobile",
    price: 79000,
    oldPrice: 85000,
    rating: 4.9,
    discount: 8
  },
  {
    id: 3,
    name: "Sony Headphones",
    image: headphone,
    category: "Accessories",
    price: 4999,
    oldPrice: 5999,
    rating: 4.6,
    discount: 20
  },
  {
    id: 4,
    name: "Apple Watch",
    image: Pulse,
    category: "Watch",
    price: 24999,
    oldPrice: 29999,
    rating: 4.7,
    discount: 15
  }
];

export default productData;