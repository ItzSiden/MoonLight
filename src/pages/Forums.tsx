
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Forums = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-primary mb-6">Forums</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Our forums are coming soon! Check back later to join discussions, share your builds, and connect with other players.
          </p>
          <div className="p-12 rounded-lg border border-border bg-secondary/20 max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Forum Features</h2>
            <ul className="text-left list-disc list-inside space-y-2 text-muted-foreground">
              <li>Player discussions and support</li>
              <li>Staff announcements</li>
              <li>Build showcases</li>
              <li>Trading marketplace</li>
              <li>Server suggestions</li>
              <li>Player events organization</li>
            </ul>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Forums;
