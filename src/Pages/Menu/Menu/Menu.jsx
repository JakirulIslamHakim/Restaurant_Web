import { Helmet } from "react-helmet-async";
import SectionCover from "../../../Component/SectionCover/SectionCover";
import img from "../../../assets/menu/banner3.jpg";
import PoplarMenu from "../../Home/PopularMenu/PoplarMenu";
import useMenu from "../../../hooks/useMenu/useMenu";
import MenuCategory from "../../Home/MenuCategory/MenuCategory";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu, isLoading, todaysOffered, dessert, pizza, salad, soup] = useMenu();

  return (
    <div className="space-y-12 mb-10">
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <SectionCover
        img={img}
        heading={"OUR MENU"}
        subHeading={"Would you like to try a dish?"}
      ></SectionCover>
      <SectionTitle
        heading={"Don't miss"}
        subHeading={"TODAY'S OFFER"}
      ></SectionTitle>
      <MenuCategory heading={"todayOffer"} items={todaysOffered}></MenuCategory>
      <MenuCategory
        items={dessert}
        heading={"desserts"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={dessertImg}
      ></MenuCategory>
      <MenuCategory
        items={pizza}
        heading={"pizza"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={pizzaImg}
      ></MenuCategory>
      <MenuCategory
        items={salad}
        heading={"salads"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={saladImg}
      ></MenuCategory>
      <MenuCategory
        items={soup}
        heading={"soups"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={soupImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
