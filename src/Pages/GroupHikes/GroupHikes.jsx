import GroupHikeGularry from "../../Components/GroupHikeGularry/GroupHikeGularry";
import GroupHikBanner from "../../Components/GroupsHikeBanner/GroupHikBanner";
import MommyMeHike from "../../Components/MommyMeHike/MommyMeHike";
import TestimonialSlider from "../../Components/Testimonial/Testimonial";

const GroupHikes = () => {
  return (
    <div className="pt-36  lg:pt-44">
      <GroupHikBanner></GroupHikBanner>
      <div className="max-w-[1680px] mx-auto px-6 lg:px-8">
        <MommyMeHike></MommyMeHike>
        <GroupHikeGularry></GroupHikeGularry>
        <TestimonialSlider></TestimonialSlider>
      </div>
    </div>
  );
};

export default GroupHikes;
