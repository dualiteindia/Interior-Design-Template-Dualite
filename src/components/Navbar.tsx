import React, { useState, useEffect } from "react";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { cn } from "../utils/cn";
import MegaMenu from "./MegaMenu";
import { Link, useLocation } from "react-router-dom";
import { MENU_DATA } from "../data/menuData";
import { useCart } from "../context/CartContext";

// Generate nav links from our data keys
const NAV_LINKS = Object.keys(MENU_DATA);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { setIsOpen: setIsCartOpen, cartCount } = useCart();

  const location = useLocation();

  // Check if we are on the home page
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Force solid navbar if not on home page
  const shouldShowSolidNav = isScrolled || activeMenu || !isHomePage;

  const handleNavClick = (link: string, e: React.MouseEvent) => {
    // Prevent default anchor behavior and toggle menu
    e.preventDefault();
    setActiveMenu(activeMenu === link ? null : link);
  };

  return (
    <nav
      className={cn(
        "fixed top-10 w-full z-40 transition-all duration-300 border-b",
        shouldShowSolidNav
          ? "bg-stone-50/95 backdrop-blur-md py-4 text-stone-900 border-stone-200 shadow-sm"
          : "bg-transparent py-6 text-white border-transparent"
      )}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center gap-12">
          <Link
            to="/"
            className="font-sans text-2xl tracking-[0.15em] font-semibold uppercase shrink-0"
          >
            Soho Home
          </Link>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center gap-6 text-[13px] font-medium tracking-wide">
            {NAV_LINKS.map((link) => (
              <Link
                key={link}
                to={`/collections/${link
                  .toLowerCase()
                  .replace(/ & /g, "-")
                  .replace(/ /g, "-")}`}
                className={cn(
                  "transition-opacity whitespace-nowrap pb-1 border-b-2 border-transparent",
                  activeMenu === link
                    ? "border-stone-900 opacity-100"
                    : "hover:opacity-70"
                )}
                onClick={(e) => handleNavClick(link, e)}
                onMouseEnter={() => setActiveMenu(link)}
              >
                {link}
              </Link>
            ))}
            <a
              href="#interior-design"
              className="hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              Interior Design
            </a>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-5">
            <button
              name="search"
              className="hover:opacity-70 transition-opacity"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button name="user" className="hover:opacity-70 transition-opacity">
              <User size={20} strokeWidth={1.5} />
            </button>
            <button
              name="wishlist"
              className="hover:opacity-70 transition-opacity"
            >
              <Heart size={20} strokeWidth={1.5} />
            </button>
            <button
              className="hover:opacity-70 transition-opacity relative"
              onClick={() => setIsCartOpen(true)}
              name="cart"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-stone-900 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <button
            className={cn(
              "px-6 py-2 rounded-full text-xs font-medium tracking-widest uppercase transition-colors hidden md:block",
              shouldShowSolidNav
                ? "bg-stone-900 text-white hover:bg-stone-700"
                : "bg-white text-stone-900 hover:bg-stone-100"
            )}
          >
            Membership
          </button>

          <button
            className="xl:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Mega Menu Component */}
      <MegaMenu
        isOpen={!!activeMenu}
        activeCategory={activeMenu}
        onClose={() => setActiveMenu(null)}
      />

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 top-[-40px] h-[120vh] bg-stone-50 text-stone-900 z-50 transform transition-transform duration-500 ease-in-out flex flex-col",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6 pt-16 flex justify-between items-center border-b border-stone-200">
          <span className="font-sans text-xl tracking-[0.15em] font-semibold uppercase">
            Menu
          </span>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link}
              to={`/collections/${link
                .toLowerCase()
                .replace(/ & /g, "-")
                .replace(/ /g, "-")}`}
              className="text-2xl font-serif italic hover:text-stone-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
