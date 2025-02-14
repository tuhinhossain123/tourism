// import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link } from "react-router-dom";
import defaultUserImage from "../../assets/images/profile-circle-icon.png"

const ProfileDrop = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
    const handleSignOut = () => {
      logOut().then(() => {
        // router.push("/");
        // toast.error("User Logged Out !!");
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
        <span className="sr-only">Open user menu</span>
        <img
          className="w-16 md:w-16 rounded-full  object-cover "
          src={user?.photoURL ? user?.photoURL : defaultUserImage}
          alt={user?.displayName}
        />
       
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          id="dropdownAvatar"
          className="z-40 line absolute right-0 mt-2 bg-[#fff] divide-y shadow shadow-[#fb8a8a6d] divide-gray-100 border border-[#f28e8e9e] rounder rounded-lg transition-max-height ease-in-out duration-300"
          style={{
            maxHeight: isDropdownOpen ? "300px" : "0",
            overflow: "hidden",
          }}
        >
          {/* Content of the dropdown */}
          <div className="px-4 py-3 text-sm text-white rounded-t-md bg-primary">
            <div>{user?.displayName}</div>
            <div className="font-medium truncate">{user?.email}</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700"
            aria-labelledby="dropdownUserAvatarButton"
          >
            <li>
              <Link>Dashboard</Link>
            </li>
          </ul>
          <div className="py-2">
            <button
              onClick={handleSignOut}
              className="w-full text-left text-sm px-4 py-2 hover:bg-primary hover:text-white"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDrop;
