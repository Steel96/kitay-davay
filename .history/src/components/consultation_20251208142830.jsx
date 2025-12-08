"use client";
import { useState } from "react";
import Image from "next/image";
import PlusIcon from "../../public/svg/plusIcon";
import PopUpForm from "./popUpForm";

export default function Consultation() {
  const [open, setOpen] = useState(false);

  const handlePhoneInput = (e) => {
    // Разрешаем только цифры
    e.target.value = e.target.value.replace(/\D/g, "");
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
              <input id="phone" name="phone" type="tel" placeholder="Телефон" />
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
