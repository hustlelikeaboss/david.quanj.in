import React from 'react';

export const Gallery = () => {
  const photos = Array(30).fill(1);
  return (
    <section id="gallery" className="gallery-grid">
      {photos.map((p, idx) => {
        return (
          <figure key={idx} className={`gallery-item gallery-item--${idx + 1}`}>
            <img
              src={
                idx % 2 === 0
                  ? `https://picsum.photos/seed/picsum-${idx}/600/800`
                  : `https://picsum.photos/seed/picsum-${idx}/800/600`
              }
              alt=""
            />
          </figure>
        );
      })}
    </section>
  );
};
