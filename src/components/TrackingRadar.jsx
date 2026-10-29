import React, { useState } from 'react';
import { 
  Search, 
  Truck, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Navigation, 
  Radio, 
  Activity, 
  FileText,
  AlertCircle
} from 'lucide-react';
import { DEMO_TRACKING_DATA, COMPANY_INFO } from '../data/logisticsData';

export default function TrackingRadar() {
  const [trackingQuery, setTrackingQuery] = useState("DNP-8924-EXP");
  const [activeShipment, setActiveShipment] = useState(DEMO_TRACKING_DATA["DNP-8924-EXP"]);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = trackingQuery.trim().toUpperCase();
    if (DEMO_TRACKING_DATA[query]) {
      setActiveShipment(DEMO_TRACKING_DATA[query]);
      setNotFound(false);
    } else if (query.length > 3) {
      // Generate a dynamic active telemetry object for custom entered codes
      setActiveShipment({
        id: query,
        origin: "Nashville, TN (N. Timber Dr.)",
        destination: "Direct Consignee Facility",
        status: "Active Linehaul In Progress",
        statusCode: "transit",
        eta: "Scheduled Within 4 Hours",
        speed: "64 MPH",
        driverStatus: "Verified Interstate Driver On Route",
        cargo: "General Commercial Freight (Insured under USDOT 2321171)",
        currentLocation: "Interstate Transit Corridor (Middle TN Area)",
        equipment: "Dedicated Carrier Unit",
        completedPercent: 65,
        events: [
          { time: "08:00 AM", location: "Nashville, TN", description: "Dispatched from Terminal & Seal Verified" },
          { time: "11:30 AM", location: "Transit Corridor", description: "GPS Telemetry Active & Pre-Pass Cleared" },
          { time: "02:15 PM", location: "Highway Sector", description: "Linehaul Milestone Cleared - En Route" },
        ],
      });
      setNotFound(false);
    } else {
      setNotFound(true);
    }
  };

  const loadDemo = (id) => {
    setTrackingQuery(id);
    setActiveShipment(DEMO_TRACKING_DATA[id]);
    setNotFound(false);
  };

  return (
    <section id="tracking" className="py-20 bg-[#070b14] relative border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              Live Telemetry & Geofence
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Real-Time Shipment Tracking Radar
            </h2>
            <p className="text-base text-slate-300 max-w-xl mt-2">
              Every DNP Couriers vehicle is integrated with direct satellite GPS and telemetric geofencing, 
              providing enterprise shippers with continuous visibility.
            </p>
          </div>

          {/* Quick Demo Pill Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-mono">Sample Tracking IDs:</span>
            {Object.keys(DEMO_TRACKING_DATA).map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => loadDemo(id)}
                className={`px-2.5 py-1 text-xs font-mono rounded-lg border transition-all ${
                  activeShipment?.id === id
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                    : 'bg-white/[0.04] border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                {id}
              </button>
            ))}
          </div>
        </div>

        {/* Search Input Bar */}
        <form onSubmit={handleSearch} className="mb-10 max-w-2xl">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={trackingQuery}
              onChange={(e) => setTrackingQuery(e.target.value)}
              placeholder="Enter Tracking Number, BOL, or Pro # (e.g. DNP-8924-EXP)"
              className="w-full bg-[#0d1424] border border-white/15 focus:border-cyan-400 rounded-2xl pl-12 pr-36 py-4 text-base text-white font-mono placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition-all"
            />
            <button
              type="submit"
              className="absolute right-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 transition-all"
            >
              Track Now
            </button>
          </div>
          {notFound && (
            <p className="text-xs text-rose-400 mt-2 flex items-center gap-1 font-mono">
              <AlertCircle className="w-3.5 h-3.5" />
              Please enter at least 4 characters to look up active shipment records.
            </p>
          )}
        </form>

        {/* Tracking Radar Display Card */}
        {activeShipment && (
          <div className="rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#090e1a] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
            
            {/* Top Status Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6 mb-8">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xl sm:text-2xl font-extrabold font-mono text-white tracking-tight">
                    {activeShipment.id}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    {activeShipment.status}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1 font-mono">
                  EQUIPMENT: {activeShipment.equipment} • SPEED: {activeShipment.speed}
                </p>
              </div>

              <div className="text-right sm:border-l sm:border-white/[0.08] sm:pl-6">
                <span className="text-xs text-slate-400 font-mono uppercase tracking-wider block">Estimated Delivery</span>
                <span className="text-lg font-bold font-mono text-amber-300">{activeShipment.eta}</span>
              </div>
            </div>

            {/* Visual 4-Step Progress Bar */}
            <div className="mb-10">
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-slate-400">Shipment Milestones</span>
                <span className="text-cyan-400 font-bold">{activeShipment.completedPercent}% In-Transit Completion</span>
              </div>

              <div className="w-full bg-slate-800/80 rounded-full h-3 p-0.5 overflow-hidden mb-6">
                <div
                  className="bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 h-full rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${activeShipment.completedPercent}%` }}
                ></div>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="space-y-1">
                  <div className="w-7 h-7 mx-auto rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <span className="text-[11px] font-bold text-white block">Dispatched</span>
                  <span className="text-[10px] text-slate-400 hidden sm:block">Brentwood Hub</span>
                </div>

                <div className="space-y-1">
                  <div className={`w-7 h-7 mx-auto rounded-full flex items-center justify-center font-bold text-xs ${
                    activeShipment.completedPercent >= 40 ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-slate-500'
                  }`}>
                    {activeShipment.completedPercent >= 40 ? '✓' : '2'}
                  </div>
                  <span className="text-[11px] font-bold text-white block">Interstate Transit</span>
                  <span className="text-[10px] text-slate-400 hidden sm:block">Active Corridor</span>
                </div>

                <div className="space-y-1">
                  <div className={`w-7 h-7 mx-auto rounded-full flex items-center justify-center font-bold text-xs ${
                    activeShipment.completedPercent >= 85 ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-slate-500'
                  }`}>
                    {activeShipment.completedPercent >= 85 ? '✓' : '3'}
                  </div>
                  <span className="text-[11px] font-bold text-white block">Out for Delivery</span>
                  <span className="text-[10px] text-slate-400 hidden sm:block">Destination Zone</span>
                </div>

                <div className="space-y-1">
                  <div className={`w-7 h-7 mx-auto rounded-full flex items-center justify-center font-bold text-xs ${
                    activeShipment.completedPercent === 100 ? 'bg-emerald-400 text-slate-950' : 'bg-slate-800 text-slate-500'
                  }`}>
                    {activeShipment.completedPercent === 100 ? '✓' : '4'}
                  </div>
                  <span className="text-[11px] font-bold text-white block">Delivered & Signed</span>
                  <span className="text-[10px] text-slate-400 hidden sm:block">Proof of Delivery</span>
                </div>
              </div>
            </div>

            {/* Live Data Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              
              {/* Telemetry Details (7 Cols) */}
              <div className="md:col-span-7 space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-white/[0.06] space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-cyan-400">
                      <Navigation className="w-4 h-4" /> CURRENT LIVE COORDINATES
                    </span>
                    <span className="text-emerald-400 font-bold">● Active GPS Lock</span>
                  </div>
                  <div className="text-base font-bold text-white">
                    {activeShipment.currentLocation}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                      Origin Shipper
                    </span>
                    <div className="text-sm font-semibold text-white">{activeShipment.origin}</div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                      Consignee Destination
                    </span>
                    <div className="text-sm font-semibold text-white">{activeShipment.destination}</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    Manifest & Cargo Profile
                  </span>
                  <div className="text-sm font-medium text-slate-200">{activeShipment.cargo}</div>
                </div>
              </div>

              {/* Event Timeline (5 Cols) */}
              <div className="md:col-span-5 rounded-xl bg-slate-950/70 border border-white/[0.06] p-5">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/[0.06]">
                  <h4 className="text-xs font-mono font-bold tracking-widest text-slate-300 uppercase flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    Telemetric Log History
                  </h4>
                  <span className="text-[10px] text-slate-500 font-mono">AUTOMATED BOL</span>
                </div>

                <div className="space-y-4">
                  {activeShipment.events.map((ev, idx) => (
                    <div key={idx} className="relative pl-6 pb-2 border-l border-cyan-500/30 last:border-transparent last:pb-0">
                      <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-cyan-400 ring-4 ring-[#0f172a]"></div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span className="text-cyan-300 font-bold">{ev.time}</span>
                        <span>{ev.location}</span>
                      </div>
                      <p className="text-xs text-slate-300 mt-0.5">{ev.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs text-slate-400">Questions regarding this load?</span>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300"
                  >
                    Direct Dispatch: (615) 525-7151
                  </a>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
