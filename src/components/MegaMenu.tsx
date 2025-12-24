import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MENU_DATA } from '../data/menuData';

interface MegaMenuProps {
  isOpen: boolean;
  activeCategory: string | null;
  onClose: () => void;
}

export default function MegaMenu({ isOpen, activeCategory, onClose }: MegaMenuProps) {
  // @ts-ignore - We know the key exists because we control the input
  const data = activeCategory ? MENU_DATA[activeCategory] : null;

  return (
    <AnimatePresence>
      {isOpen && data && (
        <>
          {/* Backdrop to close menu when clicking outside */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 top-[120px] bg-black/20 backdrop-blur-sm z-30"
          />
          
          {/* Menu Content */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-full left-0 w-full bg-stone-50 border-t border-stone-200 shadow-xl z-40"
            onMouseLeave={onClose}
          >
            <div className="max-w-[1920px] mx-auto px-6 md:px-12 py-12">
              <div className="grid grid-cols-12 gap-8">
                {/* Categories Columns */}
                <div className="col-span-8 grid grid-cols-3 gap-8">
                  {/* @ts-ignore */}
                  {data.categories.map((category, idx) => (
                    <div key={idx}>
                      <h3 className="font-serif text-xl text-stone-900 mb-6">{category.title}</h3>
                      <ul className="space-y-3">
                        {/* @ts-ignore */}
                        {category.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <Link 
                              to={item.href} 
                              className="text-sm text-stone-500 hover:text-stone-900 transition-colors block py-1"
                              onClick={onClose}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Featured Image Section */}
                <div className="col-span-4 pl-8 border-l border-stone-200">
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-200 group cursor-pointer">
                    <img 
                      src={data.featuredImage} 
                      alt={data.featuredTitle}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-xs uppercase tracking-widest mb-2">Featured</p>
                      <h4 className="font-serif text-2xl">{data.featuredTitle}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
