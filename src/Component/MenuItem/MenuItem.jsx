const MenuItem = ({ item }) => {
  const { _id, name, recipe, image, category, price } = item;

  return (
    <div className="flex gap-3">
      <img style={{borderRadius: "0px 200px 200px 200px"}} className="w-[100px]" src={image} alt="" />
      <div className="flex gap-1">
        <div>
          <h4 className="text-xl">{name}---------- </h4>
          <p className="text-sm">{recipe} </p>
        </div>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
