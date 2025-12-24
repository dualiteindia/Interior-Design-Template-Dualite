import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, ArrowRight, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

export default function OrderSuccessPage() {
  const location = useLocation();
  // Fallback data in case someone navigates here directly
  const { firstName, email } = location.state || { firstName: 'Customer', email: 'your email' };
  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center bg-stone-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-stone-100 max-w-lg w-full relative overflow-hidden"
      >
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-2 bg-stone-900" />

        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle size={40} className="text-green-800" strokeWidth={1.5} />
        </motion.div>
        
        <h1 className="font-serif text-4xl md:text-5xl mb-4 text-stone-900">Thank you, {firstName}</h1>
        
        <p className="text-stone-500 text-sm uppercase tracking-widest mb-8">Order #{orderNumber}</p>

        <div className="bg-stone-50 p-6 rounded-lg mb-8 text-left">
          <p className="text-stone-600 text-sm leading-relaxed mb-4">
            Your order has been placed successfully. We've sent a confirmation email to <span className="font-bold text-stone-900">{email}</span> with your receipt and tracking details.
          </p>
          <div className="flex items-start gap-3 text-xs text-stone-500">
            <ShoppingBag size={14} className="mt-0.5 shrink-0" />
            <p>We will notify you when your items are on their way.</p>
          </div>
        </div>
        
        <Link 
          to="/" 
          className="w-full inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-full uppercase tracking-widest text-xs font-medium hover:bg-stone-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-300"
        >
          Continue Shopping <ArrowRight size={16} />
        </Link>
      </motion.div>
      
      <p className="mt-8 text-xs text-stone-400">
        Need help? <a href="#" className="underline hover:text-stone-600">Contact Support</a>
      </p>
    </div>
  );
}
