import { useState } from 'react';
import { SlidersHorizontal, ChevronDown, Heart } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { CATEGORY_DATA } from '../data/categoryData';

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const [readyToShip, setReadyToShip] = useState(false);
  
  // Logic to determine category data
  // 1. Try to find exact match in CATEGORY_DATA
  // 2. If not found, generate fallback data so the page isn't broken/generic
  const categoryData = slug && CATEGORY_DATA[slug] 
    ? CATEGORY_DATA[slug] 
    : {
        title: slug ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Collection',
        description: `Explore our curated selection of ${slug ? slug.replace(/-/g, ' ') : 'items'}, designed to bring the atmosphere of our Houses into your home.`,
        products: [
          // Generate generic products for unknown categories
          {
            id: `${slug}-1`,
            name: `${slug ? slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'Item'} 01`,
            price: "$250",
            image: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800",
            hoverImage: "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg?auto=compress&cs=tinysrgb&w=800"
          },
          {
            id: `${slug}-2`,
            name: `${slug ? slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'Item'} 02`,
            price: "$420",
            image: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800",
            hoverImage: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800"
          },
          {
            id: `${slug}-3`,
            name: `${slug ? slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'Item'} 03`,
            price: "$180",
            image: "https://images.pexels.com/photos/4203096/pexels-photo-4203096.jpeg?auto=compress&cs=tinysrgb&w=800",
            hoverImage: "https://images.pexels.com/photos/4203098/pexels-photo-4203098.jpeg?auto=compress&cs=tinysrgb&w=800"
          }
        ]
      };

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto min-h-screen bg-white">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-serif text-6xl md:text-7xl mb-6 text-stone-900 capitalize">{categoryData.title}</h1>
        <p className="text-stone-600 text-lg max-w-2xl leading-relaxed">
          {categoryData.description}
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-stone-200 pb-6 mb-8 gap-6">
        <button className="flex items-center gap-2 bg-stone-950 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors">
          <span>Filters</span>
          <SlidersHorizontal size={16} />
        </button>

        <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
          {/* Toggle */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setReadyToShip(!readyToShip)}>
            <div className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${readyToShip ? 'bg-stone-900' : 'border border-stone-300 bg-transparent'}`}>
              <div className={`w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform duration-300 ${readyToShip ? 'translate-x-6' : 'translate-x-0 bg-stone-900'}`} />
            </div>
            <span className="text-sm text-stone-600">Ready to ship ({categoryData.products.length})</span>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 text-sm text-stone-900 cursor-pointer hover:opacity-70">
            <span className="text-stone-500">Sort by:</span>
            <span className="font-medium">Bestsellers</span>
            <ChevronDown size={14} />
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex justify-between items-center mb-8 text-xs text-stone-500 uppercase tracking-widest">
        <span>1 - {categoryData.products.length} of {categoryData.products.length} results</span>
        <div className="hidden md:flex gap-4">
          <span>View:</span>
          <span className="text-stone-900 font-medium cursor-pointer">20</span>
          <span className="cursor-pointer hover:text-stone-900">40</span>
          <span className="cursor-pointer hover:text-stone-900">60</span>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
        {categoryData.products.map((product: any) => (
          <Link to={`/products/${product.id}`} key={product.id} className="group cursor-pointer block">
            <div className="relative aspect-[4/5] bg-stone-100 overflow-hidden mb-4">
              {/* Main Image */}
              <img 
                src={product.image} 
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
              />
              {/* Hover Image */}
              <img 
                src={product.hoverImage} 
                alt={`${product.name} detail`}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 scale-105"
              />
              
              {/* Heart Icon - Prevent navigation when clicking heart */}
              <button 
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/80 transition-colors text-stone-900 z-10"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <Heart size={20} strokeWidth={1.5} />
              </button>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-stone-900 mb-1 group-hover:underline underline-offset-4 decoration-stone-400">{product.name}</h3>
                <p className="text-stone-500 text-sm">{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
