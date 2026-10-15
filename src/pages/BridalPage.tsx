import React from 'react';
import { Crown, Check, Calendar, Phone, Sparkles } from 'lucide-react';
import { BRIDAL_PACKAGES, BridalPackage, SALON_INFO, SalonService } from '../data/salonData';
import { PageId } from '../components/HeaderNav';

interface BridalPageProps {
  onSelectBridalPackage: (pkg: BridalPackage) => void;
  onNavigate: (page: PageId) => void;
}

export const BridalPage: React.FC<BridalPageProps> = ({
  onSelectBridalPackage,
  onNavigate,
}) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-wider text-rose-700">
          Bridal &amp; Wedding Studio
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-rose-950 mt-1">
          Bridal Makeup &amp; Event Preparation
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-2">
          Specialized bridal packages for Punjabi weddings, Anand Karaj, and receptions. 
          Long-lasting, photo-ready HD and airbrush makeup using MAC, Huda Beauty, and NARS.
        </p>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BRIDAL_PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${
              pkg.recommended
                ? 'bg-rose-950 text-white border-rose-900 shadow-md ring-2 ring-rose-400'
                : 'bg-white text-stone-900 border-stone-200'
            }`}
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className={pkg.recommended ? 'text-rose-300 font-semibold' : 'text-stone-500 font-medium'}>
                  {pkg.duration}
                </span>
                {pkg.recommended && (
                  <span className="bg-rose-500 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded">
                    Popular
                  </span>
                )}
              </div>

              <h2 className="font-serif text-xl font-bold mb-1">
                {pkg.title}
              </h2>
              <p className={`text-xs mb-4 ${pkg.recommended ? 'text-rose-200' : 'text-stone-600'}`}>
                {pkg.description}
              </p>

              <div className="mb-4 pb-4 border-b border-stone-200/20">
                <span className="text-2xl font-bold font-mono tabular-nums">
                  ₹{pkg.price.toLocaleString('en-IN')}
                </span>
              </div>

              {/* Includes */}
              <ul className="space-y-2 text-xs mb-6">
                {pkg.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${pkg.recommended ? 'text-rose-400' : 'text-rose-700'}`} />
                    <span className={pkg.recommended ? 'text-rose-100' : 'text-stone-700'}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onSelectBridalPackage(pkg)}
              className={`w-full py-2.5 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
                pkg.recommended
                  ? 'bg-rose-400 hover:bg-rose-300 text-rose-950 font-bold'
                  : 'bg-rose-900 hover:bg-rose-950 text-white'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Select &amp; Book</span>
            </button>
          </div>
        ))}
      </div>

      {/* Party & Guest Makeup Banner */}
      <div className="p-6 bg-rose-50 rounded-2xl border border-rose-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-lg font-bold text-rose-950">
            Attending a Wedding or Reception?
          </h3>
          <p className="text-xs text-stone-600 mt-0.5">
            We offer Party &amp; Engagement Makeup starting at ₹2,800 including hairstyling and lashes.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onNavigate('booking')}
            className="px-4 py-2 text-xs font-semibold bg-rose-800 text-white rounded-lg hover:bg-rose-900"
          >
            Book Party Look
          </button>
          <a
            href={`tel:${SALON_INFO.phone}`}
            className="px-4 py-2 text-xs font-semibold bg-white text-rose-900 border border-rose-200 rounded-lg hover:bg-rose-100"
          >
            Call Salon
          </a>
        </div>
      </div>
    </div>
  );
};
