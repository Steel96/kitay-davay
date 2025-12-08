"use client";
import { useEffect, useRef, useState } from "react";

export default function Advantages() {
  const [visibleCards, setVisibleCards] = useState({});
  const cardRefs = useRef({});

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
          // Не сбрасываем состояние при выходе, чтобы карточки оставались видимыми
          // setVisibleCards((prev) => ({ ...prev, [cardKey]: false }));
        }
      });
    };

    // Создаем observer для каждой карточки
    const setupObservers = () => {
      ["1", "2", "3", "4", "5", "6", "7", "8"].forEach((cardKey) => {
        const cardElement = cardRefs.current[cardKey];
        if (cardElement) {
          const observer = new IntersectionObserver(
            (entries) => observerCallback(entries, cardKey),
            observerOptions
          );
          observer.observe(cardElement);
          observers.push(observer);
          
          // Проверяем, видна ли карточка сразу
          const rect = cardElement.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          if (isVisible) {
            setVisibleCards((prev) => ({ ...prev, [cardKey]: true }));
          }
        }
      });
    };

    // Пробуем установить observers сразу и с небольшой задержкой
    setupObservers();
    const timeoutId = setTimeout(setupObservers, 100);

    return () => {
      clearTimeout(timeoutId);
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="advantagesCont">
      <h1 className="advantagesHead">Что Вы получаете, работая с нами</h1>
      <div className="advantagesContainer">
        <div
          ref={(el) => (cardRefs.current["1"] = el)}
          className={`advantagesCard1 ${
            visibleCards["1"]
              ? "advantages-card-visible-first"
              : "advantages-card-hidden-first"
          }`}
        >
          <span className="advantagesText1">
            Избавим вас от переживаний, соответствует <br /> ли ваш груз
            заказанному. Все проверим и <br /> пересчитаем. В случае
            необходимости <br />
            поменяем несоответствующий товар у <br /> производителя.
          </span>
          <button className="advantagesBtn">ПОДРОБНЕЕ</button>
        </div>
        <div
          ref={(el) => (cardRefs.current["2"] = el)}
          className={`advantagesCard2 ${
            visibleCards["2"]
              ? "advantages-card-visible-second"
              : "advantages-card-hidden-second"
          }`}
        >
          <button className="advantagesBtn">ПОДРОБНЕЕ</button>
          <span className="advantagesText2">
            Если вы хотите проинспектировать <br /> производителя перед сделкой,
            мы <br />
            предоставим вам переводчика. Или <br /> отправим на фабрику
            инспектора
          </span>
        </div>
        <div
          ref={(el) => (cardRefs.current["3"] = el)}
          className={`advantagesCard3 ${
            visibleCards["3"]
              ? "advantages-card-visible"
              : "advantages-card-hidden"
          }`}
        >
          <span className="advantagesText3">
            Круглосуточный контроль. Бесплатные видео <br /> и фото отчеты
          </span>
          <button className="advantagesBtn">ПОДРОБНЕЕ</button>
        </div>
        <div
          ref={(el) => (cardRefs.current["4"] = el)}
          className={`advantagesCard4 ${
            visibleCards["4"]
              ? "advantages-card-visible"
              : "advantages-card-hidden"
          }`}
        >
          <button className="advantagesBtn">ПОДРОБНЕЕ</button>
          <span className="advantagesText4">
            У нас собственный ВЭД контракт. Поэтому <br /> таможенные платежи
            ниже, чем у других на <br /> 10%.
          </span>
        </div>
        <div
          ref={(el) => (cardRefs.current["5"] = el)}
          className={`advantagesCard5 ${
            visibleCards["5"]
              ? "advantages-card-visible"
              : "advantages-card-hidden"
          }`}
        >
          <span className="advantagesText5">
            Оплатим пени за задержку сроков доставки <br /> по нашей вине
          </span>
          <button className="advantagesBtn">ПОДРОБНЕЕ</button>
        </div>
        <div
          ref={(el) => (cardRefs.current["6"] = el)}
          className={`advantagesCard6 ${
            visibleCards["6"]
              ? "advantages-card-visible"
              : "advantages-card-hidden"
          }`}
        >
          <button className="advantagesBtn">ПОДРОБНЕЕ</button>
          <span className="advantagesText6">
            Помогаем провести сертификацию груза
          </span>
        </div>
        <div
          ref={(el) => (cardRefs.current["7"] = el)}
          className={`advantagesCard7 ${
            visibleCards["7"]
              ? "advantages-card-visible"
              : "advantages-card-hidden"
          }`}
        >
          <span className="advantagesText7">
            Берем на себя все таможенное оформление
          </span>
          <button className="advantagesBtn">ПОДРОБНЕЕ</button>
        </div>
        <div
          ref={(el) => (cardRefs.current["8"] = el)}
          className={`advantagesCard8 ${
            visibleCards["8"]
              ? "advantages-card-visible"
              : "advantages-card-hidden"
          }`}
        >
          <button className="advantagesBtn">ПОДРОБНЕЕ</button>
          <span className="advantagesText8">
            Доставка во все города нашей страны. До ваших дверей
          </span>
        </div>
      </div>
    </div>
  );
}
