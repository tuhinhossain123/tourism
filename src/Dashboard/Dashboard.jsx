import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { ImUsers } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";
import { CiSettings } from "react-icons/ci";
import { LuHeadphones } from "react-icons/lu";
import { RiLogoutCircleLine } from "react-icons/ri";
import { RiMenu2Fill } from "react-icons/ri";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

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

          <ul className="space-y-4 pt-0 md:pt-10">
            {/* Sidebar Menu Items */}
            <li>
              <NavLink
                to="/dashboard/users"
                className="px-5 py-3 bg-white rounded-md text-[#47545F] text-[18px] font-jost font-medium flex items-center gap-3"
                onClick={() => setIsOpen(false)} // Close sidebar on click
              >
                <ImUsers className="text-xl text-[#47545F]"></ImUsers>
                All Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className="px-5 py-3 bg-white rounded-md text-[#47545F] text-[18px] font-jost font-medium flex items-center gap-3"
                onClick={() => setIsOpen(false)} // Close sidebar on click
              >
                <ImUsers className="text-xl text-[#47545F]"></ImUsers>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/settings"
                className="px-5 py-3 bg-white rounded-md text-[#47545F] text-[18px] font-jost font-medium flex items-center gap-3"
                onClick={() => setIsOpen(false)} // Close sidebar on click
              >
                <CiSettings className="text-xl text-[#47545F]"></CiSettings>
                Settings
              </NavLink>
            </li>

            {/* Footer Links (Help, Logout) */}
            <div className="pt-[150px] lg:pt-[350px]">
              <hr className="border-t-[2px] pt-3 pb-5" />
              <Link
                to="/dashboard/help"
                className="px-5 pb-4 text-white text-[18px] font-jost font-normal flex items-center gap-2"
                onClick={() => setIsOpen(false)} // Close sidebar on click
              >
                <LuHeadphones className="text-2xl"></LuHeadphones>
                Help Center
              </Link>
              <Link
                to="/logout"
                className="px-5 pt-5 text-white text-[18px] font-jost font-normal flex items-center gap-2"
                onClick={() => setIsOpen(false)} // Close sidebar on click
              >
                <RiLogoutCircleLine className="text-2xl"></RiLogoutCircleLine>
                Log Out
              </Link>
            </div>
          </ul>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="lg:w-4/5 w-full flex-1 bg-gray-100 min-h-screen">
        {/* Toggle Button for Small Screens */}
        <div className="bg-primary text-white">
          <button
            className="lg:hidden px-6 py-3 rounded-md mb-4"
            onClick={() => setIsOpen(true)}
          >
            <RiMenu2Fill className="text-2xl"></RiMenu2Fill>
          </button>
        </div>

        <div className="px-6 pt-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
