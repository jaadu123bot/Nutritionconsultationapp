export interface RegionalFood {
  name: string;
  nutrients: string[];
  season: string;
}

export interface Region {
  id: string;
  name: string;
  states: string[];
  staples: RegionalFood[];
  vegetables: RegionalFood[];
  fruits: RegionalFood[];
  pulses: RegionalFood[];
  description: string;
}

export const regions: Region[] = [
  {
    id: 'north',
    name: 'North India',
    states: ['Punjab', 'Haryana', 'Himachal Pradesh', 'Jammu & Kashmir', 'Uttarakhand'],
    description: 'Rich in wheat, dairy products, and seasonal vegetables',
    staples: [
      { name: 'Wheat', nutrients: ['Carbohydrates', 'Fiber', 'Protein'], season: 'Winter' },
      { name: 'Rice (Basmati)', nutrients: ['Carbohydrates', 'Energy'], season: 'Year-round' },
      { name: 'Dairy (Milk, Paneer)', nutrients: ['Protein', 'Calcium', 'Vitamin D'], season: 'Year-round' },
    ],
    vegetables: [
      { name: 'Sarson (Mustard Greens)', nutrients: ['Iron', 'Calcium', 'Vitamin K'], season: 'Winter' },
      { name: 'Turnip', nutrients: ['Vitamin C', 'Fiber'], season: 'Winter' },
      { name: 'Cauliflower', nutrients: ['Vitamin C', 'Vitamin K'], season: 'Winter' },
    ],
    fruits: [
      { name: 'Apple', nutrients: ['Fiber', 'Vitamin C'], season: 'Autumn' },
      { name: 'Pear', nutrients: ['Fiber', 'Vitamin C'], season: 'Autumn' },
      { name: 'Apricot', nutrients: ['Vitamin A', 'Potassium'], season: 'Summer' },
    ],
    pulses: [
      { name: 'Rajma (Kidney Beans)', nutrients: ['Protein', 'Fiber', 'Iron'], season: 'Year-round' },
      { name: 'Chana (Chickpeas)', nutrients: ['Protein', 'Fiber'], season: 'Year-round' },
    ],
  },
  {
    id: 'south',
    name: 'South India',
    states: ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh', 'Telangana'],
    description: 'Rice-based cuisine with abundant coconut, tamarind, and seafood',
    staples: [
      { name: 'Rice', nutrients: ['Carbohydrates', 'Energy'], season: 'Year-round' },
      { name: 'Ragi (Finger Millet)', nutrients: ['Calcium', 'Iron', 'Fiber'], season: 'Year-round' },
      { name: 'Coconut', nutrients: ['Healthy Fats', 'Fiber'], season: 'Year-round' },
    ],
    vegetables: [
      { name: 'Drumstick', nutrients: ['Vitamin C', 'Calcium', 'Iron'], season: 'Year-round' },
      { name: 'Brinjal', nutrients: ['Fiber', 'Antioxidants'], season: 'Year-round' },
      { name: 'Snake Gourd', nutrients: ['Fiber', 'Vitamin C'], season: 'Monsoon' },
    ],
    fruits: [
      { name: 'Banana', nutrients: ['Potassium', 'Vitamin B6'], season: 'Year-round' },
      { name: 'Mango', nutrients: ['Vitamin A', 'Vitamin C'], season: 'Summer' },
      { name: 'Jackfruit', nutrients: ['Fiber', 'Vitamin C'], season: 'Summer' },
    ],
    pulses: [
      { name: 'Toor Dal', nutrients: ['Protein', 'Fiber'], season: 'Year-round' },
      { name: 'Urad Dal', nutrients: ['Protein', 'Iron'], season: 'Year-round' },
    ],
  },
  {
    id: 'east',
    name: 'East India',
    states: ['West Bengal', 'Odisha', 'Bihar', 'Jharkhand'],
    description: 'Fish, rice, and leafy greens dominate the cuisine',
    staples: [
      { name: 'Rice', nutrients: ['Carbohydrates', 'Energy'], season: 'Year-round' },
      { name: 'Fish', nutrients: ['Protein', 'Omega-3', 'Vitamin D'], season: 'Year-round' },
      { name: 'Mustard Oil', nutrients: ['Healthy Fats', 'Omega-3'], season: 'Year-round' },
    ],
    vegetables: [
      { name: 'Lau (Bottle Gourd)', nutrients: ['Fiber', 'Vitamin C'], season: 'Monsoon' },
      { name: 'Begun (Brinjal)', nutrients: ['Fiber', 'Antioxidants'], season: 'Year-round' },
      { name: 'Spinach (Palak)', nutrients: ['Iron', 'Calcium', 'Vitamin K'], season: 'Winter' },
    ],
    fruits: [
      { name: 'Litchi', nutrients: ['Vitamin C', 'Copper'], season: 'Summer' },
      { name: 'Mango', nutrients: ['Vitamin A', 'Vitamin C'], season: 'Summer' },
      { name: 'Guava', nutrients: ['Vitamin C', 'Fiber'], season: 'Winter' },
    ],
    pulses: [
      { name: 'Masoor Dal', nutrients: ['Protein', 'Iron', 'Fiber'], season: 'Year-round' },
      { name: 'Moong Dal', nutrients: ['Protein', 'Fiber'], season: 'Year-round' },
    ],
  },
  {
    id: 'west',
    name: 'West India',
    states: ['Gujarat', 'Maharashtra', 'Rajasthan', 'Goa'],
    description: 'Diverse cuisine with millet, legumes, and coastal seafood',
    staples: [
      { name: 'Bajra (Pearl Millet)', nutrients: ['Iron', 'Fiber', 'Protein'], season: 'Winter' },
      { name: 'Jowar (Sorghum)', nutrients: ['Fiber', 'Protein', 'Iron'], season: 'Year-round' },
      { name: 'Rice', nutrients: ['Carbohydrates', 'Energy'], season: 'Year-round' },
    ],
    vegetables: [
      { name: 'Bhindi (Okra)', nutrients: ['Fiber', 'Vitamin C'], season: 'Summer' },
      { name: 'Brinjal', nutrients: ['Fiber', 'Antioxidants'], season: 'Year-round' },
      { name: 'Drumstick', nutrients: ['Vitamin C', 'Calcium'], season: 'Year-round' },
    ],
    fruits: [
      { name: 'Chikoo (Sapota)', nutrients: ['Fiber', 'Vitamin C'], season: 'Winter' },
      { name: 'Sitafal (Custard Apple)', nutrients: ['Vitamin C', 'Fiber'], season: 'Autumn' },
      { name: 'Coconut', nutrients: ['Healthy Fats', 'Fiber'], season: 'Year-round' },
    ],
    pulses: [
      { name: 'Toor Dal', nutrients: ['Protein', 'Fiber'], season: 'Year-round' },
      { name: 'Moong Dal', nutrients: ['Protein', 'Fiber'], season: 'Year-round' },
    ],
  },
  {
    id: 'central',
    name: 'Central India',
    states: ['Madhya Pradesh', 'Chhattisgarh'],
    description: 'Wheat and rice with rich tribal food traditions',
    staples: [
      { name: 'Wheat', nutrients: ['Carbohydrates', 'Fiber', 'Protein'], season: 'Winter' },
      { name: 'Rice', nutrients: ['Carbohydrates', 'Energy'], season: 'Year-round' },
      { name: 'Jowar', nutrients: ['Fiber', 'Protein'], season: 'Year-round' },
    ],
    vegetables: [
      { name: 'Karela (Bitter Gourd)', nutrients: ['Vitamin C', 'Antioxidants'], season: 'Summer' },
      { name: 'Lauki (Bottle Gourd)', nutrients: ['Fiber', 'Vitamin C'], season: 'Monsoon' },
      { name: 'Cabbage', nutrients: ['Vitamin C', 'Fiber'], season: 'Winter' },
    ],
    fruits: [
      { name: 'Bel (Wood Apple)', nutrients: ['Fiber', 'Vitamin C'], season: 'Summer' },
      { name: 'Mahua', nutrients: ['Iron', 'Calcium'], season: 'Spring' },
      { name: 'Jamun', nutrients: ['Vitamin C', 'Iron'], season: 'Summer' },
    ],
    pulses: [
      { name: 'Chana Dal', nutrients: ['Protein', 'Fiber'], season: 'Year-round' },
      { name: 'Masoor Dal', nutrients: ['Protein', 'Iron'], season: 'Year-round' },
    ],
  },
  {
    id: 'northeast',
    name: 'Northeast India',
    states: ['Assam', 'Meghalaya', 'Manipur', 'Nagaland', 'Tripura', 'Mizoram', 'Arunachal Pradesh', 'Sikkim'],
    description: 'Rice, bamboo shoots, and unique indigenous vegetables',
    staples: [
      { name: 'Rice', nutrients: ['Carbohydrates', 'Energy'], season: 'Year-round' },
      { name: 'Bamboo Shoots', nutrients: ['Fiber', 'Potassium'], season: 'Monsoon' },
      { name: 'Fish', nutrients: ['Protein', 'Omega-3'], season: 'Year-round' },
    ],
    vegetables: [
      { name: 'Colocasia Leaves', nutrients: ['Fiber', 'Vitamin A'], season: 'Monsoon' },
      { name: 'Naga King Chili', nutrients: ['Vitamin C', 'Capsaicin'], season: 'Summer' },
      { name: 'Fiddlehead Ferns', nutrients: ['Omega-3', 'Iron'], season: 'Spring' },
    ],
    fruits: [
      { name: 'Orange', nutrients: ['Vitamin C', 'Fiber'], season: 'Winter' },
      { name: 'Pineapple', nutrients: ['Vitamin C', 'Manganese'], season: 'Summer' },
      { name: 'Passion Fruit', nutrients: ['Vitamin C', 'Fiber'], season: 'Year-round' },
    ],
    pulses: [
      { name: 'Black Gram', nutrients: ['Protein', 'Iron'], season: 'Year-round' },
      { name: 'Soybeans', nutrients: ['Protein', 'Healthy Fats'], season: 'Year-round' },
    ],
  },
];
