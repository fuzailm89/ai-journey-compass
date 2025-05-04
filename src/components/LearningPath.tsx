
import { useState } from 'react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  BookOpen, 
  GraduationCap,
  Layers 
} from "lucide-react";
import { Button } from "./ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "./ui/accordion";
import { cn } from "@/lib/utils";

// Types for learning path data
type LearningResource = {
  title: string;
  description: string;
  link?: string;
};

type LearningLevel = {
  title: string;
  description: string;
  icon: JSX.Element;
  resources: LearningResource[];
  outcomes: string[];
};

// Team types for personalization
export type TeamType = "tech" | "operations" | "support" | "leadership";

// Different learning paths based on score category and team type
const getLearningPath = (scoreCategory: string, teamType: TeamType | null): Record<string, LearningLevel> => {
  // Base learning path data
  const basePaths: Record<string, LearningLevel> = {
    beginner: {
      title: "Foundational AI Literacy",
      description: "Build your AI foundation with essential concepts and terminology, perfect for getting started.",
      icon: <BookOpen className="h-6 w-6 text-blue-500" />,
      resources: [
        {
          title: "What is AI? - Core Concepts",
          description: "A beginner-friendly introduction to AI concepts and terminology.",
          link: "#"
        },
        {
          title: "Prompt Engineering Basics",
          description: "Learn how to effectively communicate with AI systems.",
          link: "#"
        },
        {
          title: "AI Tools Overview",
          description: "Discover the most popular AI tools and their use cases.",
          link: "#"
        },
      ],
      outcomes: [
        "Understand key AI terminology and concepts",
        "Communicate basic requirements to AI systems",
        "Identify opportunities for AI in your work"
      ]
    },
    intermediate: {
      title: "Practical AI Applications",
      description: "Take your skills further with hands-on applications and real-world use cases.",
      icon: <Layers className="h-6 w-6 text-blue-500" />,
      resources: [
        {
          title: "AI Case Study Collection",
          description: "Real-world examples of AI implementation across industries.",
          link: "#"
        },
        {
          title: "Workflow Automation with AI",
          description: "Learn to automate routine tasks using accessible AI tools.",
          link: "#"
        },
        {
          title: "Data Preparation for AI",
          description: "Best practices for preparing data to work with AI systems.",
          link: "#"
        },
      ],
      outcomes: [
        "Design effective AI-powered workflows",
        "Evaluate AI tools for specific business needs",
        "Implement basic AI solutions independently"
      ]
    },
    advanced: {
      title: "Strategic AI Integration",
      description: "Develop advanced AI strategies, governance frameworks, and implementation approaches.",
      icon: <GraduationCap className="h-6 w-6 text-blue-500" />,
      resources: [
        {
          title: "Enterprise AI Strategy",
          description: "Develop comprehensive strategies for AI adoption across organizations.",
          link: "#"
        },
        {
          title: "AI Governance & Ethics",
          description: "Create responsible AI governance frameworks and ethical guidelines.",
          link: "#"
        },
        {
          title: "Measuring AI ROI",
          description: "Methods for quantifying the business impact of AI investments.",
          link: "#"
        },
      ],
      outcomes: [
        "Create comprehensive AI adoption strategies",
        "Establish governance frameworks for AI usage",
        "Measure and communicate AI's business impact"
      ]
    }
  };

  // Customization based on team type
  if (teamType) {
    switch(teamType) {
      case "tech":
        if (scoreCategory === "advanced") {
          basePaths.advanced.resources = [
            {
              title: "Advanced Prompt Engineering",
              description: "Master complex prompt engineering for specialized use cases.",
              link: "#"
            },
            {
              title: "LangChain Framework",
              description: "Build powerful AI applications with the LangChain framework.",
              link: "#"
            },
            {
              title: "MLOps Integration Patterns",
              description: "Best practices for integrating AI models into your production environment.",
              link: "#"
            },
          ];
        }
        break;
        
      case "support":
        if (scoreCategory === "beginner") {
          basePaths.beginner.resources = [
            {
              title: "AI for Customer Support",
              description: "Learn how AI can enhance customer support workflows.",
              link: "#"
            },
            {
              title: "Automation for Common Support Tasks",
              description: "Identify and automate repetitive support processes with AI.",
              link: "#"
            },
            {
              title: "AI Literacy for Support Teams",
              description: "Essential AI concepts tailored for support professionals.",
              link: "#"
            },
          ];
        }
        break;
        
      case "operations":
        if (scoreCategory === "intermediate") {
          basePaths.intermediate.resources = [
            {
              title: "Process Optimization with AI",
              description: "Use AI to identify and improve operational inefficiencies.",
              link: "#"
            },
            {
              title: "AI-Powered Analytics for Operations",
              description: "Leverage AI for better operational insights and decision-making.",
              link: "#"
            },
            {
              title: "Change Management for AI Adoption",
              description: "Successfully introduce AI tools to operational teams.",
              link: "#"
            },
          ];
        }
        break;
        
      case "leadership":
        if (scoreCategory === "advanced") {
          basePaths.advanced.resources = [
            {
              title: "AI Strategy for Executives",
              description: "Strategic frameworks for AI adoption at the executive level.",
              link: "#"
            },
            {
              title: "AI Investment Prioritization",
              description: "Methods for identifying high-value AI opportunities.",
              link: "#"
            },
            {
              title: "Building AI-Ready Organizations",
              description: "Transform your organization's culture and capabilities for the AI era.",
              link: "#"
            },
          ];
        }
        break;
    }
  }
  
  return basePaths;
};

