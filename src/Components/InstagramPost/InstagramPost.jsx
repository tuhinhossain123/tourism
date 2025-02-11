import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import img from "../../assets/images/populer5.jpg";

const InstagramPost = () => {
  return (
    <div className="mt-10 lg:mt-[90px]">
      <div className="max-w-[1680px] mx-auto px-6 lg:px-8  pb-12">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 md:gap-0">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-jost font-semibold text-primary pb-4 lg:pb-6">
              @kaylashae_adventures
            </h2>
            <h3 className="text-2xl font-jost font-normal">187 posts</h3>
          </div>
          <div>
            <button className="text-[16px] text-primary font-jost font-medium py-3 px-6 border-2 border-primary hover:bg-primary hover:text-white transition">
              Follow Us
            </button>
          </div>
        </div>

        {/* show all post card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] pt-9">
          <div>
            <div className="border-t-2 border-l-2 border-r-2 rounded-md p-[18px]">
              <div className="flex justify-between lg:items-center">
                <div>
                  <h2 className="text-xl md:text-3xt lg:text-[25px] font-jost font-bold text-[#47545F] pb-1">
                    kaylashae_adventures
                  </h2>
                  <h3 className="text-lg md:text-xl lg:text-sm text-[#8899A8] font-jost font-normal">
                    2 days ago
                  </h3>
                </div>
                <div>
                  <Link>
                    <FaInstagram className="text-2xl" />
                  </Link>
                </div>
              </div>
              <h3 className="pt-2">
                <span className="text-xl">👣</span>{" "}
                <span className="md:text-lg lg:text-[16px] text-[#1F2A37] font-jost font-normal">
                  See you on the trail
                </span>{" "}
                <span className="text-xl">🥾</span>
              </h3>
              <h3 className="text-[16px] text-[#1F2A37] font-jost font-bold pt-1">
                See More
              </h3>
            </div>
            {/* Background Image */}
            <div className="relative">
              <img
                src={img}
                alt="Mom and daughter hiking"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end items-center  text-white text-center pb-4">
                <div className="pb-20">
                  <h3 className="text-4xl font-light">Mommy & Me</h3>
                  <h2 className=" text-6xl lg:text-6xl font-extrabold">2025</h2>
                  <h1 className="text-6xl lg:text-7xl font-bold pb-7">
                    First Day Hike
                  </h1>

                  <span className="bg-yellow-400 text-black text-sm font-semibold px-4 py-2 rounded-lg">
                    1 January 2025 | 10AM | Fairfax, Virginia
                  </span>
                </div>

                <h2 className="text-slate-500 font-medium text-[14px]">
                  © 2024 KayLashae Adventures
                </h2>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div>
            <div className="border-t-2 border-l-2 border-r-2 rounded-md p-[18px]">
              <div className="flex justify-between lg:items-center">
                <div>
                  <h2 className="text-xl md:text-3xt lg:text-[25px] font-jost font-bold text-[#47545F] pb-1">
                    kaylashae_adventures
                  </h2>
                  <h3 className="text-lg md:text-xl lg:text-sm text-[#8899A8] font-jost font-normal">
                    2 days ago
                  </h3>
                </div>
                <div>
                  <Link>
                    <FaInstagram className="text-2xl" />
                  </Link>
                </div>
              </div>
              <h3 className="pt-2">
                <span className="text-xl">👣</span>{" "}
                <span className="md:text-lg lg:text-[16px] text-[#1F2A37] font-jost font-normal">
                  See you on the trail
                </span>{" "}
                <span className="text-xl">🥾</span>
              </h3>
              <h3 className="text-[16px] text-[#1F2A37] font-jost font-bold pt-1">
                See More
              </h3>
            </div>
            {/* Background Image */}
            <div className="relative">
              <img
                src={img}
                alt="Mom and daughter hiking"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end items-center  text-white text-center pb-4">
                <div className="pb-20">
                  <h3 className="text-4xl font-light">Mommy & Me</h3>
                  <h2 className=" text-6xl lg:text-6xl font-extrabold">2025</h2>
                  <h1 className="text-6xl lg:text-7xl font-bold pb-7">
                    First Day Hike
                  </h1>

                  <span className="bg-yellow-400 text-black text-sm font-semibold px-4 py-2 rounded-lg">
                    1 January 2025 | 10AM | Fairfax, Virginia
                  </span>
                </div>

                <h2 className="text-slate-500 font-medium text-[14px]">
                  © 2024 KayLashae Adventures
                </h2>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div>
            <div className="border-t-2 border-l-2 border-r-2 rounded-md p-[18px]">
              <div className="flex justify-between lg:items-center">
                <div>
                  <h2 className="text-xl md:text-3xt lg:text-[25px] font-jost font-bold text-[#47545F] pb-1">
                    kaylashae_adventures
                  </h2>
                  <h3 className="text-lg md:text-xl lg:text-sm text-[#8899A8] font-jost font-normal">
                    2 days ago
                  </h3>
                </div>
                <div>
                  <Link>
                    <FaInstagram className="text-2xl" />
                  </Link>
                </div>
              </div>
              <h3 className="pt-2">
                <span className="text-xl">👣</span>{" "}
                <span className="md:text-lg lg:text-[16px] text-[#1F2A37] font-jost font-normal">
                  See you on the trail
                </span>{" "}
                <span className="text-xl">🥾</span>
              </h3>
              <h3 className="text-[16px] text-[#1F2A37] font-jost font-bold pt-1">
                See More
              </h3>
            </div>
            {/* Background Image */}
            <div className="relative">
              <img
                src={img}
                alt="Mom and daughter hiking"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end items-center  text-white text-center pb-4">
                <div className="pb-20">
                  <h3 className="text-4xl font-light">Mommy & Me</h3>
                  <h2 className=" text-6xl lg:text-6xl font-extrabold">2025</h2>
                  <h1 className="text-6xl lg:text-7xl font-bold pb-7">
                    First Day Hike
                  </h1>

                  <span className="bg-yellow-400 text-black text-sm font-semibold px-4 py-2 rounded-lg">
                    1 January 2025 | 10AM | Fairfax, Virginia
                  </span>
                </div>

                <h2 className="text-slate-500 font-medium text-[14px]">
                  © 2024 KayLashae Adventures
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramPost;
