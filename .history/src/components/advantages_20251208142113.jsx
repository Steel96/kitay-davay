"use client";
import { useEffect, useRef, useState } from "react";
import PopUpForm from "./popUpForm";

export default function Advantages() {
  const [visibleCards, setVisibleCards] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
  });
  const [open, setOpen] = useState(false);
  const cardRefs = useRef({});

  useEffect(() => {
    const observers = [];
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -80px 0px",
    };

    // Пары карточек для совместной анимации
    const cardPairs = [
      ["1", "2"],
      ["3", "4"],
      ["5", "6"],
      ["7", "8"],
    ];

    const observerCallback = (entries, pairIndex) => {
      entries.forEach((entry) => {
        const [card1, card2] = cardPairs[pairIndex];
        if (entry.isIntersecting) {
          // Активируем обе карточки в паре с задержкой для эффекта
          setVisibleCards((prev) => ({ ...prev, [card1]: true }));
          setTimeout(() => {
            setVisibleCards((prev) => ({ ...prev, [card2]: true }));
          }, 150);
        } else {
          // Сбрасываем состояние при выходе, чтобы анимация повторялась
          setVisibleCards((prev) => ({
            ...prev,
            [card1]: false,
            [card2]: false,
          }));
        }
      });
    };

    // Создаем observer для каждой пары карточек
    const setupObservers = () => {
      cardPairs.forEach((pair, pairIndex) => {
        const [card1Key, card2Key] = pair;
        const card1Element = cardRefs.current[card1Key];
        const card2Element = cardRefs.current[card2Key];

        if (card1Element && card2Element) {
          // Наблюдаем за обеими карточками пары, но используем первую как триггер
          const observer = new IntersectionObserver(
            (entries) => observerCallback(entries, pairIndex),
            observerOptions
          );
          observer.observe(card1Element);
          observer.observe(card2Element);
          observers.push(observer);
        }
      });
    };

    // Устанавливаем observers с небольшой задержкой для установки refs
    const timeoutId = setTimeout(setupObservers, 50);

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
          <button className="advantagesBtn" onClick={() => setOpen(true)}>
            ПОДРОБНЕЕ
          </button>
        </div>
        <div
          ref={(el) => (cardRefs.current["2"] = el)}
          className={`advantagesCard2 ${
            visibleCards["2"]
              ? "advantages-card-visible-second"
              : "advantages-card-hidden-second"
          }`}
        >
          <button className="advantagesBtn" onClick={() => setOpen(true)}>
            ПОДРОБНЕЕ
          </button>
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
              ? "advantages-card-visible-first"
              : "advantages-card-hidden-first"
          }`}
        >
          <span className="advantagesText3">
            Круглосуточный контроль. Бесплатные видео <br /> и фото отчеты
          </span>
          <button className="advantagesBtn" onClick={() => setOpen(true)}>
            ПОДРОБНЕЕ
          </button>
        </div>
        <div
          ref={(el) => (cardRefs.current["4"] = el)}
          className={`advantagesCard4 ${
            visibleCards["4"]
              ? "advantages-card-visible-second"
              : "advantages-card-hidden-second"
          }`}
        >
          <button className="advantagesBtn" onClick={() => setOpen(true)}>
            ПОДРОБНЕЕ
          </button>
          <span className="advantagesText4">
            У нас собственный ВЭД контракт. Поэтому <br /> таможенные платежи
            ниже, чем у других на <br /> 10%.
          </span>
        </div>
        <div
          ref={(el) => (cardRefs.current["5"] = el)}
          className={`advantagesCard5 ${
            visibleCards["5"]
              ? "advantages-card-visible-first"
              : "advantages-card-hidden-first"
          }`}
        >
          <span className="advantagesText5">
            Оплатим пени за задержку сроков доставки <br /> по нашей вине
          </span>
          <button className="advantagesBtn" onClick={() => setOpen(true)}>
            ПОДРОБНЕЕ
          </button>
        </div>
        <div
          ref={(el) => (cardRefs.current["6"] = el)}
          className={`advantagesCard6 ${
            visibleCards["6"]
              ? "advantages-card-visible-second"
              : "advantages-card-hidden-second"
          }`}
        >
          <button className="advantagesBtn" onClick={() => setOpen(true)}>
            ПОДРОБНЕЕ
          </button>
          <span className="advantagesText6">
            Помогаем провести сертификацию груза
          </span>
        </div>
        <div
          ref={(el) => (cardRefs.current["7"] = el)}
          className={`advantagesCard7 ${
            visibleCards["7"]
              ? "advantages-card-visible-first"
              : "advantages-card-hidden-first"
          }`}
        >
          <span className="advantagesText7">
            Берем на себя все таможенное оформление
          </span>
          <button className="advantagesBtn" onClick={() => setOpen(true)}>
            ПОДРОБНЕЕ
          </button>
        </div>
        <div
          ref={(el) => (cardRefs.current["8"] = el)}
          className={`advantagesCard8 ${
            visibleCards["8"]
              ? "advantages-card-visible-second"
              : "advantages-card-hidden-second"
          }`}
        >
          <button className="advantagesBtn" onClick={() => setOpen(true)}>
            ПОДРОБНЕЕ
          </button>
          <span className="advantagesText8">
            Доставка во все города нашей страны. До ваших дверей
          </span>
        </div>
      </div>
      <PopUpForm isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
