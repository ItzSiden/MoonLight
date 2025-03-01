
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Shield, Crown, HeartPulse } from "lucide-react";

const OnlineStaff = () => {
  const staff = [
    { name: "AdminAlex", role: "Owner", status: "online", icon: <Crown className="w-5 h-5" /> },
    { name: "ModJohn", role: "Moderator", status: "online", icon: <Shield className="w-5 h-5" /> },
    { name: "HelperSarah", role: "Helper", status: "online", icon: <HeartPulse className="w-5 h-5" /> },
  ];

  return (
    <section className="py-16 bg-secondary/5">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12 text-primary neon-glow"
        >
          Online Staff
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {staff.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-secondary/10 border-border/30 neon-box hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-3">
                    <span className="text-primary">{member.icon}</span>
                  </div>
                  <CardTitle className="text-center text-foreground">{member.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-primary font-semibold mb-2">{member.role}</p>
                  <div className="flex items-center justify-center mt-2">
                    <div className="relative">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <div className="w-2 h-2 bg-green-500 animate-ping opacity-75 rounded-full absolute top-0 left-0"></div>
                    </div>
                    <span className="text-sm text-muted-foreground">Online</span>
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

export default OnlineStaff;
