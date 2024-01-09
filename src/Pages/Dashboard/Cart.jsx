import UserCartRow from "../../Component/UserCartRow/UserCartRow";
import useCartDate from "../../hooks/useCartDate";
import "./Cart.css";

const Cart = () => {
  const [cart] = useCartDate();

  const totalPrice = cart.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.price;
  }, 0);

  // console.log(totalPrice);

  return (
    <div className="bg-base-200 px-28 py-10">
      <div className=" bg-white p-10">
        <div className="flex justify-between items-center text-3xl uppercase font-bold">
          <h3>Total Orders : {cart.length}</h3>
          <h3>total price: ${totalPrice}</h3>
          <button className="btn text-xl bg-[#D1A054] hover:bg-[#D1A054] text-white">
            Pay
          </button>
        </div>
      </div>
      <div className="p-10 bg-white">
        <div>
          <div className="overflow-x-auto w-5/6 mx-auto">
            <table className="table ">
              {/* head */}
              <thead className="bg-[#D1A054] font-semibold text-white py-6  border-black border-4">
                <tr className="py-6 rounded-full border-4">
                  <th>#</th>
                  <th>ITEM IMAGE</th>
                  <th>ITEM NAME</th>
                  <th>PRICE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <UserCartRow
                    item={item}
                    key={item._id}
                    index={index}
                  ></UserCartRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
