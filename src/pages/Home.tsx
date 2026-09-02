import Couple from "../components/Couple";
import GuideLines from "../components/GuideLines";
import Hero from "../components/Hero";
import Letter from "../components/Letter";

const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Hero />
      <Couple />
      <Letter />
      <GuideLines />
    </div>
  );
};

export default Home;
