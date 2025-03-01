
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const GameModes = () => {
  const modes = [
    {
      title: "Survival",
      description: "Classic survival experience with custom features",
      image: "/placeholder.svg",
    },
    {
      title: "SkyBlock",
      description: "Start from a floating island and build your empire",
      image: "/placeholder.svg",
    },
    {
      title: "Prison",
      description: "Mine, rank up, and become the richest player",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section className="py-16 bg-background/60">
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
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-border bg-secondary/20">
                <CardHeader>
                  <CardTitle className="text-foreground">{mode.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{mode.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src={mode.image}
                    alt={mode.title}
                    className="w-full h-48 object-cover rounded-md"
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
