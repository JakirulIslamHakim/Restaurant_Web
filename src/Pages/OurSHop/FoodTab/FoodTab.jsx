import FoodCard from "../../../Component/FoodCard/FoodCard";

const FoodTab = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {items.map((item) => (
        <FoodCard item={item} key={item._id}></FoodCard>
      ))}
    </div>
  );
};

export default FoodTab;
