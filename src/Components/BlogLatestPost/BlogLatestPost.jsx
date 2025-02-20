import { useState } from "react";
import useBlogs from "../../Hooks/useBlogs/useBlogs";

const BlogLatestPost = () => {
  const [blogs] = useBlogs();
  const latestBlogs = blogs?.filter((blog) => blog?.category === "latest");
  const [loadMore, setLoadMore] = useState(false);

  const { keywords } = latestBlogs?.[0] || {};
  const keywordsArray = keywords?.split(",");

  const toggleViewAll = () => {
    setLoadMore(!loadMore);
  };

  return (
    <div className="mt-6 lg:mt-16 bg-[#F9FAFB]">
      <div className="max-w-[1680px] mx-auto py-6 lg:py-16 px-6 lg:px-8">
        {/* Heading Section */}
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-jost font-semibold text-primary text-center pb-4 lg:pb-6">
          Latest Posts
        </h2>
        <h2 className="text-[#47545F] text-[16px] font-jost font-medium space-x-6 pb-8 lg:pb-16 text-center">
          <span>BEGINNER-FRIENDLY HIKES</span>
          <span>ROADTRIPS & GETAWAYS</span>
          <span>SOLO MOM ADVENTURE TRAVEL</span>
          <span>SINGLE MOM LIFE & SELF-CARE</span>
        </h2>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {latestBlogs
            .slice(0, loadMore ? latestBlogs.length : 6)
            .map((blog) => (
              <div key={blog._id} className="relative">
                <img
                  src={blog.img}
                  alt=""
                  className="w-full lg:w-[540px] h-full lg:h-[480px]"
                />
                <div className="bg-white pt-4 lg:pt-9 px-6 pb-4 lg:w-[60%] absolute bottom-6 left-14 md:left-12 lg:left-24 shadow-lg">
                  <h2 className="text-lg lg:text-2xl font-jost font-medium text-primary pb-1 lg:pb-4">
                    {blog.title}
                  </h2>
                  <h3 className="text-[#F9B233] text-[14px] font-jost font-normal pb-2 lg:pb-4">
                    {blog.currentDate}
                  </h3>

                  <div className="flex items-center gap-2">
                    {keywordsArray?.map((keyword) => (
                    <h2
                      key={keyword._id}
                      className="border border-[#47545F] py-1 px-2 lg:px-3 rounded-full text-[#47545F] text-[14px] lg:text-[16px] font-jost font-normal"
                    >
                      {keyword}
                    </h2>
                  ))}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Load More Button */}
        <div className="mt-8 lg:mt-16 flex justify-center">
          <button
            onClick={toggleViewAll}
            className="text-primary text-[16px] font-jost font-medium border-2 border-primary px-6 py-3 hover:bg-primary hover:text-white transition"
          >
            {loadMore ? "View Less" : "Load More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogLatestPost;
