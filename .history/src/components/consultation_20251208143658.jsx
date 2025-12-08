"use client";
import { useState } from "react";
import Image from "next/image";
import PlusIcon from "../../public/svg/plusIcon";
import PopUpForm from "./popUpForm";

export default function Consultation() {
  const [open, setOpen] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

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
  return (
    <div className="consultationCont">
      <Image
        className="consultationContImg"
        src="/img/consultation.png"
        alt="consultationImg"
        width="500"
        height="300"
      />
      <div className="consultationContVisible">
        <div className="consultationContText">
          <h2 className="consultationContTextUp">
            Получите консультацию бесплатно
          </h2>
          <div className="consultationContMain">
            <PlusIcon />
            <span className="consultationContTextMain">
              Cписок из 100 проверенных поставщиков в Китае
            </span>
          </div>
        </div>
        <div className="consultationForm">
          <div className="inputBox">
            <div className="inputGroup">
              <input id="name" name="name" type="text" placeholder="Ваше имя" />
            </div>
            <div className="inputGroup">
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Телефон"
                onInput={handlePhoneInput}
              />
            </div>
            <button className="consultationBtn" onClick={() => setOpen(true)}>
              ОТПРАВИТЬ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
