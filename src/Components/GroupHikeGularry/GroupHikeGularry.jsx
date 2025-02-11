import img1 from "../../assets/images/g1.png";
import img2 from "../../assets/images/g2.png";
import img3 from "../../assets/images/g3.png";
import img4 from "../../assets/images/g4.png";

const GroupHikeGularry = () => {
  return (
    <div className="pt-10 lg:pt-28">
      <div className="max-w-[1680px] mx-auto px-6 lg:px-8">
        <div className="flex">
          <div className="w-full lg:w-[40%]">
            <img src={img1} alt="" className="w-full h-full" />
          </div>
          <div className="w-full lg:w-[30%]">
            <img src={img2} alt="" className="w-full h-full" />
          </div>
          <div className="w-full lg:w-[30%]">
            <img src={img3} alt="" className="w-full" />
            <img src={img4} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupHikeGularry;
