import bgImg from "../../assets/images/bg.jpg";
import { IoArrowForwardSharp } from "react-icons/io5";
const GroupHikBanner = () => {
  return (
    <div className="relative h-[300px] md:h-[400px] lg:h-[600px] flex items-center">
      <img
        src={bgImg}
        alt="Mom and child hiking"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 ml-6 lg:ml-36 py-6 px-9 bg-gradient-to-r from-[#ffffff30] to-[#ffffff10]">
        <h1 className="text-2xl md:text-4xl lg:text-[42px] font-jost font-bold text-justify lg:leading-[1.0] text-[#FFFFFF]">
          Join our Mommy & Me Hikes so you can{" "}
          <br className="hidden lg:block" /> get outside with your kids and
          create <br className="lg:block hidden" /> some new memories in nature
        </h1>
        <button className="mt-4 px-6 py-3 border text-[16px] font-jost font-normal border-[#FFFFFF] text-[#FFFFFF] rounded-sm flex items-center gap-2 transition">
          Join Our Next Hike <IoArrowForwardSharp />
        </button>
      </div>
    </div>
  );
};

export default GroupHikBanner;
