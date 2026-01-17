import { useState } from 'react';
import { newsArticles } from '../data/newsData';
import { Newspaper, MapPin, Calendar, Users, AlertCircle, CheckCircle, Lightbulb, TrendingUp } from 'lucide-react';

export function News() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedArticle, setSelectedArticle] = useState(newsArticles[0]);

  const categories = [
    { id: 'all', label: 'All News', icon: Newspaper },
    { id: 'incident', label: 'Incidents', icon: AlertCircle },
    { id: 'prevention', label: 'Prevention', icon: Lightbulb },
    { id: 'success-story', label: 'Success Stories', icon: CheckCircle },
    { id: 'case-study', label: 'Case Studies', icon: Users },
    { id: 'research', label: 'Research', icon: TrendingUp },
  ];

  const filteredArticles = selectedCategory === 'all'
    ? newsArticles
    : newsArticles.filter(article => article.category === selectedCategory);

  const categoryColors: Record<string, string> = {
    'incident': 'bg-red-100 text-red-700 border-red-300',
    'prevention': 'bg-blue-100 text-blue-700 border-blue-300',
    'success-story': 'bg-green-100 text-green-700 border-green-300',
    'case-study': 'bg-purple-100 text-purple-700 border-purple-300',
    'research': 'bg-orange-100 text-orange-700 border-orange-300',
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-green-800 mb-4 text-center">Nutrition News & Updates</h2>
      <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
        Stay informed about malnutrition cases, success stories, and prevention initiatives across India
      </p>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all ${
                selectedCategory === category.id
                  ? 'border-green-600 bg-green-50 shadow-md'
                  : 'border-gray-300 bg-white hover:border-green-300'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm font-semibold">{category.label}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* News List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-4 sticky top-20 max-h-[calc(100vh-120px)] overflow-y-auto">
            <h3 className="font-bold text-lg mb-4">Recent Updates</h3>
            <div className="space-y-3">
              {filteredArticles.map((article) => (
                <button
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    selectedArticle.id === article.id
                      ? 'border-green-600 bg-green-50 shadow-md'
                      : 'border-gray-200 hover:border-green-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-semibold text-sm line-clamp-2">{article.title}</h4>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(article.date)}</span>
                  </div>
                  <span className={`inline-block text-xs px-2 py-1 rounded border ${categoryColors[article.category]}`}>
                    {article.category.replace('-', ' ')}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Article Details */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="mb-6">
              <span className={`inline-block text-sm px-3 py-1 rounded border mb-3 ${categoryColors[selectedArticle.category]}`}>
                {selectedArticle.category.replace('-', ' ').toUpperCase()}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{selectedArticle.title}</h3>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(selectedArticle.date)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{selectedArticle.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{selectedArticle.affectedPopulation}</span>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                <p className="font-semibold text-blue-900">{selectedArticle.summary}</p>
              </div>
            </div>

            {/* Details */}
            <div className="mb-6">
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Newspaper className="w-5 h-5 text-green-600" />
                Full Report
              </h4>
              <p className="text-gray-700 leading-relaxed">{selectedArticle.details}</p>
            </div>

            {/* Deficiency Info */}
            {selectedArticle.deficiency && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <h4 className="font-bold text-red-900 mb-2">Deficiency Identified</h4>
                <p className="text-red-800">{selectedArticle.deficiency}</p>
              </div>
            )}

            {/* Prevention Measures */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-green-900">
                <Lightbulb className="w-5 h-5 text-green-600" />
                Prevention & Intervention Measures
              </h4>
              <ul className="space-y-2">
                {selectedArticle.preventionMeasures.map((measure, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700">
                    <span className="text-green-600 mt-1 flex-shrink-0">✓</span>
                    <span>{measure}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcome */}
            {selectedArticle.outcome && (
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                <h4 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  Outcome
                </h4>
                <p className="text-purple-800">{selectedArticle.outcome}</p>
              </div>
            )}

            {/* Source */}
            <div className="border-t pt-4 text-sm text-gray-600">
              <strong>Source:</strong> {selectedArticle.source}
            </div>
          </div>

          {/* Related Information */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="font-bold text-lg mb-3 text-yellow-900">How You Can Help</h4>
            <div className="space-y-2 text-gray-700">
              <p>• Share this information with your community to raise awareness</p>
              <p>• If you notice similar symptoms in your area, consult our expert nutritionists</p>
              <p>• Learn about prevention through our Regional Foods and Deficiency sections</p>
              <p>• Support local nutrition initiatives and government programs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
