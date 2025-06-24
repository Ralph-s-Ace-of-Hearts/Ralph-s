import React from "react";
import Footer from "../components/Footer";

const getVar = (v) =>
  getComputedStyle(document.documentElement).getPropertyValue(v).trim();

const theme = {
  background: getVar("--light") || "#fafafa",
  border: getVar("--secondary") || "#F3A847",
  accent: getVar("--tertiary") || "#B12704",
  text: getVar("--dark") || "#272f32",
  cardBg: "#fff",
  shadow: getVar("--shadow") || "0 4px 24px rgba(183,28,28,0.08)",
};

const About = () => (
  <div
    style={{
      minHeight: "100vh",
      background: theme.background,
      color: theme.text,
      fontFamily: 'Oswald',
      padding: "2rem 0",
    }}
  >
    <div
      style={{
        maxWidth: 900,
        margin: "2rem auto",
        padding: "2rem",
        background: theme.cardBg,
        borderRadius: 16,
        boxShadow: theme.accent,
        border: `2px solid ${theme.accent}`,
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          color: theme.accent,
          letterSpacing: 2,
          fontWeight: 700,
          fontSize: "2.5rem",
          textShadow: "1px 1px 8px #fff",
        }}
      >
        About Us
      </h1>
      <section
        style={{
          marginBottom: "2.5rem",
          background: theme.background,
          borderRadius: 12,
          padding: "1.5rem",
          boxShadow: theme.accent,
          border: `1px solid ${theme.accent}`,
        }}
      >
        <p style={{ fontSize: "1.15rem", marginBottom: 12 }}>
          {/* Write a short story about Ralphs bar and grill here. */}
          Welcome to <strong>Ralph's Ace of Hearts</strong>! We are a
          family-owned establishment serving the community since [Year]. Our
          passion is great food, cold drinks, and a welcoming atmosphere for
          everyone. Whether you’re here for a quick lunch, a night out, or to
          catch the big game, we’re glad to have you!
        </p>
        <p style={{ fontSize: "1.15rem" }}>
          {/* Add more about Ralphs mission, values, or unique features */}
          Enjoy our signature dishes, weekly events, and friendly staff. We look
          forward to seeing you soon!
        </p>
      </section>

      <h2
        style={{
          textAlign: "center",
          marginBottom: "1.5rem",
          color: theme.accent,
          fontWeight: 600,
          letterSpacing: 1,
        }}
      >
        Contact Us
      </h2>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            minWidth: 250,
            background: theme.background,
            borderRadius: 12,
            padding: "1.5rem",
            boxShadow: theme.shadow,
            border: `1px solid ${theme.border}`,
            flex: "1 1 300px",
          }}
        >
          <h3 style={{ color: theme.accent, marginTop: 0 }}>Get in Touch</h3>
          <p style={{ fontSize: "1.1rem", marginBottom: 8 }}>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:262-862-6477"
              style={{ color: theme.border, textDecoration: "none" }}
            >
              (262) 862-6477
            </a>
            <br />
            <strong>Email:</strong>{" "}
            <a
              href="mailto:admin@ralphsaceofhearts.com"
              style={{ color: theme.border, textDecoration: "none" }}
            >
              admin@ralphsaceofhearts.com
            </a>
            <br />
            <strong>Facebook:</strong>{" "}
            <a
              href="https://www.facebook.com/Ralphsaceofhearts"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: theme.border, textDecoration: "none" }}
            >
              facebook.com/ralphsaceofhearts
            </a>
          </p>
          <p style={{ fontSize: "1.1rem" }}>
            <strong>Address:</strong>
            <br />
            10720 Antioch Rd
            <br />
            Trevor, WI 53179
          </p>
        </div>
        <div
          style={{
            minWidth: 300,
            flex: "1 1 350px",
            background: theme.background,
            borderRadius: 12,
            padding: "1.5rem",
            boxShadow: theme.shadow,
            border: `1px solid ${theme.border}`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3 style={{ color: theme.accent, marginTop: 0 }}>Find Us</h3>
          <div
            style={{
              borderRadius: 8,
              overflow: "hidden",
              boxShadow: theme.shadow,
              width: "100%",
              maxWidth: 400,
            }}
          >
            <iframe
              width="100%"
              height="220"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Ralph's Ace of Hearts Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2939.1234567890123!2d-88.355678!3d42.537890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f80b75286a659%3A0x2d946fb57f6e3839!2sRalph%27s%20Ace%20of%20Hearts!5e0!3m2!1sen!2sus!4v1698000000000"
            />
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
);

export default About;
