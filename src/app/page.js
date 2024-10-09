import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import SliddingLine from "./components/SliddingLine";
import SkillSection from "./components/SkillSection";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";
import ParallaxText from "./components/ScrollMotion";
import { Education } from "./components/Education";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <HeroSection/>
      <ParallaxText baseVelocity={-5}>Computers are fast</ParallaxText>
      <ParallaxText baseVelocity={5}>programmers keep it slow</ParallaxText>
      <ProjectSection/>
      <SkillSection/>
      <Footer/>
    </div>
  );
}
