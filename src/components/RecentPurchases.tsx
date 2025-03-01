
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ShoppingBag, User, Clock } from "lucide-react";

const RecentPurchases = () => {
  const purchases = [
    { player: "Steve123", item: "VIP Rank", time: "2 minutes ago" },
    { player: "Alex456", item: "Diamond Kit", time: "5 minutes ago" },
    { player: "Notch789", item: "MVP Rank", time: "10 minutes ago" },
  ];

  return (
    <section className="py-16 bg-secondary/5">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12 text-primary"
        >
          Recent Purchases
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          {purchases.map((purchase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <Card className="bg-secondary/10 border-border/30 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardHeader className="p-4">
                  <CardTitle className="text-lg flex justify-between items-center">
                    <div className="flex items-center">
                      <User className="w-5 h-5 mr-2 text-primary" />
                      <span className="font-minecraft text-primary">{purchase.player}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{purchase.time}</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex items-center">
                    <ShoppingBag className="w-4 h-4 mr-2 text-green-500" />
                    <span className="text-foreground">
                      Purchased: <span className="text-green-400 font-medium">{purchase.item}</span>
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPurchases;
