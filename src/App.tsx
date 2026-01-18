import { useState } from 'react';
import { Hero } from './components/Hero';
import { RegionalFoods } from './components/RegionalFoods';
import { ExpertsList } from './components/ExpertsList';
import { DietPlanner } from './components/DietPlanner';
import { ConsultationBooking } from './components/ConsultationBooking';
import { DeficiencyDiseases } from './components/DeficiencyDiseases';
import { News } from './components/News';
import { PastConsultations } from './components/PastConsultations';
import { NutritionShop } from './components/NutritionShop';
import { Feedback } from './components/Feedback';
import { LocateCenters } from './components/LocateCenters';
import { Navigation } from './components/Navigation';
import { InstallPrompt } from './components/InstallPrompt';

export default function App() {
  const [activeSection, setActiveSection] = useState<'home' | 'regions' | 'experts' | 'diet-planner' | 'consultation' | 'deficiencies' | 'news' | 'past-consultations' | 'shop' | 'feedback' | 'locate-centers'>('home');

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
      {activeSection === 'past-consultations' && <PastConsultations />}
      {activeSection === 'shop' && <NutritionShop />}
      {activeSection === 'feedback' && <Feedback />}
      {activeSection === 'locate-centers' && <LocateCenters />}
      
      <InstallPrompt />
    </div>
  );
}