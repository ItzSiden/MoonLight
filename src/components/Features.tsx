import { motion } from "framer-motion";
import { Shield, Sword, Users, Trophy } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Anti-Cheat Protection",
      description: "Advanced protection against cheaters for fair gameplay",
    },
    {
      icon: <Sword className="w-8 h-8" />,
      title: "Custom Items",
      description: "Unique items and equipment exclusive to MoonLight",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Active Community",
      description: "Join thousands of players from Bangladesh",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Regular Events",
      description: "Participate in weekly events and win awesome prizes",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Server Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg border border-teal-100 hover:border-primary transition-colors duration-300"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;