import React, { useEffect, useState } from "react";
import "./Humidity.css";

export function HumidityBlock({ latitude, longitude, color }) {
  const [humidity, setHumidity] = useState(null);

  useEffect(() => {
    if (latitude == null || longitude == null) return;

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relative_humidity_2m`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.hourly && data.hourly.relative_humidity_2m) {
          setHumidity(data.hourly.relative_humidity_2m[0]);
        }
      })
      .catch((e) => {
        console.error("Weather fetch error:", e);
      });
  }, [latitude, longitude]);

  if (humidity === null) {
    return <div className="temperature-block loading" style={{ backgroundColor: color }}>Loading humidity...</div>;
  }

  return <div className="temperature-block" style={{ backgroundColor: color }}>Humidity: {humidity} %</div>;
}