interface LearningPathProps {
  scoreCategory: string;
  teamType?: TeamType;
  className?: string;
}

const LearningPath = ({ scoreCategory = "beginner", teamType = null, className }: LearningPathProps) => {
  const [selectedLevel, setSelectedLevel] = useState<string>(scoreCategory);
  const learningPaths = getLearningPath(scoreCategory, teamType);
  
  return (
    <div className={cn("w-full", className)} id="learning-path">
      <div className="text-center mb-8">
        <span className="bg-blue-500/10 text-blue-700 rounded-full px-4 py-1 text-sm font-medium mb-4 inline-block">
          Personalized Recommendation
        </span>
        <h2 className="text-3xl font-bold mb-3">Your Learning Path</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Based on your assessment, we've created a customized learning journey to build your AI literacy.
        </p>
      </div>
      
      <Tabs defaultValue={scoreCategory} onValueChange={setSelectedLevel} className="w-full">
        <TabsList className="grid grid-cols-3 mb-8 w-full max-w-2xl mx-auto">
          <TabsTrigger value="beginner" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
            Beginner
          </TabsTrigger>
          <TabsTrigger value="intermediate" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
            Intermediate
          </TabsTrigger>
          <TabsTrigger value="advanced" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
            Advanced
          </TabsTrigger>
        </TabsList>
        
        {Object.entries(learningPaths).map(([level, pathData]) => (
          <TabsContent key={level} value={level} className="focus-visible:outline-none focus-visible:ring-0">
            <Card className={cn(
              "border border-blue-100 shadow-sm transition-all duration-300",
              selectedLevel === level ? "scale-100 opacity-100" : "scale-98 opacity-90"
            )}>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-blue-50 rounded-full p-3">
                  {pathData.icon}
                </div>
                <div>
                  <CardTitle className="text-xl text-blue-800">{pathData.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {pathData.description}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium text-lg mb-3">Recommended Resources</h4>
                  <div className="space-y-3">
                    {pathData.resources.map((resource, index) => (
                      <div key={index} className="bg-white border border-blue-50 rounded-lg p-4 hover:border-blue-200 transition-colors">
                        <h5 className="font-medium text-blue-700">{resource.title}</h5>
                        <p className="text-sm text-muted-foreground mt-1">{resource.description}</p>
                        {resource.link && (
                          <a 
                            href={resource.link} 
                            className="text-sm font-medium text-blue-600 hover:underline inline-block mt-2"
                          >
                            Learn more →
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-2">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="outcomes">
                      <AccordionTrigger className="text-lg font-medium">
                        What You'll Master
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-5 space-y-1">
                          {pathData.outcomes.map((outcome, index) => (
                            <li key={index} className="text-muted-foreground">{outcome}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button className="w-full">Start This Path</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default LearningPath;
