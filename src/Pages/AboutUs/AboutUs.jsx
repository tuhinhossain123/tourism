import { IoArrowForwardSharp } from "react-icons/io5";
import aboutImg from "../../assets/images/about.png";
const AboutUs = () => {
  return (
    <div className="pt-40  lg:pt-44">
      <div className="max-w-[1680px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
          <div className="w-full lg:w-[50%]">
            <h3 className="text-3xl text-[#1F2A37] font-jost font-semibold pb-4">
              Meet Shaneice
            </h3>
            <h2 className="text-3xl md:text-4xl lg:text-[52px] font-jost font-bold text-primary lg:leading-[1.1] pb-6">
              Creator of <br /> KayLashae_Adventures
            </h2>
            <div className="space-y-5">
              <p className="text-[#1F2A37] text-lg font-jost font-normal text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                ratione consequuntur tenetur quam iure esse quae dolore quasi
                distinctio laudantium laborum, eveniet aperiam vitae, eos,
                labore fugit sunt ut. Doloremque cupiditate consectetur facere
                doloribus molestias! Quas nemo voluptate, officia inventore ut
                cupiditate quasi commodi repellendus facere? Impedit maxime sed
                earum.  officia inventore ut
                cupiditate quasi commodi repellendus facere? Impedit maxime sed
              </p>
              <p className="text-[#1F2A37] text-lg font-jost font-normal text-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis ut velit facere quaerat aut et perspiciatis ex
                mollitia incidunt fugit, dolore voluptas eaque est nulla vero
                sequi voluptate minima esse?  dolore voluptas eaque est nulla vero
                sequi voluptate minima esse?
              </p>
              <p className="text-[#1F2A37] text-lg font-jost font-normal text-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis ut velit facere quaerat aut et perspiciatis ex
                mollitia incidunt fugit, dolore voluptas eaque est nulla vero
                sequi voluptate minima esse?  dolore voluptas eaque est nulla vero
                sequi voluptate minima esse?
              </p>
              <p className="text-[#1F2A37] text-lg font-jost font-normal text-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis ut velit facere quaerat aut et perspiciatis ex
                mollitia incidunt fugit, dolore voluptas eaque est nulla vero
                sequi voluptate minima esse?  dolore voluptas eaque est nulla vero
                sequi voluptate minima esse?
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <img
              src={aboutImg}
              alt=""
              className="w-full lg:w-[800px] lg:h-[800px] object-cover"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button className="text-[14px] md:text-2xl font-jost font-medium text-primary border-2 border-primary py-3 px-4 md:px-6 flex justify-center items-center gap-3 my-8 md:my-16 hover:bg-primary hover:text-white transition">
            Create Your Own Epic Adventure Today!{" "}
            <IoArrowForwardSharp></IoArrowForwardSharp>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
