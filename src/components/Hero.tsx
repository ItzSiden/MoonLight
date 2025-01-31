import { motion } from "framer-motion";
import ServerStatus from "./ServerStatus";
import { MessageSquare } from "lucide-react";

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
      <div className="absolute inset-0 bg-black/40" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Server Status Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between w-full max-w-4xl bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white"
          >
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-lg">4 PLAYERS ONLINE</span>
            </div>
            <span className="text-lg">PLAY.MOONLIGHT.COM</span>
            <a 
              href="https://discord.gg/moonlight" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-primary transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              <span>DISCORD.GG/MOONLIGHT</span>
            </a>
          </motion.div>

          {/* Server Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="my-12"
          >
            <h1 className="text-7xl md:text-8xl font-bold text-white">
              Moon<span className="text-teal-400">Light</span>
            </h1>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center space-y-6"
          >
            <button className="px-8 py-3 bg-teal-500 text-white text-lg rounded-lg hover:bg-teal-600 transition-colors duration-200 transform hover:scale-105">
              PLAY NOW
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;