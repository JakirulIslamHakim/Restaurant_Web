import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import useCartDate from "../../hooks/useCartDate";

const UserCartRow = ({ item, index }) => {
  const [, refetch] = useCartDate();
  const { _id, name, image, price } = item;
  const axios = useAxios();

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("delete id ", _id);
        axios.delete(`/user/deleteCart/${_id}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <>
      {/* row 1 */}
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avata">
              <div className="mask mask-squircle w-20 h-20  border-black">
                <img className="w-full h-full" src={image} alt="" />
              </div>
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td>${price}</td>
        <th>
          <button
            onClick={handleDelete}
            className=" btn btn-ghost bg-red-700 hover:bg-red-700 text-xl text-white"
          >
            <FaTrashAlt></FaTrashAlt>
          </button>
        </th>
      </tr>
    </>
  );
};

export default UserCartRow;
