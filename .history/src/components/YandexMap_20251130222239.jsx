"use client";
import { useEffect } from "react";

export default function YandexMap() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const script = document.createElement("script");
    script.src =
      "https://api-maps.yandex.ru/v3/?apikey=bdcfda32-d4a0-48b1-bb6d-7bf06f6a2adb&lang=ru_RU";
    script.async = true;

    script.onload = async () => {
      const ymaps3 = window.ymaps3;

      // Загружаем базовые модули
      const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } =
        await ymaps3.import("@yandex/ymaps3");

      // Загружаем тему UI
      await ymaps3.import("@yandex/ymaps3-default-ui-theme");

      // Создаем карту
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

      // Подключаем модуль маркеров
      const { YMapMarker } = await ymaps3.import("@yandex/ymaps3-markers");

      // Кастомная метка
      const markerElement = document.createElement("div");
      markerElement.style.width = "20px";
      markerElement.style.height = "20px";
      markerElement.style.background = "red";
      markerElement.style.borderRadius = "50%";
      markerElement.style.border = "3px solid white";
      markerElement.style.boxShadow = "0 0 5px rgba(0,0,0,0.3)";

      const marker
