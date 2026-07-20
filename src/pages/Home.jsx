import HeroBanner from "../components/home/HeroBanner";
import TopProducts from "../components/home/TopProducts";
import NewArrival from "../components/home/NewArrival";
import CategorySection from "../components/home/CategorySection";

const Home = () => {
  return (
    <>
      <HeroBanner />
        <CategorySection />
      <TopProducts />
      <NewArrival />
    </>
  );
};

export default Home;