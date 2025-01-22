import { motion } from "framer-motion";
import ServerStatus from "./ServerStatus";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-teal-50 pt-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
            Moon<span className="text-primary">Light</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join the ultimate Minecraft experience in Bangladesh
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200">
              Play Now
            </button>
            <button className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors duration-200">
              Learn More
            </button>
          </div>
          <div className="mt-8 max-w-md mx-auto">
            <ServerStatus />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;