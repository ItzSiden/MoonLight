import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";

const Forums = () => {
  const { toast } = useToast();
  const [selectedForm, setSelectedForm] = useState("");
  const [formData, setFormData] = useState({
    minecraft_username: "",
    discord_tag: "",
    age: "",
    experience: "",
    reason: "",
    additional_info: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted",
      description: "We'll review your application and get back to you soon!",
    });
    setFormData({
      minecraft_username: "",
      discord_tag: "",
      age: "",
      experience: "",
      reason: "",
      additional_info: "",
    });
    setSelectedForm("");
  };

  const applicationTypes = [
    {
      id: "staff",
      title: "Staff Application",
      description: "Apply to become a staff member on our server",
    },
    {
      id: "youtube",
      title: "YouTube Application",
      description: "Apply for YouTube rank (1000+ subscribers required)",
    },
    {
      id: "support",
      title: "Support Ticket",
      description: "Create a support ticket for any issues",
    },
    {
      id: "partner",
      title: "Partnership Application",
      description: "Apply to become a server partner",
    },
    {
      id: "builder",
      title: "Builder Application",
      description: "Apply to join our build team",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-8"
        >
          Application Forums
        </motion.h1>

        {!selectedForm ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applicationTypes.map((type) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="cursor-pointer" onClick={() => setSelectedForm(type.id)}>
                  <CardHeader>
                    <CardTitle>{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-2xl mx-auto"
          >
            <Card>
              <CardHeader>
                <CardTitle>
                  {applicationTypes.find((t) => t.id === selectedForm)?.title}
                </CardTitle>
                <CardDescription>
                  Please fill out all required information below
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label>Minecraft Username</label>
                    <Input
                      required
                      value={formData.minecraft_username}
                      onChange={(e) =>
                        setFormData({ ...formData, minecraft_username: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label>Discord Tag</label>
                    <Input
                      required
                      value={formData.discord_tag}
                      onChange={(e) =>
                        setFormData({ ...formData, discord_tag: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label>Age</label>
                    <Input
                      type="number"
                      required
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label>Experience</label>
                    <Textarea
                      required
                      value={formData.experience}
                      onChange={(e) =>
                        setFormData({ ...formData, experience: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label>Why should we accept you?</label>
                    <Textarea
                      required
                      value={formData.reason}
                      onChange={(e) =>
                        setFormData({ ...formData, reason: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label>Additional Information</label>
                    <Textarea
                      value={formData.additional_info}
                      onChange={(e) =>
                        setFormData({ ...formData, additional_info: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex space-x-4">
                    <Button type="submit">Submit Application</Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setSelectedForm("")}
                    >
                      Back to Forums
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Forums;