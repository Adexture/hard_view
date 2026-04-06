import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import InteractiveVan from "@/components/InteractiveVan";
import { CTASections, Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-obsidian">
      {/* Global Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-volt/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-flare/5 to-transparent" />
      </div>

      {/* Main Layout */}
      <Navbar />
      
      <div className="relative z-10 space-y-12">
        <HeroSection />
        
        <ExecutiveSummary />
        
        <InteractiveVan />
        
        <CTASections />
        
        <Footer />
      </div>
    </main>
  );
}
