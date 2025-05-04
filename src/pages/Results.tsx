
import { useLocation, Link, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowRight } from 'lucide-react';
import EmailSignup from '@/components/EmailSignup';
import { getFeedback } from '@/lib/quizData';

const Results = () => {
  const location = useLocation();
  const { score, answers } = location.state || {};
  
  // Redirect if accessed directly without taking the quiz
  if (!score) {
    return <Navigate to="/quiz" replace />;
  }
  
  const feedback = getFeedback(score);
  
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
            <span className="bg-brand-purple/10 text-brand-purple rounded-full px-4 py-1 text-sm font-medium mb-4 inline-block">
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
                <div className="text-6xl md:text-7xl font-bold text-brand-purple">
                  {score}<span className="text-2xl">%</span>
                </div>
                <div className="absolute -top-3 -right-3 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {renderScoreCategory()}
                </div>
              </div>
              
              <div className="mt-6 mb-4 w-full max-w-md mx-auto">
                <Progress value={score} className="h-3" />
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
              
              <div className="bg-accent/30 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-2">Our Recommendation:</h3>
                <p>{feedback.recommendation}</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="px-8">
                  <a href="#email-signup">
                    View Learning Path <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/quiz">Retake Assessment</Link>
                </Button>
              </div>
            </div>
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
                <Button asChild variant="outline">
                  <Link to="/">Return to Home</Link>
                </Button>
                <Button asChild>
                  <Link to="/about">Learn About Our Approach</Link>
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
