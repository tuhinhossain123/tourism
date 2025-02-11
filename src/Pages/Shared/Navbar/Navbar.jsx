import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../../assets/images/logo.png";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`w-full fixed top-0 transition-all duration-300 ${
        scroll ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1680px] mx-auto px-6 lg:px-8">
        {/* Top Navigation */}
        <div className="flex justify-between items-center">
          <div className="flex justify-evenly md:justify-between items-center gap-8 lg:gap-0 w-[70%] md:w-[80%] lg:w-[90%] pt-5 pb-5 pr-4 md:pr-0">
            <div>
              <Link className="text-primary font-jost font-medium text-[14px]">
                FOLLOW US
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link to="#">
                <FaTwitter className="text-[21px] text-primary" />
              </Link>
              <Link to="#">
                <FaInstagram className="text-[21px] text-primary" />
              </Link>
              <Link to="#">
                <FaYoutube className="text-[21px] text-primary" />
              </Link>
            </div>
          </div>
          <h2 className="border-r-[2px] h-16 border-[#47545F]" />
          <div className="w-[30%] md:w-[10%] lg:w-[5%] pt-5 pb-5">
            <Link className="flex justify-end items-center gap-3 text-primary font-jost font-medium">
              <BsCart3 className="text-xl font-bold" />
              <span className="text-[16px]">CART</span>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t-[2px] border-[#47545F] mt- mb-4 lg:mb-5" />

        {/* Main Navigation */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold">
            <img
              src={logo}
              alt="Logo"
              className="w-full md:w-[100px] lg:w-[110px] h-full md:h-[60px] lg:h-[70px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-[34px]">
            {[
              { path: "/", label: "HOME" },
              { path: "/about", label: "ABOUT ME" },
              { path: "/blog", label: "BLOG" },
              { path: "/hike", label: "GROUP HIKES" },
              { path: "/shop", label: "SHOP" },
              { path: "/work", label: "WORK WITH US" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[16px] font-jost font-medium ${
                  location.pathname === item.path
                    ? "text-[#F9B233] underline"
                    : "text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <button className="border-2 border-primary text-primary font-jost font-medium text-[16px] px-6 py-3 rounded-sm uppercase hover:bg-primary hover:text-white transition">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <RxCross2 size={35} /> : <IoIosMenu size={35} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center py-8 space-y-4 bg-white shadow-md">
          {[
            { path: "/", label: "HOME" },
            { path: "/about", label: "ABOUT ME" },
            { path: "/blog", label: "BLOG" },
            { path: "/hike", label: "GROUP HIKES" },
            { path: "/shop", label: "SHOP" },
            { path: "/work", label: "WORK WITH US" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[16px] font-jost font-medium ${
                location.pathname === item.path
                  ? "text-[#F9B233] underline"
                  : "text-primary"
              }`}
              onClick={handleCloseMenu} // Close the menu when a link is clicked
            >
              {item.label}
            </Link>
          ))}
          <button
            className="border-2 border-primary text-primary font-jost font-medium text-[16px] px-6 py-3 rounded-sm uppercase hover:bg-primary hover:text-white transition"
            onClick={handleCloseMenu} // Also close when clicking Contact Us
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
