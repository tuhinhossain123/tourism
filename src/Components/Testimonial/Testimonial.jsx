import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdOutlineStarPurple500 } from "react-icons/md";
import coma from "../../assets/images/coma.png";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const testimonials = [
  {
    text: "Shanice captured the cozy cottage vibes and the stunning natural setting of the Shenandoah Valley perfectly. Her content truly reflects the warmth and charm we strive to offer all our guests... I highly recommend her as a creator.",
    name: "Owner, Wild Azalea House",
  },
  {
    text: "We loved everything you created for us! Couldn't have asked for anything better!",
    name: "Owner, Sunflowers of Lisbon",
  },
  {
    text: "Shanice captured the cozy cottage vibes and the stunning natural setting of the Shenandoah Valley perfectly. Her content truly reflects the warmth and charm we strive to offer all our guests... I highly recommend her as a creator.",
    name: "Cosmo Together",
  },
  {
    text: "Absolutely loved the storytelling in your content! It resonated so well with our audience.",
    name: "Owner, Rustic Haven",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="my-10 lg:my-16 px-4 lg:px-8">
      <h2 className="text-center text-[36px] md:text-[42px] font-jost font-semibold text-primary pb-2">
        Testimonials
      </h2>
      <p className="text-center text-[#47545F] text-lg lg:text-[14px] md:text-[16px] font-jost font-medium pb-6 lg:pb-10">
        Here's what previous partners are saying
      </p>

      {/* Swiper Container */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 1.5, spaceBetween: 10 }, 
            1024: { slidesPerView: 3, spaceBetween: 30 }, 
          }}
          loop
          navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
          }}
          className="relative"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8">
              <div className="bg-[#F3F4F6] border-2 border-[#8899A8] p-4 lg:p-6 rounded-md w-full lg:w-[90%]  h-[209px]">
                <p className="text-[#47545F] text-[14px] md:text-[15px] lg:text-[16px] font-jost font-normal mb-2 lg:mb-4">
                  {testimonial.text}
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg md:text-xl lg:text-2xl font-jost font-semibold text-primary pb-1">
                      {testimonial.name}
                    </h4>
                    <div className="flex items-center gap-1">
                      {Array(5)
                        .fill()
                        .map((_, i) => (
                          <MdOutlineStarPurple500 key={i} className="text-[#FBBF24]" />
                        ))}
                    </div>
                  </div>
                  <div>
                    <img src={coma} alt="" className="w-6 md:w-8 lg:w-10" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-6 space-x-4">
          <button className="prev-button bg-[#DFE4EA] text-white p-5 rounded-full shadow-md hover:bg-primary hover:text-white transition">
            <IoIosArrowRoundBack size={32} />
          </button>
          <button className="next-button bg-[#DFE4EA] text-white p-5 rounded-full shadow-md hover:bg-primary hover:text-white transition">
            <IoIosArrowRoundForward size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
