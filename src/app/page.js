import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import SliddingLine from "./components/SliddingLine";
import SkillSection from "./components/SkillSection";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <HeroSection/>
      <SliddingLine/>
      <SkillSection/>
      <ProjectSection/>
      <Footer/>
    </div>
  );
}
