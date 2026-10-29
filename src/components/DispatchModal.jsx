import React, { useEffect, useRef, useState } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Phone, 
  Truck, 
  Calendar, 
  MapPin, 
  ShieldCheck, 
  AlertCircle,
  Copy,
  Check
} from 'lucide-react';
import { COMPANY_INFO } from '../data/logisticsData';

export default function DispatchModal({ isOpen, onClose, initialData = {} }) {
  const dialogRef = useRef(null);

  const [formData, setFormData] = useState({
    shipperName: '',
    company: '',
    phone: '',
    email: '',
    origin: '',
    destination: '',
    equipment: 'Expedited Cargo Sprinter',
    cargoDescription: '',
    weight: '',
    pickupDate: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [copied, setCopied] = useState(false);

  // Sync initialData when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        origin: initialData.origin || prev.origin || 'Brentwood / Nashville, TN (HQ)',
        destination: initialData.destination || prev.destination || '',
        equipment: initialData.equipment || prev.equipment || 'Expedited Cargo Sprinter',
        weight: initialData.weight || prev.weight || '',
        notes: initialData.estimatedCost ? `Estimated Rate Quoted: ${initialData.estimatedCost}` : prev.notes,
      }));
      setSubmitted(false);
      setCopied(false);
    }
  }, [isOpen, initialData]);

  // Handle native dialog open / close per modern-web-guidance
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  // Fallback for light-dismiss if closedby is unsupported
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!('closedBy' in HTMLDialogElement.prototype)) {
      const outside = (e, d) => {
        const r = d.getBoundingClientRect();
        return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
      };

      let pressedOutside = false;
      const handlePointerDown = (e) => {
        pressedOutside = outside(e, dialog);
      };
      const handlePointerUp = (e) => {
        if (pressedOutside && outside(e, dialog)) {
          onClose();
        }
      };

      dialog.addEventListener('pointerdown', handlePointerDown);
      dialog.addEventListener('pointerup', handlePointerUp);

      return () => {
        dialog.removeEventListener('pointerdown', handlePointerDown);
        dialog.removeEventListener('pointerup', handlePointerUp);
      };
    }
  }, [onClose]);

  // Handle native cancel (Esc key)
  const handleCancel = (e) => {
    e.preventDefault();
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomCode = `DNP-${Math.floor(1000 + Math.random() * 9000)}-${formData.equipment.substring(0, 3).toUpperCase()}`;
    setBookingRef(randomCode);
    setSubmitted(true);
  };

  const handleCopyCode = () => {
    if (bookingRef) {
      navigator.clipboard.writeText(bookingRef);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      id="dispatch-dialog"
      aria-labelledby="dispatch-dialog-title"
      closedby="any"
      onCancel={handleCancel}
      className="m-auto rounded-2xl bg-[#0d1424] text-slate-100 border border-cyan-500/40 p-0 shadow-2xl max-w-2xl w-[95vw] backdrop:bg-slate-950/80 backdrop:backdrop-blur-md outline-none"
    >
      <div className="p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-white/[0.08] pb-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              USDOT 2321171 • MC960224
            </div>
            <h2 id="dispatch-dialog-title" className="text-2xl font-extrabold text-white">
              {submitted ? "Dispatch Confirmed" : "Request Rapid Freight Dispatch"}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Confirmation State */}
        {submitted ? (
          <div className="space-y-6 text-center py-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400 shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Dispatch Order Dispatched to On-Call Coordinator</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Your dispatch request has been logged into the DNP Couriers terminal queue. Our dispatch coordinator 
                in Brentwood is reviewing equipment availability for immediate lock-in.
              </p>
            </div>

            {/* Reference Badge */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-cyan-500/30 max-w-md mx-auto flex items-center justify-between">
              <div className="text-left">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Booking Reference Number
                </span>
                <span className="text-lg font-mono font-extrabold text-cyan-300">{bookingRef}</span>
              </div>
              <button
                type="button"
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-white/[0.06] hover:bg-white/[0.1] text-slate-200 border border-white/10 transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* Quick Details Summary */}
            <div className="text-xs font-mono text-slate-400 max-w-md mx-auto space-y-1 bg-white/[0.02] p-4 rounded-xl border border-white/[0.06] text-left">
              <div><strong>Shipper:</strong> {formData.shipperName} ({formData.company})</div>
              <div><strong>Route:</strong> {formData.origin} &rarr; {formData.destination}</div>
              <div><strong>Equipment:</strong> {formData.equipment}</div>
              {formData.weight && <div><strong>Weight:</strong> {formData.weight}</div>}
            </div>

            {/* Direct Telephone Action */}
            <div className="pt-2">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-500/25"
              >
                <Phone className="w-4 h-4" />
                <span>Call Dispatch Now: (615) 525-7151</span>
              </a>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-xs text-slate-400 hover:text-white underline block mx-auto pt-2"
            >
              Close this window
            </button>
          </div>
        ) : (
          /* Dispatch Form */
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Shipper Name & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  Contact Name <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  name="shipperName"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.shipperName}
                  onChange={handleChange}
                  className="w-full bg-[#080c14] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  Company / Organization
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="e.g. Apex Industrial Supply"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-[#080c14] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-all"
                />
              </div>
            </div>

            {/* Phone & Email (with modern :user-valid validation) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  Direct Telephone <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="(615) 555-0199"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#080c14] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  Business Email <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="logistics@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#080c14] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-all"
                />
              </div>
            </div>

            {/* Origin & Destination */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  Pick-Up Address / City <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  name="origin"
                  required
                  placeholder="e.g. Brentwood, TN 37027"
                  value={formData.origin}
                  onChange={handleChange}
                  className="w-full bg-[#080c14] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  Delivery Destination <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  name="destination"
                  required
                  placeholder="e.g. Atlanta, GA 30303"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full bg-[#080c14] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-all"
                />
              </div>
            </div>

            {/* Equipment & Cargo Weight */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  Vehicle Type Required
                </label>
                <select
                  name="equipment"
                  value={formData.equipment}
                  onChange={handleChange}
                  className="w-full bg-[#080c14] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-all"
                >
                  <option value="Expedited Cargo Sprinter">Expedited Cargo Sprinter (Hot-Shot)</option>
                  <option value="26ft Box Truck with Liftgate">26ft Box Truck with Liftgate (Commercial LTL)</option>
                  <option value="53ft Interstate Dry Van">53ft Interstate Dry Van (Full Truckload)</option>
                  <option value="Climate-Controlled Reefer">Climate-Controlled Reefer Unit</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  Estimated Weight (lbs)
                </label>
                <input
                  type="text"
                  name="weight"
                  placeholder="e.g. 2,500 lbs (3 Pallets)"
                  value={formData.weight}
                  onChange={handleChange}
                  className="w-full bg-[#080c14] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-all"
                />
              </div>
            </div>

            {/* Cargo Description / Specifics */}
            <div>
              <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                Cargo Description & Special Instructions
              </label>
              <textarea
                name="notes"
                rows={2}
                placeholder="e.g. Palletized auto sensors, dock pickup required by 4 PM, liftgate needed at destination."
                value={formData.notes}
                onChange={handleChange}
                className="w-full bg-[#080c14] border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-all resize-none"
              />
            </div>

            {/* Submit & Dispatch Action */}
            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between gap-4">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                Emergency Hotline: (615) 525-7151
              </a>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-md shadow-cyan-500/25 flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Dispatch</span>
                </button>
              </div>
            </div>

          </form>
        )}

      </div>
    </dialog>
  );
}
