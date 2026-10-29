import React, { useState, useId } from 'react';
import { 
  Calculator, 
  ArrowRight, 
  Truck, 
  Clock, 
  MapPin, 
  Zap, 
  CheckCircle2, 
  DollarSign, 
  Info,
  Calendar
} from 'lucide-react';
import { CORRIDORS, COMPANY_INFO } from '../data/logisticsData';

export default function RateEstimator({ onOpenDispatch }) {
  const originId = useId();
  const destId = useId();
  const equipId = useId();
  const urgencyId = useId();

  const [origin, setOrigin] = useState("Nashville / Brentwood Hub, TN");
  const [destination, setDestination] = useState("Atlanta, GA");
  const [equipment, setEquipment] = useState("sprinter");
  const [weight, setWeight] = useState(2500);
  const [urgency, setUrgency] = useState("expedited");

  // City distance lookup table relative to Middle Tennessee
  const distanceMap = {
    "Atlanta, GA": 248,
    "Louisville, KY": 175,
    "Memphis, TN": 212,
    "Birmingham, AL": 190,
    "Indianapolis, IN": 288,
    "St. Louis, MO": 310,
    "Charlotte, NC": 410,
    "Chicago, IL": 470,
    "Dallas-Fort Worth, TX": 660,
    "Detroit, MI": 535,
  };

  const selectedDistance = distanceMap[destination] || 320;

  // Equipment rates per mile base
  const equipmentConfig = {
    sprinter: {
      name: "Expedited Cargo Sprinter",
      baseRatePerMile: 2.35,
      minCharge: 380,
      capacityLabel: "Up to 4,200 lbs • 3 Pallets",
      avgSpeed: 62,
    },
    "box-truck": {
      name: "26ft Box Truck with Liftgate",
      baseRatePerMile: 2.95,
      minCharge: 550,
      capacityLabel: "Up to 10,000 lbs • 12 Pallets",
      avgSpeed: 55,
    },
    "dry-van": {
      name: "53ft Interstate Dry Van (FTL)",
      baseRatePerMile: 3.45,
      minCharge: 750,
      capacityLabel: "Up to 45,000 lbs • 26 Pallets",
      avgSpeed: 52,
    },
    reefer: {
      name: "Climate-Controlled Reefer",
      baseRatePerMile: 3.85,
      minCharge: 850,
      capacityLabel: "Temperature-Regulated (-10°F to 70°F)",
      avgSpeed: 54,
    },
  };

  const urgencyMultiplier = {
    standard: 1.0,
    expedited: 1.25,
    "hot-shot": 1.55,
  };

  const currentEquip = equipmentConfig[equipment];
  const multiplier = urgencyMultiplier[urgency] || 1.25;

  // Calculate pricing
  const rawBase = selectedDistance * currentEquip.baseRatePerMile;
  const calculatedBase = Math.max(rawBase, currentEquip.minCharge) * multiplier;
  const lowEstimate = Math.round(calculatedBase * 0.95);
  const highEstimate = Math.round(calculatedBase * 1.08);

  // Transit time estimate in hours
  const transitHours = (selectedDistance / currentEquip.avgSpeed).toFixed(1);

  const handleBookWithRate = () => {
    onOpenDispatch({
      origin,
      destination,
      equipment: currentEquip.name,
      urgency,
      weight: `${weight} lbs`,
      estimatedCost: `$${lowEstimate} - $${highEstimate}`,
      distance: `${selectedDistance} miles`,
    });
  };

  return (
    <section id="estimator" className="py-20 bg-[#090e1a] relative border-b border-white/[0.08]">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <Calculator className="w-3.5 h-3.5" />
            Transparent Freight Intelligence
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Instant Interstate Rate & Transit Calculator
          </h2>
          <p className="text-base text-slate-300">
            Generate instant real-time market estimates for dedicated courier, straight truck liftgate, 
            and full truckload shipments from Middle Tennessee across the continental United States.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Column (7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0f1626]/90 border border-white/[0.08] p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              Configure Shipment Parameters
            </h3>

            <div className="space-y-6">
              
              {/* Origin & Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={originId} className="block text-xs font-mono font-medium text-slate-400 uppercase tracking-wider mb-2">
                    Origin Hub
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-cyan-400 absolute left-3.5 top-3.5" />
                    <select
                      id={originId}
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      className="w-full bg-[#080c14] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-100 font-medium focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all cursor-pointer"
                    >
                      <option value="Nashville / Brentwood Hub, TN">Nashville / Brentwood Hub, TN (HQ)</option>
                      <option value="Franklin / Spring Hill, TN">Franklin / Spring Hill, TN (Automotive Hub)</option>
                      <option value="Murfreesboro / Smyrna, TN">Murfreesboro / Smyrna, TN (Distribution)</option>
                      <option value="Memphis Air Cargo Hub, TN">Memphis Air Cargo Hub, TN</option>
                      <option value="Custom Origin (Specify on Dispatch)">Custom Pick-Up Location</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor={destId} className="block text-xs font-mono font-medium text-slate-400 uppercase tracking-wider mb-2">
                    Destination Metro
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-amber-400 absolute left-3.5 top-3.5" />
                    <select
                      id={destId}
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full bg-[#080c14] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-100 font-medium focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all cursor-pointer"
                    >
                      {Object.keys(distanceMap).map((city) => (
                        <option key={city} value={city}>
                          {city} ({distanceMap[city]} mi)
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Equipment Type Selection */}
              <div>
                <label htmlFor={equipId} className="block text-xs font-mono font-medium text-slate-400 uppercase tracking-wider mb-2">
                  Select Equipment & Vehicle Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id={equipId}>
                  {[
                    { id: "sprinter", title: "Cargo Sprinter", desc: "Up to 4,200 lbs • 3 Pallets", badge: "Fastest Hot-Shot" },
                    { id: "box-truck", title: "26ft Box Truck", desc: "Up to 10k lbs • 3k Liftgate", badge: "LTL / Pallets" },
                    { id: "dry-van", title: "53ft Interstate Dry Van", desc: "Up to 45k lbs • 26 Pallets", badge: "Full Truckload" },
                    { id: "reefer", title: "Reefer / Temp-Controlled", desc: "(-10°F to 70°F) • High Value", badge: "Cold-Chain" },
                  ].map((eq) => (
                    <button
                      key={eq.id}
                      type="button"
                      onClick={() => setEquipment(eq.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all ${
                        equipment === eq.id
                          ? 'bg-cyan-500/10 border-cyan-400 shadow-md shadow-cyan-950/40 ring-1 ring-cyan-400/30'
                          : 'bg-[#080c14]/70 border-white/[0.08] hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm text-white">{eq.title}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-cyan-300">
                          {eq.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">{eq.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Weight Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
                    Cargo Weight (Estimate)
                  </label>
                  <span className="font-mono font-bold text-sm text-cyan-400">
                    {weight.toLocaleString()} LBS
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="44000"
                  step="200"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                  <span>Courier / Boxes (200 lbs)</span>
                  <span>12 Pallet Straight Truck (10k lbs)</span>
                  <span>Max FTL (44,000 lbs)</span>
                </div>
              </div>

              {/* Urgency / Dispatch Tier */}
              <div>
                <label className="block text-xs font-mono font-medium text-slate-400 uppercase tracking-wider mb-2">
                  Delivery Urgency & Service Class
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: "standard", label: "Scheduled", desc: "Next-Day Scheduled", icon: Calendar },
                    { id: "expedited", label: "Expedited", desc: "Direct Same-Day Run", icon: Truck },
                    { id: "hot-shot", label: "24/7 Hot-Shot", desc: "Immediate Non-Stop", icon: Zap },
                  ].map((urg) => {
                    const Icon = urg.icon;
                    return (
                      <button
                        key={urg.id}
                        type="button"
                        onClick={() => setUrgency(urg.id)}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          urgency === urg.id
                            ? 'bg-cyan-500/15 border-cyan-400 text-white shadow-sm'
                            : 'bg-[#080c14]/50 border-white/[0.08] text-slate-400 hover:text-white'
                        }`}
                      >
                        <Icon className="w-4 h-4 mx-auto mb-1 text-cyan-400" />
                        <div className="text-xs font-bold">{urg.label}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{urg.desc}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* Results Column (5 Cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-[#131c30] to-[#0c1220] border border-cyan-500/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                  Freight Estimate Result
                </span>
                <h4 className="text-lg font-bold text-white">Direct Carrier Rate</h4>
              </div>
              <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                100% Guaranteed
              </span>
            </div>

            {/* Price Display */}
            <div className="mb-6 bg-slate-950/60 rounded-xl p-5 border border-white/[0.06] text-center">
              <span className="text-xs text-slate-400 uppercase font-mono tracking-wider block mb-1">
                Estimated Lane Pricing
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">
                ${lowEstimate.toLocaleString()} - ${highEstimate.toLocaleString()}
              </div>
              <p className="text-[11px] text-slate-400 mt-1.5">
                All-in price bracket: includes fuel surcharge, highway tolls, and direct team driving.
              </p>
            </div>

            {/* Metrics Breakdown */}
            <div className="space-y-3.5 mb-6 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-white/[0.06]">
                <span className="text-slate-400 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" /> Corridor Distance
                </span>
                <span className="font-mono font-bold text-white">{selectedDistance} Miles</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-white/[0.06]">
                <span className="text-slate-400 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" /> Projected Transit
                </span>
                <span className="font-mono font-bold text-amber-300">~{transitHours} Hours Door-to-Door</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-white/[0.06]">
                <span className="text-slate-400 flex items-center gap-2">
                  <Truck className="w-4 h-4 text-cyan-400" /> Vehicle Assigned
                </span>
                <span className="font-medium text-slate-200 text-right">{currentEquip.name}</span>
              </div>

              <div className="flex items-center justify-between py-2">
                <span className="text-slate-400 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-400" /> Dispatch Window
                </span>
                <span className="font-bold text-emerald-400">Immediate (&lt; 45 Mins in TN)</span>
              </div>
            </div>

            {/* Book Now Button */}
            <button
              type="button"
              onClick={handleBookWithRate}
              className="w-full py-4 px-6 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2"
            >
              <span>Lock In Quote & Request Dispatch</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Phone backup */}
            <div className="mt-4 text-center">
              <p className="text-xs text-slate-400">
                Prefer to book over the phone?{' '}
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-cyan-300 font-bold hover:underline">
                  {COMPANY_INFO.phone}
                </a>
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
