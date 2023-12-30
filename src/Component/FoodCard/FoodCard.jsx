const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;

  return (
    <div className="card bg-base-200 rounded-md">
      <figure>
        <img className="w-full" src={image} alt={name} />
      </figure>
        <p className="bg-black text-white absolute right-6 top-6 py-3 px-4">${price}</p>
      <div className="card-body">
        <h2 className="card-title mx-auto"> {name} </h2>
        <p className="text-justify"> {recipe} </p>
        <div className="card-actions justify-center">
          <button className="btn  btn-outline bg-[#E8E8E8] mt-2 font-semibold outline-none border-0 uppercase border-b-[3px] text-orange-500 hover:text-orange-500 hover:border-[#BB8506]">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
