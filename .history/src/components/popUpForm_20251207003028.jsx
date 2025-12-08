"use client";
import { useState, useEffect } from "react";

export default function PopUpForm({ isOpen, onClose }) {
  const [visible, setVisible] = useState(isOpen);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true); // сразу показать попап при открытии
      // Даем браузеру время применить начальное состояние перед анимацией
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setShouldAnimate(true);
        });
      });
    } else {
      setShouldAnimate(false); // сразу убираем класс анимации
      // при закрытии запустить анимацию исчезновения и убрать из DOM через 1000мс
      const timeoutId = setTimeout(() => setVisible(false), 1000);
      return () => clearTimeout(timeoutId);
    }
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
          <input type="text" placeholder="Телефон" />
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
          z-index: 9999;
          opacity: 0;
          pointer-events: none;
          transition: background 1s ease, opacity 1s ease,
            -webkit-backdrop-filter 1s ease, backdrop-filter 1s ease;
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
          transform: translateY(200px);
          opacity: 0;
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1),
            transform 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .popupWindow.open {
          transform: translateY(0);
          opacity: 1;
        }

        .popupWindow.close {
          transform: translateY(200px);
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
