import React, { useState } from 'react';

// Simple Lightbox Component
function Lightbox({ src, alt, onClose }) {
  if (!src) return null;

  return (
    <div 
      onClick={onClose}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.8)',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        zIndex: 1000, cursor: 'pointer'
      }}
    >
      <img 
        src={src} 
        alt={alt} 
        style={{ maxWidth: '90%', maxHeight: '90%'}} 
      />
    </div>
  );
}

// Gallery Component
export default function Gallery() {
  // Array of images - note: I switched your relative paths to React-friendly paths
  const images = [
    { thumb: 'assets/images/thumbnail/4.jpg', full: 'assets/images/group/4.jpg', alt: 'VR Presentation and conference' },
    { thumb: 'assets/images/thumbnail/7.jpg', full: 'assets/images/group/5.jpg', alt: 'VR Presentation and conference' },
    { thumb: 'assets/images/thumbnail/10.jpg', full: 'assets/images/group/3.jpg', alt: 'VR Presentation and conference' },
    { thumb: 'assets/images/thumbnail/11.jpg', full: 'assets/images/group/1.jpg', alt: 'VR Presentation and conference' },
    { thumb: 'assets/images/thumbnail/12.jpg', full: 'assets/images/group/2.jpg', alt: 'VR Presentation and conference' },
    { thumb: 'assets/images/group/6.jpg', full: 'assets/images/group/6.jpg', alt: 'VR Presentation and conference' },
  ];

  const [lightboxImg, setLightboxImg] = useState(null);

  return (
    <div className="gallerybox pt-4">
      <div id="selector1" className="grid row">
        {images.map(({ thumb, full, alt }, index) => (
          <div
            key={index}
            className="item grid-item col-lg-4 col-md-6 px-1 mb-2"
          >
            <a href="#!" onClick={(e) => { e.preventDefault(); setLightboxImg({ src: full, alt }); }}>
              <img src={thumb} className="w-100 rounded" alt={alt} />
            </a>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        src={lightboxImg?.src}
        alt={lightboxImg?.alt}
        onClose={() => setLightboxImg(null)}
      />
    </div>
  );
}
