import { useEffect, useState } from "react";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuItem from "../../../Component/MenuItem/MenuItem";

const PoplarMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/public/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenu = data.filter((item) => item.category === "popular");
        setMenu(popularMenu);
      });
  }, []);

  return (
    <section className="pt-9 mb-4">
      <SectionTitle
        heading={"Check it out"}
        subHeading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4 my-5 space-y-3 p-2">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PoplarMenu;
