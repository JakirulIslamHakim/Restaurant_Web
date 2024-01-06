import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useCartDate = () => {
  const axios = useAxios();
  const { user } = useAuth();

  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cartDate", user?.email],
    queryFn: async () => {
      const res = await axios.get(`/user/get_carts_data?email=${user.email}`);
      return res.data;
    },
  });

  return [cart, refetch];
};

export default useCartDate;
