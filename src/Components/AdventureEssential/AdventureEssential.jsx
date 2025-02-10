import img1 from "../../assets/images/Screenshot__140_-removebg-preview.png";
import img2 from "../../assets/images/Screenshot__141_-removebg-preview.png";
import img3 from "../../assets/images/Screenshot__142_-removebg-preview.png";
import img4 from "../../assets/images/Screenshot__144_-removebg-preview.png";
const AdventureEssential = () => {
  return (
    <div className="mt-10 lg:mt-[90px]">
      <div className="max-w-[1680px] mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-jost font-semibold text-primary text-center pb-4 lg:pb-9">
          Adventure Essentials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          <div>
            <div className="bg-[#F3F3F3] p-4 rounded">
              <img src={img1} alt="" className="w-full lg:w-[397px] lg:h-[390px] object-cover" />
            </div>
            <h3 className="text-[#47545F] text-[22px] font-jost font-normal pt-3">
              Walking Poles
            </h3>
            <h3 className="text-[#8899A8] text-[22px] font-jost font-medium pt-2">
              $43.00 - $98.00
            </h3>
          </div>
          <div>
            <div className="bg-[#F3F3F3] p-4 rounded">
              <img src={img2} alt="" className="w-full lg:w-[397px] lg:h-[390px] object-cover" />
            </div>
            <h3 className="text-[#47545F] text-[22px] font-jost font-normal pt-3">
              Water Bottle
            </h3>
            <h3 className="text-[#8899A8] text-[22px] font-jost font-medium pt-2">
              $43.00 - $98.00
            </h3>
          </div>
          <div>
            <div className="bg-[#F3F3F3] p-4 rounded">
              <img src={img3} alt="" className="w-full lg:w-[397px] lg:h-[390px] object-cover" />
            </div>
            <h3 className="text-[#47545F] text-[22px] font-jost font-normal pt-3">
              Fast Aid Kit
            </h3>
            <h3 className="text-[#8899A8] text-[22px] font-jost font-medium pt-2">
              $43.00 - $98.00
            </h3>
          </div>
          <div>
            <div className="bg-[#F3F3F3] p-4 rounded">
              <img src={img4} alt="" className="w-full lg:w-[397px] lg:h-[390px] object-cover" />
            </div>
            <h3 className="text-[#47545F] text-[22px] font-jost font-normal pt-3">
              Backpacks
            </h3>
            <h3 className="text-[#8899A8] text-[22px] font-jost font-medium pt-2">
              $43.00 - $98.00
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureEssential;
