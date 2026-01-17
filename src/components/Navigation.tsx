import { Apple, Users, BookOpen, Calendar, Home, AlertTriangle, Newspaper } from 'lucide-react';
import logo from 'figma:asset/1daac7939c7b1d0a97f7edcc450e756959299f9c.png';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: 'home' | 'regions' | 'experts' | 'diet-planner' | 'consultation' | 'deficiencies' | 'news') => void;
}

export function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'news', label: 'News', icon: Newspaper },
    { id: 'regions', label: 'Regional Foods', icon: Apple },
    { id: 'deficiencies', label: 'Deficiencies', icon: AlertTriangle },
    { id: 'experts', label: 'Experts', icon: Users },
    { id: 'diet-planner', label: 'Diet Planner', icon: BookOpen },
    { id: 'consultation', label: 'Book Consultation', icon: Calendar },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="Poshan Logo" 
              className="h-14 w-auto object-contain"
              style={{ mixBlendMode: 'multiply' }}
            />
            <span className="font-bold text-xl text-green-800 hidden sm:inline">Poshan</span>
          </div>
          
          <div className="hidden md:flex gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-green-600 text-white'
                      : 'text-gray-700 hover:bg-green-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="md:hidden flex gap-2 overflow-x-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id as any)}
                  className={`p-2 rounded-lg ${
                    activeSection === item.id
                      ? 'bg-green-600 text-white'
                      : 'text-gray-700 hover:bg-green-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}