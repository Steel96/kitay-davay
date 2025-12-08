"use client";
import Image from "next/image";
import PopUpForm from "./popUpForm";
import { useState } from "react";

export default function Main() {
  const [open, setOpen] = useState(false);

  return (
    <div className="main">
      <div className="mainContent">
        <span className="mainHeader">
          Как сэкономить
          <br />
          на доставке из
          <br />
          Китая
        </span>
        <span className="mainText">Без посредников</span>
        <button className="moredetailsBtn" onClick={() => setOpen(true)}>
          ПОДРОБНЕЕ
        </button>
        <PopUpForm isOpen={open} onClose={() => setOpen(false)} />
      </div>
      <div className="logisticWrapper">
        <Image
          className="logisticImg"
          src="/img/logistic.png"
          alt="logistic"
          width={1500}
          height={1500}
        />
      </div>
    </div>
  );
}
