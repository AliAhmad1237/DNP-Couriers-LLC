import React from 'react';
import { ShieldCheck, Award, MapPin, CheckCircle, FileCheck, Truck, Scale } from 'lucide-react';
import { COMPANY_INFO } from '../data/logisticsData';

export default function ComplianceTicker() {
  const credentials = [
    {
      title: "Active Interstate Carrier",
      value: "FMCSA Authorized",
      subtext: "Continuous Authority Since April 2016",
      icon: ShieldCheck,
      highlight: true,
    },
    {
      title: "USDOT Identification",
      value: COMPANY_INFO.usdot,
      subtext: "Federal Motor Carrier Safety Admin",
      icon: Scale,
      highlight: false,
    },
    {
      title: "Motor Carrier Number",
      value: COMPANY_INFO.mc,
      subtext: "Interstate Operating Docket",
      icon: FileCheck,
      highlight: false,
    },
    {
      title: "Insurance & Bonding",
      value: "$1M+ Liability / $250K Cargo",
      subtext: "A-Rated Commercial Underwriters",
      icon: CheckCircle,
      highlight: false,
    },
    {
      title: "Headquarters Hub",
      value: "Brentwood, TN 37027",
      subtext: "1200 Chickasaw Dr (Plus Nashville Terminal)",
      icon: MapPin,
      highlight: false,
    },
  ];

  return (
    <section id="compliance" className="border-y border-white/[0.08] bg-[#080c16]/95 py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-1">
              <Award className="w-3.5 h-3.5" />
              Verified Federal Regulatory Standards
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Enterprise Compliance & Safety Credentials
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Shippers and brokers require absolute legal and regulatory certainty. DNP Couriers LLC maintains spotless 
            interstate safety standing with direct federal verification.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {credentials.map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <div
                key={idx}
                className={`p-5 rounded-xl border transition-all duration-300 ${
                  cred.highlight
                    ? 'bg-gradient-to-b from-cyan-950/40 to-slate-900/60 border-cyan-500/40 shadow-lg shadow-cyan-950/30'
                    : 'bg-white/[0.02] border-white/[0.08] hover:border-white/20 hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
                    {cred.title}
                  </span>
                  <Icon className={`w-4 h-4 ${cred.highlight ? 'text-cyan-400' : 'text-slate-500'}`} />
                </div>
                <div className="text-lg font-bold font-mono text-white tracking-tight">
                  {cred.value}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {cred.subtext}
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification Strip Callout */}
        <div className="mt-6 p-4 rounded-xl bg-slate-900/60 border border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
            <span className="text-xs sm:text-sm text-slate-300">
              Need our official Certificate of Insurance (COI) or W-9 form for your vendor setup?
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
            >
              Call (615) 525-7151 for Instant Onboarding Packet
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
