// Extracted menu data to keep components clean
export const MENU_DATA = {
  'New': {
    categories: [
      { title: "Just Arrived", items: [{ name: "View All New", href: "/collections/new" }, { name: "New Furniture", href: "/collections/new-furniture" }, { name: "New Decor", href: "/collections/new-decor" }] },
      { title: "Trends", items: [{ name: "Warm Minimalist", href: "/collections/warm-minimalist" }, { name: "70s Revival", href: "/collections/70s-revival" }] }
    ],
    featuredImage: "https://images.pexels.com/photos/6636247/pexels-photo-6636247.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredTitle: "The New Collection"
  },
  'Furniture': {
    categories: [
      { title: "Living Room", items: [{ name: "Sofas", href: "/collections/sofas" }, { name: "Armchairs", href: "/collections/armchairs" }, { name: "Coffee Tables", href: "/collections/coffee-tables" }] },
      { title: "Bedroom", items: [{ name: "Beds", href: "/collections/beds" }, { name: "Mattresses", href: "/collections/mattresses" }, { name: "Bedside Tables", href: "/collections/bedside-tables" }] },
      { title: "Dining", items: [{ name: "Dining Tables", href: "/collections/dining-tables" }, { name: "Dining Chairs", href: "/collections/dining-chairs" }, { name: "Sideboards", href: "/collections/sideboards" }] }
    ],
    featuredImage: "https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredTitle: "New Season Upholstery"
  },
  'Bathroom': {
    categories: [
      { title: "Bath Linens", items: [{ name: "Bath Towels", href: "/collections/towels" }, { name: "Robes", href: "/collections/robes" }] },
      { title: "Fixtures", items: [{ name: "Vanity Units", href: "/collections/vanities" }, { name: "Mirrors", href: "/collections/mirrors" }] },
      { title: "Accessories", items: [{ name: "Soap Dispensers", href: "/collections/soap" }, { name: "Baskets", href: "/collections/baskets" }] }
    ],
    featuredImage: "https://images.pexels.com/photos/6957092/pexels-photo-6957092.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredTitle: "The Spa Collection"
  },
  'Lighting': {
    categories: [
      { title: "Ceiling", items: [{ name: "Chandeliers", href: "/collections/chandeliers" }, { name: "Pendants", href: "/collections/pendants" }] },
      { title: "Lamps", items: [{ name: "Table Lamps", href: "/collections/table-lamps" }, { name: "Floor Lamps", href: "/collections/floor-lamps" }] },
      { title: "Wall", items: [{ name: "Sconces", href: "/collections/sconces" }, { name: "Picture Lights", href: "/collections/picture-lights" }] }
    ],
    featuredImage: "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredTitle: "Ambient Lighting"
  },
  'Rugs & Textiles': {
    categories: [
      { title: "Rugs", items: [{ name: "Area Rugs", href: "/collections/area-rugs" }, { name: "Runners", href: "/collections/runners" }] },
      { title: "Cushions", items: [{ name: "Pillows", href: "/collections/pillows" }, { name: "Throws", href: "/collections/throws" }] },
      { title: "Bedding", items: [{ name: "Duvet Covers", href: "/collections/duvets" }, { name: "Sheets", href: "/collections/sheets" }] }
    ],
    featuredImage: "https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredTitle: "Texture & Warmth"
  },
  'Mirrors & Decor': {
    categories: [
      { title: "Mirrors", items: [{ name: "Wall Mirrors", href: "/collections/wall-mirrors" }, { name: "Floor Mirrors", href: "/collections/floor-mirrors" }] },
      { title: "Decor", items: [{ name: "Vases", href: "/collections/vases" }, { name: "Bowls & Trays", href: "/collections/bowls" }, { name: "Objects", href: "/collections/objects" }] }
    ],
    featuredImage: "https://images.pexels.com/photos/4203096/pexels-photo-4203096.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredTitle: "Finishing Touches"
  },
  'Outdoor': {
    categories: [
      { title: "Furniture", items: [{ name: "Sofas", href: "/collections/outdoor-sofas" }, { name: "Dining", href: "/collections/outdoor-dining" }] },
      { title: "Textiles", items: [{ name: "Rugs", href: "/collections/outdoor-rugs" }, { name: "Cushions", href: "/collections/outdoor-cushions" }] }
    ],
    featuredImage: "https://images.pexels.com/photos/8961337/pexels-photo-8961337.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredTitle: "Al Fresco Living"
  },
  'Dining': {
    categories: [
      { title: "Tabletop", items: [{ name: "Dinnerware", href: "/collections/dinnerware" }, { name: "Glassware", href: "/collections/glassware" }, { name: "Cutlery", href: "/collections/cutlery" }] },
      { title: "Furniture", items: [{ name: "Dining Tables", href: "/collections/dining-tables" }, { name: "Chairs", href: "/collections/dining-chairs" }] }
    ],
    featuredImage: "https://images.pexels.com/photos/5696184/pexels-photo-5696184.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredTitle: "The Art of Dining"
  },
  'Fragrance': {
    categories: [
      { title: "Home", items: [{ name: "Candles", href: "/collections/candles" }, { name: "Diffusers", href: "/collections/diffusers" }] },
      { title: "Body", items: [{ name: "Hand Wash", href: "/collections/hand-wash" }, { name: "Lotions", href: "/collections/lotions" }] }
    ],
    featuredImage: "https://images.pexels.com/photos/6707630/pexels-photo-6707630.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredTitle: "Signature Scents"
  },
  'Art': {
    categories: [
      { title: "Type", items: [{ name: "Prints", href: "/collections/prints" }, { name: "Photography", href: "/collections/photography" }, { name: "Originals", href: "/collections/originals" }] }
    ],
    featuredImage: "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredTitle: "Curated Art"
  },
  'Gifting': {
    categories: [
      { title: "Occasion", items: [{ name: "Housewarming", href: "/collections/housewarming" }, { name: "Wedding", href: "/collections/wedding" }] },
      { title: "Recipient", items: [{ name: "For Her", href: "/collections/for-her" }, { name: "For Him", href: "/collections/for-him" }] }
    ],
    featuredImage: "https://images.pexels.com/photos/6213666/pexels-photo-6213666.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredTitle: "Perfect Gifts"
  },
  'Sale': {
    categories: [
      { title: "Shop by Category", items: [{ name: "Furniture", href: "/collections/sale-furniture" }, { name: "Textiles", href: "/collections/sale-textiles" }, { name: "Lighting", href: "/collections/sale-lighting" }] }
    ],
    featuredImage: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800",
    featuredTitle: "End of Season"
  }
};
