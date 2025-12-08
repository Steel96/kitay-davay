"use client";
import { useEffect, useRef, useState } from "react";
import BrainIcon from "../../public/svg/brainIcon";
import BoxIcon from "../../public/svg/boxIcon";
import TrailerIcon from "../../public/svg/trailerIcon";

export default function StillThinking() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Добавляем небольшие задержки для последовательного появления
          setTimeout(() => setIsVisible(true), 100);
        } else {
          setIsVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="stillThinking">
      <span className="stillThinkingText">
        Ещё думаете? Мы всё продумали <BrainIcon className="brainIcon" /> ! Все
        сложности мы берем на себя <BoxIcon className="boxIcon" /> . Вам
        остается только принять товар и оплатить доставку <TrailerIcon /> .
      </span>
      <div
        ref={containerRef}
        className={`stillThinkingTextLCR ${
          isVisible ? "stillThinking-visible" : "stillThinking-hidden"
        }`}
      >
        <p
          className={`stillThinkingTextLeft ${
            isVisible
              ? "stillThinking-left-visible"
              : "stillThinking-left-hidden"
          }`}
        >
          Успешно работаем более 15 лет
        </p>
        <p
          className={`stillThinkingTextCenter ${
            isVisible
              ? "stillThinking-center-visible"
              : "stillThinking-center-hidden"
          }`}
        >
          Только "под ключ", с гарантией
        </p>
        <p
          className={`stillThinkingTextRight ${
            isVisible
              ? "stillThinking-right-visible"
              : "stillThinking-right-hidden"
          }`}
        >
          Любые риски исключены!
        </p>
      </div>
    </div>
  );
}
