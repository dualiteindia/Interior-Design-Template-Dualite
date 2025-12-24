import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeFromCart, updateQuantity, cartSubtotal } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsOpen(false);
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full md:w-[480px] bg-white z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-stone-100">
              <h2 className="font-serif text-2xl text-stone-900">Shopping Bag ({items.length})</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-stone-100 rounded-full transition-colors"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center text-stone-400">
                    <ShoppingBag size={24} />
                  </div>
                  <p className="text-stone-500">Your bag is currently empty.</p>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-stone-900 font-medium underline underline-offset-4 hover:text-stone-600"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-24 h-32 bg-stone-100 shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-1">
                          <Link 
                            to={`/products/${item.id}`} 
                            onClick={() => setIsOpen(false)}
                            className="font-medium text-stone-900 hover:text-stone-600 transition-colors line-clamp-2"
                          >
                            {item.name}
                          </Link>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-stone-400 hover:text-stone-900 ml-2"
                          >
                            <X size={16} />
                          </button>
                        </div>
                        <p className="text-sm text-stone-500 mb-4">₹{item.price.toLocaleString('en-IN')}</p>
                        
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center border border-stone-200 rounded-full px-3 py-1 gap-4">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="text-stone-500 hover:text-stone-900"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="text-stone-500 hover:text-stone-900"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <p className="font-medium text-stone-900">
                            ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-stone-100 bg-stone-50/50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-stone-600">Subtotal</span>
                  <span className="font-serif text-2xl text-stone-900">₹{cartSubtotal.toLocaleString('en-IN')}</span>
                </div>
                <p className="text-xs text-stone-500 mb-6">
                  Shipping and taxes calculated at checkout.
                </p>
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-stone-900 text-white py-4 rounded-full font-medium tracking-wide uppercase text-sm hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
                >
                  Checkout <ArrowRight size={16} />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
