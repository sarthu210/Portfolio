import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import SliddingLine from "./components/SliddingLine";
import SkillSection from "./components/SkillSection";
export default function Home() {
  return (
    <div className="bg-[#252525]">
      <NavBar/>
      <HeroSection/>
      <SliddingLine/>
      <SkillSection/>
    </div>
  );
}
