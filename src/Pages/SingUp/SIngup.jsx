import singUp from "../../assets/others/authentication2.png";
import bgImg from "../../assets/others/authentication.png";
import { Link, useNavigate } from "react-router-dom";
import "./singup.css";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../Component/SocialLogin/SocialLogin";

const SingUp = () => {
  const { createUser, profileUpdate } = useAuth();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const userResult = await createUser(data.email, data.password);
      await profileUpdate(data.name, data.photoUrl);

      const info = {
        name: data.name,
        email: data.email,
      };

      const res = await axiosPublic.post("/user/userInfo", info);

      if (res.data.insertedId) {
        Swal.fire({
          text: "Created account successfully",
          icon: "success",
        });
        reset();
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  // const handleSingUp = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   createUser(email, password)
  //     .then((result) => {
  //       console.log(result.user);
  //       alert("create an account successfully");
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  // console.log(errors);

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sing Up</title>
      </Helmet>
      <div className=" py-[100px] container  px-[120px] border">
        <div className={`hero bg-[${bgImg}] border child`}>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center w-1/2  lg:text-left">
              <img src={singUp} alt="" />
            </div>
            <div className="card w-1/2 py-5 px-4  ">
              <h2 className="text-3xl font-bold text-center">Sing Up</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body py-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    {...register("name", { required: true })}
                  />
                </div>
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    type="url"
                    name="photoUrl"
                    placeholder="Photo Url"
                    className="input input-bordered"
                    {...register("photoUrl", { required: true })}
                  />
                </div>
                {errors.photoUrl && (
                  <span className="text-red-500">Photo url is required</span>
                )}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    {...register("email", {
                      required: { value: true, message: "Email is required" },
                      pattern: {
                        value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
                        message: "please give us a valid email",
                      },
                    })}
                  />
                </div>
                {errors.email && (
                  <span className="text-red-600">{errors.email.message}</span>
                )}
                {/* {errors.email && (
                <span className="text-red-500">Email is required</span>
              )} */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    maxLength={20}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be 6 digit",
                      },
                      maxLength: {
                        value: 16,
                        message: "Password must be less then 16 digit",
                      },
                      pattern: {
                        value:
                          /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{6,}/,
                        message:
                          " password at least one uppercase letter, one lowercase letter, one digit, one special character",
                      },
                    })}
                  />
                </div>
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {/* {errors.password?.type === "minLength" && (
                <span className="text-red-500">Password must be 6 digit</span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-500">
                  Password must be under 20 digit
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-500">
                  password at least one uppercase letter, one lowercase letter, one digit, one special character
                </span>
              )} */}

                <div className="form-control mt-6 flex flex-row items-center gap-2">
                  {" "}
                  <button className="btn flex-1  btn-primary text-base font-bold border-none bg-[#d19f54b5]  hover:bg-[#D1A054]">
                    Sing Up
                  </button>
                  <button
                    className="btn rounded-full btn-sm bg-gray-400 "
                    type="button"
                    onClick={() => reset()}
                  >
                    Reset
                  </button>
                </div>
                <div className="text-center">
                  <p>
                    <small>
                      Already registered?{" "}
                      <Link
                        className="text-orange-500 font-semibold"
                        to={"/login"}
                      >
                        {" "}
                        Go to log in
                      </Link>
                    </small>
                  </p>
                  <p>Or sing in with</p>
                </div>
              </form>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingUp;
