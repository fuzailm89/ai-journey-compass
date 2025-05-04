
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuizQuestion from '@/components/QuizQuestion';
import ProgressBar from '@/components/ProgressBar';
import { quizQuestions, calculateScore } from '@/lib/quizData';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isComplete, setIsComplete] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (answerId: string) => {
    const questionId = quizQuestions[currentQuestionIndex].id;
    
    setAnswers({
      ...answers,
      [questionId]: answerId
    });
    
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsComplete(true);
    }
  };

  useEffect(() => {
    if (isComplete) {
      const score = calculateScore(answers);
      navigate('/results', { state: { score, answers } });
    }
  }, [isComplete, answers, navigate]);

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-12">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={handleBack} 
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> 
            {currentQuestionIndex === 0 ? "Back to Home" : "Previous Question"}
          </Button>
          
          <h1 className="text-3xl font-bold mb-2">AI Literacy Assessment</h1>
          <p className="text-muted-foreground mb-8">
            Answer these questions to help us understand your current AI knowledge level.
          </p>
          
          <div className="mb-8">
            <ProgressBar 
              currentStep={currentQuestionIndex + 1} 
              totalSteps={quizQuestions.length}
            />
          </div>
          
          <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
            {quizQuestions.map((question, index) => (
              <QuizQuestion
                key={question.id}
                question={question}
                onAnswer={handleAnswer}
                isCurrentQuestion={index === currentQuestionIndex}
              />
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Quiz;
