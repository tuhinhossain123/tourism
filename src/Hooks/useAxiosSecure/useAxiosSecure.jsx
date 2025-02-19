import axios from "axios";

export const axiosSecure = axios.create({
  baseURL: "https://tourism-server-nine.vercel.app",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
