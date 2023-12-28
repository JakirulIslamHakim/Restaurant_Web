const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;

  return (
    <div className="flex gap-3 ">
      <img
        style={{ borderRadius: "0px 200px 200px 200px" }}
        className="w-[100px]"
        src={image}
        alt=""
      />
      <div className="flex gap-1">
        <div className="">
          <h4 className="text-xl">{name}---------- </h4>
          <p className="text-sm">{recipe} </p>
        </div>
        <div>
          <p className="text-orange-500">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
