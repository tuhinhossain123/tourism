import BannerImg from "../../assets/images/banner.jpg";
const Banner = () => {
  return (
    <div className="relative h-screen">
      <img
        src={BannerImg}
        alt="Mom and child hiking"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-[#4c4b4b14] bg-opacity-60"></div>

      <div className="absolute z-10 pl-[25%] top-0 pt-40">
        <h1 className="text-primary text-2xl md:text-4xl lg:text-[52px] font-jost font-bold lg:leading-[1.1] text-center">
          Helping you get outside and <br /> create epic memories with your kids
        </h1>
        <p className="text-[#1F2A37] font-jost font-medium pt-3 text-center text-[24px]">
          Your solo mom adventure guid to the best adventures in <br /> virgina
          and the East Cost
        </p>
      </div>
    </div>
  );
};

export default Banner;
