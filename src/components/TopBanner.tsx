export default function TopBanner() {
  return (
    <div className="fixed top-0 left-0 w-full h-10 bg-black text-white text-xs flex items-center justify-center tracking-wide z-50 px-4">
      <p>Join Soho Friends and get 15% off full-price purchases & free delivery on small items all year round</p>
      <div className="absolute right-4 hidden md:block text-[10px] uppercase tracking-widest opacity-80">
        Ship to: US
      </div>
    </div>
  );
}
