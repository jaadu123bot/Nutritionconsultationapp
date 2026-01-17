import { useState } from 'react';
import { regions } from '../data/regionalData';
import { ChevronDown, User, MapPin, Activity, Target } from 'lucide-react';

export function DietPlanner() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'male',
    region: '',
    weight: '',
    height: '',
    activityLevel: 'moderate',
    healthGoal: 'general',
    medicalConditions: '',
  });

  const [dietPlan, setDietPlan] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedRegion = regions.find(r => r.id === formData.region);
    if (!selectedRegion) return;

    // Generate a sample diet plan based on regional foods
    const plan = {
      calories: calculateCalories(),
      meals: [
        {
          name: 'Breakfast',
          time: '7:00 AM - 9:00 AM',
          items: [
            { food: selectedRegion.staples[0].name, portion: '2 servings' },
            { food: selectedRegion.fruits[0].name, portion: '1 medium' },
          ],
        },
        {
          name: 'Mid-Morning Snack',
          time: '11:00 AM',
          items: [
            { food: selectedRegion.fruits[1]?.name || 'Seasonal fruit', portion: '1 small' },
          ],
        },
        {
          name: 'Lunch',
          time: '1:00 PM - 2:00 PM',
          items: [
            { food: selectedRegion.staples[0].name, portion: '1 cup' },
            { food: selectedRegion.pulses[0].name, portion: '1 cup' },
            { food: selectedRegion.vegetables[0].name, portion: '1 cup' },
            { food: selectedRegion.vegetables[1]?.name || 'Mixed vegetables', portion: '½ cup' },
          ],
        },
        {
          name: 'Evening Snack',
          time: '4:00 PM - 5:00 PM',
          items: [
            { food: selectedRegion.pulses[1]?.name || 'Roasted gram', portion: '30g' },
          ],
        },
        {
          name: 'Dinner',
          time: '7:00 PM - 8:00 PM',
          items: [
            { food: selectedRegion.staples[1]?.name || selectedRegion.staples[0].name, portion: '1 cup' },
            { food: selectedRegion.vegetables[2]?.name || 'Seasonal vegetables', portion: '1 cup' },
            { food: selectedRegion.pulses[0].name, portion: '½ cup' },
          ],
        },
      ],
      nutrients: {
        protein: '60-70g',
        carbs: '250-300g',
        fats: '50-60g',
        fiber: '30-35g',
      },
      tips: [
        `Utilize locally available ${selectedRegion.staples[0].name.toLowerCase()} as your primary energy source`,
        `Include ${selectedRegion.vegetables[0].name.toLowerCase()} regularly for essential micronutrients`,
        'Drink 8-10 glasses of water daily',
        'Eat seasonal fruits for maximum nutrition and affordability',
      ],
    };

    setDietPlan(plan);
  };

  const calculateCalories = () => {
    const baseCalories = formData.gender === 'male' ? 2000 : 1800;
    const activityMultiplier = {
      sedentary: 0.8,
      light: 0.9,
      moderate: 1.0,
      active: 1.2,
      veryActive: 1.4,
    }[formData.activityLevel] || 1.0;

    return Math.round(baseCalories * activityMultiplier);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-green-800 mb-4 text-center">Personalized Diet Planner</h2>
      <p className="text-center text-gray-600 mb-8">
        Get a customized diet plan based on your region's locally available foods
      </p>

      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <User className="w-4 h-4 inline mr-1" />
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Age</label>
              <input
                type="number"
                required
                min="1"
                max="120"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your age"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
              <select
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Region */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <MapPin className="w-4 h-4 inline mr-1" />
                Your Region
              </label>
              <select
                required
                value={formData.region}
                onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
              >
                <option value="">Select your region</option>
                {regions.map((region) => (
                  <option key={region.id} value={region.id}>
                    {region.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Weight */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Weight (kg)</label>
              <input
                type="number"
                required
                min="1"
                step="0.1"
                value={formData.weight}
                onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter weight in kg"
              />
            </div>

            {/* Height */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Height (cm)</label>
              <input
                type="number"
                required
                min="1"
                value={formData.height}
                onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter height in cm"
              />
            </div>

            {/* Activity Level */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Activity className="w-4 h-4 inline mr-1" />
                Activity Level
              </label>
              <select
                value={formData.activityLevel}
                onChange={(e) => setFormData({ ...formData, activityLevel: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
              >
                <option value="sedentary">Sedentary (little to no exercise)</option>
                <option value="light">Light (1-3 days/week)</option>
                <option value="moderate">Moderate (3-5 days/week)</option>
                <option value="active">Active (6-7 days/week)</option>
                <option value="veryActive">Very Active (intense daily)</option>
              </select>
            </div>

            {/* Health Goal */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Target className="w-4 h-4 inline mr-1" />
                Health Goal
              </label>
              <select
                value={formData.healthGoal}
                onChange={(e) => setFormData({ ...formData, healthGoal: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
              >
                <option value="general">General Health & Wellness</option>
                <option value="malnutrition">Address Malnutrition</option>
                <option value="weightGain">Healthy Weight Gain</option>
                <option value="weightLoss">Healthy Weight Loss</option>
                <option value="diabetes">Manage Diabetes</option>
                <option value="maternal">Maternal Nutrition</option>
              </select>
            </div>
          </div>

          {/* Medical Conditions */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Medical Conditions (Optional)
            </label>
            <textarea
              value={formData.medicalConditions}
              onChange={(e) => setFormData({ ...formData, medicalConditions: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              rows={3}
              placeholder="Any allergies, medical conditions, or dietary restrictions..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            Generate My Diet Plan
          </button>
        </form>
      </div>

      {/* Diet Plan Display */}
      {dietPlan && (
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 space-y-6">
          <div className="text-center border-b pb-4">
            <h3 className="text-2xl font-bold text-green-800 mb-2">Your Personalized Diet Plan</h3>
            <p className="text-gray-600">Daily Target: {dietPlan.calories} calories</p>
          </div>

          {/* Meals */}
          <div className="space-y-4">
            {dietPlan.meals.map((meal: any, idx: number) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-lg text-gray-800">{meal.name}</h4>
                  <span className="text-sm text-gray-500">{meal.time}</span>
                </div>
                <ul className="space-y-2">
                  {meal.items.map((item: any, itemIdx: number) => (
                    <li key={itemIdx} className="flex justify-between text-gray-700">
                      <span>{item.food}</span>
                      <span className="text-gray-500">{item.portion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Nutrients */}
          <div className="bg-green-50 rounded-lg p-4">
            <h4 className="font-bold text-lg text-gray-800 mb-3">Daily Nutrient Targets</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="text-sm text-gray-600">Protein</div>
                <div className="font-semibold text-green-700">{dietPlan.nutrients.protein}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Carbs</div>
                <div className="font-semibold text-green-700">{dietPlan.nutrients.carbs}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Fats</div>
                <div className="font-semibold text-green-700">{dietPlan.nutrients.fats}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Fiber</div>
                <div className="font-semibold text-green-700">{dietPlan.nutrients.fiber}</div>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-orange-50 rounded-lg p-4">
            <h4 className="font-bold text-lg text-gray-800 mb-3">Important Tips</h4>
            <ul className="space-y-2">
              {dietPlan.tips.map((tip: string, idx: number) => (
                <li key={idx} className="flex gap-2 text-gray-700">
                  <span className="text-orange-600">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> This is a general diet plan based on your inputs. 
              For personalized guidance, especially for managing malnutrition or specific health conditions, 
              please consult with one of our expert nutritionists.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
