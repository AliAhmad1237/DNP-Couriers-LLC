# DNP Couriers LLC — Master Corporate Website

A bespoke, production-ready, multi-page corporate website for **DNP Couriers LLC**, an authorized interstate motor carrier based in Brentwood, Tennessee.

---

## 1. Verified Corporate Profile
- **Entity Legal Name:** DNP Couriers LLC
- **Primary Listed Address:** 1200 Chickasaw Drive, Brentwood, TN 37027, United States
- **Phone:** (615) 525-7151
- **USDOT Number:** 2321171
- **MC Number:** 960224
- **Operating Authority:** Active Interstate Motor Carrier
- **Authorized Cargo Categories:** General Freight and Household Goods

---

## 2. Multi-Page Architecture (10 Distinct Routes)
Built on `react-router-dom` with distinct URL routes, metadata, and custom editorial layouts:

1. **`/`** — Home: Cinematic hero, two-column editorial intro, listed cargo overview, industry framing, dark charcoal philosophy feature, closing CTA.
2. **`/about`** — About DNP Couriers: Company background, 3 operational guiding principles, verified registration info.
3. **`/services`** — Services Overview: Core transportation categories, general freight and household goods breakdowns, shipper intake guide.
4. **`/services/general-freight`** — General Freight: Detailed service page with shipment evaluation factors, 5-point shipper checklist, and interactive FAQ.
5. **`/services/household-goods`** — Household Goods: Dedicated page featuring a mandatory **Owner Verification & Draft Notice**, explaining federal classification while withholding unverified consumer moving claims.
6. **`/industries`** — Industries & Cargo: Cargo classification overview, specification requirements, and cargo acceptance guidance.
7. **`/request-a-quote`** — Request a Quote: Comprehensive freight intake form (contact info, pickup/delivery cities, dates, commodity, weight, dimensions, access constraints, consent, spam honeypot).
8. **`/contact`** — Contact: Verified Brentwood address, direct phone link `(615) 525-7151`, contact message form, location verification notice.
9. **`/privacy-policy`** — Privacy Policy: Complete legal data handling and privacy disclosures.
10. **`/terms`** — Terms of Use: Informational website access terms and commercial carriage contract disclaimers.
11. **`*`** — Custom 404 Page: Accessible error state with direct navigation back to Home and Services.

---

## 3. Brand Identity & Visual System
- **Palette:**
  - Deep Charcoal: `#151719`
  - Warm White: `#FAFAF8`
  - Steel Gray: `#737980`
  - Muted Amber Accent: `#D99A38`
  - Pure White: `#FFFFFF`
- **Typography:** Refined sans-serif (`Inter`) with controlled line lengths and generous whitespace.
- **Design Philosophy:** Minimalist, editorial, disciplined borders (`border-[#151719]/10`), authentic commercial trucking photography, smooth transitions, and zero visual gimmicks.

---

## 4. Local Development & Production Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```
