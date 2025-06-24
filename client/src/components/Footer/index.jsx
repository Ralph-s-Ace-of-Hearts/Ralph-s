const Footer = () => (
  <footer
    style={{
      background: "var(--primary)",
      color: "var(--white)",
      textAlign: "center",
      padding: "1.5rem 0 1rem 0",
      marginTop: "2rem",
      fontFamily: "'Oswald', 'Rubik', Arial, sans-serif",
      fontSize: "1rem",
      letterSpacing: "1px",
      borderTop: "3px solid var(--secondary)",
    }}
  >
    <div>
      <strong>Ralph's Ace of Hearts Bar & Grill</strong> &middot; 10720 Antioch Rd, Trevor, WI 53179
    </div>
    <div style={{ marginTop: "0.5rem" }}>
      <a
        href="https://www.facebook.com/Ralphsaceofhearts"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "var(--secondary)", margin: "0 1rem" }}
      >
        Facebook
      </a>
      <span style={{ color: "var(--secondary)" }}>|</span>
      <a
        href="mailto:admin@ralphsaceofhearts.com"
        style={{ color: "var(--secondary)", margin: "0 1rem" }}
      >
        Email
      </a>
      <span style={{ color: "var(--secondary)" }}>|</span>
      <a
        href="tel:262-862-6477"
        style={{ color: "var(--secondary)", margin: "0 1rem" }}
      >
        (262) 862-6477
      </a>
    </div>
    <div style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "var(--secondary)" }}>
      &copy; {new Date().getFullYear()} Ralph's Ace of Hearts. All rights reserved.
    </div>
  </footer>
);

export default Footer;