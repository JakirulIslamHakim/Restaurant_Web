import { Helmet } from "react-helmet-async";
import MenuItem from "../../../Component/MenuItem/MenuItem";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu/useMenu";

const AllMenu = () => {
  const [menu, isLoading] = useMenu();

  if (isLoading) {
    return (
      <div>
        <p className="text-center font-bold text-xl">Loading.....</p>
      </div>
    );
  }

  return (
    <div className="py-24">
        <Helmet>
            <title>Bistro Boss | Full Menu</title>
        </Helmet>
      <SectionTitle
        heading={"Check it out"}
        subHeading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10 my-5 space-y-3 p-10">
        {menu?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default AllMenu;

