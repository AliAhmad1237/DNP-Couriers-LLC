import React from 'react';
import { 
  Zap, 
  Truck, 
  ShieldCheck, 
  ThermometerSnowflake, 
  ArrowRight, 
  Clock, 
  Package, 
  CheckCircle,
  Building2
} from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/logisticsData';

export default function ServicesGrid({ onOpenDispatch }) {
  const iconMap = {
    "hot-shot": Zap,
    "dedicated-lanes": Building2,
    "interstate-ftl": Truck,
    "medical-secure": ShieldCheck,
    "liftgate-finalmile": Package,
    "urgent-dispatch": Clock,
  };

  return (
    <section id="services" className="py-20 bg-[#090d18] relative border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <Truck className="w-3.5 h-3.5" />
            Operational Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Interstate Freight & Courier Solutions Built for Zero-Delay Demands
          </h2>
          <p className="text-base text-slate-300">
            From emergency industrial hot-shots to scheduled dedicated supply chain lanes, 
            DNP Couriers LLC provides licensed, insured, and verified transportation across North America.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv) => {
            const Icon = iconMap[srv.id] || Truck;
            return (
              <div
                key={srv.id}
                className={`group relative rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between ${
                  srv.featured
                    ? 'bg-gradient-to-b from-[#11192d] to-[#0d1424] border border-cyan-500/30 shadow-xl shadow-cyan-950/20 hover:border-cyan-400'
                    : 'bg-[#0d1322]/80 border border-white/[0.08] hover:border-white/20 hover:bg-[#101728]'
                }`}
              >
                {srv.featured && (
                  <span className="absolute top-5 right-5 text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    High Demand
                  </span>
                )}

                <div>
                  {/* Service Icon */}
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-cyan-400/80 mb-4">
                    {srv.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  {/* Metrics List */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/[0.06]">
                    {srv.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dispatch Trigger CTA */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onOpenDispatch({ preselectedService: srv.title })}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-cyan-400 transition-colors"
                  >
                    <span>Book This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-[11px] font-mono text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    (615) 525-7151
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-slate-900 border border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-white">Have a unique freight dimension or expedited deadline?</h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Our direct dispatchers in Brentwood customize direct routes for overweight, high-value, or time-critical shipments.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="px-5 py-3 rounded-xl text-sm font-bold text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20"
            >
              Speak with a Dispatcher Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
