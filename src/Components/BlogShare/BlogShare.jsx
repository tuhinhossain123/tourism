import { Link } from "react-router-dom";
import blogImg2 from "../../assets/images/BImg2.png";
import blogImg3 from "../../assets/images/Bimg3.png";
import blogImg4 from "../../assets/images/Bimg4.png";
import { FiArrowUpRight } from "react-icons/fi";
import useBlogs from "../../Hooks/useBlogs/useBlogs";

const BlogShare = () => {
  const [blogs] = useBlogs();
 
  const { currentDate, title, img, keywords, description } = blogs?.[0] || {};
  const keywordsArray = keywords?.split(",");
  return (
    <div className="flex flex-col lg:flex-row gap-7">
      {/* left side */}
      <div className="w-full lg:w-[50%]">
        <img src={img} alt="" className="w-full object-cover" />
        <h4 className="text-[#F9B233] text-[14px] font-jost font-normal pt-4">
          {currentDate}
        </h4>

        <div className="flex justify-between items-center">
          <h2 className="text-[22px] font-jost font-medium text-primary pt-2">
            {title}
          </h2>
          <Link>
            <FiArrowUpRight className="text-xl text-primary font-medium"></FiArrowUpRight>
          </Link>
        </div>
        <p className="text-[#1F2A37] text-lg font-jost font-normal">
          {description}
        </p>

        <div className="flex items-center gap-2 pt-[18px]">
          {keywordsArray?.map((keyword) => (
            <h2
              key={keyword._id}
              className="border border-[#47545F] py-1 px-3 rounded-full text-[#47545F] text-[16px] font-jost font-normal"
            >
              {keyword}
            </h2>
          ))}
        </div>
      </div>

      {/* right side */}
      <div className="lg:w-[50%] space-y-7">
        {/* card-1 */}
        {blogs.slice(1,4)?.map((blog) => (
          <div
            key={blog._id}
            className="flex flex-col lg:flex-row gap-5 lg:gap-7"
          >
            <div className="w-full lg:w-[30%]">
              <img
                src={blog?.img}
                alt=""
                className="w-full lg:w-[250px] lg:h-[230px] object-cover"
              />
            </div>
            <div className="lg:w-[70%]">
              <h4 className="text-[#F9B233] text-[14px] font-jost font-normal pt-1">
                {blog?.currentDate}
              </h4>

              <div className="flex justify-between items-center">
                <h2 className="text-[22px] font-jost font-medium text-primary pt-2">
                  {blog?.title}
                </h2>
                <Link>
                  <FiArrowUpRight className="text-xl text-primary font-medium "></FiArrowUpRight>
                </Link>
              </div>
              <p className="text-[#1F2A37] text-lg font-jost font-normal">
                {blog?.description}
              </p>

              <div className="flex items-center gap-2 pt-[18px]">
                {keywordsArray?.map((keyword) => (
                  <h2
                    key={keyword._id}
                    className="border border-[#47545F] py-1 px-3 rounded-full text-[#47545F] text-[16px] font-jost font-normal"
                  >
                    {keyword}
                  </h2>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogShare;
