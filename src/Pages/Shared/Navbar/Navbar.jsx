import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="w-full bg-white">
      <div className="max-w-[1680px] mx-auto px-6 lg:px-6 mt-5">
        <div className="flex justify-between ">
          <div className="flex lg:justify-between items-center gap-8 lg:gap-0 w-[90%]">
            <div>
              <Link className="text-primary font-jost font-medium text-[14px]">
                FOLLOW US
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link>
                <FaTwitter className="text-[21px] text-primary" />
              </Link>
              <Link>
                <FaInstagram className="text-[21px] text-primary" />
              </Link>
              <Link>
                <FaYoutube className="text-[21px] text-primary" />
              </Link>
            </div>
          </div>

          <div className="w-[10%]">
            <Link className="flex justify-end items-center gap-2 text-primary text-[14px] font-jost font-medium">
              <BsCart3 className="text-lg font-bold" />
              <span className="hidden md:block">CART</span>
            </Link>
          </div>
        </div>
        <hr className="border-t-2 border-[#c8cdd2] mt-5 mb-4 lg:mb-7" />

        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold">
            <img src={logo} alt="" className="w-[106px] h-[63px]" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-[34px]">
            <Link
              to="/"
              className={`text-[16px] font-jost font-medium ${
                location.pathname === "/"
                  ? "text-[#F9B233] underline"
                  : "text-primary "
              }`}
            >
              HOME
            </Link>
            <Link
              to="/about"
              className={`text-[16px] font-jost font-medium ${
                location.pathname === "/about"
                  ? "text-[#F9B233] underline"
                  : "text-primary "
              }`}
            >
              ABOUT ME
            </Link>
            <Link
              to="/blog"
              className={`text-[16px] font-jost font-medium ${
                location.pathname === "/blog"
                  ? "text-[#F9B233] underline"
                  : "text-primary"
              }`}
            >
              BLOG
            </Link>
            <Link
              to="/contact"
              className={`text-[16px] font-jost font-medium ${
                location.pathname === "/group"
                  ? "text-[#F9B233] underline"
                  : "text-primary"
              }`}
            >
              GROUP HIKES
            </Link>
            <Link
              to="/contact"
              className={`text-[16px] font-jost font-medium ${
                location.pathname === "/shop"
                  ? "text-[#F9B233] underline"
                  : "text-primary"
              }`}
            >
              SHOP
            </Link>
            <Link
              to="/contact"
              className={`text-[16px] font-jost font-medium ${
                location.pathname === "/work"
                  ? "text-[#F9B233] underline"
                  : "text-primary"
              }`}
            >
              WORK WITH US
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <button className="border-2 border-primary text-primary font-jost font-medium text-[16px] px-6 py-3 rounded-sm uppercase">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <RxCross2 size={28} /> : <IoIosMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center py-5 space-y-4 bg-white shadow-md">
          <Link
            to="/"
            className={`text-[16px] font-jost font-medium ${
              location.pathname === "/"
                ? "text-[#F9B233] underline"
                : "text-primary "
            }`}
          >
            HOME
          </Link>
          <Link
            to="/"
            className={`text-[16px] font-jost font-medium ${
              location.pathname === "/about"
                ? "text-[#F9B233] underline"
                : "text-primary "
            }`}
          >
            ABOUT ME
          </Link>
          <Link
            to="/blog"
            className={`text-[16px] font-jost font-medium ${
              location.pathname === "/blog"
                ? "text-[#F9B233] underline"
                : "text-primary"
            }`}
          >
            BLOG
          </Link>
          <Link
            to="/contact"
            className={`text-[16px] font-jost font-medium ${
              location.pathname === "/group"
                ? "text-[#F9B233] underline"
                : "text-primary"
            }`}
          >
            GROUP HIKES
          </Link>
          <Link
            to="/contact"
            className={`text-[16px] font-jost font-medium ${
              location.pathname === "/shop"
                ? "text-[#F9B233] underline"
                : "text-primary"
            }`}
          >
            SHOP
          </Link>
          <Link
            to="/contact"
            className={`text-[16px] font-jost font-medium ${
              location.pathname === "/work"
                ? "text-[#F9B233] underline"
                : "text-primary"
            }`}
          >
            WORK WITH US
          </Link>
          <button className="border-2 border-primary text-primary font-jost font-medium text-[16px] px-6 py-3 rounded-sm uppercase">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
