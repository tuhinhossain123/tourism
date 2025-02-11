import mommmyImg from "../../assets/images/g5.png";
import { IoArrowForwardSharp } from "react-icons/io5";

const MommyMeHike = () => {
  return (
    <div className="mt-10 lg:mt-28">
      <div className="max-w-[1680px] mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-8">
        <div className="w-full lg:w-[50%]">
          <h2 className="text-3xl md:text-4xl lg:text-[52px] font-jost font-bold text-primary lg:leading-[1.1] pb-6">
            Wha is a Mommy & Me <br /> Hike?
          </h2>
          <div className="space-y-4">
            <p className="text-[#1F2A37] text-lg font-jost font-normal text-justify">
              Hiking can feel intimidating! And our Mommy & Me Hikes were
              created to make it easy for you to hike with your kids no matter
              your skill level. Off the screen and away from the tablets, these
              show kid-friendly hikes will immerse you into natureand the grate
              outdoors.
            </p>
            <p className="text-[#1F2A37] text-lg font-jost font-normal text-justify">
              Most importantly, this is a community building activly where your
              kids will start as strangers and leave as bestis!
            </p>
            <button className="text-[16px] font-jost font-medium text-primary border-2 border-primary flex justify-center items-center gap-2 py-2 px-6 hover:bg-primary hover:text-white transition">
              Hike With Us! <IoArrowForwardSharp></IoArrowForwardSharp>
            </button>
          </div>
        </div>
        <div className="w-full lg:w-[50%]">
          <img
            src={mommmyImg}
            alt=""
            className="w-full lg:w-[840px] lg:h-[600px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MommyMeHike;
