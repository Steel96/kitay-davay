"use client";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import PopupCloseBtn from "../../public/svg/popupCloseBtn";

export default function PopUpFormCalculator({ isOpen, onClose }) {
  const [visible, setVisible] = useState(isOpen);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const timeoutRef = useRef(null);
  const [focusedField, setFocusedField] = useState(null);
  const [nameValue, setNameValue] = useState("");
  const [volumeValue, setVolumeValue] = useState("");
  const [weightValue, setWeightValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const handlePhoneInput = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Удаляем все нецифровые символы

    // Ограничиваем до 11 цифр (7 + 10 цифр номера)
    if (value.length > 11) {
      value = value.slice(0, 11);
    }

    // Форматируем в формат +7 (XXX) XXX XX XX
    if (value.length > 0) {
      if (value[0] === "8") {
        value = "7" + value.slice(1); // Заменяем 8 на 7
      }
      if (value[0] !== "7") {
        value = "7" + value; // Добавляем 7 если его нет
      }

      let formattedValue = "+7";
      if (value.length > 1) {
        formattedValue += " (" + value.slice(1, 4);
        if (value.length > 4) {
          formattedValue += ") " + value.slice(4, 7);
          if (value.length > 7) {
            formattedValue += " " + value.slice(7, 9);
            if (value.length > 9) {
              formattedValue += " " + value.slice(9, 11);
            }
          }
        } else {
          formattedValue += ")";
        }
      }
      e.target.value = formattedValue;
      setPhoneValue(formattedValue);
    } else {
      e.target.value = "";
      setPhoneValue("");
    }
  };

  useEffect(() => {
    // Очищаем предыдущий таймер при изменении состояния
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (isOpen) {
      // Сначала сбрасываем анимацию, чтобы она всегда запускалась заново
      setShouldAnimate(false);
      setVisible(true); // показываем попап в DOM
      // Добавляем класс к body когда popup открыт
      if (typeof document !== "undefined") {
        document.body.classList.add("popup-open");
      }

      // Используем requestAnimationFrame для более надежной синхронизации с браузером
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setShouldAnimate(true);
        });
      });
    } else {
      setShouldAnimate(false); // сразу убираем класс анимации
      // Убираем класс с body когда popup закрыт
      if (typeof document !== "undefined") {
        document.body.classList.remove("popup-open");
      }
      // при закрытии запустить анимацию исчезновения и убрать из DOM через 1000мс
      timeoutRef.current = setTimeout(() => {
        setVisible(false);
      }, 1000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      // Очищаем класс при размонтировании
      if (typeof document !== "undefined") {
        document.body.classList.remove("popup-open");
      }
    };
  }, [isOpen]);

  if (!visible) return null; // если не видим, то из DOM не рендерим

  const popupContent = (
    <div className="popUpFormCalculatorWrapper">
    <div
      className={`popupOverlay ${shouldAnimate ? "open" : "close"}`}
      onClick={onClose}
    >
      <div
        className={`popupWindow ${shouldAnimate ? "open" : "close"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="popupClose" onClick={onClose}>
            <PopupCloseBtn />
        </button>

          <div className="popupContent">
        <form className="popupForm">
              <h2 className="popupTitle">Заполните форму и мы перезвоним!</h2>
          <div className="inputGroup">
            <label
              htmlFor="popup-name"
              className={`inputLabel ${
                focusedField === "name" || nameValue ? "focused" : ""
              }`}
            >
                  {["В", "а", "ш", "е", " ", "и", "м", "я"].map(
                    (letter, index) => (
                <span
                  key={index}
                  className="letter"
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
                    )
                  )}
            </label>
            <input
              id="popup-name"
              name="name"
              type="text"
              placeholder=""
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              onFocus={() => setFocusedField("name")}
              onBlur={(e) => {
                if (!e.target.value) {
                  setFocusedField(null);
                }
              }}
            />
            <div
                  className={`inputLine ${
                    focusedField === "name" ? "active" : ""
                  }`}
            ></div>
          </div>

          <div className="inputRow">
            <div className="inputGroup">
              <label
                htmlFor="popup-volume"
                className={`inputLabel ${
                  focusedField === "volume" || volumeValue ? "focused" : ""
                }`}
              >
                {[
                  "О",
                  "б",
                  "ъ",
                  "е",
                  "м",
                  " ",
                  "г",
                  "р",
                  "у",
                  "з",
                  "а",
                  ",",
                  " ",
                  "м",
                  "³",
                ].map((letter, index) => (
                  <span
                    key={index}
                    className="letter"
                    style={{ animationDelay: `${index * 0.12}s` }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </label>
              <input
                id="popup-volume"
                name="volume"
                type="text"
                placeholder=""
                value={volumeValue}
                onChange={(e) => setVolumeValue(e.target.value)}
                onFocus={() => setFocusedField("volume")}
                onBlur={(e) => {
                  if (!e.target.value) {
                    setFocusedField(null);
                  }
                }}
              />
              <div
                className={`inputLine ${
                  focusedField === "volume" ? "active" : ""
                }`}
              ></div>
            </div>

            <div className="inputGroup">
              <label
                htmlFor="popup-weight"
                className={`inputLabel ${
                  focusedField === "weight" || weightValue ? "focused" : ""
                }`}
              >
                    {["В", "е", "с", ",", " ", "к", "г"].map(
                      (letter, index) => (
                  <span
                    key={index}
                    className="letter"
                    style={{ animationDelay: `${index * 0.12}s` }}
                  >
                    {letter}
                  </span>
                      )
                    )}
              </label>
              <input
                id="popup-weight"
                name="weight"
                type="text"
                placeholder=""
                value={weightValue}
                onChange={(e) => setWeightValue(e.target.value)}
                onFocus={() => setFocusedField("weight")}
                onBlur={(e) => {
                  if (!e.target.value) {
                    setFocusedField(null);
                  }
                }}
              />
              <div
                className={`inputLine ${
                  focusedField === "weight" ? "active" : ""
                }`}
              ></div>
            </div>
          </div>

          <div className="inputGroup">
            <label
              htmlFor="popup-phone"
              className={`inputLabel ${
                focusedField === "phone" || phoneValue ? "focused" : ""
              }`}
            >
              {["Т", "е", "л", "е", "ф", "о", "н"].map((letter, index) => (
                <span
                  key={index}
                  className="letter"
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  {letter}
                </span>
              ))}
            </label>
            <input
              id="popup-phone"
              name="phone"
              type="tel"
              placeholder=""
              value={phoneValue}
              onInput={handlePhoneInput}
              onFocus={() => setFocusedField("phone")}
              onBlur={(e) => {
                if (!e.target.value) {
                  setFocusedField(null);
                }
              }}
            />
            <div
              className={`inputLine ${
                focusedField === "phone" ? "active" : ""
              }`}
            ></div>
          </div>

          <button type="submit" className="popupSubmit">
            ОТПРАВИТЬ
          </button>
        </form>
      </div>
        </div>
      </div>
    </div>
  );

  // Рендерим popup через Portal в body, чтобы избежать проблем с позиционированием
  if (typeof window !== "undefined") {
    return createPortal(popupContent, document.body);
  }

  return popupContent;
}
