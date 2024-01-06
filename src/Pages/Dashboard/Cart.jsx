import useCartDate from "../../hooks/useCartDate";
import "./Cart.css";

const Cart = () => {
  const [cart] = useCartDate();



  return (
    <div className="">
      <div className="flex justify-evenly text-2xl uppercase font-bold">
        <h3>Total Orders : {cart.length}</h3>
        <h3>total price: $88.2</h3>
        <button className="btn">Pay</button>
      </div>
    </div>
  );
};

export default Cart;
