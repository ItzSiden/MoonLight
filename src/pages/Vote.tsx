import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThumbsUp, Star, Trophy, Gift } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const votingSites = [
  {
    name: "MinecraftServers.org",
    description: "Vote daily to earn amazing rewards!",
    url: "https://minecraftservers.org/vote/ABC123",
    icon: ThumbsUp,
    rewards: ["5 Diamonds", "1 Voting Key", "500 Experience"],
    popular: true
  },
  {
    name: "Planet Minecraft",
    description: "Get exclusive rewards including a rare pet egg!",
    url: "https://planetminecraft.com/server/ABC123/vote",
    icon: Star,
    rewards: ["1 Pet Egg", "3 Diamonds", "1000 Experience"],
    popular: false
  },
  {
    name: "TopG Servers",
    description: "Receive a mystery box with valuable items!",
    url: "https://topg.org/minecraft-servers/server-ABC123/vote",
    icon: Trophy,
    rewards: ["1 Mystery Box", "2 Diamonds", "750 Experience"],
    popular: false
  },
  {
    name: "Minecraft MP",
    description: "Vote for special cosmetic rewards!",
    url: "https://minecraft-mp.com/server/ABC123/vote",
    icon: Gift,
    rewards: ["1 Cosmetic Key", "2 Diamonds", "500 Experience"],
    popular: false
  }
];

const Vote = () => {
  const handleVote = (site: string, url: string) => {
    window.open(url, '_blank');
    toast.success(`Opening ${site} in a new tab!`, {
      description: "Don't forget to come back and vote on other sites too!"
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <motion.h1 
              className="text-4xl font-bold text-primary"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Vote for MoonLight
            </motion.h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Support our server by voting daily! Each vote helps us grow and rewards you with amazing in-game items.
              You can vote once every 24 hours on each platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {votingSites.map((site) => (
              <motion.div
                key={site.name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="h-full relative overflow-hidden border-2 hover:border-primary/50 transition-colors bg-white">
                  {site.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm rounded-bl-lg">
                      Popular
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-primary/10">
                        <site.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{site.name}</CardTitle>
                    </div>
                    <CardDescription>{site.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-primary/5 rounded-lg p-4">
                      <h4 className="font-medium mb-2 text-primary">Rewards:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        {site.rewards.map((reward) => (
                          <li key={reward} className="mb-1">{reward}</li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 transition-colors"
                      onClick={() => handleVote(site.name, site.url)}
                    >
                      Vote Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center bg-primary/5 rounded-lg p-6 mt-8 border-2 border-primary/20">
            <h2 className="text-2xl font-bold mb-2 text-primary">Monthly Top Voters</h2>
            <p className="text-muted-foreground">
              Top 3 voters each month receive special rewards including exclusive tags, 
              custom pets, and bonus voting rewards for the following month!
            </p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Vote;