import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Award, Target, Zap, Crown } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "First Steps",
      description: "Join the server and complete the tutorial",
      icon: <Target className="w-6 h-6" />,
      reward: "500 coins"
    },
    {
      title: "Master Builder",
      description: "Build 10 amazing structures",
      icon: <Crown className="w-6 h-6" />,
      reward: "Special Building Kit"
    },
    {
      title: "Community Hero",
      description: "Help 50 new players",
      icon: <Award className="w-6 h-6" />,
      reward: "Unique Title"
    },
    {
      title: "Speed Runner",
      description: "Complete all challenges under 24 hours",
      icon: <Zap className="w-6 h-6" />,
      reward: "Exclusive Mount"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Server Achievements
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <span className="text-primary">{achievement.icon}</span>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{achievement.description}</p>
                  <div className="text-sm font-semibold text-primary">
                    Reward: {achievement.reward}
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

export default Achievements;