import { Link } from "react-router-dom";
import img1 from "../../assets/images/BImg1.png";
import img2 from "../../assets/images/Bimg3.png";
import img3 from "../../assets/images/Bimg4.png";
import img4 from "../../assets/images/Screenshot (135).png";
import img5 from "../../assets/images/Screenshot (136).png";
import img6 from "../../assets/images/Screenshot (138).png";
const BlogLatestPost = () => {
  return (
    <div className="mt-6 lg:mt-16 bg-[#F9FAFB]">
      <div className="max-w-[1680px] mx-auto py-6 lg:py-16 px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-jost font-semibold text-primary text-center pb-4 lg:pb-6">
          Latest Posts
        </h2>
        <h2 className="text-[#47545F] text-[16px] font-jost font-medium space-x-6 pb-8 lg:pb-16 text-center">
          <span>BEGINNER-FRIENDLY HIKES</span> <span>ROADTRIPS & GETWAYS</span>{" "}
          <span>SOLO MOM ADVENTURE TRAVEL</span>{" "}
          <span>SINGLE MOM LIFE & SELF-CARE</span>{" "}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <div className="relative">
            <img
              src={img1}
              alt=""
              className="w-full lg:w-[540px] h-full lg:h-[480px]"
            />
            <div className="bg-[#FFFFFF] pt-4 lg:pt-9 px-6 pb-4 lg:w-[60%] absolute bottom-6 left-9 md:left-10 lg:left-24">
              <h2 className="text-lg lg:text-2xl font-jost font-medium text text-primary pb-1 lg:pb-4">
                Title Of The Blog
              </h2>
              <h3 className="text-[#F9B233] text-[14px] font-jost font-normal pb-2 lg:pb-4">
                32 Aug 2024
              </h3>

              <div className="flex items-center gap-2 ">
                <Link className="border border-[#47545F] py-1 px-2 lg:px-3 rounded-full text-[#47545F] text-[14px] lg:text-[16px] font-jost font-normal">
                  Travel
                </Link>
                <Link className="border border-[#47545F] py-1 px-2 lg:px-3 rounded-full text-[#47545F] text-[14px] lg:text-[16px] font-jost font-normal">
                  Adventure
                </Link>
                <Link className="border border-[#47545F] py-1 px-2 lg:px-3 rounded-full text-[#47545F] text-[14px] lg:text-[16px] font-jost font-normal">
                  Nature
                </Link>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={img2}
              alt=""
              className="w-full lg:w-[540px] h-full lg:h-[480px]"
            />
            <div className="bg-[#FFFFFF] pt-4 lg:pt-9 px-6 pb-4 lg:w-[60%] absolute bottom-6 left-9 md:left-10 lg:left-24">
              <h2 className="text-lg lg:text-2xl font-jost font-medium text text-primary pb-1 lg:pb-4">
                Title Of The Blog
              </h2>
              <h3 className="text-[#F9B233] text-[14px] font-jost font-normal pb-2 lg:pb-4">
                32 Aug 2024
              </h3>

              <div className="flex items-center gap-2 ">
                <Link className="border border-[#47545F] py-1 px-2 lg:px-3 rounded-full text-[#47545F] text-[14px] lg:text-[16px] font-jost font-normal">
                  Travel
                </Link>
                <Link className="border border-[#47545F] py-1 px-2 lg:px-3 rounded-full text-[#47545F] text-[14px] lg:text-[16px] font-jost font-normal">
                  Adventure
                </Link>
                <Link className="border border-[#47545F] py-1 px-2 lg:px-3 rounded-full text-[#47545F] text-[14px] lg:text-[16px] font-jost font-normal">
                  Nature
                </Link>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={img3}
              alt=""
              className="w-full lg:w-[540px] h-full lg:h-[480px]"
            />
            <div className="bg-[#FFFFFF] pt-4 lg:pt-9 px-6 pb-4 lg:w-[60%] absolute bottom-6 left-9 md:left-10 lg:left-24">
              <h2 className="text-lg lg:text-2xl font-jost font-medium text text-primary pb-1 lg:pb-4">
                Title Of The Blog
              </h2>
              <h3 className="text-[#F9B233] text-[14px] font-jost font-normal pb-2 lg:pb-4">
                32 Aug 2024
              </h3>

              <div className="flex items-center gap-2 ">
                <Link className="border border-[#47545F] py-1 px-2 lg:px-3 rounded-full text-[#47545F] text-[14px] lg:text-[16px] font-jost font-normal">
                  Travel
                </Link>
                <Link className="border border-[#47545F] py-1 px-2 lg:px-3 rounded-full text-[#47545F] text-[14px] lg:text-[16px] font-jost font-normal">
                  Adventure
                </Link>
                <Link className="border border-[#47545F] py-1 px-2 lg:px-3 rounded-full text-[#47545F] text-[14px] lg:text-[16px] font-jost font-normal">
                  Nature
                </Link>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={img4}
              alt=""
              className="w-full lg:w-[540px] h-full lg:h-[480px]"
            />
            <div className="bg-[#FFFFFF] pt-4 lg:pt-9 px-6 pb-4 lg:w-[60%] absolute bottom-6 left-9 md:left-10 lg:left-24">
              <h2 className="text-lg lg:text-2xl font-jost font-medium text text-primary pb-1 lg:pb-4">
                Title Of The Blog
              </h2>
              <h3 className="text-[#F9B233] text-[14px] font-jost font-normal pb-2 lg:pb-4">
                32 Aug 2024
              </h3>

              <div className="flex items-center gap-2 ">
                <Link className="border border-[#47545F] py-1 px-2 lg:px-3 rounded-full text-[#47545F] text-[14px] lg:text-[16px] font-jost font-normal">
                  Travel
                </Link>
                <Link className="border border-[#47545F] py-1 px-2 lg:px-3 rounded-full text-[#47545F] text-[14px] lg:text-[16px] font-jost font-normal">
                  Adventure
                </Link>
                <Link className="border border-[#47545F] py-1 px-2 lg:px-3 rounded-full text-[#47545F] text-[14px] lg:text-[16px] font-jost font-normal">
                  Nature
                </Link>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={img5}
              alt=""
              className="w-full lg:w-[540px] h-full lg:h-[480px]"
            />
            <div className="bg-[#FFFFFF] pt-4 lg:pt-9 px-6 pb-4 lg:w-[60%] absolute bottom-6 left-9 md:left-10 lg:left-24">
              <h2 className="text-lg lg:text-2xl font-jost font-medium text text-primary pb-1 lg:pb-4">
                Title Of The Blog
              </h2>
              <h3 className="text-[#F9B233] text-[14px] font-jost font-normal pb-2 lg:pb-4">
                32 Aug 2024
              </h3>

              <div className="flex items-center gap-2 ">
                <Link className="border border-[#47545F] py-1 px-2 lg:px-3 rounded-full text-[#47545F] text-[14px] lg:text-[16px] font-jost font-normal">
                  Travel
                </Link>
                <Link className="border border-[#47545F] py-1 px-2 lg:px-3 rounded-full text-[#47545F] text-[14px] lg:text-[16px] font-jost font-normal">
                  Adventure
                </Link>
                <Link className="border border-[#47545F] py-1 px-2 lg:px-3 rounded-full text-[#47545F] text-[14px] lg:text-[16px] font-jost font-normal">
                  Nature
                </Link>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={img6}
              alt=""
              className="w-full lg:w-[540px] h-full lg:h-[480px]"
            />
            <div className="bg-[#FFFFFF] pt-4 lg:pt-9 px-6 pb-4 lg:w-[60%] absolute bottom-6 left-9 md:left-10 lg:left-24">
              <h2 className="text-lg lg:text-2xl font-jost font-medium text text-primary pb-1 lg:pb-4">
                Title Of The Blog
              </h2>
              <h3 className="text-[#F9B233] text-[14px] font-jost font-normal pb-2 lg:pb-4">
                32 Aug 2024
              </h3>

              <div className="flex items-center gap-2 ">
                <Link className="border border-[#47545F] py-1 px-2 lg:px-3 rounded-full text-[#47545F] text-[14px] lg:text-[16px] font-jost font-normal">
                  Travel
                </Link>
                <Link className="border border-[#47545F] py-1 px-2 lg:px-3 rounded-full text-[#47545F] text-[14px] lg:text-[16px] font-jost font-normal">
                  Adventure
                </Link>
                <Link className="border border-[#47545F] py-1 px-2 lg:px-3 rounded-full text-[#47545F] text-[14px] lg:text-[16px] font-jost font-normal">
                  Nature
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:mt-16 flex justify-center">
          <button className="text-primary text-[16px] font-jost font-medium border-2 border-primary px-6 py-3  hover:bg-primary hover:text-white transition ">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogLatestPost;
