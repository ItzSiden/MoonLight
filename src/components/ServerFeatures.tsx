import { motion } from "framer-motion";
import { Shield, Sword, Users, Crown, Gem, Gift } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const ServerFeatures = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Anti-Cheat Protection",
      description: "Advanced protection system to ensure fair gameplay for everyone"
    },
    {
      icon: <Sword className="w-8 h-8 text-primary" />,
      title: "Custom Enchantments",
      description: "Unique enchantments exclusive to our server"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Active Community",
      description: "Join thousands of players in our friendly community"
    },
    {
      icon: <Crown className="w-8 h-8 text-primary" />,
      title: "Weekly Events",
      description: "Participate in exciting events with amazing rewards"
    },
    {
      icon: <Gem className="w-8 h-8 text-primary" />,
      title: "Custom Economy",
      description: "Unique economy system with player shops and trading"
    },
    {
      icon: <Gift className="w-8 h-8 text-primary" />,
      title: "Daily Rewards",
      description: "Log in daily to claim exclusive rewards and bonuses"
    }
  ];

  return (
    <section className="py-16 bg-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Server Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover what makes our server unique and exciting for all players
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-center text-xl">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServerFeatures;