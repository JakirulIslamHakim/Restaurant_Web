import loginImg from "../../assets/others/authentication2.png";
import bgImg from "../../assets/others/authentication.png";
import "./login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { loginUser } = useAuth();
  const location = useLocation();
  const goTo = location?.state?.form?.pathname || "/";
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then((result) => {
        if (result.user) {
          Swal.fire("Login successfully");
          reset();
          navigate(goTo, { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
        alert("login");
      });
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const email = form.email.value;
  //   const password = form.password.value;

  //   loginUser(email, password)
  //     .then((result) => {
  //       console.log(result.user);
  //       alert("login successfully");
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  const HandleCaptchaValidate = (e) => {
    const captchaValue = e.target.value;

    if (validateCaptcha(captchaValue) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="container py-[100px]  px-[120px] border">
        <div className={`hero bg-[${bgImg}] border child`}>
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center w-1/2  lg:text-left">
              <img src={loginImg} alt="" />
            </div>
            <div className="card w-1/2 py-5 px-4  ">
              <h2 className="text-3xl font-bold text-center">Login</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                      required: "Please write your email",
                    })}
                  />
                  {errors.email && (
                    <span className="text-red-600">{errors.email.message}</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    {...register("password", {
                      required: "Please write your password",
                    })}
                  />
                  {errors.password && (
                    <span className="text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label  w-full ">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    onBlur={HandleCaptchaValidate}
                    type="text"
                    name="captcha"
                    placeholder="Type here"
                    className="input input-bordered"
                    required
                  />
                  {/* <label className="label"></label> */}
                </div>
                <div className="form-control mt-6">
                  <button
                    disabled={disabled}
                    className="btn btn-primary text-base font-bold border-none bg-[#d19f54b5]  hover:bg-[#D1A054]"
                  >
                    Sing In
                  </button>
                </div>
                <div className="text-center">
                  <p>
                    <small>
                      New here ?{" "}
                      <Link
                        className="text-orange-500 font-semibold"
                        to={"/singUp"}
                      >
                        {" "}
                        Create a new account
                      </Link>
                    </small>
                  </p>
                  <p>Or sing in with</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
