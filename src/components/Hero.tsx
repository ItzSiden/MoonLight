import { motion } from "framer-motion";
import { MessageSquare, Users } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <div 
        className="absolute inset-0 bg-[url('/lovable-uploads/f511bc2f-5fe1-4dd4-a416-11c29e592197.png')] bg-cover bg-center bg-no-repeat"
        style={{ 
          imageRendering: 'crisp-edges',
          backgroundSize: '100% 100%'
        }}
      />
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-between h-full">
        {/* Moon Loader */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-20 h-20 bg-yellow-100 rounded-full mb-8 shadow-[0_0_50px_#fff] animate-float"
        />

        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center flex-grow"
        >
          <h1 className="text-8xl md:text-9xl font-bold text-white mb-4 tracking-wider" style={{
            textShadow: '0 0 20px #3b82f6, 0 0 40px #3b82f6'
          }}>
            MOON<span className="text-blue-400">LIGHT</span>
          </h1>
        </motion.div>

        {/* Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-6xl mb-8"
        >
          <div className="flex justify-between items-center text-white">
            {/* Server Status */}
            <div className="flex items-center space-x-4 bg-blue-600/20 backdrop-blur-sm px-6 py-3 rounded-lg">
              <Users className="w-6 h-6 text-blue-400" />
              <div className="flex flex-col">
                <span className="text-blue-400 font-medium">PLAY.MOONLIGHT.TOP</span>
                <span className="text-sm text-gray-300">20 PLAYERS ONLINE</span>
              </div>
            </div>

            {/* Discord Status */}
            <div className="flex items-center space-x-4 bg-blue-600/20 backdrop-blur-sm px-6 py-3 rounded-lg">
              <MessageSquare className="w-6 h-6 text-blue-400" />
              <div className="flex flex-col">
                <span className="text-blue-400 font-medium">DISCORD.GG/MOONLIGHT</span>
                <span className="text-sm text-gray-300">110 USERS ONLINE</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.4
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;