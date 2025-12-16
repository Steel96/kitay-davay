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
  const cardRefs = useRef({});

  useEffect(() => {
    const observers = [];

    const observerOptions = {
      threshold: 0.2, // Срабатывает когда видно 20% элемента
      rootMargin: "0px 0px -100px 0px", // Срабатывает когда элемент еще немного выше viewport
    };

    const observerCallback = (entries, cardKey) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Анимация срабатывает при скролле, когда элемент попадает в viewport
          setVisibleCards((prev) => ({ ...prev, [cardKey]: true }));
        } else {
          // Сбрасываем состояние при выходе из viewport, чтобы анимация повторялась
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

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

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
          <div className="num">
            <span
              className={`numDigit ${
                visibleCards.application ? "num-digit-animated" : ""
              }`}
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
          <div className="num">
            <span
              className={`numDigit ${
                visibleCards.conditions ? "num-digit-animated" : ""
              }`}
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
