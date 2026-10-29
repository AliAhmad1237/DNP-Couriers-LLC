export const COMPANY = {
  name: "DNP Couriers LLC",
  businessType: "Interstate Motor Carrier",
  operationalFocus: "Box-Truck Transportation & Dedicated Lanes",
  primaryAddress: "1200 Chickasaw Drive, Brentwood, TN 37027, United States",
  addressLocality: "Brentwood",
  addressRegion: "TN",
  postalCode: "37027",
  country: "United States",
  phone: "(615) 525-7151",
  phoneRaw: "+16155257151",
  usdot: "2321171",
  mc: "960224", // MC 960224 — verify against official records prior to filing
  
  // Listed cargo categories from official registration
  categories: [
    {
      id: "general-freight",
      title: "General Freight",
      shortDescription: "Professional box-truck freight transportation for commercial goods across dedicated and scheduled routes.",
      route: "/services/general-freight",
    },
    {
      id: "household-goods",
      title: "Household Goods",
      shortDescription: "Transportation services relating to household goods, subject to confirmed service parameters and applicable operating authority.",
      route: "/services/household-goods",
      status: "verification-required",
    },
  ],

  // Verification & Editorial Integrity Notes
  notes: {
    dedicatedLaneNote: "DNP Couriers LLC is actively exploring recurring dedicated-lane opportunities for its straight box-truck operations with shippers, brokers, and 3PL partners.",
    locationNote: "Primary listed corporate base is 1200 Chickasaw Drive, Brentwood, TN 37027.",
    authorityNote: "USDOT 2321171 and MC 960224 are registered federal motor carrier identifiers.",
    serviceNote: "Specific routes, load counts, and schedules are evaluated individually upon review of lane specifications.",
  },
};
