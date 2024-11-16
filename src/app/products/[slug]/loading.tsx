import React from "react";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item} className="animate-pulse w-full">
          {/* Image skeleton */}
          <div className="bg-gray-200 rounded-lg h-48 w-full mb-4"></div>

          {/* Title skeleton */}
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>

          {/* Subtitle skeleton */}
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
}
