import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Layout = () => {
  return (
    <div className="relative">
      <div className="absolute top-0  z-50 w-full">
        <Navbar></Navbar>
      </div>
      <div className="">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
