import Swal from "sweetalert2";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu/useMenu";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import useAxios from "../../../hooks/useAxios";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxios();

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log(item._id);
        const res = await axiosSecure.delete(`/delete/menu_item/${item._id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: `${item.name} has been deleted`,
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div className="bg-base-200 ">
      <div className="py-8">
        <SectionTitle
          heading={"Hurry Up!"}
          subHeading={"MANAGE ALL ITEMS"}
        ></SectionTitle>
      </div>
      <div className="bg-base-200 px-28 py-10">
        <div className="bg-white p-10">
          <div>
            <h2 className="text-3xl font-bold uppercase">
              Total users: {menu.length}
            </h2>
            <div className="overflow-x-auto my-6">
              <table className="table">
                {/* head */}
                <thead className="uppercase bg-[#D1A054]">
                  <tr>
                    <th></th>
                    <th>Item Image</th>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {menu.map((item, index) => (
                    <tr key={item._id} className="hover">
                      <th>{index + 1} </th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar ">
                            <div className="mask mask-squircle w-[70px] h-[70px] ">
                              <img src={item.image} alt="Item Image" />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{item.name} </td>
                      <td>$ {item.price}</td>
                      {/* <td>Blue</td> */}
                      <td className="font-bold">
                        <Link to={`/dashboard/updateItem/${item._id}`}>
                          <button className=" btn btn-ghost bg-[#D1A054] hover:bg-[#D1A054] text-xl text-white">
                            <FaEdit />
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDeleteItem(item)}
                          className=" btn btn-ghost bg-red-700 hover:bg-red-700 text-xl text-white"
                        >
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {/* row 1 */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
