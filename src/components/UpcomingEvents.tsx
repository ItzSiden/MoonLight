import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Calendar, Trophy, Users, Globe } from "lucide-react";

const UpcomingEvents = () => {
  const events = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "PvP Tournament",
      date: "This Saturday",
      description: "Join our monthly PvP tournament and win amazing prizes!",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Build Competition",
      date: "Next Week",
      description: "Show off your building skills in our themed building contest.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "World Reset",
      date: "In 2 Weeks",
      description: "The survival world will be reset with new exciting features.",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Community Meeting",
      date: "Monthly",
      description: "Voice your opinions and suggestions for server improvements.",
    },
  ];

  return (
    <section className="py-16 bg-teal-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Upcoming Events
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <span className="text-primary">{event.icon}</span>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-primary font-semibold mb-2">{event.date}</p>
                  <p className="text-gray-600">{event.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;