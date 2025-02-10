import connect from "../../assets/images/Screenshot (141).png";
const Connect = () => {
  return (
    <div className="my-10 lg:my-[108px]">
      <div className="max-w-[1680px] mx-auto px-6 lg:px-8 flex flex-col justify-between gap-11">
        <div className="w-full lg:w-[50%]">
          <img
            src={connect}
            alt=""
            className="w-full lg:w-[818px] lg:h-[600px] object-cover"
          />
        </div>
        <div className="w-full lg:w-[50%]">
          <h2 className="text-4xl md:text-4xl lg:text-[42px] font-jost font-bold text-primary pb-11">
            Lets Connect! We'd love to share and adventure with you
          </h2>
          <div className="space-y-6  lg:space-y-6">
            <input
              type="text"
              name="name"
              className="input w-full bg-transparent border border-[#D1D5DB] text-[16px] font-bold  pl-5 py-5 text-black placeholder:text-[#637381] focus:outline-none"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              className="input w-full bg-transparent border border-[#D1D5DB] text-[16px] font-bold  pl-5 py-5 text-black placeholder:text-[#637381] focus:outline-none"
              placeholder="Email"
            />
            <textarea
              type="text"
              name="message"
              id=""
              cols="7"
              rows="7"
              placeholder="Message"
              className="input w-full bg-transparent border border-[#D1D5DB] text-[16px] font-bold  pl-5 py-5 text-black placeholder:text-[#637381] focus:outline-none"
            ></textarea>
          </div>
          <button className="text-[16px] mt-6 font-jost font-bold bg-[#005968] text-white py-[13px] px-7">
            Contact Us Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Connect;
