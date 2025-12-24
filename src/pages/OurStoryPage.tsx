import { motion } from 'framer-motion';

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[85vh] w-full overflow-hidden mt-10">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Soho House Interior Grand Staircase" 
            className="w-full h-full object-cover"
          />
          {/* Gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full max-w-[1920px] mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white font-serif text-6xl md:text-8xl lg:text-9xl leading-none"
          >
            Our story
          </motion.h1>
        </div>
      </section>

      {/* --- TEXT CONTENT SECTION --- */}
      <section className="py-24 px-6 md:px-12 max-w-[1920px] mx-auto">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          {/* Intro Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-stone-900 text-sm md:text-base leading-relaxed max-w-2xl mb-20 font-medium"
          >
            Soho Home is a modern interiors brand designed for relaxed, sociable living. With more than 
            25 years of design heritage, the range was created to mirror the look and feel of our <span className="font-bold">Soho 
            Houses</span> around the world.
          </motion.p>

          {/* Large Quote */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl text-stone-900 leading-tight mb-20 max-w-5xl"
          >
            Whether it's the cup you use for your first coffee of the day, or the bed linen 
            you sleep on at night, this is the Soho House way of living.
          </motion.h2>

          {/* Secondary Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-stone-600 text-sm md:text-base leading-relaxed max-w-2xl mb-24"
          >
            The brand was born when our guests began asking if they could buy their favourite pieces 
            from around the Houses. We launched with our Barwell crystal glassware back in 2016, and 
            since then have evolved from a small collection of staples into a diverse interiors brand that 
            includes furniture, tableware, accessories, lighting, home fragrance, and textiles.
          </motion.p>
        </div>

        {/* --- DUAL IMAGES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/3] bg-stone-100 overflow-hidden"
          >
            <img 
              src="https://images.pexels.com/photos/6758773/pexels-photo-6758773.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Soho Home Interior Detail" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-[4/3] bg-stone-100 overflow-hidden"
          >
            <img 
              src="https://images.pexels.com/photos/5998120/pexels-photo-5998120.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Soho Home Dining Setting" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
