
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

type Answer = {
  id: string;
  text: string;
  explanation?: string;
};

interface QuizQuestionProps {
  question: {
    id: number;
    text: string;
    answers: Answer[];
    isConfidenceQuestion?: boolean;
  };
  onAnswer: (answerId: string) => void;
  isCurrentQuestion: boolean;
}

const QuizQuestion = ({ question, onAnswer, isCurrentQuestion }: QuizQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  
  const handleSelection = (value: string) => {
    setSelectedAnswer(value);
  };
  
  const handleSubmit = () => {
    if (selectedAnswer) {
      onAnswer(selectedAnswer);
      setSelectedAnswer(null);
    }
  };

  if (!isCurrentQuestion) return null;
  
  return (
    <div className={cn(
      "py-4 transition-opacity duration-300", 
      isCurrentQuestion ? "opacity-100" : "opacity-0"
    )}>
      <h3 className="text-xl font-medium mb-6">
        {question.text}
      </h3>
      
      <RadioGroup value={selectedAnswer || ""} onValueChange={handleSelection} className="space-y-3">
        {question.answers.map((answer) => (
          <div 
            key={answer.id} 
            className="flex items-start space-x-2 border rounded-lg p-4 hover:border-brand-blue hover:bg-accent/20 transition-colors cursor-pointer"
            onClick={() => handleSelection(answer.id)}
          >
            <RadioGroupItem value={answer.id} id={answer.id} className="mt-1" />
            <div className="grid gap-1.5 w-full">
              <Label 
                htmlFor={answer.id} 
                className={cn(
                  "text-base font-medium cursor-pointer w-full", 
                  selectedAnswer === answer.id && "text-brand-blue"
                )}
              >
                {answer.text}
              </Label>
              {answer.explanation && <p className="text-muted-foreground text-sm">{answer.explanation}</p>}
            </div>
          </div>
        ))}
      </RadioGroup>
      
      <div className="mt-8 flex justify-end">
        <Button 
          onClick={handleSubmit} 
          disabled={!selectedAnswer}
          className="px-8"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default QuizQuestion;
