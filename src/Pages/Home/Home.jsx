import AdventureEssential from "../../Components/AdventureEssential/AdventureEssential";
import Banner from "../../Components/Banner/Banner";
import Galurray from "../../Components/Galurry/Galurray";
import HikingCommunity from "../../Components/HikingCommunity/HikingCommunity";
import HomeBlog from "../../Components/HomeBlog/HomeBlog";
import InstagramPost from "../../Components/InstagramPost/InstagramPost";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeBlog></HomeBlog>
      <HikingCommunity></HikingCommunity>
      <AdventureEssential></AdventureEssential>
      <Galurray></Galurray>
      <InstagramPost></InstagramPost>
    </div>
  );
};

export default Home;
