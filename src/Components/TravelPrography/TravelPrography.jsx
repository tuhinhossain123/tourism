import img1 from "../../assets/images/BImg1.png";
import { IoArrowForwardSharp } from "react-icons/io5";
const TravelPrography = () => {
  return (
    <div className="pt-32 lg:pt-40">
      <div>
        <h2 className="text-center text-3xl lg:text-[48px] font-jost font-bold text-primary pb-4">
          Travel Photography & UGC Creator
        </h2>
        <p className="text-center text-[#1F2A37] text-[16px] font-jost font-normal mb-9">
          Showcasing real authentic exprience 100% in alignment with{" "}
          <br className="hidden lg:block" /> brands we work with.
        </p>

        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-6 lg:gap-[128px]">
          <div className="w-full lg:w-[60%]">
            <h1 className="text-[#DFE4EA] text-[60px] lg:text-[136px] font-jost font-medium lg:leading-[1.1]">
              #01
            </h1>
            <div className="pl-8 lg:pl-16">
              <h2 className="text-primary font-jost font-semibold text-3xl lg:text-4xl pb-4">
                Travel Photography
              </h2>
              <p className="text-[16px] text-[#47545F] font-jost font-normal text-justify">
                Shaneice is an adventure photography with an eay for capturing
                the joy of adventure from traveling to adventure to outdoor
                product, she prides herself in capturing authentic momets in
                epic destinations - making moms think "I want that too!
              </p>
              <button className="text-[16px] font-jost font-medium text-primary border-2 border-primary flex justify-center items-center gap-2 py-2 px-6 mt-7 hover:bg-primary hover:text-white transition">
                View Protfolio <IoArrowForwardSharp></IoArrowForwardSharp>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[40%] flex justify-center">
            <img
              src={img1}
              alt=""
              className="w-full lg:w-[600px] lg:h-[600px] object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row-reverse justify-between items-center gap-6 lg:gap-[128px] pt-10 lg:pt-16">
          <div className="w-full lg:w-[60%]">
            <h1 className="text-[#DFE4EA] text-[60px] lg:text-[136px] font-jost font-medium lg:leading-[1.1]">
              #02
            </h1>
            <div className="pl-8 lg:pl-16">
              <h2 className="text-primary font-jost font-semibold text-2xl lg:text-4xl pb-4">
                Brand Collaborations and User <br className="hidden lg:block"/> Generated Content
              </h2>
              <p className="text-[16px] text-[#47545F] font-jost font-normal text-justify">
                Shaneice secializes in creating authentic ecpriences that feel
                attinable to everyday single moms and families. A master
                stoyteller, Shaneice use photography and video to cature the
                joy, fun, and empowerment that comes from exploring outdoors and
                creating epic family memories.
              </p>
              <p className="text-[16px] text-[#47545F] font-jost font-normal text-justify pt-3">
                Shaneice is an expert in capturing real moments of adventures in
                action can be used as collaborations or standalone brand
                channels. Her work has been featured by bands like hershay
                Gradens,River RidersAdventure Resort, Dam Tough Vermont, Re! and
                mone.
              </p>
              <button className="text-[16px] font-jost font-medium text-primary border-2 border-primary flex justify-center items-center gap-2 py-2 px-6 mt-7 hover:bg-primary hover:text-white transition">
                View My Protfolio <IoArrowForwardSharp></IoArrowForwardSharp>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[40%]">
            <img
              src={img1}
              alt=""
              className="w-full lg:w-[600px] lg:h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelPrography;
