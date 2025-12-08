"use client";

import LogoIcon from "../../public/svg/logoIcon";
import ThemeIcon from "../../public/svg/themeIcon";
import PhoneCallIcon from "../../public/svg/phoneCallIcon";
import Link from "next/link";
import PopUpForm from "./popUpForm";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false); // ← добавлено

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="head">
      <div onClick={scrollToTop} style={{ cursor: "pointer" }}>
        <LogoIcon />
      </div>

      <div className="headerBtn">
        <Link href="" className="navItem" data-text="Почему мы?">
          Почему мы?
        </Link>
        <Link href="" className="navItem" data-text="Преимущества">
          Преимущества
        </Link>
        <Link href="" className="navItem" data-text="Расчет">
          Расчет
        </Link>
        <Link href="" className="navItem" data-text="Контакты">
          Контакты
        </Link>
      </div>

      <div className="navRight">
        <ThemeIcon />

        <div className="phoneCallBtn">
          <span>8 (925) 288-75-82</span>
          <PhoneCallIcon />
        </div>

        {/* Открываем поп-ап по клику */}
        <button className="contactBtn" onClick={() => setOpen(true)}>
          ПЕРЕЗВОНИТЬ
        </button>

        {/* Сам попап */}
        <PopUpForm isOpen={open} onClose={() => setOpen(false)} />
      </div>
    </div>
  );
}
