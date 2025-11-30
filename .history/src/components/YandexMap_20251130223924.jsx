"use client";
import { useEffect } from "react";

export default function YandexMap() {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <a
        href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
        style={{
          color: "#eee",
          fontSize: "12px",
          position: "absolute",
          top: "0px",
          left: "10px",
          zIndex: 2,
        }}
      >
        Москва
      </a>
      <a
        href="https://yandex.ru/maps/213/moscow/house/komsomolskiy_prospekt_28/Z04YcwBpT0ADQFtvfXtzd3RrZg==/?indoorLevel=1&ll=37.579655%2C55.726883&utm_medium=mapframe&utm_source=maps&z=16.85"
        style={{
          color: "#eee",
          fontSize: "12px",
          position: "absolute",
          top: "14px",
          left: "10px",
          zIndex: 2,
        }}
      >
        Комсомольский проспект, 28 — Яндекс Карты
      </a>
      <iframe
        src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=37.579655%2C55.726883&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjY5MzE0MRJL0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCa0L7QvNGB0L7QvNC-0LvRjNGB0LrQuNC5INC_0YDQvtGB0L_QtdC60YIsIDI4IgoNkFEWQhVU6F5C&z=16.85"
        width="560"
        height="400"
        className="map"
        style={{ position: "relative", border: "none" }}
        allowFullScreen
      ></iframe>
    </div>
  );
}
