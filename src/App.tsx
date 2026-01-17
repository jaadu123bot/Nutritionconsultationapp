import { useState } from 'react';
import { Hero } from './components/Hero';
import { RegionalFoods } from './components/RegionalFoods';
import { ExpertsList } from './components/ExpertsList';
import { DietPlanner } from './components/DietPlanner';
import { ConsultationBooking } from './components/ConsultationBooking';
import { DeficiencyDiseases } from './components/DeficiencyDiseases';
import { News } from './components/News';
import { Navigation } from './components/Navigation';

export default function App() {
  const [activeSection, setActiveSection] = useState<'home' | 'regions' | 'experts' | 'diet-planner' | 'consultation' | 'deficiencies' | 'news'>('home');

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-orange-50">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {activeSection === 'home' && <Hero setActiveSection={setActiveSection} />}
      {activeSection === 'regions' && <RegionalFoods />}
      {activeSection === 'experts' && <ExpertsList setActiveSection={setActiveSection} />}
      {activeSection === 'diet-planner' && <DietPlanner />}
      {activeSection === 'consultation' && <ConsultationBooking />}
      {activeSection === 'deficiencies' && <DeficiencyDiseases />}
      {activeSection === 'news' && <News />}
    </div>
  );
}