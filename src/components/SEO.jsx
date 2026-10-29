import { useEffect } from 'react';

export default function SEO({ title, description, canonical }) {
  useEffect(() => {
    // Update Title
    const fullTitle = title 
      ? `${title} | DNP Couriers LLC` 
      : 'DNP Couriers LLC — Interstate Freight Transportation | Brentwood, TN';
    document.title = fullTitle;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description || 
      'DNP Couriers LLC is an interstate motor carrier based in Brentwood, Tennessee (USDOT 2321171, MC 960224) providing freight transportation for commercial shippers.';

    // Update Open Graph Title & Description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = fullTitle;

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = metaDescription.content;

  }, [title, description, canonical]);

  return null;
}
