import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdOutlineStarPurple500 } from "react-icons/md";
import coma from "../../assets/images/coma.png"
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const testimonials = [
  {
    text: "Shanice captured the cozy cottage vibes and the stunning natural setting of the Shenandoah Valley perfectly.Her content truly reflects the warmth and charm strive to offer all our guests...I highly recommend her as a creator",
    name: "Owner, Wild Azalea House",
  },
  {
    text: "We loved everything you created for us! Couldn't have asked for anything better!",
    name: "Owner, Sunflowers of Lisbon",
  },
  {
    text: "Shanice captured the cozy cottage vibes and the stunning natural setting of the Shenandoah Valley perfectly.Her content truly reflects the warmth and charm strive to offer all our guests...I highly recommend her as a creator",
    name: "Cosmo Together",
  },
  {
    text: "Absolutely loved the storytelling in your content! It resonated so well with our audience.",
    name: "Owner, Rustic Haven",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="my-10 lg:my-16">
      <h2 className="text-center text-[42px] font-jost font-semibold text-primary pb-2">
        Testimonials
      </h2>
      <p className="text-center text-[#47545F] text-[16px] font-jost font-medium pb-8 lg:pb-11">
        Here's what previous partners are saying
      </p>

      {/* Swiper Container */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 }, 
            1024: { slidesPerView: 3 }, 
          }}
          loop
          navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
          }}
          className="relative"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex justify-center gap-5 lg:gap-9">
              <div className="bg-[#F3F4F6] border-2 border-[#8899A8] p-6 rounded-md w-[482px] h-[209px]">
                <p className="text-[#47545F] text-[16px] font-jost font-normal mb-4">
                  {testimonial.text}
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-2xl font-jost font-semibold text-primary pb-1">
                      {testimonial.name}
                    </h4>
                    <div className="flex items-center gap-1">
                      <MdOutlineStarPurple500 className="text-[#FBBF24]"></MdOutlineStarPurple500>
                      <MdOutlineStarPurple500 className="text-[#FBBF24]"></MdOutlineStarPurple500>
                      <MdOutlineStarPurple500 className="text-[#FBBF24]"></MdOutlineStarPurple500>
                      <MdOutlineStarPurple500 className="text-[#FBBF24]"></MdOutlineStarPurple500>
                      <MdOutlineStarPurple500 className="text-[#FBBF24]"></MdOutlineStarPurple500>
                    </div>
                  </div>
                  <div>
                  <img src={coma} alt="" className="w-10"/>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-6 space-x-4">
          <button className="prev-button bg-[#DFE4EA] text-white p-5 rounded-full shadow-md">
            <IoIosArrowRoundBack size={30} />
          </button>
          <button className="next-button bg-[#DFE4EA] text-white p-5 rounded-full shadow-md">
            <IoIosArrowRoundForward size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
