import img1 from "../../assets/images/Screenshot (114).png";
import img2 from "../../assets/images/Screenshot (138).png";
import img3 from "../../assets/images/Screenshot (136).png";
import img4 from "../../assets/images/Screenshot (135).png";
import img5 from "../../assets/images/Screenshot (134).png";

const Galurray = () => {
  return (
    <div className="bg-[#F9FAFB] mt-10 lg:mt-[90px]">
      <div className="max-w-[1680px] mx-auto px-6 lg:px-8 py-16 lg:py-[90px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] rounded-sm">
        <div className="bg-[#F3F4F6] flex flex-col justify-center items-center">
          <h2 className="text-[42px] font-jost font-semibold text-primary pb-4">
            Work With Us
          </h2>

          <button className="text-2xl font-jost font-medium text-[#47545F] border-2 border-[#47545F] py-3 px-6">
            Contact Me
          </button>
        </div>
        <div>
          <img
            src={img1}
            alt=""
            className="w-full lg:w-[540px] lg:h-[540px] object-cover"
          />
        </div>
        <div>
          <img
            src={img2}
            alt=""
            className="w-full lg:w-[540px] lg:h-[540px] object-cover"
          />
        </div>
        <div>
          <img
            src={img3}
            alt=""
            className="w-full lg:w-[540px] lg:h-[540px] object-cover"
          />
        </div>
        <div>
          <img
            src={img4}
            alt=""
            className="w-full lg:w-[540px] lg:h-[540px] object-cover"
          />
        </div>
        <div>
          <img
            src={img5}
            alt=""
            className="w-full lg:w-[540px] lg:h-[540px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Galurray;
