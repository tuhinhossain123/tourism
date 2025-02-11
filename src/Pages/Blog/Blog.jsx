import BlogLatestPost from "../../Components/BlogLatestPost/BlogLatestPost";
import BlogShare from "../../Components/BlogShare/BlogShare";
import Subscribe from "../../Components/Subscribe/Subscribe";

const Blog = () => {
  return (
    <div className="pt-40  lg:pt-52">
      <div className="max-w-[1680px] mx-auto px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl lg:text-[52px] font-jost font-bold text-primary text-center pb-4 lg:pb-6">
          Create Your Own Adventure
        </h2>
        <h3 className="text-[16px] text-[#1F2A37] font-jost font-medium text-center pb-6 lg:pb-10">
          Kid_friendly adventures and solo mom travel inspo so that you can
          confidently explore <br /> outdoors and create epic memories
        </h3>
        <BlogShare></BlogShare>
      </div>
      <BlogLatestPost></BlogLatestPost>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Blog;
