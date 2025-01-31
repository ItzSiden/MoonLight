import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServerRules from "@/components/ServerRules";

const Rules = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <ServerRules />
      </div>
      <Footer />
    </div>
  );
};

export default Rules;