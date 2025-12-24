import React, { useState, useEffect } from 'react';
import { Heart, Minus, Plus, Info, MessageSquare, ChevronDown, ChevronLeft, Check } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getProductById } from '../data/categoryData';
import { useCart } from '../context/CartContext';

export default function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');
  const [product, setProduct] = useState<any>(null);
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (productId) {
      const data = getProductById(productId);
      setProduct(data);
      setQuantity(1);
      window.scrollTo(0, 0);
    }
  }, [productId]);

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  // Parse price removing non-numeric characters (handles commas and currency symbol)
  const priceNum = parseFloat(product.price.replace(/[^0-9.]/g, ''));
  
  // Calculate member price if not provided
  const memberPriceNum = product.memberPrice 
    ? parseFloat(product.memberPrice.replace(/[^0-9.]/g, '')) 
    : Math.floor(priceNum * 0.85); // Round down for cleaner prices
  
  const memberPriceDisplay = product.memberPrice || `₹${memberPriceNum.toLocaleString('en-IN')}`;
  const savings = (priceNum - memberPriceNum).toLocaleString('en-IN');

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: priceNum,
      image: product.image,
      categorySlug: product.categorySlug
    }, quantity);
    
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="pt-[100px] min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left: Product Image */}
        <div className="relative h-[60vh] lg:h-[calc(100vh-100px)] bg-stone-100 overflow-hidden group">
          <Link 
            to={`/collections/${product.categorySlug || 'new'}`} 
            className="absolute top-8 left-8 z-10 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-stone-900 hover:opacity-70 transition-opacity bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full"
          >
            <ChevronLeft size={14} />
            View all {product.categorySlug ? product.categorySlug.replace(/-/g, ' ') : 'Collection'}
          </Link>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Right: Product Details */}
        <div className="px-6 py-12 lg:px-20 lg:py-24 flex flex-col justify-center h-full overflow-y-auto">
          <div className="max-w-xl">
            <h1 className="font-serif text-5xl md:text-6xl text-stone-900 mb-4">{product.name}</h1>
            <p className="text-sm text-stone-500 mb-8">Delivery from 2 weeks</p>

            <div className="space-y-6 text-stone-600 text-sm leading-relaxed mb-8">
              <p>{product.description}</p>
              {product.specs && (
                <ul className="list-disc pl-4 space-y-1 marker:text-stone-400">
                   {product.specs.dimensions && <li>Dimensions: {product.specs.dimensions}</li>}
                   {product.specs.composition && <li>Composition: {product.specs.composition}</li>}
                   {product.specs.care && <li>Care: {product.specs.care}</li>}
                </ul>
              )}
            </div>

            <button 
              onClick={() => {
                setActiveTab('details');
                const tabsSection = document.getElementById('tabs-section');
                tabsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-10 hover:opacity-70"
            >
              Dimensions & tearsheet
              <ChevronDown size={14} />
            </button>

            {/* Pricing */}
            <div className="mb-8">
              <div className="flex items-baseline gap-4 mb-1">
                <span className="font-serif text-2xl">{product.price}</span>
                <span className="text-sm text-stone-500">Regular price</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-2xl text-stone-900">{memberPriceDisplay}</span>
                <span className="text-sm text-stone-500">Member price</span>
                <span className="ml-auto text-xs text-stone-500 flex items-center gap-1">
                  Save ₹{savings} for ₹11,000 per year <Info size={12} />
                </span>
              </div>
            </div>

            {/* Add to Basket */}
            <div className="flex gap-4 mb-6">
              <div className="flex items-center border border-stone-300 rounded-full px-4 h-12 w-32 justify-between">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="hover:text-stone-500 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="hover:text-stone-500 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className={`flex-1 rounded-full h-12 font-medium text-sm tracking-wide transition-all uppercase flex items-center justify-center gap-2
                  ${isAdded ? 'bg-green-700 text-white' : 'bg-stone-950 text-white hover:bg-stone-800'}
                `}
              >
                {isAdded ? (
                  <>
                    <Check size={18} /> Added
                  </>
                ) : (
                  'Add to basket'
                )}
              </button>
              <button className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-50 transition-colors">
                <Heart size={20} />
              </button>
            </div>

            <p className="text-xs text-stone-500">
              Delivery charges may vary according to item weight and order destination. Click here for details
            </p>
          </div>
        </div>
      </div>

      {/* --- TABS SECTION --- */}
      <section id="tabs-section" className="bg-stone-50 py-20 px-6 md:px-12">
        <div className="max-w-[1920px] mx-auto">
          {/* Tabs Header */}
          <div className="flex gap-12 border-b border-stone-300 mb-12 overflow-x-auto">
            {['Details', 'Delivery & Returns', 'About us'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase().split(' ')[0])}
                className={`pb-4 text-2xl md:text-3xl font-serif transition-colors relative whitespace-nowrap ${
                  activeTab === tab.toLowerCase().split(' ')[0] 
                    ? 'text-stone-900' 
                    : 'text-stone-400 hover:text-stone-600'
                }`}
              >
                {tab}
                {activeTab === tab.toLowerCase().split(' ')[0] && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-stone-900"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'details' && (
              <motion.div 
                key="details"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24"
              >
                {/* Detail Image */}
                <div className="aspect-[4/5] bg-stone-200">
                  <img 
                    src={product.hoverImage || product.image} 
                    alt={`${product.name} Detail`} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Specs Table */}
                <div className="py-8">
                  <dl className="grid grid-cols-[140px_1fr] gap-y-6 text-sm">
                    {product.specs && Object.entries(product.specs).map(([key, value]) => (
                      <React.Fragment key={key}>
                        <dt className="font-bold text-stone-900 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</dt>
                        <dd className="text-stone-600">{value as string}</dd>
                      </React.Fragment>
                    ))}
                    
                    {!product.specs && (
                      <div className="col-span-2 text-stone-500 italic">Specific details are not available for this item.</div>
                    )}
                  </dl>

                  <button className="mt-12 px-8 py-3 rounded-full border border-stone-900 text-sm font-bold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-colors">
                    Download tearsheet
                  </button>
                </div>
              </motion.div>
            )}

            {activeTab === 'delivery' && (
              <motion.div 
                key="delivery"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl"
              >
                <div>
                  <h3 className="font-serif text-2xl text-stone-900 mb-6">Delivery Information</h3>
                  <div className="space-y-6 text-stone-600 text-sm leading-relaxed">
                    <p>
                      <strong>Small Items:</strong> Delivered within 3-5 business days via standard courier service.
                    </p>
                    <p>
                      <strong>Large Furniture:</strong> Delivered via our White Glove service. Our team will contact you to arrange a suitable delivery slot. They will unpack, assemble, and position your item in the room of your choice, and remove all packaging.
                    </p>
                    <p className="italic text-stone-500">
                      Please note: It is your responsibility to ensure that the item will fit through all doors, hallways, and stairwells.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-stone-900 mb-6">Returns Policy</h3>
                  <div className="space-y-6 text-stone-600 text-sm leading-relaxed">
                    <p>
                      We hope you are delighted with your purchase. However, if you are not completely satisfied, you can return your item(s) to us within 28 days of receipt.
                    </p>
                    <p>
                      Items must be returned in their original condition and packaging. For large furniture returns, a collection fee may apply.
                    </p>
                    <Link to="#" className="text-stone-900 underline underline-offset-4 font-medium">Read full returns policy</Link>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'about' && (
              <motion.div 
                key="about"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className="order-2 lg:order-1">
                  <h3 className="font-serif text-4xl text-stone-900 mb-6">Designed for Living</h3>
                  <div className="space-y-6 text-stone-600 text-lg leading-relaxed font-light">
                    <p>
                      Soho Home is a modern interiors brand designed for relaxed living. Inspired by our Houses worldwide, our range covers furniture, lighting, textiles, tableware, and accessories.
                    </p>
                    <p>
                      We believe that a home should be a social space, designed to be lived in and enjoyed. Our collections mirror the look and feel of our Houses, allowing you to bring the atmosphere of Soho House into your own home.
                    </p>
                    <p>
                      From the velvet sofas of Soho House 76 Dean Street to the crystal glassware of DUMBO House, every piece tells a story.
                    </p>
                  </div>
                  <button className="mt-8 text-stone-900 border-b border-stone-900 pb-1 uppercase text-xs tracking-widest hover:text-stone-600 hover:border-stone-600 transition-colors">
                    Read our story
                  </button>
                </div>
                <div className="order-1 lg:order-2 aspect-[4/3] bg-stone-200 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/6758773/pexels-photo-6758773.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                    alt="Soho Home Interior Atmosphere" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Floating Chat Button */}
      <button className="fixed bottom-6 right-6 bg-stone-950 text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-lg hover:bg-stone-800 transition-colors z-50">
        <span className="text-sm font-bold">Chat to our team</span>
        <MessageSquare size={18} />
        <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-stone-950 transform translate-x-1 -translate-y-1"></span>
      </button>
    </div>
  );
}
