import { Apple, Users, BookOpen, Calendar, Home, AlertTriangle, Newspaper, ShoppingBag, MessageCircle, MapPin } from 'lucide-react';
import logo from 'figma:asset/1daac7939c7b1d0a97f7edcc450e756959299f9c.png';
import { UserProfile } from './UserProfile';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: 'home' | 'regions' | 'experts' | 'diet-planner' | 'consultation' | 'deficiencies' | 'news' | 'past-consultations' | 'shop' | 'feedback' | 'locate-centers') => void;
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

  const actionButtons = [
    { id: 'shop', label: 'Shop', icon: ShoppingBag },
    { id: 'locate-centers', label: 'Locate Centers', icon: MapPin },
    { id: 'feedback', label: 'Feedback', icon: MessageCircle },
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
          
          <div className="hidden lg:flex gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id as any)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-sm ${
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

          <div className="hidden lg:flex items-center gap-2">
            {actionButtons.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id as any)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-sm ${
                    activeSection === item.id
                      ? 'bg-orange-600 text-white'
                      : 'bg-orange-50 text-orange-700 hover:bg-orange-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden xl:inline">{item.label}</span>
                </button>
              );
            })}
            <UserProfile setActiveSection={setActiveSection} />
          </div>

          <div className="lg:hidden flex gap-2 items-center overflow-x-auto">
            {[...navItems.slice(0, 4), ...actionButtons].map((item) => {
              const Icon = item.icon;
              const isAction = actionButtons.some(btn => btn.id === item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id as any)}
                  className={`p-2 rounded-lg flex-shrink-0 ${
                    activeSection === item.id
                      ? isAction ? 'bg-orange-600 text-white' : 'bg-green-600 text-white'
                      : isAction ? 'bg-orange-50 text-orange-700' : 'text-gray-700 hover:bg-green-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </button>
              );
            })}
            <UserProfile setActiveSection={setActiveSection} />
          </div>
        </div>
      </div>
    </nav>
  );
}