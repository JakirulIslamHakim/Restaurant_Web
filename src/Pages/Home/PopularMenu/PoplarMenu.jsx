// import { useEffect, useState } from "react";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuItem from "../../../Component/MenuItem/MenuItem";
import PrimaryBtn from "../../../Component/Butten/PrimaryBtn";
import useMenu from "../../../hooks/useMenu/useMenu";
import { useNavigate } from "react-router-dom";

const PoplarMenu = () => {
  const [menu, isLoading] = useMenu();
  const popularCategory = menu?.filter((item) => item.category === "popular");
  const navigate = useNavigate();

  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("/public/menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularMenu = data.filter((item) => item.category === "popular");
  //       setMenu(popularMenu);
  //     });
  // }, []);

  const handleViewAllMenu = () => {
    navigate("allMenu");
  };

  return (
    <section className="pt-9 mb-4">
      <SectionTitle
        heading={"Check it out"}
        subHeading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-8 my-5 space-y-3 p-2">
        {popularCategory.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={handleViewAllMenu}
          className="btn btn-outline mt-2 font-semibold outline-none border-0 uppercase border-b-4 border-black"
        >
          View full menu
        </button>
      </div>
    </section>
  );
};

export default PoplarMenu;
