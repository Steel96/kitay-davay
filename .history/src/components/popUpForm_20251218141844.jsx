"use client";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function PopUpForm({ isOpen, onClose }) {
  const [visible, setVisible] = useState(isOpen);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const timeoutRef = useRef(null);
  const [focusedField, setFocusedField] = useState(null);
  const [nameValue, setNameValue] = useState("");
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
    if (!isOpen) {
      setShouldAnimate(false);
      // при закрытии запустить анимацию исчезновения и убрать из DOM через 1000мс
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setVisible(false);
      }, 1000);
    } else {
      setVisible(true);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [isOpen]);

  useLayoutEffect(() => {
    if (isOpen && visible) {
      // Очищаем предыдущий таймер
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Сбрасываем анимацию перед запуском
      setShouldAnimate(false);

      // Используем requestAnimationFrame для синхронизации с рендерингом
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // Небольшая задержка для гарантии применения стилей
          timeoutRef.current = setTimeout(() => {
            setShouldAnimate(true);
          }, 16); // ~один кадр при 60fps
        });
      });
    }
  }, [isOpen, visible]);

  if (!visible) return null; // если не видим, то из DOM не рендерим

  const popupContent = (
    <div
      className={`popupOverlay ${shouldAnimate ? "open" : "close"}`}
      onClick={onClose}
    >
      <div
        className={`popupWindow ${shouldAnimate ? "open" : "close"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="popupClose" onClick={onClose}>
          ×
        </button>

        <h2 className="popupTitle">
          Заполните форму и<br />
          мы перезвоним!
        </h2>

        <form className="popupForm">
          <div className="inputGroup">
            <label
              htmlFor="popup-name"
              className={`inputLabel ${
                focusedField === "name" || nameValue ? "focused" : ""
              }`}
            >
              {["В", "а", "ш", "е", " ", "и", "м", "я"].map((letter, index) => (
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
              className={`inputLine ${focusedField === "name" ? "active" : ""}`}
            ></div>
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

      <style jsx>{`
        .popupOverlay {
          position: fixed !important;
          top: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          left: 0 !important;
          -webkit-backdrop-filter: blur(0px);
          backdrop-filter: blur(0px);
          background: rgba(0, 0, 0, 0);
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          z-index: 10000001 !important;
          padding: 0 20px;
          box-sizing: border-box;
          margin: 0 !important;
          opacity: 0;
          pointer-events: none;
          will-change: opacity, background, backdrop-filter;
          transition: background 1s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 1s cubic-bezier(0.16, 1, 0.3, 1),
            -webkit-backdrop-filter 1s cubic-bezier(0.16, 1, 0.3, 1),
            backdrop-filter 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .popupOverlay.open {
          background: rgba(0, 0, 0, 0.5);
          -webkit-backdrop-filter: blur(12px);
          backdrop-filter: blur(12px);
          opacity: 1;
          pointer-events: auto;
        }

        .popupOverlay.close {
          background: rgba(0, 0, 0, 0);
          -webkit-backdrop-filter: blur(0px);
          backdrop-filter: blur(0px);
          opacity: 0;
          pointer-events: none;
        }

        .popupWindow {
          width: 250px;
          min-height: 219px;
          height: auto;
          background: white;
          border-radius: 22px;
          position: relative;
          padding: 15px 25px;
          box-sizing: border-box;
          max-width: calc(100% - 40px);
          transform: scale(0.9);
          opacity: 0;
          will-change: transform, opacity;
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1),
            transform 1s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: stretch;
        }

        .popupWindow.open {
          transform: scale(1);
          opacity: 1;
        }

        .popupWindow.close {
          transform: scale(0.9);
          opacity: 0;
        }

        .popupClose {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 2.23rem;
          cursor: pointer;
          color: #7d7d7d;
          transition: 0.2s;
          padding: 0;
        }

        .popupClose:hover {
          color: #000;
        }

        .popupTitle {
          margin: 0;
          margin-bottom: 0.86rem;
          font-size: 16px;
          text-align: center;
          font-weight: 700;
          line-height: 1.3;
          flex-shrink: 0;
        }

        .popupForm {
          display: flex;
          flex-direction: column;
          gap: 1.54rem;
          margin-top: 0;
          margin-bottom: 0;
          flex: 1 1 auto;
          min-height: 0;
          overflow: visible;
        }

        .inputGroup {
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .inputLabel {
          position: absolute;
          left: 0;
          top: 0.68rem;
          font-size: 16px;
          color: rgba(153, 153, 153, 1);
          font-weight: 400;
          pointer-events: none;
          display: flex;
          z-index: 1;
          transition: font-size 0.3s ease, color 0.3s ease;
        }

        .inputLabel .letter {
          display: inline-block;
          opacity: 1;
          transform: translateY(0);
          animation: none;
          color: inherit;
        }

        .inputLabel.focused {
          top: 0.68rem;
          font-size: 14px;
          color: rgba(153, 153, 153, 0.8);
        }

        .inputLabel.focused .letter {
          animation: letterUp 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)
            forwards;
        }

        @keyframes letterUp {
          0% {
            transform: translateY(0);
            opacity: 1;
            color: rgba(153, 153, 153, 1);
          }
          100% {
            transform: translateY(-1.54rem);
            opacity: 0.9;
            color: #0066ff;
          }
        }

        .popupForm input {
          width: 100%;
          border: none;
          outline: none;
          border-bottom: 1px solid #c8c8c8;
          font-size: 16px;
          position: relative;
          z-index: 2;
          padding: 0.68rem 0;
          box-sizing: border-box;
        }

        .popupForm input:focus {
          border-bottom: 1px solid transparent;
        }

        .inputLine {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 0.17rem;
          background-color: #0066ff;
          transform-origin: left;
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .inputLine.active {
          width: 100%;
        }

        .popupSubmit {
          margin-top: auto;
          margin-bottom: 15px;
          align-self: center;
          width: 96.27px;
          height: 35px;
          background: white;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          font-size: 10px;
          font-family: "Montserrat";
          font-weight: 600;
          transition: 0.2s;
          box-shadow: 2px 0 #000, -2px 0 #000, 0 0.25px #000, 0 -0.25px #000;
          flex-shrink: 0;
        }

        .popupSubmit:hover {
          transform: scale(1.03);
        }
      `}</style>
    </div>
  );

  // Рендерим popup через Portal в body, чтобы избежать проблем с позиционированием
  if (typeof window !== "undefined") {
    return createPortal(popupContent, document.body);
  }

  return popupContent;
}
