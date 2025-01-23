import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const staffMembers = [
  {
    name: "DragonSlayer",
    role: "Owner",
    joinDate: "Jan 2023",
    avatar: "/placeholder.svg",
    description: "Server founder and lead developer",
    discord: "DragonSlayer#0001"
  },
  {
    name: "PixelMaster",
    role: "Admin",
    joinDate: "Mar 2023",
    avatar: "/placeholder.svg",
    description: "Community manager and event organizer",
    discord: "PixelMaster#1234"
  },
  {
    name: "BuilderPro",
    role: "Moderator",
    joinDate: "May 2023",
    avatar: "/placeholder.svg",
    description: "In-game support and player assistance",
    discord: "BuilderPro#5678"
  },
  {
    name: "CraftQueen",
    role: "Helper",
    joinDate: "Jul 2023",
    avatar: "/placeholder.svg",
    description: "New player guidance and support",
    discord: "CraftQueen#9012"
  }
];

const Staff = () => {
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
            <h1 className="text-4xl font-bold text-primary mt-20">Our Staff Team</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated team behind MoonLight. Our staff members work hard to ensure 
              you have the best possible experience on our server.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {staffMembers.map((member) => (
              <motion.div
                key={member.name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex flex-col items-center text-center">
                      <img 
                        src={member.avatar} 
                        alt={member.name}
                        className="w-24 h-24 rounded-full mb-4"
                      />
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <span className="text-sm font-medium text-primary mt-1">
                        {member.role}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      {member.description}
                    </p>
                    <div className="text-sm">
                      <p>Member since: {member.joinDate}</p>
                      <p className="mt-1">Discord: {member.discord}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center bg-secondary/10 rounded-lg p-6 mt-8">
            <h2 className="text-2xl font-bold mb-2">Join Our Team</h2>
            <p className="text-muted-foreground">
              Interested in becoming a staff member? Applications are currently open for Helper positions. 
              Join our Discord server to learn more about the requirements and application process.
            </p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Staff;