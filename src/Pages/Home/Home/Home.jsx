import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PoplarMenu from "../PopularMenu/PoplarMenu";
import Testimonials from "../Testimonials/Testimonials";
import MenuCategory from "../MenuCategory/MenuCategory";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PoplarMenu></PoplarMenu>
      {/* <MenuCategory></MenuCategory> */}
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
