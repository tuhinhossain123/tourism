import { Link } from "react-router-dom";
import blogImg1 from "../../assets/images/BImg1.png";
import blogImg2 from "../../assets/images/BImg2.png";
import blogImg3 from "../../assets/images/Bimg3.png";
import blogImg4 from "../../assets/images/Bimg4.png";
import { FiArrowUpRight } from "react-icons/fi";
const Blog = () => {
  return (
    <div className="mt-10 lg:mt-[90px]">
      <div className="max-w-[1680px] mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-jost font-semibold text-primary pb-9">
          Explore The Blog
        </h2>

        <div className="flex flex-col lg:flex-row gap-7">
            {/* left side */}
          <div className="w-full lg:w-[50%]">
            <img src={blogImg1} alt="" className="w-full object-cover" />
            <h4 className="text-[#F9B233] text-[14px] font-jost font-normal pt-4">
              23 Aug 2024
            </h4>

            <div className="flex justify-between items-center">
              <h2 className="text-[22px] font-jost font-medium text-primary pt-2">
                Title Of The Blog
              </h2>
              <Link>
                <FiArrowUpRight className="text-xl text-primary font-medium"></FiArrowUpRight>
              </Link>
            </div>
            <p className="text-[#1F2A37] text-lg font-jost font-normal">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              impedit blanditiis <br /> omnis, nostrum id amet aliquam nisi
              laudantium? Omnis, eum?
            </p>

            <div className="flex items-center gap-2 pt-[18px]">
              <Link className="border border-[#47545F] py-1 px-3 rounded-full text-[#47545F] text-[16px] font-jost font-normal">
                Travel
              </Link>
              <Link className="border border-[#47545F] py-1 px-3 rounded-full text-[#47545F] text-[16px] font-jost font-normal">
                Adventure
              </Link>
              <Link className="border border-[#47545F] py-1 px-3 rounded-full text-[#47545F] text-[16px] font-jost font-normal">
                Nature
              </Link>
            </div>
          </div>



          {/* right side */}
          <div className="lg:w-[50%] space-y-7">
            {/* card-1 */}
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-7">
              <div className="w-full lg:w-[30%]">
                <img
                  src={blogImg2}
                  alt=""
                  className="w-full lg:w-[250px] lg:h-[230px] object-cover"
                />
              </div>
              <div className="lg:w-[70%]">
                <h4 className="text-[#F9B233] text-[14px] font-jost font-normal pt-1">
                  23 Aug 2024
                </h4>

                <div className="flex justify-between items-center">
                  <h2 className="text-[22px] font-jost font-medium text-primary pt-2">
                    Title Of The Blog
                  </h2>
                  <Link>
                    <FiArrowUpRight className="text-xl text-primary font-medium "></FiArrowUpRight>
                  </Link>
                </div>
                <p className="text-[#1F2A37] text-lg font-jost font-normal">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  <br className="hidden lg:block" />
                  Deserunt impedit blanditiis omnis, nostrum id <br />
                  amet aliquam nisi
                </p>

                <div className="flex items-center gap-2 pt-[18px]">
                  <Link className="border border-[#47545F] py-1 px-3 rounded-full text-[#47545F] text-[16px] font-jost font-normal">
                    Adventure
                  </Link>
                  <Link className="border border-[#47545F] py-1 px-3 rounded-full text-[#47545F] text-[16px] font-jost font-normal">
                    Nature
                  </Link>
                </div>
              </div>
            </div>
            {/* card-2 */}
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-7">
              <div className="w-full lg:w-[30%]">
                <img
                  src={blogImg3}
                  alt=""
                  className="w-full lg:w-[250px] lg:h-[230px] object-cover"
                />
              </div>
              <div className="lg:w-[70%]">
                <h4 className="text-[#F9B233] text-[14px] font-jost font-normal pt-1">
                  23 Aug 2024
                </h4>

                <div className="flex justify-between items-center">
                  <h2 className="text-[22px] font-jost font-medium text-primary pt-2">
                    Title Of The Blog
                  </h2>
                  <Link>
                    <FiArrowUpRight className="text-xl text-primary font-medium "></FiArrowUpRight>
                  </Link>
                </div>
                <p className="text-[#1F2A37] text-lg font-jost font-normal">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  <br className="hidden lg:block" />
                  Deserunt impedit blanditiis omnis, nostrum id <br />
                  amet aliquam nisi
                </p>

                <div className="flex items-center gap-2 pt-[18px]">
                  <Link className="border border-[#47545F] py-1 px-3 rounded-full text-[#47545F] text-[16px] font-jost font-normal">
                    Travel
                  </Link>
                  <Link className="border border-[#47545F] py-1 px-3 rounded-full text-[#47545F] text-[16px] font-jost font-normal">
                    Nature
                  </Link>
                </div>
              </div>
            </div>
            {/* card-3 */}
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-7">
              <div className="w-full lg:w-[30%]">
                <img
                  src={blogImg4}
                  alt=""
                  className="w-full lg:w-[250px] lg:h-[230px] object-cover"
                />
              </div>
              <div className="lg:w-[70%]">
                <h4 className="text-[#F9B233] text-[14px] font-jost font-normal pt-1">
                  23 Aug 2024
                </h4>

                <div className="flex justify-between items-center">
                  <h2 className="text-[22px] font-jost font-medium text-primary pt-2">
                    Title Of The Blog
                  </h2>
                  <Link>
                    <FiArrowUpRight className="text-xl text-primary font-medium "></FiArrowUpRight>
                  </Link>
                </div>
                <p className="text-[#1F2A37] text-lg font-jost font-normal">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  <br className="hidden lg:block" />
                  Deserunt impedit blanditiis omnis, nostrum id <br />
                  amet aliquam nisi
                </p>

                <div className="flex items-center gap-2 pt-[18px]">
                  <Link className="border border-[#47545F] py-1 px-3 rounded-full text-[#47545F] text-[16px] font-jost font-normal">
                    Travel
                  </Link>
                  <Link className="border border-[#47545F] py-1 px-3 rounded-full text-[#47545F] text-[16px] font-jost font-normal">
                    Adventure
                  </Link>
                  <Link className="border border-[#47545F] py-1 px-3 rounded-full text-[#47545F] text-[16px] font-jost font-normal">
                    Nature
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
