import Hero from '../components/Hero';
import CollectionCarousel from '../components/CollectionCarousel';
import BookPromo from '../components/BookPromo';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CollectionCarousel />
      
      {/* Editorial Section - Interior Design Service */}
      <section className="py-24 px-6 md:px-12 bg-white" id="interior-design">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://images.pexels.com/photos/6758773/pexels-photo-6758773.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Interior Design Service" 
              className="w-full h-[600px] object-cover"
            />
          </div>
          <div className="order-1 md:order-2 md:pl-12">
            <span className="uppercase tracking-widest text-xs font-medium text-stone-500 mb-4 block">Services</span>
            <h2 className="font-serif text-5xl md:text-6xl mb-6 text-stone-900">Interior Design</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-md">
              Our design service brings the atmosphere of our Houses into your home. 
              From single room refreshes to whole home redesigns, our experts are here to help.
            </p>
            <button className="border-b border-stone-900 pb-1 text-stone-900 uppercase tracking-widest text-xs hover:text-stone-600 hover:border-stone-600 transition-colors">
              Book a consultation
            </button>
          </div>
        </div>
      </section>

      {/* Book Promo Section */}
      <BookPromo />
    </main>
  );
}
