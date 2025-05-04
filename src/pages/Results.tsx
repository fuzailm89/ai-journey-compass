
import { useLocation, Link, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowRight } from 'lucide-react';
import EmailSignup from '@/components/EmailSignup';
import { getFeedback, getScoreCategory } from '@/lib/quizData';
import LearningPath, { TeamType } from '@/components/LearningPath';
import { useState } from 'react';

const Results = () => {
  const location = useLocation();
  const { score, answers } = location.state || {};
  const [teamType, setTeamType] = useState<TeamType>("tech");
  
  // Redirect if accessed directly without taking the quiz
  if (!score) {
    return <Navigate to="/quiz" replace />;
  }
  
  const feedback = getFeedback(score);
  const scoreCategory = getScoreCategory(score);
  
  const renderScoreCategory = () => {
    if (score < 40) return "beginner";
    if (score < 75) return "intermediate";
    return "advanced";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-12">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="bg-blue-500/10 text-blue-700 rounded-full px-4 py-1 text-sm font-medium mb-4 inline-block">
              Assessment Complete
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Your AI Literacy Score</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Based on your responses, we've analyzed your current understanding of AI concepts.
            </p>
          </div>
          
          <div className="bg-white border border-border rounded-xl p-8 shadow-sm mb-12">
            <div className="text-center mb-8">
              <div className="relative inline-block">
                <div className="text-6xl md:text-7xl font-bold text-blue-600">
                  {score}<span className="text-2xl">%</span>
                </div>
                <div className="absolute -top-3 -right-3 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {renderScoreCategory()}
                </div>
              </div>
              
              <div className="mt-6 mb-4 w-full max-w-md mx-auto">
                <Progress value={score} className="h-3 bg-slate-100" indicatorClassName="bg-blue-600" />
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>Beginner</span>
                  <span>Intermediate</span>
                  <span>Advanced</span>
                </div>
              </div>
            </div>
            
            <div className="border-t border-border pt-8">
              <h2 className="text-2xl font-semibold mb-3">{feedback.title}</h2>
              <p className="text-muted-foreground mb-6">{feedback.description}</p>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-2">Our Recommendation:</h3>
                <p>{feedback.recommendation}</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="px-8 bg-blue-600 hover:bg-blue-700">
                  <a href="#learning-path">
                    View Learning Path <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                  <Link to="/quiz">Retake Assessment</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <div className="bg-white border border-border rounded-xl p-6 md:p-8 shadow-sm mb-8">
              <h3 className="text-xl font-semibold mb-4">Select Your Team Type</h3>
              <p className="text-muted-foreground mb-6">
                To personalize your learning path, tell us your primary role or team:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { id: "tech", label: "Tech/Product" },
                  { id: "operations", label: "Operations" },
                  { id: "support", label: "Support" },
                  { id: "leadership", label: "Leadership" },
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setTeamType(option.id as TeamType)}
                    className={`p-4 rounded-lg border text-left transition-all ${
                      teamType === option.id 
                        ? "border-blue-500 bg-blue-50 text-blue-700" 
                        : "border-gray-200 hover:border-blue-200 hover:bg-blue-50/50"
                    }`}
                  >
                    <span className="font-medium">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <LearningPath
              scoreCategory={scoreCategory}
              teamType={teamType}
              className="scroll-mt-16"
            />
          </div>
          
          <div id="email-signup" className="scroll-mt-16">
            <EmailSignup />
          </div>
          
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">Next Steps on Your AI Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              After you receive your personalized learning path, you'll be ready to start building your AI confidence in just 10 minutes a day.
            </p>
            
            <div className="flex justify-center">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                  <Link to="/">Return to Home</Link>
                </Button>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/pricing">View Pricing Plans</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Results;
