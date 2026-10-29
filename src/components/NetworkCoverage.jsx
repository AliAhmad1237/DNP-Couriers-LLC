import React, { useState } from 'react';
import { MapPin, Navigation, ArrowRight, Clock, Radio, Truck, Globe } from 'lucide-react';
import { CORRIDORS, COMPANY_INFO } from '../data/logisticsData';

export default function NetworkCoverage({ onOpenDispatch }) {
  const [selectedCorridor, setSelectedCorridor] = useState(CORRIDORS[1]); // Atlanta default

  return (
    <section id="coverage" className="py-20 bg-[#090e1a] relative border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <Globe className="w-3.5 h-3.5" />
            North American Transport Corridors
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Strategic Interstate Hub in Brentwood & Nashville, TN
          </h2>
          <p className="text-base text-slate-300">
            Headquartered at 1200 Chickasaw Drive, Brentwood, Tennessee, DNP Couriers sits at the convergence of 
            three major national interstate arteries (I-65, I-40, and I-24), providing same-day access to over 65% of the US population.
          </p>
        </div>

        {/* Network Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Corridor Selection List (5 Cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0e1526]/90 border border-white/[0.08] p-5 sm:p-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
              <h3 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <Navigation className="w-4 h-4 text-cyan-400" />
                Key Transit Arteries
              </h3>
              <span className="text-[10px] font-mono text-cyan-400">DAILY DEDICATED</span>
            </div>

            <div className="space-y-2 max-h-[480px] overflow-y-auto pr-1">
              {CORRIDORS.map((corridor, idx) => {
                const isSelected = selectedCorridor.city === corridor.city;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedCorridor(corridor)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-cyan-500/15 border-cyan-400 shadow-md ring-1 ring-cyan-400/30 text-white'
                        : 'bg-white/[0.02] border-white/[0.06] text-slate-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm text-white flex items-center gap-2">
                        <span>{corridor.city}, {corridor.state}</span>
                        {corridor.city.includes("Hub") && (
                          <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-cyan-400 text-slate-950">
                            HQ
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-400 font-mono mt-0.5">
                        Distance: {corridor.distance} • Est. Transit: {corridor.time}
                      </div>
                    </div>

                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white/[0.06] text-cyan-300">
                      {corridor.status}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Corridor Radar Detail Panel (7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-gradient-to-b from-[#11192e] to-[#0c1220] border border-cyan-500/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                  Active Corridor Inspection
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Brentwood / Nashville &rarr; {selectedCorridor.city}, {selectedCorridor.state}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {selectedCorridor.status}
              </span>
            </div>

            {/* Visual Route Flow Simulation */}
            <div className="p-6 rounded-xl bg-slate-950/70 border border-white/[0.06] mb-6 relative">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                
                {/* Hub Node */}
                <div className="text-center sm:text-left">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 mb-1">
                    <MapPin className="w-3.5 h-3.5" /> ORIGIN TERMINAL
                  </div>
                  <div className="text-base font-bold text-white">Brentwood / Nashville, TN</div>
                  <p className="text-xs text-slate-400">1200 Chickasaw Dr Hub</p>
                </div>

                {/* Arrow / Mile Badge */}
                <div className="flex flex-col items-center">
                  <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-500/30">
                    {selectedCorridor.distance}
                  </span>
                  <div className="w-24 sm:w-32 h-[2px] bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 my-2 relative">
                    <div className="w-2 h-2 rounded-full bg-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 animate-ping"></div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">~{selectedCorridor.time}</span>
                </div>

                {/* Destination Node */}
                <div className="text-center sm:text-right">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 mb-1">
                    <MapPin className="w-3.5 h-3.5" /> CONSIGNEE CITY
                  </div>
                  <div className="text-base font-bold text-white">{selectedCorridor.city}, {selectedCorridor.state}</div>
                  <p className="text-xs text-slate-400">Commercial / Industrial Drop</p>
                </div>

              </div>
            </div>

            {/* Logistics Corridor Advantages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-xs text-slate-300 font-mono">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <strong className="text-white block mb-1">Corridor Arteries:</strong>
                Primary transit via I-65 / I-40 / I-24 corridors with electronic toll pass and weigh-station bypass credentials.
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <strong className="text-white block mb-1">Dispatch Capability:</strong>
                Dedicated sprinter vans, 26ft straight trucks, and 53ft vans staged for immediate roll-out.
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => onOpenDispatch({
                  origin: "Brentwood / Nashville, TN",
                  destination: `${selectedCorridor.city}, ${selectedCorridor.state}`,
                })}
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-lg shadow-cyan-500/25 flex items-center gap-2"
              >
                <span>Dispatch to {selectedCorridor.city}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
              >
                Inquire Rates: (615) 525-7151
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
