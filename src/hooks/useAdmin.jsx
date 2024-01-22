import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useAdmin = () => {
  const axiosSecure = useAxios();
  const { user } = useAuth();

  const {
    data: isAdmin = false,
    isLoading: isAdminLoading,
    refetch,
  } = useQuery({
    queryKey: [user?.email, "admin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin/${user.email}`);
      return res.data?.admin;
    },
  });

  return [isAdmin, isAdminLoading, refetch];
};

export default useAdmin;
