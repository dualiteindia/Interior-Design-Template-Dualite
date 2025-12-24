import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Lock, CreditCard, Truck, Smartphone, Loader2 } from 'lucide-react';
import axios from 'axios';

export default function CheckoutPage() {
  const { items, cartSubtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('card');
  
  // Customer Info State
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  
  // Payment State
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const shippingCost = shippingMethod === 'standard' ? 0 : 499;
  const tax = cartSubtotal * 0.18; // 18% GST estimate
  const total = cartSubtotal + shippingCost + tax;

  // --- Formatters ---

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, '');
    const truncatedValue = rawValue.slice(0, 16);
    const formattedValue = truncatedValue.replace(/(\d{4})(?=\d)/g, '$1 ');
    setCardNumber(formattedValue);
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, '');
    const truncatedValue = rawValue.slice(0, 4);
    let formattedValue = truncatedValue;
    if (truncatedValue.length > 2) {
      formattedValue = `${truncatedValue.slice(0, 2)}/${truncatedValue.slice(2)}`;
    }
    setExpiryDate(formattedValue);
  };

  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, '').slice(0, 4);
    setCvc(rawValue);
  };

  // Generate UPI Deep Link for PhonePe
  // Includes dynamic Name and Amount (formatted to 2 decimal places)
  const upiLink = `phonepe://upi/pay?pa=9314027777@ybl&pn=${encodeURIComponent(firstName || 'Customer')}&am=${total.toFixed(2)}&cu=INR`;

  const handleSubmitOrder = async () => {
    if (!firstName || !lastName || !address || !city || !postalCode || !email) {
      setError("Please fill in all shipping details.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const orderData = {
      sheet1: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        address: address,
        city: city,
        postalCode: postalCode,
        paymentMethod: paymentMethod,
        totalAmount: total, // Sending number, Sheety handles formatting usually
        items: items.map(i => `${i.name} (x${i.quantity})`).join(', '),
        shippingMethod: shippingMethod,
        orderDate: new Date().toISOString()
      }
    };

    try {
      // Send data to Sheety
      await axios.post('https://api.sheety.co/537ee3fe0340ea5709ca1c338c4358b3/paymentandcustomerdata/sheet1', orderData);

      // Clear cart before navigation
      clearCart();

      if (paymentMethod === 'upi') {
        // For UPI, trigger the deep link
        window.location.href = upiLink;
        // Then navigate to success page
        // Note: On mobile, this might switch apps. When they return, they will be on success page.
        navigate('/order-success', { state: { firstName, email } });
      } else {
        // For Card, navigate immediately
        navigate('/order-success', { state: { firstName, email } });
      }
    } catch (err) {
      console.error("Error submitting order:", err);
      setError("There was an issue processing your order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="font-serif text-4xl mb-4">Your bag is empty</h1>
        <Link to="/" className="text-stone-900 underline underline-offset-4 hover:text-stone-600">
          Return to shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Forms */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center gap-2 mb-8">
            <Link to="/" className="text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-stone-900 flex items-center gap-1">
              <ChevronLeft size={14} /> Continue Shopping
            </Link>
          </div>

          {/* 1. Shipping Address */}
          <div className="bg-white p-8 shadow-sm border border-stone-100">
            <h2 className="font-serif text-2xl mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-stone-900 text-white text-sm flex items-center justify-center font-sans">1</span>
              Shipping Address
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-stone-500">First Name</label>
                <input 
                  type="text" 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full border border-stone-300 p-3 focus:outline-none focus:border-stone-900 transition-colors" 
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-stone-500">Last Name</label>
                <input 
                  type="text" 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full border border-stone-300 p-3 focus:outline-none focus:border-stone-900 transition-colors" 
                  required
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase tracking-widest text-stone-500">Email Address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-stone-300 p-3 focus:outline-none focus:border-stone-900 transition-colors" 
                  required
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase tracking-widest text-stone-500">Address</label>
                <input 
                  type="text" 
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full border border-stone-300 p-3 focus:outline-none focus:border-stone-900 transition-colors" 
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-stone-500">City</label>
                <input 
                  type="text" 
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full border border-stone-300 p-3 focus:outline-none focus:border-stone-900 transition-colors" 
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-stone-500">Postal Code</label>
                <input 
                  type="text" 
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="w-full border border-stone-300 p-3 focus:outline-none focus:border-stone-900 transition-colors" 
                  required
                />
              </div>
            </div>
          </div>

          {/* 2. Shipping Method */}
          <div className="bg-white p-8 shadow-sm border border-stone-100">
            <h2 className="font-serif text-2xl mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-stone-900 text-white text-sm flex items-center justify-center font-sans">2</span>
              Shipping Method
            </h2>
            <div className="space-y-4">
              <label className={`flex items-center justify-between p-4 border cursor-pointer transition-all ${shippingMethod === 'standard' ? 'border-stone-900 bg-stone-50' : 'border-stone-200'}`}>
                <div className="flex items-center gap-4">
                  <input 
                    type="radio" 
                    name="shipping" 
                    checked={shippingMethod === 'standard'} 
                    onChange={() => setShippingMethod('standard')}
                    className="accent-stone-900"
                  />
                  <div>
                    <p className="font-medium text-stone-900">Standard Delivery</p>
                    <p className="text-sm text-stone-500">3-5 business days</p>
                  </div>
                </div>
                <span className="font-medium">Free</span>
              </label>

              <label className={`flex items-center justify-between p-4 border cursor-pointer transition-all ${shippingMethod === 'express' ? 'border-stone-900 bg-stone-50' : 'border-stone-200'}`}>
                <div className="flex items-center gap-4">
                  <input 
                    type="radio" 
                    name="shipping" 
                    checked={shippingMethod === 'express'} 
                    onChange={() => setShippingMethod('express')}
                    className="accent-stone-900"
                  />
                  <div>
                    <p className="font-medium text-stone-900">Express Delivery</p>
                    <p className="text-sm text-stone-500">1-2 business days</p>
                  </div>
                </div>
                <span className="font-medium">₹499</span>
              </label>
            </div>
          </div>

          {/* 3. Payment */}
          <div className="bg-white p-8 shadow-sm border border-stone-100">
            <h2 className="font-serif text-2xl mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-stone-900 text-white text-sm flex items-center justify-center font-sans">3</span>
              Payment
            </h2>
            
            <div className="p-4 bg-stone-50 border border-stone-200 text-stone-500 text-sm flex items-center gap-3 mb-6">
              <Lock size={16} /> All transactions are secure and encrypted.
            </div>

            {/* Payment Method Selection */}
            <div className="flex gap-4 mb-8">
              <button 
                onClick={() => setPaymentMethod('card')}
                className={`flex-1 py-4 border rounded-lg flex flex-col items-center gap-2 transition-all ${paymentMethod === 'card' ? 'border-stone-900 bg-stone-50' : 'border-stone-200'}`}
              >
                <CreditCard size={24} className={paymentMethod === 'card' ? 'text-stone-900' : 'text-stone-400'} />
                <span className="text-sm font-medium">Card</span>
              </button>
              <button 
                onClick={() => setPaymentMethod('upi')}
                className={`flex-1 py-4 border rounded-lg flex flex-col items-center gap-2 transition-all ${paymentMethod === 'upi' ? 'border-stone-900 bg-stone-50' : 'border-stone-200'}`}
              >
                <Smartphone size={24} className={paymentMethod === 'upi' ? 'text-stone-900' : 'text-stone-400'} />
                <span className="text-sm font-medium">UPI</span>
              </button>
            </div>

            {paymentMethod === 'card' ? (
              <div className="space-y-6">
                 <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-stone-500">Card Number</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      placeholder="0000 0000 0000 0000" 
                      className="w-full border border-stone-300 p-3 pl-10 focus:outline-none focus:border-stone-900 transition-colors font-mono text-stone-800" 
                    />
                    <CreditCard className="absolute left-3 top-3.5 text-stone-400" size={18} />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-stone-500">Expiry Date</label>
                    <input 
                      type="text" 
                      value={expiryDate}
                      onChange={handleExpiryDateChange}
                      placeholder="MM / YY" 
                      className="w-full border border-stone-300 p-3 focus:outline-none focus:border-stone-900 transition-colors font-mono text-stone-800" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-stone-500">CVC</label>
                    <input 
                      type="text" 
                      value={cvc}
                      onChange={handleCvcChange}
                      placeholder="123" 
                      className="w-full border border-stone-300 p-3 focus:outline-none focus:border-stone-900 transition-colors font-mono text-stone-800" 
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center space-y-6">
                 <div className="bg-stone-100 p-6 rounded-lg">
                   <p className="text-sm text-stone-600 mb-4">
                     Click the button below to pay via PhonePe / UPI.
                   </p>
                   <p className="text-xs text-stone-500">
                     Please ensure you have a UPI-enabled app installed on your device.
                   </p>
                 </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mt-6 p-4 bg-red-50 text-red-600 text-sm border border-red-100 rounded">
                {error}
              </div>
            )}

            {/* Pay Button */}
            <button 
              onClick={handleSubmitOrder}
              disabled={isSubmitting}
              className="w-full bg-stone-900 text-white py-5 rounded-full font-medium tracking-widest uppercase hover:bg-stone-800 transition-colors text-sm shadow-lg mt-8 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={18} /> Processing...
                </>
              ) : (
                `Pay ₹${total.toLocaleString('en-IN')} ${paymentMethod === 'upi' ? 'via UPI' : ''}`
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-5">
          <div className="bg-white p-8 shadow-sm border border-stone-100 sticky top-32">
            <h2 className="font-serif text-2xl mb-6">Order Summary</h2>
            <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-16 h-20 bg-stone-100 shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium text-stone-900 text-sm line-clamp-2">{item.name}</h4>
                      <p className="text-sm font-medium">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                    </div>
                    <p className="text-xs text-stone-500 mt-1">Qty: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-6 border-t border-stone-100 text-sm">
              <div className="flex justify-between text-stone-600">
                <span>Subtotal</span>
                <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Shipping</span>
                <span>{shippingCost === 0 ? 'Free' : `₹${shippingCost.toLocaleString('en-IN')}`}</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Estimated Tax (18% GST)</span>
                <span>₹{tax.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-6 mt-6 border-t border-stone-200">
              <span className="font-serif text-2xl text-stone-900">Total</span>
              <span className="font-serif text-2xl text-stone-900">₹{total.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
            </div>
            
            <div className="mt-6 bg-stone-50 p-4 rounded-lg flex items-start gap-3 text-xs text-stone-500">
              <Truck size={16} className="shrink-0 mt-0.5" />
              <p>Estimated delivery: {shippingMethod === 'standard' ? '3-5 business days' : '1-2 business days'}. Tracking information will be sent to your email.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
