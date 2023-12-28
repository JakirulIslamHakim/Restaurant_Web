import PrimaryBtn from "../../../Component/Butten/PrimaryBtn";
import MenuItem from "../../../Component/MenuItem/MenuItem";
import SectionCover from "../../../Component/SectionCover/SectionCover";

const MenuCategory = ({ items, heading, subHeading, img }) => {
  return (
    <div className="space-y-10">
      {heading && (
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
        <PrimaryBtn btnText={"ORDER YOUR FAVOURITE FOOD"}></PrimaryBtn>
      </div>
    </div>
  );
};

export default MenuCategory;
