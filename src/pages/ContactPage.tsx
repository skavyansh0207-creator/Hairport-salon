import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, Navigation, Star, ExternalLink, CheckCircle } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const ContactPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Header */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-rose-700">
          Studio Information
        </span>
        <h1 className="font-serif text-3xl font-bold text-rose-950 mt-1">
          Contact &amp; Location
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-1">
          Visit Hairport Salon in Friends Colony, Jalandhar or connect with us directly by phone or WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Contact Details Card */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-5">
          <h2 className="font-serif text-xl font-bold text-rose-950">
            Salon Details
          </h2>

          <div className="space-y-4 text-xs">
            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-800 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-stone-500 block">Phone / Helpline:</span>
                <a href={`tel:${SALON_INFO.phone}`} className="font-bold text-sm text-stone-900 hover:text-rose-800 font-mono">
                  {SALON_INFO.phone}
                </a>
                <div className="mt-1">
                  <a
                    href={SALON_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-700 font-semibold"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-800 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-stone-500 block">Full Address:</span>
                <p className="font-medium text-stone-900 leading-relaxed">
                  {SALON_INFO.address.shop},<br />
                  {SALON_INFO.address.area},<br />
                  {SALON_INFO.address.city}, {SALON_INFO.address.state} — {SALON_INFO.address.pincode}
                </p>
                <span className="text-stone-500 text-[11px] block mt-0.5">
                  Distance: {SALON_INFO.address.distance} from City Center
                </span>
              </div>
            </div>

            {/* Timings */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-800 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-stone-500 block">Working Hours:</span>
                <p className="font-bold text-stone-900">{SALON_INFO.timings}</p>
                <span className="text-emerald-700 text-[11px]">Open all 7 days</span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-start gap-3 pt-2 border-t border-stone-100">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              </div>
              <div>
                <span className="text-stone-500 block">Client Satisfaction:</span>
                <p className="font-bold text-stone-900">
                  {SALON_INFO.rating} Stars ({SALON_INFO.totalReviews} Google Reviews)
                </p>
              </div>
            </div>
          </div>

          <a
            href={SALON_INFO.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 text-xs font-semibold text-white bg-rose-800 hover:bg-rose-900 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Navigation className="w-4 h-4" />
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Landmarks & Parking Guide */}
        <div className="space-y-4">
          <div className="bg-rose-50/70 p-6 rounded-2xl border border-rose-100 space-y-3">
            <h3 className="font-serif text-lg font-bold text-rose-950 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-rose-700" />
              <span>How to Reach Us</span>
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              We are located at <strong>Shop No. 8</strong>, directly adjacent to <strong>Ruby Aerobics</strong> in Friends Colony, Khurla Kingra.
            </p>
            <ul className="text-xs text-stone-600 space-y-1.5 pt-1">
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                <span>Around 8 minutes from Model Town Jalandhar</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                <span>Quick approach from Khurla Kingra main road</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                <span>Free parking space for two-wheelers and cars</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200 text-xs text-stone-600 space-y-2">
            <h4 className="font-bold text-stone-900">Appointments &amp; Walk-ins:</h4>
            <p>
              Walk-ins are always welcomed during opening hours. 
              For bridal packages, balayage hair color, or weekend appointments, booking in advance is recommended to ensure zero wait time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
