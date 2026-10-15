export interface SalonService {
  id: string;
  name: string;
  category: 'hair' | 'bridal' | 'skin' | 'waxing' | 'threading';
  duration: string;
  price: number;
  description: string;
  popular?: boolean;
}

export interface BridalPackage {
  id: string;
  title: string;
  price: number;
  duration: string;
  description: string;
  includes: string[];
  recommended?: boolean;
}

export const SALON_INFO = {
  name: 'Hairport Salon Jalandhar',
  type: 'Beauty Parlour & Salon',
  rating: 4.9,
  totalReviews: 242,
  phone: '8968717707',
  formattedPhone: '+91 8968717707',
  whatsappUrl: 'https://wa.me/918968717707?text=Hi%20Hairport%20Salon%20Jalandhar%2C%20I%20would%20like%20to%20book%20an%20appointment.',
  address: {
    shop: 'Shop no. 8, near Ruby Aerobics',
    area: 'Friends Colony, Khurla Kingra',
    city: 'Jalandhar',
    state: 'Punjab',
    pincode: '144001',
    distance: '4.6 km',
    full: 'Shop no. 8, near Ruby Aerobics, Friends Colony, Khurla Kingra, Jalandhar, Punjab 144001',
    mapsUrl: 'https://maps.google.com/?q=Shop+no.+8+near+Ruby+Aerobics+Friends+Colony+Khurla+Kingra+Jalandhar+Punjab+144001'
  },
  timings: 'Mon – Sun: 10:00 AM – 8:00 PM'
};

export const SALON_SERVICES: SalonService[] = [
  // Eyebrows & Threading
  {
    id: 'eyebrow-threading',
    name: 'Eyebrow Threading',
    category: 'threading',
    duration: '15 min',
    price: 80,
    description: 'Clean brow shaping with organic cotton thread and cooling aloe gel.',
    popular: true
  },
  {
    id: 'eyebrow-beautification',
    name: 'Eyebrow Beautification & Tint',
    category: 'threading',
    duration: '25 min',
    price: 450,
    description: 'Complete brow styling with shaping, tinting, and arch enhancement.',
    popular: true
  },
  {
    id: 'upper-lip-threading',
    name: 'Upper Lip & Chin Threading',
    category: 'threading',
    duration: '15 min',
    price: 120,
    description: 'Gentle facial hair removal followed by soothing rose water spray.'
  },

  // Hair & Styling
  {
    id: 'haircut-styling',
    name: 'Haircut & Styling',
    category: 'hair',
    duration: '40 min',
    price: 650,
    description: 'Custom haircut tailored to your face, includes wash and blow dry.',
    popular: true
  },
  {
    id: 'hairstyling-curls',
    name: 'Hairstyling & Blowout',
    category: 'hair',
    duration: '35 min',
    price: 750,
    description: 'Event hair styling, Hollywood waves, soft curls, or sleek straight.'
  },
  {
    id: 'hair-extensions',
    name: 'Hair Extensions',
    category: 'hair',
    duration: '90 min',
    price: 4500,
    description: '100% natural hair extensions for instant volume and length.',
    popular: true
  },
  {
    id: 'shampoo-conditioning',
    name: 'Shampoo & Conditioning',
    category: 'hair',
    duration: '25 min',
    price: 350,
    description: 'Deep scalp wash with nourishing conditioner and light blast dry.'
  },
  {
    id: 'highlights-global-spa',
    name: 'Highlights + Global Color + Hair Spa',
    category: 'hair',
    duration: '150 min',
    price: 5499,
    description: 'Global base color, balayage highlights, and intense repair hair spa combo.',
    popular: true
  },
  {
    id: 'deep-hair-spa',
    name: 'Nourishing Hair Spa',
    category: 'hair',
    duration: '50 min',
    price: 1200,
    description: 'Relaxing head massage, steam therapy, and deep moisture hair mask.'
  },

  // Skin Care & Facials
  {
    id: 'hydrafacial',
    name: 'HydraFacial Glow',
    category: 'skin',
    duration: '55 min',
    price: 2499,
    description: 'Pore cleaning, painless extraction, and deep hydration for glowing skin.',
    popular: true
  },
  {
    id: 'o3-bridal-facial',
    name: 'O3+ Radiance Facial',
    category: 'skin',
    duration: '60 min',
    price: 2600,
    description: 'Brightening treatment for tan removal and even, glowing skin tone.'
  },
  {
    id: 'gold-glow-facial',
    name: 'Gold Glow Facial',
    category: 'skin',
    duration: '50 min',
    price: 1800,
    description: 'Revitalizing skin facial with 24K gold serum and relaxing massage.'
  },

  // Waxing & Brazilian
  {
    id: 'brazilian-waxing',
    name: 'Brazilian Waxing',
    category: 'waxing',
    duration: '35 min',
    price: 1600,
    description: 'Hygienic strip-less Italian Rica wax for sensitive skin in private rooms.',
    popular: true
  },
  {
    id: 'full-body-waxing',
    name: 'Full Body Waxing (Rica)',
    category: 'waxing',
    duration: '75 min',
    price: 2700,
    description: 'Full arms, legs, underarms, and body wax with Rica white chocolate wax.'
  },
  {
    id: 'arms-legs-waxing',
    name: 'Full Arms & Legs Waxing',
    category: 'waxing',
    duration: '40 min',
    price: 999,
    description: 'Quick, gentle hair removal with pre-wax lotion and post-wax oil.'
  },

  // Bridal & Makeup Services
  {
    id: 'hd-bridal-makeup',
    name: 'HD Bridal Makeup',
    category: 'bridal',
    duration: '150 min',
    price: 14500,
    description: 'Complete bridal look with MAC/Huda Beauty, hairstyling, lashes & draping.',
    popular: true
  },
  {
    id: 'airbrush-bridal-makeup',
    name: 'Airbrush Bridal Makeup',
    category: 'bridal',
    duration: '160 min',
    price: 18500,
    description: 'Waterproof airbrush base for 24-hour flawless wear, hair updo, and jewelry setting.'
  },
  {
    id: 'party-makeup',
    name: 'Party / Event Makeup',
    category: 'bridal',
    duration: '60 min',
    price: 2800,
    description: 'Glamorous party makeup with hair curls/updo for receptions & family events.',
    popular: true
  },
  {
    id: 'wedding-prep-package',
    name: 'Wedding & Event Preparation Package',
    category: 'bridal',
    duration: '2 Days',
    price: 7999,
    description: 'Pre-wedding facial, full body waxing, manicure, pedicure, and hair spa.'
  }
];

