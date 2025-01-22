import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import GameModes from "@/components/GameModes";
import RecentPurchases from "@/components/RecentPurchases";
import OnlineStaff from "@/components/OnlineStaff";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <GameModes />
      <RecentPurchases />
      <OnlineStaff />
      <Footer />
    </div>
  );
};

export default Index;