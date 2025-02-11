const Subscribe = () => {
  return (
    <div className="mt-8 lg:mt-16">
      <h2 className="text-3xl md:text-4xl lg:text-[42px] font-jost font-semibold text-primary text-center pb-2">
        Join Now
      </h2>
      <h2 className="text-lg text-[#47545F] font-jost font-normal text-center">
        Subscribe to my blog and never <br /> miss an adventure!
      </h2>

      <div className="flex justify-center lg:gap-6 mt-5 lg:mt-9">
        <input
          type="email"
          name="from_email"
          className="input bg-transparent border border-[#47545F] font-normal pt-[13px]  md:pr-[120px] pb-[13px] pl-3 md:pl-[28px] text-primary placeholder:text-[#47545F] focus:outline-none"
          placeholder="Your Email Adress"
        />
        <button className="text-[16px] font-jost font-bold bg-[#005968] text-white py-[13px] px-7">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
