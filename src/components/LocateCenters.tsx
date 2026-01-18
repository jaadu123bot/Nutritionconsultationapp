import { useState } from 'react';
import { MapPin, Search, Phone, Clock, Navigation, Star } from 'lucide-react';

interface Center {
  id: string;
  name: string;
  type: 'anganwadi' | 'health-center' | 'nutrition-clinic';
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  timing: string;
  services: string[];
  distance: number;
  rating: number;
}

export function LocateCenters() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const centers: Center[] = [
    {
      id: '1',
      name: 'Anganwadi Centre No. 142',
      type: 'anganwadi',
      address: 'Near Government School, Sector 15',
      city: 'Delhi',
      state: 'Delhi',
      pincode: '110001',
      phone: '011-2345-6789',
      timing: 'Mon-Sat: 9:00 AM - 5:00 PM',
      services: ['Nutrition Counseling', 'Food Supplements', 'Health Checkups', 'Immunization'],
      distance: 1.2,
      rating: 4.5,
    },
    {
      id: '2',
      name: 'Community Health Centre - Karol Bagh',
      type: 'health-center',
      address: 'Block 7, Karol Bagh',
      city: 'Delhi',
      state: 'Delhi',
      pincode: '110005',
      phone: '011-2567-8901',
      timing: 'Mon-Sun: 24 Hours',
      services: ['Nutrition Clinic', 'Anemia Testing', 'Diet Consultation', 'Emergency Care'],
      distance: 2.5,
      rating: 4.7,
    },
    {
      id: '3',
      name: 'Poshan Nutrition Clinic',
      type: 'nutrition-clinic',
      address: 'Medical Plaza, Connaught Place',
      city: 'Delhi',
      state: 'Delhi',
      pincode: '110001',
      phone: '011-3456-7890',
      timing: 'Mon-Sat: 10:00 AM - 6:00 PM',
      services: ['Expert Nutritionists', 'Diet Planning', 'Supplements', 'Lab Tests'],
      distance: 3.0,
      rating: 4.8,
    },
    {
      id: '4',
      name: 'Anganwadi Centre No. 89',
      type: 'anganwadi',
      address: 'Village Road, Dwarka',
      city: 'Delhi',
      state: 'Delhi',
      pincode: '110075',
      phone: '011-4567-8901',
      timing: 'Mon-Sat: 9:00 AM - 5:00 PM',
      services: ['Child Nutrition', 'Maternal Care', 'Food Distribution', 'Growth Monitoring'],
      distance: 4.5,
      rating: 4.3,
    },
    {
      id: '5',
      name: 'Primary Health Centre - Rohini',
      type: 'health-center',
      address: 'Sector 16, Rohini',
      city: 'Delhi',
      state: 'Delhi',
      pincode: '110085',
      phone: '011-5678-9012',
      timing: 'Mon-Sat: 8:00 AM - 8:00 PM',
      services: ['Nutrition Screening', 'Vaccination', 'Mother & Child Care', 'Free Medicines'],
      distance: 5.2,
      rating: 4.6,
    },
  ];

  const states = ['Delhi', 'Maharashtra', 'Tamil Nadu', 'Karnataka', 'West Bengal', 'Gujarat'];

  const typeColors = {
    anganwadi: 'bg-orange-100 text-orange-700 border-orange-300',
    'health-center': 'bg-blue-100 text-blue-700 border-blue-300',
    'nutrition-clinic': 'bg-green-100 text-green-700 border-green-300',
  };

  const typeLabels = {
    anganwadi: 'Anganwadi',
    'health-center': 'Health Center',
    'nutrition-clinic': 'Nutrition Clinic',
  };

  const filteredCenters = centers.filter((center) => {
    const matchesSearch =
      searchQuery === '' ||
      center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      center.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      center.city.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesState = selectedState === '' || center.state === selectedState;
    const matchesType = selectedType === 'all' || center.type === selectedType;

    return matchesSearch && matchesState && matchesType;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-green-800 mb-4 text-center">Locate Nearby Centers</h2>
      <p className="text-center text-gray-600 mb-8">
        Find Anganwadi centers, health facilities, and nutrition clinics near you
      </p>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="md:col-span-1">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <Search className="w-4 h-4 inline mr-1" />
              Search Location
            </label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="City, area, or pincode..."
            />
          </div>

          {/* State Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              State
            </label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
            >
              <option value="">All States</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Center Type
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
            >
              <option value="all">All Types</option>
              <option value="anganwadi">Anganwadi</option>
              <option value="health-center">Health Center</option>
              <option value="nutrition-clinic">Nutrition Clinic</option>
            </select>
          </div>
        </div>

        <button className="mt-4 w-full md:w-auto bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
          <Navigation className="w-5 h-5" />
          Use My Current Location
        </button>
      </div>

      {/* Results */}
      <div className="space-y-4">
        <div className="text-gray-600 mb-4">
          Found {filteredCenters.length} center(s) near you
        </div>

        {filteredCenters.map((center) => (
          <div key={center.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-1">{center.name}</h3>
                    <span className={`inline-block text-xs px-3 py-1 rounded border ${typeColors[center.type]}`}>
                      {typeLabels[center.type]}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <div className="flex items-start gap-2 text-gray-700">
                    <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div>{center.address}</div>
                      <div className="text-sm text-gray-500">
                        {center.city}, {center.state} - {center.pincode}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-700">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <a href={`tel:${center.phone}`} className="hover:text-green-600">
                      {center.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-gray-700">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span>{center.timing}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{center.rating}</span>
                    <span className="text-gray-500 text-sm">(256 reviews)</span>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">Services Available:</h4>
                  <div className="flex flex-wrap gap-2">
                    {center.services.map((service) => (
                      <span key={service} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:text-right flex-shrink-0">
                <div className="bg-blue-50 rounded-lg p-3 mb-3">
                  <div className="text-2xl font-bold text-blue-600">{center.distance} km</div>
                  <div className="text-xs text-blue-700">away</div>
                </div>
                <button className="w-full bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        ))}

        {filteredCenters.length === 0 && (
          <div className="bg-gray-50 rounded-xl p-12 text-center">
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No Centers Found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or location</p>
          </div>
        )}
      </div>

      {/* Info Banner */}
      <div className="mt-8 bg-orange-50 border border-orange-200 rounded-lg p-6">
        <h3 className="font-bold text-lg mb-3 text-orange-900">About Anganwadi Centers</h3>
        <p className="text-orange-800 mb-2">
          Anganwadi centers are government-run rural childcare and mother care centers in India. They provide:
        </p>
        <ul className="space-y-1 text-orange-800">
          <li>• Free nutritious food for children and pregnant/lactating mothers</li>
          <li>• Health checkups and immunization services</li>
          <li>• Nutrition and health education</li>
          <li>• Pre-school education for children</li>
          <li>• Referral services to health facilities</li>
        </ul>
      </div>
    </div>
  );
}
