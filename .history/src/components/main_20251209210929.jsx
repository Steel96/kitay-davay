"use client";
import Image from "next/image";
import PopUpForm from "./popUpForm";
import { useState, useEffect, useRef } from "react";

export default function Main() {
  const [open, setOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const mainRef = useRef(null);

  const texts = [
    "Без посредников",
    "С прохождением таможни",
    "Оплата по факту прибытия в РФ",
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (mainRef.current) {
        const rect = mainRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
        setMousePosition({ x, y });
      }
    };

    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.addEventListener("mousemove", handleMouseMove);
      return () => {
        mainElement.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsFading(false);
      }, 300); // Половина времени анимации
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.length]);

  const translateX = mousePosition.x * 1.71; // Максимальное смещение 1.71rem (20px)
  const translateY = mousePosition.y * 1.71; // Максимальное смещение 1.71rem (20px)

  return (
    <div className="main" ref={mainRef}>
      <div className="mainContent">
        <span className="mainHeader">
          Как сэкономить
          <br />
          на доставке из
          <br />
          Китая
        </span>
        <span className={`mainText ${isFading ? "fade-out" : "fade-in"}`}>
          {texts[currentTextIndex]}
        </span>
        <button className="moredetailsBtn" onClick={() => setOpen(true)}>
          ПОДРОБНЕЕ
        </button>
        <PopUpForm isOpen={open} onClose={() => setOpen(false)} />
      </div>
      <div className="logisticWrapper">
        <Image
          className="logisticImg"
          src="/img/logistic.png"
          alt="logistic"
          width={1500}
          height={1500}
          style={{
            transform: `translate(${translateX}rem, ${translateY}rem)`,
            transition: "transform 0.1s ease-out",
          }}
        />
      </div>
    </div>
  );
}
@media (max-width: 480px) {
  .main {
    width: 375px;
  }
  .mainHeader {
    font-size: 20px;
  }
  .mainText {
    font-size: 10.15px;
  }
}