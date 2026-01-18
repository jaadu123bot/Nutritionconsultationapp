import { useState } from 'react';
import { experts } from '../data/expertsData';
import { Star, MapPin, Languages, Award, Calendar } from 'lucide-react';

interface ExpertsListProps {
  setActiveSection: (section: 'home' | 'regions' | 'experts' | 'diet-planner' | 'consultation' | 'deficiencies' | 'news' | 'past-consultations' | 'shop' | 'feedback' | 'locate-centers') => void;
}

export function ExpertsList({ setActiveSection }: ExpertsListProps) {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  const regions = ['all', 'North India', 'South India', 'East India', 'West India', 'Central India', 'Northeast India'];

  const filteredExperts = selectedRegion === 'all' 
    ? experts 
    : experts.filter(expert => expert.regions.includes(selectedRegion));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-green-800 mb-4 text-center">Our Expert Nutritionists</h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Connect with certified nutrition experts who understand regional foods and local dietary practices
      </p>

      {/* Region Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => setSelectedRegion(region)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedRegion === region
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-green-50'
            }`}
          >
            {region === 'all' ? 'All Regions' : region}
          </button>
        ))}
      </div>

      {/* Experts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExperts.map((expert) => (
          <div key={expert.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-bold text-lg text-gray-800">{expert.name}</h3>
                <p className="text-sm text-gray-600">{expert.specialization}</p>
              </div>
              <div className={`px-2 py-1 rounded text-xs font-semibold ${
                expert.available 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {expert.available ? 'Available' : 'Busy'}
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4 line-clamp-2">{expert.bio}</p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">{expert.regions.join(', ')}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Languages className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">{expert.languages.join(', ')}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Award className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">{expert.experience} years experience</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{expert.rating}</span>
                <span className="text-sm text-gray-500">({expert.consultations} consultations)</span>
              </div>
            </div>

            <button
              onClick={() => setActiveSection('consultation')}
              disabled={!expert.available}
              className={`w-full py-2 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                expert.available
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Calendar className="w-4 h-4" />
              {expert.available ? 'Book Consultation' : 'Currently Unavailable'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}