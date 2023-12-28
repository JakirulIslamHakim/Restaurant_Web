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
import souptImg from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const todaysOffered = menu.filter((items) => items.category === "offered");
  const dessert = menu.filter((items) => items.category === "dessert");
  const pizza = menu.filter((items) => items.category === "pizza");
  const salad = menu.filter((items) => items.category === "salad");
  const soup = menu.filter((items) => items.category === "soup");

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
      <MenuCategory items={todaysOffered}></MenuCategory>
      <MenuCategory
        items={todaysOffered}
        heading={"DESSERTS"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={dessertImg}
      ></MenuCategory>
      <MenuCategory
        items={todaysOffered}
        heading={"PIZZA"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={pizzaImg}
      ></MenuCategory>
      <MenuCategory
        items={todaysOffered}
        heading={"soup"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={souptImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
