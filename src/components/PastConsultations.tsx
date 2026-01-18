import { Calendar, User, Video, Phone, MessageSquare, FileText, Download } from 'lucide-react';

export function PastConsultations() {
  const consultations = [
    {
      id: '1',
      date: '2026-01-10',
      time: '10:00 AM',
      expert: 'Dr. Priya Sharma',
      type: 'video',
      status: 'completed',
      topic: 'Iron Deficiency Anemia',
      notes: 'Recommended iron-rich diet with spinach and jaggery. Prescribed iron supplements for 3 months.',
      followUp: '2026-02-10',
    },
    {
      id: '2',
      date: '2025-12-15',
      time: '2:00 PM',
      expert: 'Dr. Rajesh Kumar',
      type: 'phone',
      status: 'completed',
      topic: 'Child Nutrition Plan',
      notes: 'Discussed diet plan for 4-year-old. Focus on protein from dal, eggs, and milk. Added seasonal fruits.',
      followUp: null,
    },
    {
      id: '3',
      date: '2025-11-20',
      time: '11:00 AM',
      expert: 'Dr. Lakshmi Iyer',
      type: 'chat',
      status: 'completed',
      topic: 'Vitamin B12 Deficiency',
      notes: 'As vegetarian, recommended fortified foods and B12 supplements. Include more dairy products.',
      followUp: '2026-01-20',
    },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="w-4 h-4" />;
      case 'phone':
        return <Phone className="w-4 h-4" />;
      case 'chat':
        return <MessageSquare className="w-4 h-4" />;
      default:
        return <Calendar className="w-4 h-4" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-green-800 mb-4">My Consultations</h2>
      <p className="text-gray-600 mb-8">
        View your past consultations and expert recommendations
      </p>

      <div className="space-y-6">
        {consultations.map((consultation) => (
          <div key={consultation.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-xl text-gray-800">{consultation.topic}</h3>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                    {consultation.status}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <User className="w-4 h-4" />
                  <span className="font-semibold">{consultation.expert}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(consultation.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {getTypeIcon(consultation.type)}
                    <span className="capitalize">{consultation.type}</span>
                  </div>
                  <span>{consultation.time}</span>
                </div>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <Download className="w-4 h-4" />
                <span>Download Report</span>
              </button>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-blue-900">Expert Notes & Recommendations</h4>
              </div>
              <p className="text-blue-800">{consultation.notes}</p>
            </div>

            {consultation.followUp && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-sm text-yellow-800">
                  <strong>Follow-up scheduled:</strong> {formatDate(consultation.followUp)}
                </p>
              </div>
            )}
          </div>
        ))}

        {consultations.length === 0 && (
          <div className="bg-gray-50 rounded-xl p-12 text-center">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No Consultations Yet</h3>
            <p className="text-gray-500">Book your first consultation with our expert nutritionists</p>
          </div>
        )}
      </div>
    </div>
  );
}
