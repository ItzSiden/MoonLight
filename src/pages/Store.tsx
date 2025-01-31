import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServerFeatures from "@/components/ServerFeatures";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Diamond, Crown, Sword, Shield, Gem, Star } from "lucide-react";

const Store = () => {
  const storeItems = [
    {
      id: 1,
      name: "VIP Rank",
      description: "Get exclusive perks and features with our VIP rank!",
      price: 9.99,
      features: ["Custom Chat Color", "Access to /fly", "5 Home Points", "Priority Queue"],
      icon: <Crown className="w-8 h-8 text-yellow-500" />,
      popular: true,
    },
    {
      id: 2,
      name: "Diamond Kit",
      description: "Start your adventure with a complete set of diamond gear!",
      price: 14.99,
      features: ["Full Diamond Armor", "Diamond Tools", "64 Golden Apples", "32 Ender Pearls"],
      icon: <Diamond className="w-8 h-8 text-blue-500" />,
      popular: false,
    },
    {
      id: 3,
      name: "Warrior Bundle",
      description: "Everything you need for PvP dominance!",
      price: 19.99,
      features: ["Enchanted Weapons", "Custom Particle Effects", "Special Kill Messages", "Warrior Title"],
      icon: <Sword className="w-8 h-8 text-red-500" />,
      popular: false,
    },
    {
      id: 4,
      name: "Protection Package",
      description: "Keep your base safe with advanced protection tools!",
      price: 24.99,
      features: ["50 Claim Blocks", "Anti-Grief Tools", "Lock Chests", "Region Flags"],
      icon: <Shield className="w-8 h-8 text-green-500" />,
      popular: false,
    },
    {
      id: 5,
      name: "Premium Bundle",
      description: "The ultimate package for serious players!",
      price: 49.99,
      features: ["All Previous Perks", "Custom Pet", "Monthly Rewards", "Special Discord Role"],
      icon: <Gem className="w-8 h-8 text-purple-500" />,
      popular: true,
    },
    {
      id: 6,
      name: "Booster Pack",
      description: "Boost your gameplay with enhanced rates!",
      price: 29.99,
      features: ["2x XP Boost", "2x Drop Rates", "Daily Rewards", "Special Effects"],
      icon: <Star className="w-8 h-8 text-orange-500" />,
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="container mx-auto px-4 py-24"
      >
        <div className="text-center space-y-4">
          <motion.h1 
            className="text-4xl font-bold text-primary"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Server Store
          </motion.h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Support our server and enhance your gameplay experience with exclusive ranks, items, and features.
            All purchases help us maintain and improve the server!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {storeItems.map((item) => (
            <Card key={item.id} className="relative">
              {item.popular && (
                <Badge className="absolute -top-2 -right-2 bg-primary">
                  Popular
                </Badge>
              )}
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <CardTitle className="text-center">{item.name}</CardTitle>
                <CardDescription className="text-center">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {item.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col items-center">
                <p className="text-2xl font-bold mb-4">${item.price}</p>
                <Button className="w-full">Purchase Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Store;
