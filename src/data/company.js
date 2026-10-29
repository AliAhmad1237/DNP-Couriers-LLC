export const COMPANY = {
  name: "DNP Couriers LLC",
  businessType: "Interstate Motor Carrier",
  primaryAddress: "1200 Chickasaw Drive, Brentwood, TN 37027, United States",
  addressLocality: "Brentwood",
  addressRegion: "TN",
  postalCode: "37027",
  country: "United States",
  phone: "(615) 525-7151",
  phoneRaw: "+16155257151",
  usdot: "2321171",
  mc: "960224", // MC 960224 — verify this identifier against official records before publication
  
  // Listed cargo categories from official registration
  categories: [
    {
      id: "general-freight",
      title: "General Freight",
      shortDescription: "Professional freight transportation for general commercial goods.",
      route: "/services/general-freight",
    },
    {
      id: "household-goods",
      title: "Household Goods",
      shortDescription: "Transportation services relating to household goods, subject to confirmed service offerings and applicable operating authority.",
      route: "/services/household-goods",
      // Important note: Keep editable/draft pending confirmation by business owner
      status: "verification-required",
    },
  ],

  // Verification & Editorial Integrity Notes
  notes: {
    locationNote: "Primary listed corporate base is 1200 Chickasaw Drive, Brentwood, TN 37027. Secondary operational listings require verification before public advertisement.",
    authorityNote: "USDOT 2321171 and MC 960224 must be verified against current FMCSA docket records prior to final production filing.",
    serviceNote: "Specific freight types, equipment availability, and delivery parameters are established directly upon individual inquiry review.",
  },
};
