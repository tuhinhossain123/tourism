import AdventureEssential from "../../Components/AdventureEssential/AdventureEssential";
import Galurray from "../../Components/Galurry/Galurray";
import HikingCommunity from "../../Components/HikingCommunity/HikingCommunity";
import InstagramPost from "../../Components/InstagramPost/InstagramPost";

const Home = () => {
  return (
    <div>
      <HikingCommunity></HikingCommunity>
      <AdventureEssential></AdventureEssential>
      <Galurray></Galurray>
      <InstagramPost></InstagramPost>
    </div>
  );
};

export default Home;
