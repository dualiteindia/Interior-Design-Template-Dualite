import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-20 px-6 md:px-12">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-white font-serif text-2xl mb-6">Soho Home</h3>
          <p className="text-sm leading-relaxed max-w-xs">
            Modern luxury furniture and interiors designed for relaxed living. 
            Inspired by our Houses worldwide.
          </p>
        </div>
        
        <div>
          <h4 className="text-white uppercase tracking-widest text-xs mb-6">Customer Service</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Delivery & Returns</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white uppercase tracking-widest text-xs mb-6">About Us</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/our-story" className="hover:text-white transition-colors">Our Story</Link>
            </li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            <li><a href="#interior-design" className="hover:text-white transition-colors">Interior Design Service</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white uppercase tracking-widest text-xs mb-6">Newsletter</h4>
          <p className="text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
          <div className="flex border-b border-stone-700 pb-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent w-full outline-none text-white placeholder-stone-600"
            />
            <button className="text-white uppercase text-xs tracking-widest hover:text-stone-300">Join</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1920px] mx-auto mt-20 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>&copy; 2024 Soho Home Ltd. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
