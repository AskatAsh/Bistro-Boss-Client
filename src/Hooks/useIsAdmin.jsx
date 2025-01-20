import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useIsAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const response = await axiosSecure.get(`/user/admin?email=${user?.email}`);
      console.log(response.data);
      return response.data?.isAdmin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useIsAdmin;
