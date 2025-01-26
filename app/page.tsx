import FAQ from "./_components/lp/faq";
import Header from "./_components/lp/header";
import Hero from "./_components/lp/hero";
import Pricing from "./_components/lp/pricing";
import VideoExplanation from "./_components/lp/video-explanation";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Hero />

      <VideoExplanation />
      <Pricing />
      <FAQ />
    </div>
  );
};

export default Home;
