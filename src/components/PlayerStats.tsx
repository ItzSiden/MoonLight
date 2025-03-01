
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Users, Clock, Trophy, Star } from "lucide-react";

const PlayerStats = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "1,000+",
      label: "Registered Players",
      color: "text-blue-500",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: "24/7",
      label: "Server Uptime",
      color: "text-green-500",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      value: "50+",
      label: "Weekly Events",
      color: "text-yellow-500",
    },
    {
      icon: <Star className="w-8 h-8" />,
      value: "4.9/5",
      label: "Player Rating",
      color: "text-purple-500",
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
          Server Statistics
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-secondary/10 border-border/30">
                <CardHeader>
                  <div className="flex justify-center">
                    <span className={stat.color}>{stat.icon}</span>
                  </div>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                    {stat.value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlayerStats;
