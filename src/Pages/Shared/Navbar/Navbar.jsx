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
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 pt-5 transition-all duration-300 ${
        scroll ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1680px] mx-auto px-6 lg:px-6">
        <div className="flex justify-between">
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
        <hr className="border-t-[2px] border-[#47545F] mt-5 mb-4 lg:mb-5" />

        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold">
            <img src={logo} alt="Logo" className="w-[110px] h-[70px]" />
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
          <button className="border-2 border-primary text-primary font-jost font-medium text-[16px] px-6 py-3 rounded-sm uppercase">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
