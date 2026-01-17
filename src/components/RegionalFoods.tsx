import { useState } from 'react';
import { regions } from '../data/regionalData';
import { MapPin, Sprout, Apple as AppleIcon, Leaf } from 'lucide-react';

export function RegionalFoods() {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-green-800 mb-4 text-center">Regional Foods Across India</h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Discover nutritious foods and crops available in different regions of India. 
        Our diet plans are tailored to what's locally available and affordable.
      </p>

      {/* Region Selector */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {regions.map((region) => (
          <button
            key={region.id}
            onClick={() => setSelectedRegion(region)}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedRegion.id === region.id
                ? 'border-green-600 bg-green-50 shadow-lg'
                : 'border-gray-200 bg-white hover:border-green-300'
            }`}
          >
            <MapPin className={`w-6 h-6 mx-auto mb-2 ${
              selectedRegion.id === region.id ? 'text-green-600' : 'text-gray-400'
            }`} />
            <div className="font-semibold text-sm text-center">{region.name}</div>
          </button>
        ))}
      </div>

      {/* Selected Region Details */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedRegion.name}</h3>
          <p className="text-gray-600 mb-3">{selectedRegion.description}</p>
          <div className="flex flex-wrap gap-2">
            {selectedRegion.states.map((state) => (
              <span key={state} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                {state}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Staples */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Sprout className="w-5 h-5 text-yellow-600" />
              </div>
              <h4 className="font-bold text-lg">Staple Foods</h4>
            </div>
            <div className="space-y-3">
              {selectedRegion.staples.map((food, idx) => (
                <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                  <div className="font-semibold text-gray-800">{food.name}</div>
                  <div className="text-sm text-gray-600">Season: {food.season}</div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {food.nutrients.map((nutrient) => (
                      <span key={nutrient} className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs">
                        {nutrient}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vegetables */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-green-600" />
              </div>
              <h4 className="font-bold text-lg">Vegetables</h4>
            </div>
            <div className="space-y-3">
              {selectedRegion.vegetables.map((food, idx) => (
                <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                  <div className="font-semibold text-gray-800">{food.name}</div>
                  <div className="text-sm text-gray-600">Season: {food.season}</div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {food.nutrients.map((nutrient) => (
                      <span key={nutrient} className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">
                        {nutrient}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fruits */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <AppleIcon className="w-5 h-5 text-red-600" />
              </div>
              <h4 className="font-bold text-lg">Fruits</h4>
            </div>
            <div className="space-y-3">
              {selectedRegion.fruits.map((food, idx) => (
                <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                  <div className="font-semibold text-gray-800">{food.name}</div>
                  <div className="text-sm text-gray-600">Season: {food.season}</div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {food.nutrients.map((nutrient) => (
                      <span key={nutrient} className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs">
                        {nutrient}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pulses */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Sprout className="w-5 h-5 text-orange-600" />
              </div>
              <h4 className="font-bold text-lg">Pulses & Legumes</h4>
            </div>
            <div className="space-y-3">
              {selectedRegion.pulses.map((food, idx) => (
                <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                  <div className="font-semibold text-gray-800">{food.name}</div>
                  <div className="text-sm text-gray-600">Season: {food.season}</div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {food.nutrients.map((nutrient) => (
                      <span key={nutrient} className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs">
                        {nutrient}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
