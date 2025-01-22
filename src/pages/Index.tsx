import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import GameModes from "@/components/GameModes";
import RecentPurchases from "@/components/RecentPurchases";
import OnlineStaff from "@/components/OnlineStaff";
import Footer from "@/components/Footer";
import ServerRules from "@/components/ServerRules";
import UpcomingEvents from "@/components/UpcomingEvents";
import PlayerStats from "@/components/PlayerStats";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <PlayerStats />
      <GameModes />
      <ServerRules />
      <UpcomingEvents />
      <RecentPurchases />
      <OnlineStaff />
      <Footer />
    </div>
  );
};

export default Index;