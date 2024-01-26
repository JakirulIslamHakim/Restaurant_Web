import SectionCover from "../../../Component/SectionCover/SectionCover";
import shopImg from "../../../assets/shop/shop.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu/useMenu";
import FoodTab from "../FoodTab/FoodTab";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const OurShop = () => {
  const [menu] = useMenu();

  // const todaysOffered = menu.filter((items) => items.category === "offered");
  const dessert = menu.filter((items) => items.category === "dessert");
  const pizza = menu.filter((items) => items.category === "pizza");
  const salad = menu.filter((items) => items.category === "salad");
  const soup = menu.filter((items) => items.category === "soup");
  const drinks = menu.filter((items) => items.category === "drinks");

  const categories = ["salads", "pizza", "soups", "desserts", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  
  
  const [tabIndex, setTabIndex] = useState(initialIndex);

  return (
    <div>
        <Helmet>
        <title>Bistro Boss | Our Shop </title>
      </Helmet>
      <SectionCover
        img={shopImg}
        heading={"Our Shop"}
        subHeading={"Would you like to try a dish?"}
      ></SectionCover>

      <section className="my-12">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <div className="uppercase text-xl font-bold text-center">
            <TabList>
              <Tab>Salad</Tab>
              <Tab>pizza</Tab>
              <Tab>soups</Tab>
              <Tab>desserts</Tab>
              <Tab>drinks</Tab>
            </TabList>
          </div>
          <div className="my-6">
            <TabPanel>
              <FoodTab items={salad}></FoodTab>
            </TabPanel>
            <TabPanel>
              <FoodTab items={pizza}></FoodTab>
            </TabPanel>
            <TabPanel>
              <FoodTab items={soup}></FoodTab>
            </TabPanel>
            <TabPanel>
              <FoodTab items={dessert}></FoodTab>
            </TabPanel>
            <TabPanel>
              <FoodTab items={drinks}></FoodTab>
            </TabPanel>
          </div>
        </Tabs>
      </section>
    </div>
  );
};

export default OurShop;
