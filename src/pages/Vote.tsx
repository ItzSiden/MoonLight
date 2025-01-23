import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThumbsUp, Star, Trophy } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const votingSites = [
  {
    name: "MinecraftServers.org",
    description: "Vote daily to earn 5 diamonds and a voting key!",
    url: "https://minecraftservers.org/vote/ABC123",
    icon: ThumbsUp,
    rewards: ["5 Diamonds", "1 Voting Key", "500 Experience"]
  },
  {
    name: "Planet Minecraft",
    description: "Get exclusive rewards including a rare pet egg!",
    url: "https://planetminecraft.com/server/ABC123/vote",
    icon: Star,
    rewards: ["1 Pet Egg", "3 Diamonds", "1000 Experience"]
  },
  {
    name: "TopG Servers",
    description: "Receive a mystery box with random valuable items!",
    url: "https://topg.org/minecraft-servers/server-ABC123/vote",
    icon: Trophy,
    rewards: ["1 Mystery Box", "2 Diamonds", "750 Experience"]
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">Vote for MoonLight</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Support our server by voting daily! Each vote helps us grow and rewards you with amazing in-game items.
              You can vote once every 24 hours on each platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {votingSites.map((site) => (
              <motion.div
                key={site.name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <site.icon className="h-6 w-6 text-primary" />
                      <CardTitle>{site.name}</CardTitle>
                    </div>
                    <CardDescription>{site.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Rewards:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        {site.rewards.map((reward) => (
                          <li key={reward}>{reward}</li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      className="w-full"
                      onClick={() => handleVote(site.name, site.url)}
                    >
                      Vote Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center bg-secondary/10 rounded-lg p-6 mt-8">
            <h2 className="text-2xl font-bold mb-2">Monthly Top Voters</h2>
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