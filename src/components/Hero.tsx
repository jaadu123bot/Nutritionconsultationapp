import { ArrowRight, Heart, Leaf, Users } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: 'home' | 'regions' | 'experts' | 'diet-planner' | 'consultation' | 'deficiencies' | 'news' | 'past-consultations' | 'shop' | 'feedback' | 'locate-centers') => void;
}

export function Hero({ setActiveSection }: HeroProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
          Nutrition for Every Indian
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Personalized diet plans based on regional crops and traditional foods across India. 
          Expert consultation to combat malnutrition with locally available, affordable nutrition.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setActiveSection('diet-planner')}
            className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
          >
            Get Your Diet Plan
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActiveSection('consultation')}
            className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors"
          >
            Book Expert Consultation
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <Leaf className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-bold text-xl mb-2 text-gray-800">Regional Focus</h3>
          <p className="text-gray-600">
            Diet plans based on crops and foods available in your region - from Punjab to Tamil Nadu, 
            Gujarat to Assam.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-orange-600" />
          </div>
          <h3 className="font-bold text-xl mb-2 text-gray-800">Expert Guidance</h3>
          <p className="text-gray-600">
            Connect with certified nutritionists and dietitians who understand local food cultures 
            and nutritional needs.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 text-red-600" />
          </div>
          <h3 className="font-bold text-xl mb-2 text-gray-800">Combat Malnutrition</h3>
          <p className="text-gray-600">
            Affordable, accessible nutrition solutions designed to address malnutrition using 
            traditional and local foods.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">28+</div>
            <div className="text-gray-600">States Covered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">150+</div>
            <div className="text-gray-600">Regional Crops</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
            <div className="text-gray-600">Expert Nutritionists</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600">People Helped</div>
          </div>
        </div>
      </div>
    </div>
  );
}