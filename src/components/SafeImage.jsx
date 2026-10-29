import React from 'react';
import { IMAGES } from '../data/images';

export default function SafeImage({ imageKey, className, loading = "lazy", priority = false, alt, ...props }) {
  const imgData = IMAGES[imageKey] || {};
  return (
    <img
      src={imgData.src}
      onError={(e) => {
        if (imgData.fallback && e.target.src !== imgData.fallback) {
          e.target.src = imgData.fallback;
        }
      }}
      alt={alt || imgData.alt || "Transportation image"}
      className={className}
      loading={priority ? "eager" : loading}
      fetchPriority={priority ? "high" : "auto"}
      {...props}
    />
  );
}
