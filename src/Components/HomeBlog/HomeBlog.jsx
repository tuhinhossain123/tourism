import BlogShare from "../BlogShare/BlogShare";

const HomeBlog = () => {
  return (
    <div className="mt-10 lg:mt-[90px]">
      <div className="max-w-[1680px] mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-jost font-semibold text-primary pb-9">
          Explore The Blog
        </h2>
        <div>
          <BlogShare></BlogShare>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
