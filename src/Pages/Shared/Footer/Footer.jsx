import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#F3F4F6] mt-10 lg:mt-[90px]">
      <div className="max-w-[1680px] mx-auto px-8 pt-16 lg:pt-[90px] pb-12">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 lg:gap-36">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-jost font-semibold text-primary pb-6">
              kaylashae_adventures
            </h2>
            <div className="flex items-center gap-4">
              <Link>
                <FaTwitter className="text-[21px]" />
              </Link>
              <Link>
                <FaInstagram className="text-[21px]" />
              </Link>
              <Link>
                <FaYoutube className="text-[21px]" />
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-jost font-bold text-[#005968]">Quick Links</h2>
            <div className="pt-4 flex gap-16 lg:gap-28">
              <div className="flex flex-col">
                <Link className="text-[16px] font-jost font-bold text-[#47545F] pb-3">
                  Home
                </Link>
                <Link className="text-[16px] font-jost font-bold text-[#47545F] pb-3">
                  Blog
                </Link>
                <Link className="text-[16px] font-jost font-bold text-[#47545F] pb-3">
                  About Me
                </Link>

                <Link className="text-[16px] font-jost font-bold text-[#47545F] pb-3">
                  Contact Us
                </Link>
              </div>
              <div className="flex flex-col">
                <Link className="text-[16px] font-jost font-bold text-[#47545F] pb-3">
                  Shop
                </Link>
                <Link className="text-[16px] font-jost font-bold text-[#47545F] pb-3">
                  Group Hike
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-[#DFE4EA] my-8 md:my-11" />

        {/* Newsletter section */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-8 lg:gap-0">
          <div>
            <h2 className="text-3xl md:text-5xl lg:text-[42px] font-jost font-semibold text-primary pb-4">
              Join Our Community Newsletter
            </h2>
            <h4 className="text-xl lg:text-[16px] font-jost font-medium text-[#47545F]">
              Get adventure tips & your FREE beginner's checklist!
            </h4>
          </div>
          <div className="space-y-6 md:space-x-10 lg:space-x-6">
            <input
              type="email"
              name="from_email"
              className="input bg-transparent border border-[#47545F] font-bold pt-[13px] pr-14 lg:pr-[106px] pb-[13px] pl-[28px] text-primary placeholder:text-[#47545F] focus:outline-none"
              placeholder="Your Email Adress"
            />
            <button className="text-[16px] font-jost font-bold bg-[#005968] text-white py-[13px] px-7">
              Subscribe
            </button>
          </div>
        </div>
        <hr className="border-t-2 border-[#DFE4EA] my-8 lg:my-11" />

        <p className="text-[16px] md:text-xl lg:text-[16px] font-jost font-medium text-[#000000]">
          © 2024 KayLashae Adventures. All rights reserved.{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;

