import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function MasonryGallery({ gallery }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      {gallery && (
        <Masonry gutter={4}>
          {gallery.map((item, i) => (
            <img
              src={item.fields.image.fields.file.url}
              alt={item.fields.altText}
              key={i}
            />
          ))}
        </Masonry>
      )}
    </ResponsiveMasonry>
  );
}
