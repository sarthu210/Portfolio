import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import SliddingLine from "./components/SliddingLine";
export default function Home() {
  return (
    <div className="bg-[#252525]">
      <NavBar/>
      <HeroSection/>
      <SliddingLine/>
      <HeroSection/>
    </div>
  );
}
