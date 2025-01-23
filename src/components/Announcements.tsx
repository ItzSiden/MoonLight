import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Megaphone, Star, Calendar } from "lucide-react";

const Announcements = () => {
  const announcements = [
    {
      title: "Weekend Event",
      date: "This Weekend",
      description: "Double XP and special rewards for all players!",
      icon: <Calendar className="w-6 h-6" />,
      type: "event"
    },
    {
      title: "New Season",
      date: "Coming Soon",
      description: "Get ready for new challenges and rewards in Season 5!",
      icon: <Star className="w-6 h-6" />,
      type: "update"
    },
    {
      title: "Server Maintenance",
      date: "Next Tuesday",
      description: "Brief downtime for performance improvements.",
      icon: <Megaphone className="w-6 h-6" />,
      type: "maintenance"
    }
  ];

  return (
    <section className="py-16 bg-teal-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Latest Announcements
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {announcements.map((announcement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">{announcement.icon}</span>
                      <CardTitle className="text-lg">{announcement.title}</CardTitle>
                    </div>
                    <span className="text-sm text-gray-500">{announcement.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{announcement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Announcements;