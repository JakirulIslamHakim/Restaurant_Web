import { Link } from "react-router-dom";
import MenuItem from "../../../Component/MenuItem/MenuItem";
import SectionCover from "../../../Component/SectionCover/SectionCover";

const MenuCategory = ({ items, heading, subHeading, img }) => {
  return (
    <div className="space-y-10">
      {heading && subHeading && (
        <SectionCover heading={heading} subHeading={subHeading} img={img}>
          {" "}
        </SectionCover>
      )}
      <div>
        <div className="grid md:grid-cols-2 gap-8 space-y-3 px-12 py-6">
          {items?.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <Link to={`/ourShop/${heading}`} className="flex justify-center ">
          <button className="btn  btn-outline mt-2 font-semibold outline-none border-0 uppercase border-b-4 border-black">
            Order Your Favourite Food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
