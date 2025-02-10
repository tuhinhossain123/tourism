import AdventureEssential from "../../Components/AdventureEssential/AdventureEssential";
import Blog from "../../Components/Blog/Blog";
import Galurray from "../../Components/Galurry/Galurray";
import HikingCommunity from "../../Components/HikingCommunity/HikingCommunity";
import InstagramPost from "../../Components/InstagramPost/InstagramPost";

const Home = () => {
  return (
    <div>
      <Blog></Blog>
      <HikingCommunity></HikingCommunity>
      <AdventureEssential></AdventureEssential>
      <Galurray></Galurray>
      <InstagramPost></InstagramPost>
    </div>
  );
};

export default Home;
