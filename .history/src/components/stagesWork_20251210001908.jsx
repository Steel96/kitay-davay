"use client";
import { useEffect, useRef, useState } from "react";

export default function Stages() {
  // Изначально все карточки скрыты
  const [visibleCards, setVisibleCards] = useState({
    application: false,
    conditions: false,
    delivery: false,
    receiving: false,
  });
  // Позиция цифры для каждой карточки (от 0 до 1, где 0.5 = центр)
  const [digitPositions, setDigitPositions] = useState({
    application: 1, // 1 = справа (начальная позиция)
    conditions: 1,
    delivery: 1,
    receiving: 1,
  });
  const cardRefs = useRef({});
  const numRefs = useRef({});

  useEffect(() => {
    const observers = [];

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observerCallback = (entries, cardKey) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleCards((prev) => ({ ...prev, [cardKey]: true }));
        } else {
          setVisibleCards((prev) => ({ ...prev, [cardKey]: false }));
        }
      });
    };

    // Создаем observer для каждой карточки
    ["application", "conditions", "delivery", "receiving"].forEach(
      (cardKey) => {
        const cardElement = cardRefs.current[cardKey];
        if (cardElement) {
          const observer = new IntersectionObserver(
            (entries) => observerCallback(entries, cardKey),
            observerOptions
          );
          observer.observe(cardElement);
          observers.push(observer);
        }
      }
    );

    // Функция для вычисления позиции цифры на основе позиции карточки
    const updateDigitPosition = () => {
      const viewportCenter = window.innerHeight / 2;
      
      ["application", "conditions", "delivery", "receiving"].forEach(
        (cardKey) => {
          const cardElement = cardRefs.current[cardKey];
          const numElement = numRefs.current[cardKey];
          
          if (cardElement && numElement) {
            const cardRect = cardElement.getBoundingClientRect();
            const cardCenter = cardRect.top + cardRect.height / 2;
            
            // Вычисляем расстояние от центра карточки до центра viewport
            const distanceFromCenter = cardCenter - viewportCenter;
            // Нормализуем: когда карточка по центру = 0, вверху = -1, внизу = 1
            const normalizedDistance = distanceFromCenter / (window.innerHeight / 2);
            
            // Преобразуем в позицию от 0 до 1, где 0.5 = центр
            // Когда карточка вверху (normalizedDistance = -1) -> позиция = 0 (слева)
            // Когда карточка по центру (normalizedDistance = 0) -> позиция = 0.5 (центр)
            // Когда карточка внизу (normalizedDistance = 1) -> позиция = 1 (справа)
            let position = (normalizedDistance + 1) / 2;
            
            // Ограничиваем значения от 0 до 1
            position = Math.max(0, Math.min(1, position));
            
            // Если карточка не видна, возвращаем в исходное положение
            if (!visibleCards[cardKey]) {
              position = 1;
            }
            
            setDigitPositions((prev) => ({ ...prev, [cardKey]: position }));
          }
        }
      );
    };

    // Обновляем позицию при скролле
    const handleScroll = () => {
      updateDigitPosition();
    };

    // Обновляем позицию при изменении размера окна
    const handleResize = () => {
      updateDigitPosition();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    
    // Первоначальное обновление
    updateDigitPosition();

    return () => {
      observers.forEach((observer) => observer.disconnect());
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [visibleCards]);

  return (
    <div className="stages">
      <span className="stageText">Этапы работы</span>
      <div className="cards">
        <div
          ref={(el) => (cardRefs.current.application = el)}
          className={`applicationCont ${
            visibleCards.application ? "card-visible" : "card-hidden"
          }`}
        >
          <div className="num" ref={(el) => (numRefs.current.application = el)}>
            <span
              className="numDigit"
              style={{
                left: `${(1 - digitPositions.application) * 100}%`,
                transform: `translateX(${(digitPositions.application - 0.5) * -100}%)`,
              }}
            >
              01
            </span>
          </div>
          <p className="applicationText">
            Вы оставляете заявку или <br /> звоните по телефону <br />
            <span className="phone"> 8 (925) 288-75-82</span>
          </p>
        </div>
        <div
          ref={(el) => (cardRefs.current.conditions = el)}
          className={`conditionsCont ${
            visibleCards.conditions ? "card-visible" : "card-hidden"
          }`}
        >
          <div className="num" ref={(el) => (numRefs.current.conditions = el)}>
            <span
              className="numDigit"
              style={{
                left: `${(1 - digitPositions.conditions) * 100}%`,
                transform: `translateX(${(digitPositions.conditions - 0.5) * -100}%)`,
              }}
            >
              02
            </span>
          </div>
          <p className="conditionsText">
            Мы обсуждаем условия и заключаем договор
          </p>
        </div>
        <div
          ref={(el) => (cardRefs.current.delivery = el)}
          className={`deliveryCont ${
            visibleCards.delivery ? "card-visible" : "card-hidden"
          }`}
        >
          <div className="num">
            <span
              className={`numDigit ${
                visibleCards.delivery ? "num-digit-animated" : ""
              }`}
            >
              03
            </span>
          </div>
          <p className="deliveryText">
            Мы доставляем груз, отправляя Вам уведомления о прохождении по
            маршруту
          </p>
        </div>
        <div
          ref={(el) => (cardRefs.current.receiving = el)}
          className={`receivingCont ${
            visibleCards.receiving ? "card-visible" : "card-hidden"
          }`}
        >
          <div className="num">
            <span
              className={`numDigit ${
                visibleCards.receiving ? "num-digit-animated" : ""
              }`}
            >
              04
            </span>
          </div>
          <p className="receivingText">Вы получаете груз и оплачиваете счёт</p>
        </div>
      </div>
    </div>
  );
}
