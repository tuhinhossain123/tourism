import { useContext, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { ImUsers } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";
import { CiSettings } from "react-icons/ci";
import { LuHeadphones } from "react-icons/lu";
import { RiLogoutCircleLine } from "react-icons/ri";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { AuthContext } from "../Providers/AuthProviders";
import DashboardNavbar from "../DashboardPage/DashboardNavbar/DashboardNavbar";

export default function Dashboard() {
  const { logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut().then(() => {
      navigate("/signin");
    });
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar */}
      <div
        className={`lg:w-[15%] w-full bg-primary fixed lg:relative h-full lg:h-auto transform lg:translate-x-0 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        <div className="bg-white lg:bg-primary shadow-lg lg:shadow px-6 pb-3 relative">
          {/* Sidebar Title (Visible on Small Screens) */}
          <h2 className="text-xl md:text-3xl font-jost font-semibold text-primary pt-6 block lg:hidden">
            Kaylashae Adventures
          </h2>

          {/* Close Button for Small Screens */}
          <button
            className="lg:hidden absolute top-6 right-6 text-red-500 font-bold"
            onClick={() => setIsOpen(false)}
          >
            <RxCross2 className="text-3xl"></RxCross2>
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="mt-5 px-6">
          {/* Sidebar Title (Visible on Large Screens) */}
          <h2 className="text-xl font-jost font-semibold text-white hidden lg:block">
            Kaylashae Adventures
          </h2>
          <hr className="border-t-[2px] mt-1 hidden lg:block" />

          <ul className=" pt-0 md:pt-10">
            {/* Sidebar Menu Items */}
            <li>
              <NavLink
                to="/dashboard/users"
                className={({ isActive }) =>
                  isActive
                    ? "px-5 py-3 bg-white rounded-md text-[#47545F] text-[18px] font-jost font-medium mb-3 flex items-center gap-3"
                    : "px-5 pb-4 text-white text-[18px] font-jost font-normal flex items-center gap-3"
                }
                onClick={() => setIsOpen(false)}
              >
                <ImUsers className="text-xl"></ImUsers>
                All Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/blogAdd"
                className={({ isActive }) =>
                  isActive
                    ? "px-5 py-3 bg-white rounded-md text-[#47545F] text-[18px] font-jost font-medium flex items-center gap-3"
                    : "px-5 pb-4 text-white text-[18px] font-jost font-normal flex items-center gap-3"
                }
                onClick={() => setIsOpen(false)}
              >
                <IoMdAdd className="text-xl "></IoMdAdd>
                Blog Add
              </NavLink>
            </li>

            {/* Footer Links (Help, Logout) */}
            <div className="pt-[150px] lg:pt-[350px]">
              <hr className="border-t-[2px] pt-3 pb-5" />
              <Link
                to="/"
                className="px-5 pb-4 text-white text-[18px] font-jost font-normal flex items-center gap-3"
                onClick={() => setIsOpen(false)} // Close sidebar on click
              >
                <IoHomeOutline className="text-2xl"></IoHomeOutline>
                Home
              </Link>
              <Link
                to="/dashboard/help"
                className="px-5 pb-4 text-white text-[18px] font-jost font-normal flex items-center gap-3"
                onClick={() => setIsOpen(false)} // Close sidebar on click
              >
                <CiSettings className="text-2xl"></CiSettings>
                Settings
              </Link>
              <Link
                to="/dashboard/help"
                className="px-5 pb-4 text-white text-[18px] font-jost font-normal flex items-center gap-3"
                onClick={() => setIsOpen(false)} // Close sidebar on click
              >
                <LuHeadphones className="text-2xl"></LuHeadphones>
                Help Center
              </Link>
              <button
                onClick={handleSignOut}
                className="px-5 pt-5 text-white text-[18px] font-jost font-normal flex items-center gap-3"
              >
                <RiLogoutCircleLine className="text-2xl"></RiLogoutCircleLine>
                Log Out
              </button>
            </div>
          </ul>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="lg:w-4/5 w-full flex-1 bg-gray-100">
        <div className="bg-primary text-white sticky top-0 z-30">
          <button
            className="lg:hidden px-6 py-3 rounded-md mb-4"
            onClick={() => setIsOpen(true)}
          >
            <RiMenu2Fill className="text-2xl"></RiMenu2Fill>
          </button>
        </div>

        <div className="px-5 lg:px-8 my-2">
          <DashboardNavbar></DashboardNavbar>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
