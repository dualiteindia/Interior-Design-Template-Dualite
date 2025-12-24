import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const COLLECTIONS = [
  {
    id: 1,
    title: "Beds & Mattresses",
    image: "https://images.pexels.com/photos/6480210/pexels-photo-6480210.jpeg?auto=compress&cs=tinysrgb&w=800",
    hoverImage: "https://images.pexels.com/photos/6480209/pexels-photo-6480209.jpeg?auto=compress&cs=tinysrgb&w=800" // Detail shot
  },
  {
    id: 2,
    title: "Table Lamps",
    image: "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg?auto=compress&cs=tinysrgb&w=800",
    hoverImage: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800" // Similar mood
  },
  {
    id: 3,
    title: "Pillows",
    image: "https://images.pexels.com/photos/1248583/pexels-photo-1248583.jpeg?auto=compress&cs=tinysrgb&w=800",
    hoverImage: "https://images.pexels.com/photos/2986012/pexels-photo-2986012.jpeg?auto=compress&cs=tinysrgb&w=800" // Context shot
  },
  {
    id: 4,
    title: "Area Rugs & Runners",
    image: "https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg?auto=compress&cs=tinysrgb&w=800",
    hoverImage: "https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg?auto=compress&cs=tinysrgb&w=800" // Different angle
  },
  {
    id: 5,
    title: "Accent Chairs",
    image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
    hoverImage: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=800" // Detail/Texture
  },
  {
    id: 6,
    title: "Sofas",
    image: "https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=800",
    hoverImage: "https://images.pexels.com/photos/3757071/pexels-photo-3757071.jpeg?auto=compress&cs=tinysrgb&w=800" // Same sofa, different angle
  },
];

export default function CollectionCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const scrollProgress = scrollLeft / (scrollWidth - clientWidth);
      setProgress(scrollProgress * 100);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 2;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Helper to generate URL slug from title
  const getSlug = (title: string) => {
    // Special case for "Pillows" to match the exact route if needed, 
    // otherwise generic slugification
    if (title === "Pillows") return "pillows";
    return title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
  };

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-10">
          <h2 className="font-sans text-3xl md:text-4xl font-light tracking-tight">Explore the collection</h2>
          <div className="flex gap-4">
            <button onClick={() => scroll('left')} className="p-2 hover:bg-stone-200 rounded-full transition-colors">
              <ChevronLeft size={20} className="text-stone-600" />
            </button>
            <button onClick={() => scroll('right')} className="p-2 hover:bg-stone-200 rounded-full transition-colors">
              <ChevronRight size={20} className="text-stone-600" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x snap-mandatory"
        >
          {COLLECTIONS.map((item) => (
            <Link 
              key={item.id}
              to={`/collections/${getSlug(item.title)}`}
              className="min-w-[280px] md:min-w-[350px] lg:min-w-[400px] snap-start group cursor-pointer block"
            >
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-[4/5] overflow-hidden bg-stone-200 mb-4 relative">
                  {/* Main Image */}
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                  />
                  {/* Hover Image (Revealed on hover) */}
                  <img 
                    src={item.hoverImage} 
                    alt={`${item.title} detail`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100 scale-105"
                  />
                </div>
                <h3 className="text-lg font-medium tracking-wide text-stone-900">{item.title}</h3>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Custom Progress Bar */}
        <div className="w-full h-[2px] bg-stone-200 mt-4 relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-stone-800"
            style={{ width: `${Math.max(progress, 10)}%` }} // Minimum width for visibility
            layoutId="progressBar"
          />
        </div>
      </div>
    </section>
  );
}
