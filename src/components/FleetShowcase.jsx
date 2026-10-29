import React, { useState } from 'react';
import { Truck, Package, ShieldCheck, ThermometerSnowflake, Check, ArrowRight, Gauge, Layers, Ruler } from 'lucide-react';
import { FLEET_UNITS, COMPANY_INFO } from '../data/logisticsData';

export default function FleetShowcase({ onOpenDispatch }) {
  const [activeTab, setActiveTab] = useState(FLEET_UNITS[0].id);

  const activeUnit = FLEET_UNITS.find((u) => u.id === activeTab) || FLEET_UNITS[0];

  const iconComponents = {
    Truck: Truck,
    Package: Package,
    ShieldCheck: ShieldCheck,
    ThermometerSnowflake: ThermometerSnowflake,
  };

  return (
    <section id="fleet" className="py-20 bg-[#070b14] relative border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <Gauge className="w-3.5 h-3.5" />
            Equipment Standards & Technical Specs
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Commercial Fleet Engineered for Reliability
          </h2>
          <p className="text-base text-slate-300">
            Every vehicle in our fleet is company-maintained to strict USDOT federal standards, 
            equipped with satellite telematics, load-locks, and protective strapping.
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {FLEET_UNITS.map((unit) => {
            const Icon = iconComponents[unit.icon] || Truck;
            const isSelected = unit.id === activeTab;
            return (
              <button
                key={unit.id}
                type="button"
                onClick={() => setActiveTab(unit.id)}
                className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30 scale-105'
                    : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.08]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{unit.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Unit Technical Spec Sheet */}
        <div className="rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#090e1a] border border-cyan-500/30 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 6 Cols: Specifications */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {activeUnit.badge}
                </span>
                <span className="text-xs font-mono text-slate-400 uppercase">
                  {activeUnit.category}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activeUnit.name}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                <strong className="text-white">Optimal Use Cases:</strong> {activeUnit.idealFor}
              </p>

              {/* Spec Badges Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-mono mb-1">
                    <Gauge className="w-3.5 h-3.5 text-cyan-400" /> MAX PAYLOAD
                  </div>
                  <div className="text-lg font-bold font-mono text-white">{activeUnit.payload}</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-mono mb-1">
                    <Layers className="w-3.5 h-3.5 text-cyan-400" /> PALLET CAPACITY
                  </div>
                  <div className="text-lg font-bold font-mono text-white">{activeUnit.capacity}</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-mono mb-1">
                    <Ruler className="w-3.5 h-3.5 text-cyan-400" /> CARGO BAY
                  </div>
                  <div className="text-xs font-bold font-mono text-slate-200 mt-1">{activeUnit.cargoDimensions}</div>
                </div>
              </div>

              {/* Equipment Key Features */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Operational Equipment Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeUnit.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenDispatch({ equipment: activeUnit.name })}
                  className="px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/25 flex items-center gap-2"
                >
                  <span>Book This Vehicle Unit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
                >
                  Direct Dispatch: (615) 525-7151
                </a>
              </div>

            </div>

            {/* Right 5 Cols: Blueprint Visual Display */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#090e1a] border border-cyan-500/20 p-6 relative overflow-hidden">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-white/[0.06] pb-3 mb-6">
                  <span>BLUEPRINT DIAGRAM</span>
                  <span className="text-cyan-400 font-bold">USDOT 2321171 COMPLIANT</span>
                </div>

                {/* Technical Vehicle Silhouette Graphic */}
                <div className="h-56 flex flex-col items-center justify-center border border-dashed border-cyan-500/30 rounded-xl bg-slate-950/80 p-4 relative">
                  <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3 shadow-inner">
                    <Truck className="w-10 h-10" />
                  </div>
                  <span className="text-sm font-bold font-mono text-white text-center">
                    {activeUnit.name}
                  </span>
                  <span className="text-xs text-slate-400 font-mono mt-1">
                    {activeUnit.payload} • {activeUnit.capacity}
                  </span>
                  <div className="mt-3 px-3 py-1 rounded bg-white/[0.04] text-[10px] font-mono text-slate-300">
                    {activeUnit.cargoDimensions}
                  </div>
                </div>

                <div className="mt-5 space-y-2 text-xs text-slate-400 font-mono">
                  <div className="flex justify-between">
                    <span>Telematics System:</span>
                    <span className="text-white">Active 24/7 Satellite GPS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cargo Protection:</span>
                    <span className="text-white">$250,000 Standard Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Operating Authority:</span>
                    <span className="text-cyan-400">Interstate (Since 2016)</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
