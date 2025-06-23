import { useEffect, useState } from "react";

function Weather() {
  const [temp, setTemp] = useState(null);

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
    <h2>
      {temp !== null ? `Current temperature: ${temp}°F` : "Loading..."}
      {temp !== null && (
        <div>
          {temp < 50 ? (
            <p>It's chilly! How about a hot soup or a warm drink?</p>
          ) : temp > 80 ? (
            <p>Perfect weather for a Vodka Iced Tea!</p>
          ) : (
            <p>It's nice out! Enjoy a cold beer and some hot food!</p>
          )}
        </div>
      )}
    </h2>
  );
}

export default Weather;
