import { useState } from 'react';
import { ShoppingCart, Plus, Star, Leaf, Award } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  nutrients: string[];
  rating: number;
  inStock: boolean;
}

export function NutritionShop() {
  const [cart, setCart] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products: Product[] = [
    {
      id: '1',
      name: 'Iron Folic Acid Tablets (90 tablets)',
      category: 'supplements',
      price: 120,
      description: 'Essential iron and folic acid supplementation for anemia prevention',
      nutrients: ['Iron', 'Folic Acid', 'Vitamin B12'],
      rating: 4.5,
      inStock: true,
    },
    {
      id: '2',
      name: 'Organic Ragi Flour (1kg)',
      category: 'millets',
      price: 85,
      description: 'Calcium-rich finger millet flour, perfect for babies and adults',
      nutrients: ['Calcium', 'Iron', 'Fiber'],
      rating: 4.8,
      inStock: true,
    },
    {
      id: '3',
      name: 'Protein Mix Powder (500g)',
      category: 'protein',
      price: 450,
      description: 'Blend of roasted gram, nuts, and seeds for protein boost',
      nutrients: ['Protein', 'Healthy Fats', 'Fiber'],
      rating: 4.6,
      inStock: true,
    },
    {
      id: '4',
      name: 'Vitamin D3 Capsules (60 caps)',
      category: 'supplements',
      price: 250,
      description: 'High-potency Vitamin D for bone health and immunity',
      nutrients: ['Vitamin D3'],
      rating: 4.7,
      inStock: true,
    },
    {
      id: '5',
      name: 'Organic Jaggery (500g)',
      category: 'natural',
      price: 60,
      description: 'Iron-rich traditional sweetener, healthier alternative to sugar',
      nutrients: ['Iron', 'Minerals'],
      rating: 4.9,
      inStock: true,
    },
    {
      id: '6',
      name: 'Bajra Flour (1kg)',
      category: 'millets',
      price: 70,
      description: 'Pearl millet flour, excellent for winter nutrition',
      nutrients: ['Iron', 'Magnesium', 'Fiber'],
      rating: 4.5,
      inStock: true,
    },
    {
      id: '7',
      name: 'Calcium + Vitamin D Tablets',
      category: 'supplements',
      price: 350,
      description: 'Supports bone health and prevents osteoporosis',
      nutrients: ['Calcium', 'Vitamin D'],
      rating: 4.4,
      inStock: false,
    },
    {
      id: '8',
      name: 'Mixed Millet Health Mix (1kg)',
      category: 'millets',
      price: 200,
      description: 'Blend of 5 millets with nuts for complete nutrition',
      nutrients: ['Protein', 'Fiber', 'Minerals'],
      rating: 4.7,
      inStock: true,
    },
    {
      id: '9',
      name: 'Zinc + Vitamin C Tablets',
      category: 'supplements',
      price: 180,
      description: 'Boosts immunity and aids in wound healing',
      nutrients: ['Zinc', 'Vitamin C'],
      rating: 4.6,
      inStock: true,
    },
    {
      id: '10',
      name: 'Amla Powder (200g)',
      category: 'natural',
      price: 150,
      description: 'Rich in Vitamin C, supports immunity and skin health',
      nutrients: ['Vitamin C', 'Antioxidants'],
      rating: 4.8,
      inStock: true,
    },
  ];

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'supplements', label: 'Supplements' },
    { id: 'millets', label: 'Millets & Grains' },
    { id: 'protein', label: 'Protein' },
    { id: 'natural', label: 'Natural Foods' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (productId: string) => {
    setCart([...cart, productId]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-3xl font-bold text-green-800">Nutrition Shop</h2>
          <p className="text-gray-600 mt-2">
            Quality nutrition supplements and healthy foods delivered to your doorstep
          </p>
        </div>
        <div className="relative">
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden sm:inline">Cart</span>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-lg border-2 transition-colors ${
              selectedCategory === category.id
                ? 'border-green-600 bg-green-50 text-green-700'
                : 'border-gray-300 bg-white text-gray-700 hover:border-green-300'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-br from-green-50 to-orange-50 p-6 flex items-center justify-center h-32">
              <Leaf className="w-16 h-16 text-green-600" />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-lg text-gray-800 flex-1">{product.name}</h3>
                {!product.inStock && (
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">
                    Out of Stock
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1 mb-3">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold">{product.rating}</span>
                <span className="text-sm text-gray-500">(125 reviews)</span>
              </div>

              <p className="text-sm text-gray-600 mb-4">{product.description}</p>

              <div className="flex flex-wrap gap-1 mb-4">
                {product.nutrients.map((nutrient) => (
                  <span key={nutrient} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                    {nutrient}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-green-600">₹{product.price}</div>
                  <div className="text-xs text-gray-500">Inclusive of all taxes</div>
                </div>
                <button
                  onClick={() => addToCart(product.id)}
                  disabled={!product.inStock}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    product.inStock
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <Plus className="w-4 h-4" />
                  <span>Add</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quality Assurance Banner */}
      <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <Award className="w-12 h-12 text-green-600 mx-auto mb-3" />
            <h4 className="font-bold text-lg mb-2">Quality Assured</h4>
            <p className="text-sm text-gray-600">All products tested and certified</p>
          </div>
          <div>
            <Leaf className="w-12 h-12 text-green-600 mx-auto mb-3" />
            <h4 className="font-bold text-lg mb-2">Natural & Safe</h4>
            <p className="text-sm text-gray-600">No harmful additives or preservatives</p>
          </div>
          <div>
            <ShoppingCart className="w-12 h-12 text-green-600 mx-auto mb-3" />
            <h4 className="font-bold text-lg mb-2">Free Delivery</h4>
            <p className="text-sm text-gray-600">On orders above ₹500</p>
          </div>
        </div>
      </div>
    </div>
  );
}
