
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface EmailSignupProps {
  onComplete?: () => void;
}

const EmailSignup = ({ onComplete }: EmailSignupProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulated API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "Thanks for joining. We'll send your personalized results shortly.",
      });
      
      if (onComplete) {
        onComplete();
      }
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8 px-6 bg-accent/30 rounded-xl animate-fade-in">
        <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Check className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
        <p className="text-muted-foreground">
          We'll send your detailed results and personalized learning path to your inbox shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="py-8 px-6 bg-accent/30 rounded-xl">
      <h3 className="text-xl font-semibold mb-2 text-center">Get your detailed results</h3>
      <p className="text-muted-foreground text-center mb-6">
        Enter your email to receive personalized learning recommendations and track your progress.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Your email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Get Results"}
          </Button>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          We respect your privacy and won't share your information. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
};

export default EmailSignup;
