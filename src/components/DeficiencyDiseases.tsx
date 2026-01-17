import { useState } from 'react';
import { deficiencyDiseases } from '../data/deficiencyData';
import { AlertCircle, Heart, Pill, Apple, ChevronDown, ChevronUp } from 'lucide-react';

export function DeficiencyDiseases() {
  const [selectedDisease, setSelectedDisease] = useState(deficiencyDiseases[0]);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['symptoms']));

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const categoryColors = {
    vitamin: 'bg-orange-100 text-orange-700 border-orange-300',
    mineral: 'bg-blue-100 text-blue-700 border-blue-300',
    protein: 'bg-purple-100 text-purple-700 border-purple-300',
    general: 'bg-gray-100 text-gray-700 border-gray-300',
  };

  const severityColors = {
    mild: 'bg-yellow-100 text-yellow-800',
    moderate: 'bg-orange-100 text-orange-800',
    severe: 'bg-red-100 text-red-800',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-green-800 mb-4 text-center">Nutritional Deficiency Diseases</h2>
      <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
        Learn about common nutritional deficiencies in India, their symptoms, and how to prevent them 
        with locally available foods
      </p>

      {/* Disease Categories Filter */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        <button
          onClick={() => setSelectedDisease(deficiencyDiseases.find(d => d.category === 'mineral') || deficiencyDiseases[0])}
          className="px-4 py-2 rounded-lg bg-blue-100 text-blue-700 border-2 border-blue-300 hover:bg-blue-200 transition-colors"
        >
          Minerals
        </button>
        <button
          onClick={() => setSelectedDisease(deficiencyDiseases.find(d => d.category === 'vitamin') || deficiencyDiseases[0])}
          className="px-4 py-2 rounded-lg bg-orange-100 text-orange-700 border-2 border-orange-300 hover:bg-orange-200 transition-colors"
        >
          Vitamins
        </button>
        <button
          onClick={() => setSelectedDisease(deficiencyDiseases.find(d => d.category === 'protein') || deficiencyDiseases[0])}
          className="px-4 py-2 rounded-lg bg-purple-100 text-purple-700 border-2 border-purple-300 hover:bg-purple-200 transition-colors"
        >
          Protein & Energy
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Disease List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-4 sticky top-20">
            <h3 className="font-bold text-lg mb-4">Select Deficiency</h3>
            <div className="space-y-2 max-h-[600px] overflow-y-auto">
              {deficiencyDiseases.map((disease) => (
                <button
                  key={disease.id}
                  onClick={() => setSelectedDisease(disease)}
                  className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                    selectedDisease.id === disease.id
                      ? 'border-green-600 bg-green-50 shadow-md'
                      : 'border-gray-200 hover:border-green-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="font-semibold text-sm mb-1">{disease.name}</div>
                      <div className="text-xs text-gray-600">{disease.deficientNutrient}</div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${severityColors[disease.severity]}`}>
                      {disease.severity}
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className={`text-xs px-2 py-1 rounded border ${categoryColors[disease.category]}`}>
                      {disease.category}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Disease Details */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedDisease.name}</h3>
                <div className="flex gap-2">
                  <span className={`text-sm px-3 py-1 rounded border ${categoryColors[selectedDisease.category]}`}>
                    {selectedDisease.category}
                  </span>
                  <span className={`text-sm px-3 py-1 rounded ${severityColors[selectedDisease.severity]}`}>
                    {selectedDisease.severity} severity
                  </span>
                </div>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-900">Deficient Nutrient</span>
              </div>
              <p className="text-blue-800">{selectedDisease.deficientNutrient}</p>
            </div>
          </div>

          {/* Symptoms */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleSection('symptoms')}
              className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <h4 className="font-bold text-lg">Symptoms & Signs</h4>
              </div>
              {expandedSections.has('symptoms') ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>
            {expandedSections.has('symptoms') && (
              <div className="px-4 pb-4">
                <ul className="space-y-2">
                  {selectedDisease.symptoms.map((symptom, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-700">
                      <span className="text-red-500 mt-1">●</span>
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Causes */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleSection('causes')}
              className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-orange-600" />
                <h4 className="font-bold text-lg">Common Causes</h4>
              </div>
              {expandedSections.has('causes') ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>
            {expandedSections.has('causes') && (
              <div className="px-4 pb-4">
                <ul className="space-y-2">
                  {selectedDisease.causes.map((cause, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-700">
                      <span className="text-orange-500 mt-1">●</span>
                      <span>{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Treatment & Cure */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleSection('cure')}
              className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Pill className="w-5 h-5 text-green-600" />
                <h4 className="font-bold text-lg">Treatment & Management</h4>
              </div>
              {expandedSections.has('cure') ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>
            {expandedSections.has('cure') && (
              <div className="px-4 pb-4">
                <ul className="space-y-2">
                  {selectedDisease.cure.map((treatment, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-700">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{treatment}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Preventive Foods */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleSection('foods')}
              className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Apple className="w-5 h-5 text-green-600" />
                <h4 className="font-bold text-lg">Foods for Prevention</h4>
              </div>
              {expandedSections.has('foods') ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>
            {expandedSections.has('foods') && (
              <div className="px-4 pb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedDisease.preventiveFoods.map((food, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg p-3 hover:border-green-300 transition-colors">
                      <div className="font-semibold text-gray-800 mb-1">{food.food}</div>
                      <div className="text-sm text-gray-600 mb-1">
                        <span className="inline-block bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">
                          {food.region}
                        </span>
                      </div>
                      <div className="text-sm text-gray-700">
                        <strong>Content:</strong> {food.nutrientContent}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Important Note */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              <strong>⚠️ Important:</strong> If you experience any of these symptoms, please consult 
              with a healthcare professional or one of our expert nutritionists for proper diagnosis 
              and treatment. Self-diagnosis can be harmful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
