import Carousel from "react-bootstrap/Carousel";

import banner from "../../assets/banners/banner.png.png";
import banner1 from "../../assets/banners/banner1.png.png";
import banner2 from "../../assets/banners/banner2.png.png";

const HeroBanner = () => {
  return (
    <Carousel fade interval={3000}>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner}
          alt="First Slide"
          style={{ height: "500px", objectFit: "cover" }}
        />

        <Carousel.Caption>
          <h2>Big Savings Days</h2>
          <p>Up to 70% OFF on Electronics</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="Second Slide"
          style={{ height: "500px", objectFit: "cover" }}
        />

        <Carousel.Caption>
          <h2>New Fashion Collection</h2>
          <p>Flat 50% OFF on Top Brands</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Third Slide"
          style={{ height: "500px", objectFit: "cover" }}
        />

        <Carousel.Caption>
          <h2>Home & Furniture</h2>
          <p>Starting from ₹499</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
};

export default HeroBanner;