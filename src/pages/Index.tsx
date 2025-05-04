
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ValueProp from '@/components/ValueProp';

const testimonials = [
  {
    quote: "This platform made AI concepts approachable for the first time in my career. I finally feel like I can participate in discussions about AI.",
    author: "Sarah J., Marketing Director"
  },
  {
    quote: "The bite-sized lessons fit perfectly into my busy schedule. I've gone from AI-confused to AI-confident in just a few weeks.",
    author: "Michael T., Project Manager"
  },
  {
    quote: "As someone without a tech background, I was intimidated by AI. This platform changed that completely.",
    author: "Priya R., HR Professional"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Where are you on your <span className="text-brand-purple">AI journey</span>?
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                Take our 2-minute assessment to discover your AI literacy level and get a personalized learning path.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="text-base px-8">
                  <Link to="/quiz">Start Assessment <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Person learning about AI" 
                className="rounded-xl shadow-lg w-full max-w-lg mx-auto"
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-md border border-border hidden md:block">
                <p className="font-medium text-brand-purple">10 minutes a day</p>
                <p className="text-sm text-muted-foreground">is all you need to stay AI-literate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Trusted by professionals from</h2>
            <p className="text-muted-foreground">
              Join thousands of professionals from leading companies who use our platform
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['Google', 'Microsoft', 'Adobe', 'Salesforce', 'IBM'].map((company) => (
              <div key={company} className="text-xl md:text-2xl font-bold text-muted-foreground opacity-70">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Value Proposition */}
      <ValueProp />
      
      {/* Testimonials */}
      <section className="py-16 bg-brand-gray">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">What our learners say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of professionals who've transformed their relationship with AI through our platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm border border-border"
              >
                <div className="mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="italic mb-4">"{testimonial.quote}"</p>
                <p className="font-medium">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start your AI learning journey?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take 2 minutes to assess your current AI literacy level and get a personalized learning path.
          </p>
          <Button asChild size="lg" className="text-base px-8">
            <Link to="/quiz">Start Free Assessment <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
