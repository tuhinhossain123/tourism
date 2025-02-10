import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import img from "../../assets/images/populer5.jpg";

const InstagramPost = () => {
  return (
    <div className="mt-10 lg:mt-[90px">
      <div className="max-w-[1680px] mx-auto px-8 pt-16 lg:pt-[90px] pb-12">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-jost font-semibold text-primary pb-6">
              @kaylashae_adventures
            </h2>
            <h3 className="text-2xl font-jost font-normal">187 posts</h3>
          </div>
          <div>
            <button className="text-[16px] text-primary font-jost font-medium py-3 px-6 border-2 border-primary">
              Follow Us
            </button>
          </div>
        </div>

        {/* show all post card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] pt-9">
          <div>
            <div className="border-t-2 border-l-2 border-r-2 rounded-md p-[18px]">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className=" lg:text-[25px] font-jost font-bold text-[#47545F] pb-1">
                    kaylashae_adventures
                  </h2>
                  <h3 className="text-sm text-[#8899A8] font-jost font-normal">
                    2 days ago
                  </h3>
                </div>
                <div>
                  <Link>
                    <FaInstagram className="text-2xl" />
                  </Link>
                </div>
              </div>
              <h3 className=" pt-2">
                <span className="text-xl">👣</span>{" "}
                <span className="text-[16px] text-[#1F2A37] font-jost font-normal">
                  See you on the trail
                </span>{" "}
                <span className="text-xl">🥾</span>
              </h3>
              <h3 className="text-[16px] text-[#1F2A37] font-jost font-bold">
                See More
              </h3>
            </div>
            {/* images section */}
            <div className="relative">
              {/* Background Image */}
              <img
                src={img} // Replace with your actual image path
                alt="Mom and daughter hiking"
                className="w-full h-[480px] object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center p-4">
                <h3 className="text-lg font-light">Mommy & Me</h3>
                <h2 className="text-4xl font-extrabold">2025</h2>
                <h1 className="text-3xl font-bold">First Day Hike</h1>

                {/* Date & Location */}
                <span className="mt-4 bg-yellow-400 text-black text-sm font-semibold px-4 py-2 rounded-lg">
                  1 January 2025 | 10AM | Fairfax, Virginia
                </span>
              </div>
            </div>
          </div>

          <div className="border-2">
            <div className="flex justify-between items-center">
              <div>
                <h2 className=" lg:text-[25px] font-jost font-bold text-[#47545F] pb-1">
                  kaylashae_adventures
                </h2>
                <h3 className="text-sm text-[#8899A8] font-jost font-normal">
                  2 days ago
                </h3>
              </div>
              <div>
                <Link>
                  <FaInstagram className="text-2xl" />
                </Link>
              </div>
            </div>
            <h3 className=" pt-2">
              <span className="text-xl">👣</span>{" "}
              <span className="text-[16px] text-[#1F2A37] font-jost font-normal">
                See you on the trail
              </span>{" "}
              <span className="text-xl">🥾</span>
            </h3>
            <h3 className="text-[16px] text-[#1F2A37] font-jost font-bold">
              See More
            </h3>
          </div>
          <div className="border-2">
            <div className="flex justify-between items-center">
              <div>
                <h2 className=" lg:text-[25px] font-jost font-bold text-[#47545F] pb-1">
                  kaylashae_adventures
                </h2>
                <h3 className="text-sm text-[#8899A8] font-jost font-normal">
                  2 days ago
                </h3>
              </div>
              <div>
                <Link>
                  <FaInstagram className="text-2xl" />
                </Link>
              </div>
            </div>
            <h3 className=" pt-2">
              <span className="text-xl">👣</span>{" "}
              <span className="text-[16px] text-[#1F2A37] font-jost font-normal">
                See you on the trail
              </span>{" "}
              <span className="text-xl">🥾</span>
            </h3>
            <h3 className="text-[16px] text-[#1F2A37] font-jost font-bold">
              See More
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramPost;
