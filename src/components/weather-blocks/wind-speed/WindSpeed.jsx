import React, { useEffect, useState } from "react";
import "./WindSpeed.css";

export function WindSpeedBlock({ latitude, longitude, color }) {
  const [windSpeed, setWindSpeed] = useState(null);

  useEffect(() => {
    if (latitude == null || longitude == null) return;

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.current_weather) {
          setWindSpeed(data.current_weather.windspeed);
        }
      })
      .catch((e) => {
        console.error("Weather fetch error:", e);
      });
  }, [latitude, longitude]);

  if (windSpeed === null) {
    return (
      <div
        className="temperature-block loading"
        style={{ backgroundColor: color }}
      >
        Loading wind speed...
      </div>
    );
  }

  return (
    <div className="temperature-block" style={{ backgroundColor: color }}>
      Wind Speed: {windSpeed} m/s
    </div>
  );
}
