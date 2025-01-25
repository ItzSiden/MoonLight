import { motion } from "framer-motion";
import ServerStatus from "./ServerStatus";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-[url('/lovable-uploads/f511bc2f-5fe1-4dd4-a416-11c29e592197.png')] bg-cover bg-center bg-no-repeat"
        style={{ 
          imageRendering: 'crisp-edges',
          backgroundSize: '100% 100%'
        }}
      />
      <div className="absolute inset-0 bg-black/20" /> {/* Reduced overlay opacity for better image visibility */}
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
            className="text-5xl md:text-7xl font-bold text-white"
          >
            Moon<span className="text-teal-400">Light</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Join the ultimate Minecraft experience in Bangladesh
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            <button className="px-8 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors duration-200">
              Play Now
            </button>
            <button className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors duration-200">
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