import React, { useEffect, useState } from "react";
import "./Temperature.css";

export function TemperatureBlock({ latitude, longitude, color }) {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    if (latitude == null || longitude == null) return;

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.current_weather) {
          setTemperature(data.current_weather.temperature);
        }
      })
      .catch((e) => {
        console.error("Weather fetch error:", e);
      });
  }, [latitude, longitude]);

  if (temperature === null) {
    return (
      <div className="temperature-block loading" style={{ backgroundColor: color }}>Loading temperature...</div>
    );
  }

  return <div className="temperature-block" style={{ backgroundColor: color }}>Temperature: {temperature} °C</div>;
}
