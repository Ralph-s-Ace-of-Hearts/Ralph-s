
const galleryImages = [
//   { src: "/images/burger.jpg", alt: "Signature Burger" },
//   { src: "/images/pizza.jpg", alt: "Wood-fired Pizza" },
//   { src: "/images/salad.jpg", alt: "Fresh Salad" },
//   { src: "/images/steak.jpg", alt: "Grilled Steak" },
//   { src: "/images/cocktail.jpg", alt: "Craft Cocktail" },
//   { src: "/images/bar.jpg", alt: "Our Bar" }
  { src: "/images/ralphsBarRail.jpg", alt: "Gallery Image 1" },
  { src: "/images/ralphsEBC.jpg", alt: "Gallery Image 2" },
  { src: "/images/ralphsPoolTable.jpg", alt: "Gallery Image 3" },
  { src: "/images/ralphsPrimeRib.jpg", alt: "Gallery Image 4" },
];

const Gallery = () => (
  <div className="gallery-page" style={{ maxWidth: 1100, margin: "2rem auto", padding: "1rem" }}>
    <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Gallery</h1>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "1.5rem"
      }}
    >
      {galleryImages.map((img, idx) => (
        <div key={idx} style={{ borderRadius: 10, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", background: "#fff" }}>
          <img
            src={img.src}
            alt={img.alt}
            style={{ width: "100%", height: 180, objectFit: "cover", display: "block" }}
          />
        </div>
      ))}
    </div>
  </div>
);

export default Gallery;