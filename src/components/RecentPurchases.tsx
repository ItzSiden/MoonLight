import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const RecentPurchases = () => {
  const purchases = [
    { player: "Steve123", item: "VIP Rank", time: "2 minutes ago" },
    { player: "Alex456", item: "Diamond Kit", time: "5 minutes ago" },
    { player: "Notch789", item: "MVP Rank", time: "10 minutes ago" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12"
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
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg flex justify-between items-center">
                    <span className="font-minecraft text-primary">{purchase.player}</span>
                    <span className="text-sm text-gray-500">{purchase.time}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  Purchased: {purchase.item}
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