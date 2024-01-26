import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";

const imgHoistingKey = import.meta.env.VITE_Img_uploaded_key;
const imgHoistingApi = `https://api.imgbb.com/1/upload?key=${imgHoistingKey}`;

const UpdateItem = () => {
  const { _id, name, recipe, category, price } = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxios();

  // console.log(category, image ,  name);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, category, price, recipe } = data;
    // image uploaded to imgbb and then get an uri
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(imgHoistingApi, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res.data.data.display_url);
    if (res.data.success) {
      // now send the menu item to the server with the image
      const menu = {
        name,
        category,
        price: parseFloat(price),
        recipe,
        image: res.data.data.display_url,
      };
      console.log(menu);
      const menuRes = await axiosSecure.patch(`/update/menu_item/${_id}`, menu);
      console.log(menuRes);
      if (menuRes.data.modifiedCount > 0) {
        // show success popup
        // reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} is updated to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div className=" px-28 py-10">
      <h3 className="text-4xl font-medium text-center uppercase">
        Update Item
      </h3>
      <div className="bg-base-200 p-10 mt-10">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          {/* recipe name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Recipe name*</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              defaultValue={name}
              placeholder="Recipe name*"
              className="input input-bordered"
            />
          </div>
          <div className="flex gap-5 w-full">
            {/* category */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Category*</span>
              </label>
              <select
                {...register("category", { required: true })}
                defaultValue={category}
                className="select select-bordered w-full "
              >
                {/* <option value={"default"} disabled>
                  Please select a Category .
                </option> */}
                <option value={"salad"}>Salad</option>
                <option value={"pizza"}>Pizza</option>
                <option value={"soup"}>Soup</option>
                <option value={"dessert"}>Dessert</option>
                <option value={"drinks"}>Drinks</option>
              </select>
            </div>
            {/* price */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Price*</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                defaultValue={price}
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
          </div>
          {/* recipe details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Recipe Details*</span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered"
              placeholder="Recipe Details"
              defaultValue={recipe}
              rows={6}
            ></textarea>
          </div>
          {/* image */}
          <div className="form-control mt-3">
            <input
              {...register("image", { required: true })}
              type="file"
              // defaultValue={image}
              className="file-input bg-base-300 w-full max-w-xs"
            />
          </div>

          <div className=" mt-6 mx-auto">
            <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-xl font-bold text-white rounded-none">
              Update Recipe Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
