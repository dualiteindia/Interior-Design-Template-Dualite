import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-40px)] w-full overflow-hidden mt-10">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.pexels.com/photos/6758773/pexels-photo-6758773.jpeg?auto=compress&cs=tinysrgb&w=1920"
        >
          {/* High quality bedroom/interior video */}
          <source src="https://videos.pexels.com/video-files/7578546/7578546-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end pb-20 px-6 md:px-12 max-w-[1920px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl text-white"
        >
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-6 leading-[0.9]">
            In time for <br/> <span className="italic">the Holidays</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-end">
            <p className="text-lg md:text-xl font-light max-w-lg leading-relaxed text-stone-100 drop-shadow-md">
              Discover our range of gifts, including textiles, home fragrance, glassware, and decor. 
              Order small items by 1pm (EST) on Monday.
            </p>
            <button className="border border-white text-white px-8 py-3 uppercase tracking-widest text-xs hover:bg-white hover:text-stone-900 transition-all duration-300 backdrop-blur-sm">
              Shop Gifts
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
