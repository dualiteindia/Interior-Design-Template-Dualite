export default function BookPromo() {
  return (
    <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Soho Home Interior Book" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
          Bringing The House Home
        </h2>
        <p className="text-base md:text-lg font-light mb-10 leading-relaxed max-w-xl text-stone-100">
          Introducing our second book, filled with tips and advice from the team, as well as a closer look at our Houses around the world
        </p>
        <button className="bg-white text-stone-900 px-10 py-3 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-stone-200 transition-colors duration-300">
          Explore
        </button>
      </div>
    </section>
  );
}
