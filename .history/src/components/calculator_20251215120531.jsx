"use client";
import { useState } from "react";
import PopUpFormCalculator from "./popUpFormCalculator";

export default function Calculator() {
  const [open, setOpen] = useState(false);

  return (
    <div id="calculator" className="calculatorCont">
      <div className="calculatorText">
        <span className="calculatorContTextUp">
          Какой груз нужно перевезти?
        </span>
        <span className="calculatorContTextDown">
          Давайте посчитаем оптимальную доставку!
        </span>
      </div>
      <button className="calculatorContBtn" onClick={() => setOpen(true)}>
        ПОСЧИТАТЬ
      </button>
      <PopUpFormCalculator isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
