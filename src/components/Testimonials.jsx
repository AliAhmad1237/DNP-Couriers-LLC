import React from 'react';
import { Star, ShieldCheck, Quote, Building2, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS, COMPANY_INFO } from '../data/logisticsData';

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#070b14] relative border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <Star className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
            Direct Shipper Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by Industrial, Medical & Automotive Shippers
          </h2>
          <p className="text-base text-slate-300">
            DNP Couriers LLC has built an impeccable reputation across Middle Tennessee and interstate supply chains 
            through flawless execution, transparency, and constant communication.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-7 bg-[#0d1424] border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-mono text-slate-400">5.0 Verified</span>
                </div>

                <Quote className="w-8 h-8 text-cyan-500/30 mb-3" />

                {/* Quote Text */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-3">
                <div>
                  <div className="text-sm font-bold text-white">{t.author}</div>
                  <div className="text-xs text-cyan-400 font-mono">{t.role}</div>
                  <div className="text-xs text-slate-400 font-medium">{t.company}</div>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                  <CheckCircle2 className="w-3 h-3 shrink-0" />
                  <span>{t.metrics}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Federal Carrier Guarantee Strip */}
        <div className="mt-12 rounded-2xl p-6 bg-gradient-to-r from-slate-900 to-cyan-950/40 border border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-cyan-400 shrink-0" />
            <div>
              <div className="text-sm font-bold text-white">Direct Carrier Accountability (No Blind Brokering)</div>
              <p className="text-xs text-slate-400">
                You work directly with the licensed carrier: USDOT {COMPANY_INFO.usdot} • MC {COMPANY_INFO.mc}
              </p>
            </div>
          </div>

          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="text-xs font-mono font-bold text-cyan-300 hover:text-white px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10"
          >
            Direct Dispatch: {COMPANY_INFO.phone}
          </a>
        </div>

      </div>
    </section>
  );
}
