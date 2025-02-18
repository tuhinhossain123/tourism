import { GoSearch } from "react-icons/go";
import defaultUserImage from "../../assets/images/profile-circle-icon.png";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import useUser from "../../Hooks/userUser/userUser";

const DashboardNavbar = () => {
  const [currentUser] = useUser();
  console.log(currentUser);
  return (
    <div className="my-4">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center  gap-4 md:gap-4 lg:gap-0 w-full">
        <div className="w-full lg:w-[35%] flex items-center">
          <div className="w-full">
            <input
              name=""
              id=""
              placeholder="Search"
              className="input bg-white border w-full rounded-none rounded-l-lg text-lg p-7 border-gray-400 focus:outline-none"
            />
          </div>
          <div className="bg-primary border-gray-400 rounded-r-lg">
            <Link
              href=""
              className="px-6 flex justify-center py-[15px]  text-white"
            >
              <GoSearch className="text-3xl" />
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center gap-10 md:gap-10 lg:gap-4">
          <div className="flex justify-between items-center gap-32 md:gap-10">
            <div className="flex items-center gap-4 md:gap-5 ">
              <div className="bg-primary rounded-full p-2 md:p-3">
                <h2>
                  <MdOutlineTextsms className="text-2xl md:text-2xl  text-white"></MdOutlineTextsms>
                </h2>
              </div>
              <div className="bg-primary rounded-full p-2 md:p-3">
                <h2>
                  <IoMdNotificationsOutline className="text-2xl md:text-2xl text-white"></IoMdNotificationsOutline>
                </h2>
              </div>
            </div>
            <div className="flex items-center md:gap-5">
              <div>
                <img
                  className="w-16 md:w-16 rounded-full  object-cover "
                  width={300}
                  height={300}
                  src={
                    currentUser?.photoURL ? currentUser?.photoURL : defaultUserImage
                  }
                  alt={currentUser?.name}
                />
               
              </div>
              <div className="">
                <h2 className="text-[14px] lg:text-lg font-medium hidden lg:block">
                  {currentUser?.name}
                </h2>
                <h5 className="text-[14px] lg:text-[16px]  pl-2 font-medium hidden md:block  text-gray-600">
                  {currentUser?.role}
                </h5>
              </div>
            </div>
          </div>
          <div className="border-l-2 border-gray-400 hidden lg:block h-10 lg:pl-3 lg:pr-3"></div>
          <div>
            <Link href="">
              <IoSettingsOutline className="text-3xl text-gray-600"></IoSettingsOutline>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
