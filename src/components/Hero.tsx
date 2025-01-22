import { motion } from "framer-motion";
import ServerStatus from "./ServerStatus";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-teal-50 pt-16">
      <div 
        className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10"
        style={{ backgroundBlendMode: 'overlay' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-teal-50/80" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.h1 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-gray-900"
          >
            Moon<span className="text-primary">Light</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Join the ultimate Minecraft experience in Bangladesh
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200">
              Play Now
            </button>
            <button className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors duration-200">
              Learn More
            </button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 max-w-md mx-auto"
          >
            <ServerStatus />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;