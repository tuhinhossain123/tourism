import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return (
          <div className="w-full  flex items-center justify-center my-32">
            {/* <span className="loading loading-spinner loading-xl text-primary"></span> */}
            <h2>loading...</h2>
          </div>
        );
      }
      if (user) {
        return children;
      }
     
      return <Navigate to="/signin" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;