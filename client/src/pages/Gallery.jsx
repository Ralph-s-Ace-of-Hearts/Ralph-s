// import Footer from "../components/Footer";

// const galleryImages = [
// //   { src: "/images/burger.jpg", alt: "Signature Burger" },
// //   { src: "/images/pizza.jpg", alt: "Wood-fired Pizza" },
// //   { src: "/images/salad.jpg", alt: "Fresh Salad" },
// //   { src: "/images/steak.jpg", alt: "Grilled Steak" },
// //   { src: "/images/cocktail.jpg", alt: "Craft Cocktail" },
// //   { src: "/images/bar.jpg", alt: "Our Bar" }
//   { src: "/images/ralphsBarRail.jpg", alt: "Gallery Image 1" },
//   { src: "/images/ralphsEBC.jpg", alt: "Gallery Image 2" },
//   { src: "/images/ralphsPoolTable.jpg", alt: "Gallery Image 3" },
//   { src: "/images/ralphsPrimeRib.jpg", alt: "Gallery Image 4" },
//   { src: "/images/ralphsBarRail2.jpg", alt: "Gallery Image 5" },
//   { src: "/images/ralphsBloodyMary.jpg", alt: "Gallery Image 6" },
//   { src: "/images/ralphsCustomer.jpg", alt: "Gallery Image 7" },
//   { src: "/images/ralphsEntrance.jpg", alt: "Gallery Image 8" },
//   { src: "/images/ralphsFishFry.jpg", alt: "Gallery Image 9" },
//   { src: "/images/ralphsPhilly.jpg", alt: "Gallery Image 10" },
//   { src: "/images/ralphsPotatoPancakes.jpg", alt: "Gallery Image 11" },
//   { src: "/images/ralphsPotatoSoup.jpg", alt: "Gallery Image 12" }
// ];

// const Gallery = () => (
//   <div className="gallery-page" style={{ maxWidth: 1100, margin: "2rem auto", padding: "1rem" }}>
//     <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Gallery</h1>
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
//         gap: "1.5rem"
//       }}
//     >
//       {galleryImages.map((img, idx) => (
//         <div key={idx} style={{ borderRadius: 10, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", background: "#fff" }}>
//           <img
//             src={img.src}
//             alt={img.alt}
//             style={{ width: "100%", height: 180, objectFit: "cover", display: "block" }}
//           />
//         </div>
//       ))}
//     </div>
//     <Footer />
//   </div>
// );

// export default Gallery;

import React, { useState } from "react";

const galleryImages = [
 { src: "/images/ralphsBarRail.jpg", alt: "Gallery Image 1" },
  { src: "/images/ralphsEBC.jpg", alt: "Gallery Image 2" },
  { src: "/images/ralphsPoolTable.jpg", alt: "Gallery Image 3" },
  { src: "/images/ralphsPrimeRib.jpg", alt: "Gallery Image 4" },
  { src: "/images/ralphsBarRail2.jpg", alt: "Gallery Image 5" },
  { src: "/images/ralphsBloodyMary.jpg", alt: "Gallery Image 6" },
  { src: "/images/ralphsCustomer.jpg", alt: "Gallery Image 7" },
  { src: "/images/ralphsEntrance.jpg", alt: "Gallery Image 8" },
  { src: "/images/ralphsFishFry.jpg", alt: "Gallery Image 9" },
  { src: "/images/ralphsPhilly.jpg", alt: "Gallery Image 10" },
  { src: "/images/ralphsPotatoPancakes.jpg", alt: "Gallery Image 11" },
  { src: "/images/ralphsPotatoSoup.jpg", alt: "Gallery Image 12" }
];

const Gallery = () => {
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  // Open carousel at clicked image
  const openCarousel = (idx) => {
    setCurrent(idx);
    setCarouselOpen(true);
  };

  // Close carousel
  const closeCarousel = () => setCarouselOpen(false);

  // Keyboard navigation
  React.useEffect(() => {
    if (!carouselOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setCurrent((prev) => (prev + 1) % galleryImages.length);
      } else if (e.key === "ArrowLeft") {
        setCurrent((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
      } else if (e.key === "Escape") {
        closeCarousel();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [carouselOpen]);

  return (
    <div className="gallery-page" style={{ maxWidth: 1100, margin: "2rem auto", padding: "1rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem", fontFamily: "oswald" }}>Gallery</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem"
        }}
      >
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            style={{
              borderRadius: 10,
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              background: "#fff",
              cursor: "pointer"
            }}
            onClick={() => openCarousel(idx)}
            tabIndex={0}
            aria-label={`Open image ${img.alt}`}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") openCarousel(idx);
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              style={{ width: "100%", height: 180, objectFit: "cover", display: "block" }}
            />
          </div>
        ))}
      </div>

      {/* Carousel Modal */}
      {carouselOpen && (
        <div
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          onClick={closeCarousel}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "90vh",
              display: "flex",
              alignItems: "center"
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setCurrent((current - 1 + galleryImages.length) % galleryImages.length)}
              style={{
                position: "absolute",
                left: -50,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.5)",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: 40,
                height: 40,
                fontSize: 24,
                cursor: "pointer"
              }}
              aria-label="Previous"
            >
              &#8592;
            </button>
            <img
              src={galleryImages[current].src}
              alt={galleryImages[current].alt}
              style={{
                maxWidth: "80vw",
                maxHeight: "80vh",
                borderRadius: 12,
                boxShadow: "0 2px 16px rgba(0,0,0,0.5)"
              }}
            />
            <button
              onClick={() => setCurrent((current + 1) % galleryImages.length)}
              style={{
                position: "absolute",
                right: -50,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.5)",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: 40,
                height: 40,
                fontSize: 24,
                cursor: "pointer"
              }}
              aria-label="Next"
            >
              &#8594;
            </button>
            <button
              onClick={closeCarousel}
              style={{
                position: "absolute",
                top: -50,
                right: 0,
                background: "rgba(0,0,0,0.7)",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: 36,
                height: 36,
                fontSize: 20,
                cursor: "pointer"
              }}
              aria-label="Close"
            >
              &#10005;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;