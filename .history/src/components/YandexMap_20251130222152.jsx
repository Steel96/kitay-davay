"use client";
import { useEffect } from "react";

export default function YandexMap() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://api-maps.yandex.ru/v3/?apikey=bdcfda32-d4a0-48b1-bb6d-7bf06f6a2adb&lang=ru_RU";
    script.async = true;

    script.onload = () => {
      window.ymaps3.ready.then(initMap);
    };

    document.body.appendChild(script);

    async function initMap() {
      const ymaps3 = window.ymaps3;

      // Грузим базовые классы
      const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } =
        await ymaps3.import("@yandex/ymaps3");

      // Грузим UI-тему (иначе карта не появится)
      await ymaps3.import("@yandex/ymaps3-default-ui-theme");

      const map = new YMap(
        document.getElementById("yandex-map"),
        {
          location: {
            center: [37.57383, 55.7352],
            zoom: 15,
          },
        },
        [new YMapDefaultSchemeLayer(), new YMapDefaultFeaturesLayer()]
      );

      // Метка
      const markerElement = document.createElement("div");
      markerElement.style.width = "20px";
      markerElement.style.height = "20px";
      markerElement.style.background = "red";
      markerElement.style.borderRadius = "50%";
      markerElement.style.border = "3px solid white";
      markerElement.style.boxShadow = "0 0 5px rgba(0,0,0,0.3)";

      const { YMapMarker } = await ymaps3.import("@yandex/ymaps3-markers");

      const marker = new YMapMarker(
        { coordinates: [37.57383, 55.7352] },
        markerElement
      );

      map.addChild(marker);
    }

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
