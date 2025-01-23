import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Users, Star, PinIcon } from "lucide-react";

const Forums = () => {
  const categories = [
    {
      title: "Announcements",
      description: "Important server updates and news",
      icon: Star,
      threads: 15,
      posts: 45,
    },
    {
      title: "General Discussion",
      description: "Chat about anything Minecraft related",
      icon: MessageSquare,
      threads: 124,
      posts: 789,
    },
    {
      title: "Support",
      description: "Get help with any server-related issues",
      icon: Users,
      threads: 67,
      posts: 234,
    },
    {
      title: "Suggestions",
      description: "Share your ideas for server improvement",
      icon: PinIcon,
      threads: 89,
      posts: 356,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold mt-20">Community Forums</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join the discussion with other players and stay updated with the latest server news.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <motion.div
                key={category.title}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="h-full hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-secondary">
                        <category.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle>{category.title}</CardTitle>
                        <CardDescription>{category.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{category.threads} threads</span>
                      <span>{category.posts} posts</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Forums;