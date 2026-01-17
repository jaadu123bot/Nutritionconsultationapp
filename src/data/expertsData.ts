export interface Expert {
  id: string;
  name: string;
  specialization: string;
  regions: string[];
  languages: string[];
  experience: number;
  rating: number;
  consultations: number;
  available: boolean;
  bio: string;
}

export const experts: Expert[] = [
  {
    id: '1',
    name: 'Dr. Priya Sharma',
    specialization: 'Clinical Nutrition & Malnutrition',
    regions: ['North India', 'Central India'],
    languages: ['Hindi', 'English', 'Punjabi'],
    experience: 12,
    rating: 4.8,
    consultations: 450,
    available: true,
    bio: 'Specialized in addressing malnutrition in rural communities using locally available foods.',
  },
  {
    id: '2',
    name: 'Dr. Rajesh Kumar',
    specialization: 'Pediatric Nutrition',
    regions: ['East India'],
    languages: ['Bengali', 'Hindi', 'English'],
    experience: 8,
    rating: 4.9,
    consultations: 320,
    available: true,
    bio: 'Expert in child nutrition and growth monitoring, with focus on traditional Bengali diet.',
  },
  {
    id: '3',
    name: 'Dr. Lakshmi Iyer',
    specialization: 'Traditional South Indian Nutrition',
    regions: ['South India'],
    languages: ['Tamil', 'Malayalam', 'English', 'Hindi'],
    experience: 15,
    rating: 4.7,
    consultations: 580,
    available: false,
    bio: 'Pioneer in integrating traditional South Indian foods with modern nutritional science.',
  },
  {
    id: '4',
    name: 'Dr. Amit Patel',
    specialization: 'Community Nutrition & Public Health',
    regions: ['West India'],
    languages: ['Gujarati', 'Marathi', 'Hindi', 'English'],
    experience: 10,
    rating: 4.6,
    consultations: 410,
    available: true,
    bio: 'Working extensively with tribal communities in Gujarat and Maharashtra.',
  },
  {
    id: '5',
    name: 'Dr. Ananya Das',
    specialization: 'Maternal & Child Nutrition',
    regions: ['East India', 'Northeast India'],
    languages: ['Assamese', 'Bengali', 'Hindi', 'English'],
    experience: 9,
    rating: 4.8,
    consultations: 290,
    available: true,
    bio: 'Specializes in pregnancy nutrition and infant feeding practices in Eastern regions.',
  },
  {
    id: '6',
    name: 'Dr. Karthik Reddy',
    specialization: 'Sports & Clinical Nutrition',
    regions: ['South India', 'Central India'],
    languages: ['Telugu', 'Kannada', 'Hindi', 'English'],
    experience: 7,
    rating: 4.5,
    consultations: 260,
    available: true,
    bio: 'Combines modern sports nutrition with traditional South Indian dietary practices.',
  },
  {
    id: '7',
    name: 'Dr. Meera Singh',
    specialization: 'Lifestyle & Metabolic Disorders',
    regions: ['North India'],
    languages: ['Hindi', 'English', 'Punjabi'],
    experience: 11,
    rating: 4.7,
    consultations: 380,
    available: false,
    bio: 'Expert in managing diabetes and obesity using regional North Indian foods.',
  },
  {
    id: '8',
    name: 'Dr. Chandra Bora',
    specialization: 'Indigenous Food Systems',
    regions: ['Northeast India'],
    languages: ['Assamese', 'Bodo', 'Hindi', 'English'],
    experience: 13,
    rating: 4.9,
    consultations: 340,
    available: true,
    bio: 'Research focused on nutritional value of indigenous Northeast Indian foods.',
  },
];
