import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import useCartDate from "../../hooks/useCartDate";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axios = useAxios();
  const [, refetch] = useCartDate();

  const handleAddToCart = () => {
    if (user && user.email) {
      // add to cart
      const cartItem = {
        foodId: _id,
        user: user.email,
        name,
        image,
        price,
      };

      axios.post("/user/addToCart", cartItem).then((res) => {
        if (res.data?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 2500,
          });
          // refetch cart date
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in !",
        text: "Please login to add to the cart .",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { form: location } });
        }
      });
    }
  };

  return (
    <div className="card bg-base-200 rounded-md">
      <figure>
        <img className="w-full" src={image} alt={name} />
      </figure>
      <p className="bg-black text-white absolute right-6 top-6 py-3 px-4">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title mx-auto"> {name} </h2>
        <p className="text-justify"> {recipe} </p>
        <div className="card-actions justify-center">
          <button
            onClick={handleAddToCart}
            className="btn  btn-outline bg-[#E8E8E8] mt-2 font-semibold outline-none border-0 uppercase border-b-[3px] text-orange-500 hover:text-orange-500 hover:border-[#BB8506]"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
