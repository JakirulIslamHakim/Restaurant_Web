import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { loginWithGoogle } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const response = await loginWithGoogle();
      console.log(response);
      const userInfo = {
        email: response.user?.email,
        name: response.user?.displayName,
      };
      const result = await axiosPublic.post("/user/userInfo", userInfo);
      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center mt-0">
      <button
        onClick={handleGoogleLogin}
        className="p-2 border-2 border-black text-xl rounded-full "
      >
        <FaGoogle />
      </button>
    </div>
  );
};

export default SocialLogin;
