import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxios();

  const { data: usersInfo = [], refetch } = useQuery({
    queryKey: ["usersInfo"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user/userInfo");
      return res.data;
    },
  });

  const handleDeleteUser = (_id) => {
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
        axiosSecure.delete(`/admin/removeUser/${_id}`).then((res) => {
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

  const handleMakeAdmin = async (user) => {
    const res = await axiosSecure.patch(`/makeAdmin/${user._id}`);
    if (res.data.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${user.name} is an admin now`,
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    }
  };

  return (
    <div className="bg-base-200 px-28 py-10">
      <div className="bg-white p-10">
        <div>
          <h2 className="text-3xl font-bold uppercase">
            Total users: {usersInfo.length}
          </h2>
          <div className="overflow-x-auto my-6">
            <table className="table">
              {/* head */}
              <thead className="uppercase bg-[#D1A054]">
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {usersInfo.map((user, index) => (
                  <tr key={user._id} className="hover">
                    <th>{index + 1} </th>
                    <td>{user.name} </td>
                    <td>{user.email} </td>
                    {/* <td>Blue</td> */}
                    <td className="font-bold">
                      {user.role === "admin" ? (
                        "Admin"
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className=" btn btn-ghost bg-[#D1A054] hover:bg-[#D1A054] text-xl text-white"
                        >
                          <FaUsers />
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        disabled={user.email === "jakirulislamhakim@gmail.com"}
                        onClick={() => handleDeleteUser(user._id)}
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
  );
};

export default AllUsers;
