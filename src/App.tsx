import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import OurStoryPage from './pages/OurStoryPage';
import ScrollToTop from './components/ScrollToTop';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-stone-50 font-sans selection:bg-stone-200 selection:text-stone-900">
          <ScrollToTop />
          <TopBanner />
          <Navbar />
          <CartDrawer />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Dynamic route for collections */}
            <Route path="/collections/:slug" element={<CategoryPage />} />
            {/* Product Page Route */}
            <Route path="/products/:productId" element={<ProductPage />} />
            {/* Checkout Route */}
            <Route path="/checkout" element={<CheckoutPage />} />
            {/* Order Success Route */}
            <Route path="/order-success" element={<OrderSuccessPage />} />
            {/* Our Story Route */}
            <Route path="/our-story" element={<OurStoryPage />} />
          </Routes>
          
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
