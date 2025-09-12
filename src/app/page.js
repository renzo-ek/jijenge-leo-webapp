import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProgramsSection from "./components/ProgramsSection";
import EmailSection from "./components/EmailSection";
import RateCardSection from "./components/RateCardSect";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <ProgramsSection />
        <RateCardSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
