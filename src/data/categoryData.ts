export const CATEGORY_DATA: Record<string, any> = {
  "pillows": {
    title: "Pillows",
    description: "Add depth and colour to your home with jewel-toned velvets, rich jacquards and linen across our decorative cushions.",
    products: [
      {
        id: "cloud-cushion",
        name: "Cloud Square Cushion",
        price: "₹29,999",
        memberPrice: "₹25,499",
        image: "https://images.pexels.com/photos/1248583/pexels-photo-1248583.jpeg?auto=compress&cs=tinysrgb&w=1600",
        hoverImage: "https://images.pexels.com/photos/2986012/pexels-photo-2986012.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "Echoing textiles seen in 180 House, this cushion features a unique jacquard pattern to both sides which has been designed in-house and woven in Turkey. Warm neutrals are complemented with ochre details and eyelash fringing.",
        specs: {
          dimensions: "H50 x W50 x D10cm / H20 x W20 x D4\"",
          weight: "1kg / 2.2lbs",
          composition: "41% Viscose, 35% Cotton, 24% Polyester",
          care: "Dry clean only"
        },
        categorySlug: "pillows"
      },
      {
        id: "velvet-bolster",
        name: "Velvet Bolster",
        price: "₹9,999",
        memberPrice: "₹8,499",
        image: "https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg?auto=compress&cs=tinysrgb&w=1600",
        hoverImage: "https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "A luxurious velvet bolster pillow that adds a touch of elegance and comfort to any sofa or bed. Features a soft, plush texture and a rich color palette.",
        specs: {
          dimensions: "H20 x W60cm",
          weight: "0.8kg",
          composition: "100% Cotton Velvet",
          care: "Dry clean only"
        },
        categorySlug: "pillows"
      },
      {
        id: "linen-throw",
        name: "Linen Throw Pillow",
        price: "₹7,999",
        memberPrice: "₹6,799",
        image: "https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=1600",
        hoverImage: "https://images.pexels.com/photos/3757071/pexels-photo-3757071.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "Crafted from pure linen, this throw pillow offers a relaxed, lived-in look. Perfect for layering textures in your living space.",
        specs: {
          dimensions: "H45 x W45cm",
          weight: "0.5kg",
          composition: "100% Linen",
          care: "Machine wash cold"
        },
        categorySlug: "pillows"
      }
    ]
  },
  "beds-mattresses": {
    title: "Beds & Mattresses",
    description: "Discover our range of handcrafted beds, designed to bring the comfort of our Houses home. From velvet headboards to four-poster frames.",
    products: [
      {
        id: "bed-1",
        name: "Soho Bed Frame",
        price: "₹2,14,999",
        memberPrice: "₹1,82,999",
        image: "https://images.pexels.com/photos/6480210/pexels-photo-6480210.jpeg?auto=compress&cs=tinysrgb&w=1600",
        hoverImage: "https://images.pexels.com/photos/6480209/pexels-photo-6480209.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "Our signature Soho Bed Frame features a clean, modern silhouette with a fully upholstered headboard. Designed for deep, restorative sleep.",
        specs: {
          dimensions: "H110 x W160 x L210cm",
          weight: "45kg",
          composition: "Solid Oak Frame, Linen Upholstery",
          care: "Professional upholstery cleaning"
        },
        categorySlug: "beds-mattresses"
      },
      {
        id: "bed-2",
        name: "Velvet King Bed",
        price: "₹2,74,999",
        memberPrice: "₹2,33,999",
        image: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1600",
        hoverImage: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "Make a statement with this grand Velvet King Bed. The plush velvet upholstery and tall headboard create a luxurious focal point in any master bedroom.",
        specs: {
          dimensions: "H140 x W190 x L220cm",
          weight: "60kg",
          composition: "Velvet, Pine Wood",
          care: "Vacuum lightly"
        },
        categorySlug: "beds-mattresses"
      },
      {
        id: "bed-3",
        name: "Four Poster Bed",
        price: "₹3,49,999",
        memberPrice: "₹2,97,499",
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600",
        hoverImage: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "A contemporary take on a classic design. This four-poster bed adds architectural interest and structure to your sleeping space without feeling heavy.",
        specs: {
          dimensions: "H220 x W170 x L215cm",
          weight: "55kg",
          composition: "Blackened Steel",
          care: "Wipe with damp cloth"
        },
        categorySlug: "beds-mattresses"
      }
    ]
  },
  "table-lamps": {
    title: "Table Lamps",
    description: "Illuminate your space with our collection of table lamps, featuring sculptural bases and hand-pleated shades.",
    products: [
      {
        id: "lamp-1",
        name: "Marble Base Lamp",
        price: "₹38,999",
        memberPrice: "₹32,999",
        image: "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg?auto=compress&cs=tinysrgb&w=1600",
        hoverImage: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "Solid marble base paired with a linen shade. This lamp brings a natural, organic element to your bedside or desk.",
        specs: {
          dimensions: "H45 x W30cm",
          weight: "4kg",
          composition: "Carrara Marble, Linen",
          care: "Dust with soft cloth"
        },
        categorySlug: "table-lamps"
      },
      {
        id: "lamp-2",
        name: "Ceramic Table Lamp",
        price: "₹27,999",
        memberPrice: "₹23,799",
        image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1600",
        hoverImage: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "Hand-thrown ceramic base with a reactive glaze finish. Each piece is unique.",
        specs: {
          dimensions: "H38 x W25cm",
          weight: "2.5kg",
          composition: "Stoneware Ceramic",
          care: "Wipe clean"
        },
        categorySlug: "table-lamps"
      }
    ]
  },
  "sofas": {
    title: "Sofas",
    description: "Upholstered in rich velvets, linens and bouclé, our sofas are designed for lounging.",
    products: [
      {
        id: "sofa-1",
        name: "Curved Bouclé Sofa",
        price: "₹3,59,999",
        memberPrice: "₹3,05,999",
        image: "https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=1600",
        hoverImage: "https://images.pexels.com/photos/3757071/pexels-photo-3757071.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "Organic curves meet textured bouclé. This sofa is designed for conversation and comfort, inspired by the layout of DUMBO House.",
        specs: {
          dimensions: "H75 x W240 x D110cm",
          weight: "85kg",
          composition: "Bouclé Wool Blend",
          care: "Professional cleaning"
        },
        categorySlug: "sofas"
      },
      {
        id: "sofa-2",
        name: "Velvet Sectional",
        price: "₹4,69,999",
        memberPrice: "₹3,99,499",
        image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1600",
        hoverImage: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "Deep seating and modular design make this sectional perfect for movie nights. Upholstered in our durable performance velvet.",
        specs: {
          dimensions: "H80 x W300 x D200cm",
          weight: "120kg",
          composition: "Performance Velvet",
          care: "Vacuum regularly"
        },
        categorySlug: "sofas"
      }
    ]
  }
};

// Helper function to find a product by ID across all categories
export const getProductById = (productId: string) => {
  for (const categoryKey in CATEGORY_DATA) {
    const category = CATEGORY_DATA[categoryKey];
    const product = category.products.find((p: any) => p.id === productId);
    if (product) return product;
  }
  
  // Fallback for generic/generated products that might not be in the static list
  return {
    id: productId,
    name: "Unknown Product",
    price: "₹0",
    memberPrice: "₹0",
    image: "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg?auto=compress&cs=tinysrgb&w=1600",
    hoverImage: "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Product details not found.",
    specs: {},
    categorySlug: "new"
  };
};
