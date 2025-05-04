
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center">
            <span className="text-white font-bold">AI</span>
          </div>
          <span className="font-display text-xl font-semibold">AI Journey Compass</span>
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="sm" onClick={toggleMenu} aria-label="Toggle menu">
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <Link to="/" className="text-sm font-medium hover:text-brand-purple transition-colors">Home</Link>
          <Link to="/quiz" className="text-sm font-medium hover:text-brand-purple transition-colors">Quiz</Link>
          <Link to="/about" className="text-sm font-medium hover:text-brand-purple transition-colors">About</Link>
          <Button asChild>
            <Link to="/quiz">Start Assessment</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t mt-4 animate-fade-in">
          <div className="container mx-auto py-4 px-4 space-y-3">
            <Link to="/" className="block text-sm font-medium hover:text-brand-purple transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/quiz" className="block text-sm font-medium hover:text-brand-purple transition-colors" onClick={toggleMenu}>Quiz</Link>
            <Link to="/about" className="block text-sm font-medium hover:text-brand-purple transition-colors" onClick={toggleMenu}>About</Link>
            <Button asChild className="w-full mt-2">
              <Link to="/quiz" onClick={toggleMenu}>Start Assessment</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
