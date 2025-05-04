
import { Book, Calendar, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Book,
    title: "Bite-sized learning",
    description: "Master AI concepts in just 10 minutes a day with our micro-learning approach"
  },
  {
    icon: Calendar,
    title: "Stay current",
    description: "Our content is regularly updated to keep pace with the rapidly evolving AI landscape"
  },
  {
    icon: Star,
    title: "Personalized path",
    description: "Get a learning journey tailored to your specific knowledge gaps and goals"
  }
];

interface ValuePropProps {
  className?: string;
}

const ValueProp = ({ className }: ValuePropProps) => {
  return (
    <section className={cn("py-16", className)}>
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why AI Literacy Matters</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            AI is transforming every industry at an unprecedented pace. Stay relevant and confident with the
            skills that will matter tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-border hover:border-brand-purple transition-colors"
            >
              <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
