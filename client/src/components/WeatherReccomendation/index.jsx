import { useEffect, useState } from "react";

function Weather() {
  const [temp, setTemp] = useState(null);

  // Get CSS variable values
  const getVar = (v) =>
    getComputedStyle(document.documentElement).getPropertyValue(v).trim();

  const chipColors = {
    background: getVar("--primary") || "#000",
    border: getVar("--secondary") || "#F3A847",
    accent: getVar("--tertiary") || "#B12704",
    text: getVar("--white") || "#fff"
  };

  useEffect(() => {
    const apiKey = "34ec7dcded174ee3afd43023252306";
    const city = "Trevor, WI";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.current && data.current.temp_f) {
          setTemp(data.current.temp_f);
        }
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "2rem 0"
      }}
    >
      {/* Poker chip icon */}
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          background: chipColors.background,
          border: `4px solid ${chipColors.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 24,
          boxShadow: `0 0 12px ${chipColors.accent}`,
          fontSize: 36,
          fontFamily: "oswald",
          color: chipColors.accent,
        }}
      >
        🎰
      </div>
      <div>
        <h2
          style={{
            margin: 0,
            color: chipColors.text,
            fontFamily: 'Oswald',
            fontWeight: 700,
            letterSpacing: 1,
            fontSize: "1.6rem",
            textShadow: "1px 1px 6px #000"
          }}
        >
          {temp !== null ? `Current temperature: ${temp}°F` : "Loading..."}
        </h2>
        {temp !== null && (
          <div
            style={{
              marginTop: 8,
              background: chipColors.accent,
              color: chipColors.text,
              borderRadius: 8,
              padding: "0.5rem 1rem",
              fontWeight: 500,
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              fontSize: "1.1rem"
            }}
          >
            {temp < 50 ? (
              <span>It's chilly! Warm up with our hot soup or a signature Irish Coffee! 🥃</span>
            ) : temp > 80 ? (
              <span>Hot outside? Cool off with a Vodka Iced Tea or a frozen margarita! 🍹</span>
            ) : (
              <span>Perfect weather! Enjoy a cold beer and try your luck at the slots! 🍺🃏</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
