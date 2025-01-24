import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Shield, Youtube, HelpCircle, Users, Gamepad2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const applicationTypes = [
  {
    title: "Staff Application",
    description: "Apply to join our server staff team",
    icon: Shield,
    fields: [
      "Minecraft Username",
      "Age",
      "Discord Username",
      "Previous Experience",
      "Why do you want to be staff?",
      "How many hours can you dedicate per week?",
    ],
  },
  {
    title: "YouTube Application",
    description: "Apply for YouTube rank on our server",
    icon: Youtube,
    fields: [
      "Channel URL",
      "Subscriber Count",
      "Content Type",
      "Upload Schedule",
      "How will you promote our server?",
    ],
  },
  {
    title: "Support Request",
    description: "Submit a support ticket for assistance",
    icon: HelpCircle,
    fields: [
      "Issue Type",
      "Description of Problem",
      "Steps to Reproduce",
      "When did this occur?",
    ],
  },
  {
    title: "Partner Application",
    description: "Apply to become a server partner",
    icon: Users,
    fields: [
      "Organization/Server Name",
      "Type of Partnership",
      "What can you offer?",
      "What are you looking for?",
      "Contact Information",
    ],
  },
  {
    title: "Builder Application",
    description: "Join our building team",
    icon: Gamepad2,
    fields: [
      "Building Portfolio",
      "Years of Experience",
      "Building Style",
      "Available Hours",
      "Previous Projects",
    ],
  },
];

const Forums = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted",
      description: "We'll review your application and get back to you soon!",
    });
    setSelectedType(null);
    setFormData({});
  };

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
          <div className="text-center space-y-4 mt-20">
            <motion.h1 
              className="text-4xl font-bold text-primary"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Application Forums
            </motion.h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose an application type below to get started. Make sure to fill out all required information.
            </p>
          </div>

          {!selectedType ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applicationTypes.map((type) => (
                <motion.div
                  key={type.title}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card 
                    className="h-full cursor-pointer hover:border-primary/50 transition-colors"
                    onClick={() => setSelectedType(type.title)}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-primary/10">
                          <type.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle>{type.title}</CardTitle>
                          <CardDescription>{type.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle>{selectedType}</CardTitle>
                  <CardDescription>
                    Please fill out all the required information below
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {applicationTypes
                      .find((type) => type.title === selectedType)
                      ?.fields.map((field) => (
                        <div key={field} className="space-y-2">
                          <label className="text-sm font-medium">{field}</label>
                          <Textarea
                            required
                            value={formData[field] || ""}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                [field]: e.target.value,
                              }))
                            }
                            placeholder={`Enter your ${field.toLowerCase()}`}
                          />
                        </div>
                      ))}
                    <div className="flex gap-4 pt-4">
                      <Button type="submit">Submit Application</Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setSelectedType(null);
                          setFormData({});
                        }}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Forums;