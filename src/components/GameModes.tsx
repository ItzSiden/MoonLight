
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Compass, Mountain, Castle } from "lucide-react";

const GameModes = () => {
  const modes = [
    {
      title: "Survival",
      description: "Classic survival experience with custom features",
      image: "/placeholder.svg",
      icon: <Compass className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "SkyBlock",
      description: "Start from a floating island and build your empire",
      image: "/placeholder.svg",
      icon: <Mountain className="w-6 h-6 text-purple-400" />,
    },
    {
      title: "Prison",
      description: "Mine, rank up, and become the richest player",
      image: "/placeholder.svg",
      icon: <Castle className="w-6 h-6 text-yellow-400" />,
    },
  ];

  return (
    <section className="py-16 bg-secondary/5">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12 text-primary"
        >
          Game Modes
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modes.map((mode, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border/30 bg-secondary/10 hover:scale-105">
                <div className="p-4 flex justify-center">{mode.icon}</div>
                <CardHeader>
                  <CardTitle className="text-foreground text-center">{mode.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-center">{mode.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src={mode.image}
                    alt={mode.title}
                    className="w-full h-48 object-cover rounded-md opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameModes;
