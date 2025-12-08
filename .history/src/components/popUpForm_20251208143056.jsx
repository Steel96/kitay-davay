"use client";
import { useState, useEffect, useRef } from "react";

export default function PopUpForm({ isOpen, onClose }) {
  const [visible, setVisible] = useState(isOpen);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const timeoutRef = useRef(null);

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
    } else {
      e.target.value = "";
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

      // Используем requestAnimationFrame для более надежной синхронизации с браузером
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setShouldAnimate(true);
        });
      });
    } else {
      setShouldAnimate(false); // сразу убираем класс анимации
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
    };
  }, [isOpen]);

  if (!visible) return null; // если не видим, то из DOM не рендерим

  return (
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
          <input type="text" placeholder="Ваше имя" />
          <input
            type="tel"
            placeholder="+7 (963) 654 77 55"
            onInput={handlePhoneInput}
          />
          <button type="submit" className="popupSubmit">
            ОТПРАВИТЬ
          </button>
        </form>
      </div>

      <style jsx>{`
        .popupOverlay {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          -webkit-backdrop-filter: blur(0px);
          backdrop-filter: blur(0px);
          background: rgba(0, 0, 0, 0);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10000001;
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
          width: 406px;
          height: 285px;
          background: white;
          border-radius: 22px;
          position: relative;
          padding: 30px 35px;
          box-sizing: border-box;
          transform: translate(200px, 200px);
          opacity: 0;
          will-change: transform, opacity;
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1),
            transform 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .popupWindow.open {
          transform: translate(0, 0);
          opacity: 1;
        }

        .popupWindow.close {
          transform: translate(200px, 200px);
          opacity: 0;
        }

        .popupClose {
          position: absolute;
          top: 18px;
          right: 18px;
          background: none;
          border: none;
          font-size: 26px;
          cursor: pointer;
          color: #7d7d7d;
          transition: 0.2s;
        }

        .popupClose:hover {
          color: #000;
        }

        .popupTitle {
          margin: 0;
          font-size: 20px;
          text-align: center;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 25px;
        }

        .popupForm {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-top: 10px;
        }

        .popupForm input {
          width: 100%;
          border: none;
          outline: none;
          border-bottom: 1px solid #c8c8c8;
          padding: 8px 0;
          font-size: 16px;
        }

        .popupSubmit {
          margin-top: 10px;
          align-self: center;
          width: 150px;
          height: 36px;
          background: white;
          border-radius: 8px;
          border: 1px solid black;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          transition: 0.2s;
        }

        .popupSubmit:hover {
          transform: scale(1.03);
        }
      `}</style>
    </div>
  );
}
