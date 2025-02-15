import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { ImUsers } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";
import { CiSettings } from "react-icons/ci";
import { LuHeadphones } from "react-icons/lu";
import { RiLogoutCircleLine } from "react-icons/ri";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar */}
      <div
        className={`lg:w-[15%] w-full bg-primary  fixed lg:relative h-full lg:h-auto transform lg:translate-x-0 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-white lg:bg-primary shadow-lg lg:shadow px-6 pb-3">
          <div>
            <h2 className="text-xl md:text-3xl font-jost font-semibold text-primary pt-6 block md:hidden">
              Kaylashae Adventures
            </h2>
          </div>
          <div>
            <button
              className="lg:hidden absolute top-6 right-6 text-red-500 font-bold"
              onClick={() => setIsOpen(false)}
            >
              <RxCross2 className="text-3xl font-bold "></RxCross2>
            </button>
          </div>
        </div>

        <div className="mt-5 px-6">
          <div>
            <h2 className="text-xl font-jost font-semibold text-white hidden lg:block">
              Kaylashae Adventures
            </h2>
          </div>
          <hr className="border-t-[2px]  mt-1 hidden lg:block" />
          <ul className="space-y-4 pt-0 lg:pt-10">
            <li>
              <NavLink
                to="/dashboard/users"
                className="px-5 py-3 bg-white rounded-md text-[#47545F] text-[18px] font-jost font-medium  flex items-center gap-3"
              >
                <ImUsers className="text-xl"></ImUsers>All Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className="px-5 py-3 bg-white rounded-md text-[#47545F] text-[18px] font-jost font-medium  flex items-center gap-3"
              >
                <ImUsers className="text-xl"></ImUsers>All Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className="px-5 py-3 bg-white rounded-md text-[#47545F] text-[18px] font-jost font-medium  flex items-center gap-3"
              >
                <ImUsers className="text-xl"></ImUsers>All Users
              </NavLink>
            </li>
            <div className="pt-[150px] lg:pt-[350px]">
              <hr className="border-t-[2px] pt-3 pb-5" />
              <Link className="px-5 pb-4 text-white text-[18px] font-jost font-normal  flex items-center gap-2">
                <CiSettings className="text-2xl"></CiSettings>Settings
              </Link>
              <Link className="px-5 pb-4 text-white text-[18px] font-jost font-normal  flex items-center gap-2">
                <LuHeadphones className="text-2xl"></LuHeadphones>Help Center
              </Link>
              <Link className="px-5 pt-5 text-white text-[18px] font-jost font-normal  flex items-center gap-2">
                <RiLogoutCircleLine className="text-2xl"></RiLogoutCircleLine>
                Log Out
              </Link>
            </div>
          </ul>
        </div>
      </div>

      {/* Content Area */}
      <div className="lg:w-4/5 w-full flex-1 p-6 bg-gray-100 min-h-screen">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
