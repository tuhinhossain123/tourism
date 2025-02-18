import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const useUser = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  
  const { refetch, data: currentUser = [] } = useQuery({
    queryKey: ["currentUser", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}`);
      return res.data;
    },
  });
  return [currentUser, refetch];
};

export default useUser;
