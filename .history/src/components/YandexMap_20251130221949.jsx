"use client";
import { useEffect } from "react";

export default function YandexMap() {
  useEffect(() => {
    // Добавляем скрипт API
    const script = document.createElement("script");
    script.src =
      "https://api-maps.yandex.ru/v3/?apikey=bdcfda32-d4a0-48b1-bb6d-7bf06f6a2adb&lang=ru_RU";
    script.async = true;

    script.onload = () => {
      window.ymaps3.ready.then(initMap);
    };

    document.body.appendChild(script);

    async function initMap() {
      const {
        YMap,
        YMapDefaultSchemeLayer,
        YMapDefaultFeaturesLayer,
        YMapMarker,
      } = await window.ymaps3.import("@yandex/ymaps3-default-ui-theme");

      const map = new YMap(
        document.getElementById("yandex-map"),
        {
          location: {
            center: [37.57383, 55.7352], // Москва, Комсомольский пр-т 28
            zoom: 15,
          },
        },
        [new YMapDefaultSchemeLayer(), new YMapDefaultFeaturesLayer()]
      );

      // Создаём кастомную метку
      const markerElement = document.createElement("div");
      markerElement.style.width = "20px";
      markerElement.style.height = "20px";
      markerElement.style.background = "red";
      markerElement.style.borderRadius = "50%";
      markerElement.style.border = "3px solid white";
      markerElement.style.boxShadow = "0 0 5px rgba(0,0,0,0.3)";

      const marker = new YMapMarker(
        {
          coordinates: [37.57383, 55.7352],
        },
        markerElement
      );

      map.addChild(marker);
    }

    // cleanup — удаляем карту при размонтировании
    return () => {
      const elem = document.getElementById("yandex-map");
      if (elem) elem.innerHTML = "";
    };
  }, []);

  return (
    <div
      id="yandex-map"
      style={{
        width: "100%",
        height: "400px",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    />
  );
}
