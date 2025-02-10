import bgImg from "../../assets/images/bg.jpg";
const HikingCommunity = () => {
  return (
    <div className="relative h-[300px] md:h-[400px] lg:h-[490px] flex items-center mt-10 lg:mt-[90px]">
      <img
        src={bgImg}
        alt="Mom and child hiking"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 max-w-[1680px] text-white pl-10 lg:pl-36">
        <p className="text-lg md:text-[24px] text-[#CED4DA] font-jost font-medium  pb-4">
          Adventure with Us
        </p>
        <h1 className="text-2xl md:text-4xl lg:text-[52px] font-jost font-bold lg:leading-[1.1]">
          Mommy & Me Group Hiking <br /> Community
        </h1>
        <button className="mt-6 px-6 py-3 border text-[16px] font-jost font-normal border-[#FFFFFF] rounded-sm flex items-center gap-2 hover:bg-white hover:text-black transition">
          Explore More →
        </button>
      </div>
    </div>
  );
};

export default HikingCommunity;
