import { useContext, useMemo, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";
import defaultUserImage from "../../assets/images/profile-circle-icon.png";
import { TbLogout2 } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import useUser from "../../Hooks/userUser/userUser";

const ProfileDrop = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const [currentUser] = useUser();
 

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const handleSignOut = () => {
    logOut().then(() => {
      navigate("/signin");
      setDropdownOpen(false);
    });
  };
  const handleDroupdown = () => {
    setDropdownOpen(false);
  };


  return (
    <div className="relative inline-block text-left">
      <button
        id=""
        onClick={toggleDropdown}
        className="flex text-sm rounded-full md:me-0  "
        type="button"
      >
        {useMemo(
          () => (
            <img
              className="w-16 md:w-16 rounded-full  object-cover border-red-600"
              src={user?.photoURL ? user?.photoURL : defaultUserImage}
              alt=""
            />
          ),
          [user.photoURL]
        )}
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          id="dropdownAvatar"
          className="z-50  line absolute right-0 mt-1 bg-[#fff] divide-y shadow  divide-gray-100  rounded-lg transition-max-height ease-in-out duration-500"
          style={{
            maxHeight: isDropdownOpen ? "300px" : "0",
            overflow: "hidden",
          }}
        >
          {/* Content of the dropdown */}
          <div className="px-5 py-3 text-sm text-white rounded-t-md bg-primary">
            <div>{user?.displayName}</div>
            <div className="font-medium truncate">{user?.email}</div>
          </div>
          <ul
            className="space-y-4 py-6 px-5"
            aria-labelledby="dropdownUserAvatarButton"
          >
            <li>
              <Link
                onClick={handleDroupdown}
                className="text-[16px] text-[#47545F] font-jost font-medium flex items-center gap-2"
              >
                <span>
                  <IoBookmarkOutline></IoBookmarkOutline>
                </span>{" "}
                Saves
              </Link>
            </li>
            <li>
              <Link
                onClick={handleDroupdown}
                className="text-[16px] text-[#47545F] font-jost font-medium flex items-center gap-2"
              >
                <span>
                  <IoSettingsOutline></IoSettingsOutline>
                </span>{" "}
                Account Setting
              </Link>
            </li>
          </ul>
          <div className="bg-primary px-5  py-3">
            {currentUser?.role === "admin" ? (
              <div className="w-ful">
                <Link to="/dashboard" className=" text-white text-lg font-jost font-normal">
                  Dashboard
                </Link>
              </div>
            ) : (
              <div>
                {" "}
                <button
                  onClick={handleSignOut}
                  className="w-full px-5 py-4  bg-primary text-white flex items-center gap-2"
                >
                  <span>
                    <TbLogout2 className="text-xl font-bold"></TbLogout2>
                  </span>{" "}
                  <span className="text-lg font-jost font-normal">
                    Sign Out
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDrop;
