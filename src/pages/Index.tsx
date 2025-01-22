import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import GameModes from "@/components/GameModes";
import RecentPurchases from "@/components/RecentPurchases";
import OnlineStaff from "@/components/OnlineStaff";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <GameModes />
      <RecentPurchases />
      <OnlineStaff />
    </div>
  );
};

export default Index;