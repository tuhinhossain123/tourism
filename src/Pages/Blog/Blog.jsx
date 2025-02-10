import BlogShare from "../../Components/BlogShare/BlogShare";

const Blog = () => {
  return (
    <div className="mt-6 lg:mt-10">
      <div className="max-w-[1680px] mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-[52px] font-jost font-bold text-primary text-center pb-6">
          Create Your Own Adventure
        </h2>
        <h3 className="text-[16px] text-[#1F2A37] font-jost font-medium text-center pb-10">
          Kid_friendly adventures and solo mom travel inspo so that you can
          confidently explore <br /> outdoors and create epic memories
        </h3>
        <BlogShare></BlogShare>
      </div>
    </div>
  );
};

export default Blog;
