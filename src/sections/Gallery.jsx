import React, { useState } from 'react';

export const Gallery = () => {
  const [show, setShow] = useState(false);
  const [selectedImg, setSelectedImg] = useState({});
  const openLightbox = (id, src) => {
    setShow(true);
    setSelectedImg({
      id,
      src,
    });
  };
  const closeLightbox = () => {
    setShow(false);
    setSelectedImg({});
  };

  const photos = Array(30)
    .fill(1)
    .map((val, idx) => {
      const src =
        idx % 2 === 0
          ? `https://picsum.photos/seed/picsum-${idx}/600/800`
          : `https://picsum.photos/seed/picsum-${idx}/800/600`;
      return {
        id: idx + 1,
        src,
      };
    });

  const navTo = id => {
    const img = photos.find(p => p.id === id);
    setSelectedImg(img);
  };

  return (
    <section id="gallery">
      <div className={`lightbox ${show ? 'visible' : 'hidden'}`}>
        <span className="lightbox-close" onClick={() => closeLightbox()}>
          &times;
        </span>
        <div className="lightbox-content">
          <span className="left" onClick={() => navTo(selectedImg.id - 1)}>
            &larr;
          </span>
          <img src={selectedImg.src} alt="" />
          <span className="right" onClick={() => navTo(selectedImg.id + 1)}>
            &rarr;
          </span>
        </div>
      </div>
      <div className="gallery-grid">
        {photos.map(photo => (
          <figure
            key={photo.id}
            className={`gallery-item gallery-item--${photo.id + 1}`}
          >
            <img
              src={photo.src}
              alt=""
              onClick={() => openLightbox(photo.id, photo.src)}
            />
          </figure>
        ))}
      </div>
    </section>
  );
};
