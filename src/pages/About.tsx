
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-accent py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Mission: Making AI Approachable for Everyone</h1>
            <p className="text-lg text-muted-foreground">
              We believe that understanding AI shouldn't require a technical background.
              Our platform makes AI literacy accessible to all professionals through simple,
              clear, and engaging learning experiences.
            </p>
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                AI Journey Compass was founded by Dr. Eliza Chen, a Berkeley MBA with a passion for making 
                complex technology concepts accessible to everyone. After witnessing the anxiety and confusion
                many professionals felt about AI, she set out to create a platform that would demystify AI
                in a friendly, approachable way.
              </p>
              <p className="text-muted-foreground mb-4">
                Our team includes experts from both educational technology and artificial intelligence fields,
                ensuring our content is both technically accurate and pedagogically sound.
              </p>
              <p className="font-medium">
                Our mission is simple: to empower every professional to navigate the AI-powered future with confidence.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="AI technology illustration" 
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-md border border-border hidden md:block">
                <p className="font-medium">Updated curriculum</p>
                <p className="text-sm text-muted-foreground">We review content monthly to stay current</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="py-16 bg-brand-gray">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Approach to AI Education</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-3">1. Bite-sized Learning</h3>
                <p className="text-muted-foreground">
                  We break down complex AI concepts into manageable, 10-minute learning modules that fit into your busy schedule.
                  Our microlearning approach ensures retention without overwhelm.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-3">2. Personalized Journey</h3>
                <p className="text-muted-foreground">
                  Our assessment quiz identifies your specific knowledge gaps and confidence levels,
                  creating a customized learning path that meets you where you are.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-3">3. Practical Applications</h3>
                <p className="text-muted-foreground">
                  We focus on real-world applications of AI across industries, helping you understand
                  not just what AI is, but how it can be leveraged in your professional context.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-3">4. Continuously Updated</h3>
                <p className="text-muted-foreground">
                  AI evolves rapidly, and so does our content. Our team of experts reviews and updates
                  our curriculum monthly to ensure you're learning the most relevant information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Expert Panel */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Expert Advisors</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Eliza Chen",
                title: "Founder & AI Education Specialist",
                bio: "Berkeley MBA, 10+ years in EdTech, passionate about democratizing AI literacy."
              },
              {
                name: "Prof. James Wilson",
                title: "AI Ethics Advisor",
                bio: "Professor of AI Ethics at Stanford, author of 'Human-Centered AI' and consultant to Fortune 500 companies."
              },
              {
                name: "Sarah Patel",
                title: "Learning Experience Designer",
                bio: "Former Head of Learning at Coursera, specialized in creating engaging digital learning experiences."
              },
              {
                name: "Dr. Michael Okonjo",
                title: "Technical Content Director",
                bio: "PhD in Computer Science, former AI researcher at Google, translates complex concepts for non-technical audiences."
              },
              {
                name: "Lisa Tanaka",
                title: "Industry Applications Specialist",
                bio: "15+ years consulting on AI implementation across healthcare, finance, and retail industries."
              },
              {
                name: "Robert Kim",
                title: "Curriculum Development Lead",
                bio: "Education technologist with experience at Khan Academy and Duolingo, focused on skill-building pathways."
              }
            ].map((expert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-border">
                <h3 className="font-semibold text-lg mb-1">{expert.name}</h3>
                <p className="text-brand-purple text-sm mb-3">{expert.title}</p>
                <p className="text-muted-foreground text-sm">{expert.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your AI Learning Journey Today</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take our quick assessment quiz to discover your current AI literacy level and get a personalized learning path.
          </p>
          <Button asChild size="lg" className="text-base px-8">
            <Link to="/quiz">Take the Free Assessment <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