export const BRIDAL_PACKAGES: BridalPackage[] = [
  {
    id: 'pre-wedding',
    title: 'Pre-Wedding Care',
    price: 7999,
    duration: '2 Days',
    description: 'Essential prep before ceremonies start.',
    includes: [
      'Full Body Rica Waxing',
      'HydraFacial or O3+ Radiance Glow',
      'Hair Spa & Deep Conditioning',
      'Luxury Manicure & Pedicure',
      'Eyebrow Shaping & Lip Care'
    ]
  },
  {
    id: 'hd-bridal',
    title: 'HD Bridal Package',
    price: 14500,
    duration: 'Single Day',
    description: 'Our most popular look for the main wedding day.',
    includes: [
      'HD Bridal Makeup (MAC / Huda / NARS)',
      'Bridal Hair Updo & Floral Setting',
      'Dupatta Draping & Silhouette Pinning',
      'Jewelry & Maang Tikka Setting',
      '3D Lashes & Contact Lenses'
    ],
    recommended: true
  },
  {
    id: 'airbrush-royal',
    title: 'Airbrush Royal Bridal',
    price: 18500,
    duration: 'Single Day',
    description: 'Flawless waterproof airbrush makeup for high-definition photos.',
    includes: [
      'Full Airbrush Base (Sweatproof & 24hr)',
      'Custom Bridal Hairstyle & Extensions',
      'Double Dupatta Draping & Pinning',
      'Complete Jewelry & Accessories Setting',
      'Touch-up Kit & Personal Assistant'
    ]
  }
];

export const REVIEWS = [
  {
    name: 'Simranjeet Kaur',
    rating: 5,
    text: 'Hairport Salon did my bridal makeup and it was perfect! The makeup stayed fresh all night and looked natural in photos.',
    service: 'HD Bridal Makeup'
  },
  {
    name: 'Pooja Sharma',
    rating: 5,
    text: 'Loved my balayage highlights and hair spa. My hair feels so soft. Very polite staff and clean salon.',
    service: 'Highlights + Hair Spa'
  },
  {
    name: 'Navneet Gill',
    rating: 5,
    text: 'Best HydraFacial in Jalandhar. Skin felt instantly clean and glowing. Eyebrow threading was very neat too.',
    service: 'HydraFacial & Brows'
  },
  {
    name: 'Harpreet Kaur',
    rating: 5,
    text: 'Very hygienic rooms for Brazilian waxing. The Rica wax was quick and gentle. Highly recommend!',
    service: 'Brazilian Waxing'
  }
];
