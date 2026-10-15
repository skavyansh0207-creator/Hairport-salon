import React from 'react';
import { Scissors, Check, Sparkles, Calendar, Clock } from 'lucide-react';
import { SALON_SERVICES, SalonService, SALON_INFO } from '../data/salonData';
import { PageId } from '../components/HeaderNav';

interface HairStudioPageProps {
  selectedServices: SalonService[];
  onToggleService: (service: SalonService) => void;
  onNavigate: (page: PageId) => void;
}

export const HairStudioPage: React.FC<HairStudioPageProps> = ({
  selectedServices,
  onToggleService,
  onNavigate,
}) => {
  const isSelected = (id: string) => selectedServices.some((s) => s.id === id);

  const hairServices = SALON_SERVICES.filter(
    (s) => s.category === 'hair' || s.id === 'highlights-global-spa'
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      {/* Title */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-rose-700">
          Hair Studio &amp; Color Bar
        </span>
        <h1 className="font-serif text-3xl font-bold text-rose-950 mt-1">
          Highlights, Balayage, Extensions &amp; Hair Spa
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
          Personalized hair transformations using ammonia-free L'Oréal Professionnel colors, 
          100% natural Remy hair extensions, and deep restorative scalp hair spas.
        </p>
      </div>

      {/* Featured Banner: Highlights + Global + Spa */}
      <div className="bg-gradient-to-r from-rose-950 via-rose-900 to-rose-950 text-white rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Signature Transformation Combo
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Highlights + Global Color + Deep Hair Spa
            </h2>
            <p className="text-xs sm:text-sm text-rose-100 max-w-xl leading-relaxed">
              Complete hair makeover: Seamless balayage/foil highlights, rich global base color, and an intensive bond-repair hair spa to keep your tresses soft, glossy, and healthy.
            </p>
            <div className="flex items-center gap-4 text-xs text-rose-200 pt-2 font-mono">
              <span>Duration: ~2.5 - 3 Hours</span>
              <span>·</span>
              <span>Ammonia-Free</span>
            </div>
          </div>

          <div className="text-left md:text-right shrink-0">
            <span className="text-xs uppercase text-rose-300 block">Complete Combo</span>
            <span className="font-mono text-3xl font-bold text-white block mb-3">
              ₹5,499
            </span>
            <button
              onClick={() => {
                const combo = SALON_SERVICES.find((s) => s.id === 'highlights-global-spa');
                if (combo && !isSelected(combo.id)) {
                  onToggleService(combo);
                }
                onNavigate('booking');
              }}
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-bold rounded-lg shadow-sm transition-colors"
            >
              Book This Combo
            </button>
          </div>
        </div>
      </div>

      {/* Hair Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {hairServices.map((service) => {
          const selected = isSelected(service.id);
          return (
            <div
              key={service.id}
              className={`p-5 bg-white rounded-xl border flex flex-col justify-between transition-all ${
                selected ? 'border-rose-500 ring-1 ring-rose-500 bg-rose-50/20' : 'border-stone-200'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    {service.duration}
                  </span>
                  {service.popular && (
                    <span className="text-rose-700 font-semibold text-[11px]">Popular</span>
                  )}
                </div>

                <h3 className="font-serif text-lg font-bold text-stone-900 mb-1">
                  {service.name}
                </h3>
                <p className="text-xs text-stone-600 mb-4">
                  {service.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                <span className="font-mono text-base font-bold text-stone-900">
                  ₹{service.price.toLocaleString('en-IN')}
                </span>

                <button
                  onClick={() => onToggleService(service)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    selected
                      ? 'bg-rose-800 text-white'
                      : 'bg-stone-100 text-stone-800 hover:bg-rose-100 hover:text-rose-900'
                  }`}
                >
                  {selected ? 'Added to Booking' : '+ Add Service'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Hair Extensions Note */}
      <div className="p-5 bg-stone-100 rounded-xl border border-stone-200 text-xs text-stone-700 space-y-1">
        <h4 className="font-bold text-stone-900">About Our Natural Hair Extensions:</h4>
        <p>
          We use 100% human Remy hair that can be safely washed, blow-dried, and heat styled. 
          Available in clip-in sets or semi-permanent tape-in attachments. Free shade matching at the salon!
        </p>
      </div>
    </div>
  );
};
