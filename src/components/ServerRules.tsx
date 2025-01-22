import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Shield, UserX, MessageSquare, Sword } from "lucide-react";

const ServerRules = () => {
  const rules = [
    {
      icon: <UserX className="w-6 h-6" />,
      title: "No Harassment",
      description: "Be respectful to all players. Harassment or bullying will not be tolerated.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Appropriate Language",
      description: "Keep chat family-friendly. No swearing or inappropriate content.",
    },
    {
      icon: <Sword className="w-6 h-6" />,
      title: "Fair Play",
      description: "No hacking, cheating, or exploiting bugs. Play fair and have fun!",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Protect Privacy",
      description: "Never share personal information. Keep yourself and others safe.",
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
          Server Rules
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <span className="text-primary">{rule.icon}</span>
                    <CardTitle className="text-lg">{rule.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{rule.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServerRules;