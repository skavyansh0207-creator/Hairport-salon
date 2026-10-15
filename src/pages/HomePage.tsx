import React from 'react';
import { Star, Phone, Calendar, ArrowRight, Sparkles, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';
import { SALON_INFO, REVIEWS } from '../data/salonData';
import { PageId } from '../components/HeaderNav';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-rose-50 via-white to-stone-50/50 py-12 sm:py-16 border-b border-rose-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/90 text-rose-900 text-xs font-semibold mb-4">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>4.9 / 5.0 Rating (242 Google Reviews)</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-rose-950 tracking-tight mb-4">
            Hairport Salon Jalandhar
          </h1>

          <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Your destination for expert hair styling, balayage highlights, relaxing hair spa, 
            glowing HydraFacials, Brazilian waxing, and royal bridal makeup.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('booking')}
              className="px-6 py-3 text-sm font-semibold text-white bg-rose-800 hover:bg-rose-900 rounded-lg shadow-sm transition-colors flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Online</span>
            </button>

            <a
              href={`tel:${SALON_INFO.phone}`}
              className="px-5 py-3 text-sm font-semibold text-rose-900 bg-white hover:bg-rose-50 border border-rose-200 rounded-lg transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-rose-700" />
              <span>Call: {SALON_INFO.phone}</span>
            </a>
          </div>

          {/* Quick Info bar */}
          <div className="mt-10 pt-6 border-t border-rose-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-stone-600">
            <div>
              <span className="font-bold text-rose-950 block">4.9 Stars</span>
              <span>242 Verified Reviews</span>
            </div>
            <div>
              <span className="font-bold text-rose-950 block">Friends Colony</span>
              <span>Near Ruby Aerobics</span>
            </div>
            <div>
              <span className="font-bold text-rose-950 block">Open 7 Days</span>
              <span>10:00 AM – 8:00 PM</span>
            </div>
            <div>
              <span className="font-bold text-rose-950 block">100% Genuine</span>
              <span>L'Oréal, MAC &amp; Rica</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Feature Highlights */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-serif text-2xl font-bold text-rose-950">
              Popular Services
            </h2>
            <p className="text-xs text-stone-500">
              Explore our most requested beauty and hair treatments.
            </p>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="text-xs font-semibold text-rose-800 hover:text-rose-950 flex items-center gap-1"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div 
            onClick={() => onNavigate('bridal')}
            className="p-5 bg-white rounded-xl border border-rose-100 hover:border-rose-300 hover:shadow-sm cursor-pointer transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[11px] font-semibold text-rose-700 uppercase tracking-wider block mb-1">
                Bridal Studio
              </span>
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                HD &amp; Airbrush Bridal
              </h3>
              <p className="text-xs text-stone-600 mb-4">
                Long-lasting bridal makeup, hair updo, dupatta pinning &amp; jewelry setting.
              </p>
            </div>
            <span className="text-xs font-semibold text-rose-800 flex items-center gap-1">
              Packages from ₹7,999 &rarr;
            </span>
          </div>

          {/* Card 2 */}
          <div 
            onClick={() => onNavigate('hair')}
            className="p-5 bg-white rounded-xl border border-rose-100 hover:border-rose-300 hover:shadow-sm cursor-pointer transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[11px] font-semibold text-rose-700 uppercase tracking-wider block mb-1">
                Color &amp; Spa
              </span>
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                Highlights + Global + Spa
              </h3>
              <p className="text-xs text-stone-600 mb-4">
                Balayage highlights, global hair color, and deep nourishing hair spa combo.
              </p>
            </div>
            <span className="text-xs font-semibold text-rose-800 flex items-center gap-1">
              Combo for ₹5,499 &rarr;
            </span>
          </div>

          {/* Card 3 */}
          <div 
            onClick={() => onNavigate('services')}
            className="p-5 bg-white rounded-xl border border-rose-100 hover:border-rose-300 hover:shadow-sm cursor-pointer transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[11px] font-semibold text-rose-700 uppercase tracking-wider block mb-1">
                Skin Radiance
              </span>
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                HydraFacial Glow
              </h3>
              <p className="text-xs text-stone-600 mb-4">
                Painless pore cleansing, de-tan extraction, and instant hydration.
              </p>
            </div>
            <span className="text-xs font-semibold text-rose-800 flex items-center gap-1">
              From ₹2,499 &rarr;
            </span>
          </div>

          {/* Card 4 */}
          <div 
            onClick={() => onNavigate('services')}
            className="p-5 bg-white rounded-xl border border-rose-100 hover:border-rose-300 hover:shadow-sm cursor-pointer transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[11px] font-semibold text-rose-700 uppercase tracking-wider block mb-1">
                Hygienic Care
              </span>
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                Brazilian &amp; Rica Wax
              </h3>
              <p className="text-xs text-stone-600 mb-4">
                Gentle Italian strip-less wax in completely sanitized private suites.
              </p>
            </div>
            <span className="text-xs font-semibold text-rose-800 flex items-center gap-1">
              From ₹1,600 &rarr;
            </span>
          </div>
        </div>
      </section>

      {/* Client Reviews Overview */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-rose-50/70 rounded-2xl p-6 sm:p-8 border border-rose-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-1 text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <h3 className="font-serif text-xl font-bold text-rose-950">
                What Our Clients Say
              </h3>
              <p className="text-xs text-stone-600">
                4.9 out of 5 stars based on 242 reviews in Jalandhar.
              </p>
            </div>
            <button
              onClick={() => onNavigate('booking')}
              className="px-4 py-2 text-xs font-semibold bg-rose-800 text-white rounded-lg hover:bg-rose-900 transition-colors self-start sm:self-auto"
            >
              Book Your Visit
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {REVIEWS.slice(0, 2).map((rev, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-rose-100 text-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-stone-900">{rev.name}</span>
                  <span className="text-[11px] text-rose-700 font-medium">{rev.service}</span>
                </div>
                <p className="text-stone-600 italic">"{rev.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Address & Quick Contact Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl p-6 border border-stone-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs font-semibold text-rose-800">
              <MapPin className="w-4 h-4" />
              <span>Location in Jalandhar (4.6 km)</span>
            </div>
            <p className="text-sm font-medium text-stone-900">
              {SALON_INFO.address.shop}, {SALON_INFO.address.area}, {SALON_INFO.address.city}
            </p>
            <p className="text-xs text-stone-500">
              Timings: {SALON_INFO.timings}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${SALON_INFO.phone}`}
              className="px-4 py-2 text-xs font-semibold text-rose-900 bg-rose-50 hover:bg-rose-100 rounded-lg transition-colors"
            >
              Call {SALON_INFO.phone}
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors"
            >
              View Map &amp; Directions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
