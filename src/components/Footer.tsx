
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-gray py-12 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center">
                <span className="text-white font-bold">AI</span>
              </div>
              <span className="font-display text-xl font-semibold">AI Journey Compass</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              Empowering professionals to navigate the AI landscape with confidence through bite-sized learning and personalized guidance.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-base">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-brand-purple transition-colors">Home</Link></li>
              <li><Link to="/quiz" className="text-sm text-muted-foreground hover:text-brand-purple transition-colors">Assessment Quiz</Link></li>
              <li><Link to="/pricing" className="text-sm text-muted-foreground hover:text-brand-purple transition-colors">Pricing</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-brand-purple transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-base">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-brand-purple transition-colors">AI Glossary</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-brand-purple transition-colors">Learning Modules</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-brand-purple transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} AI Journey Compass. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-brand-purple transition-colors">Privacy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-brand-purple transition-colors">Terms</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-brand-purple transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
