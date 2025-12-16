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

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 100; // примерная высота хедера
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="head"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        maxWidth: "100vw",
        zIndex: 99999999,
        display: "flex",
        visibility: "visible",
        opacity: 1,
        background: "rgba(255, 255, 255, 1)",
        pointerEvents: "auto",
        transform: "translateY(0)",
        margin: 0,
        transition: "none",
        animation: "none",
      }}
    >
      <div onClick={scrollToTop} style={{ cursor: "pointer" }}>
        <LogoIcon />
      </div>

      <div className="headerBtn">
        <Link
          href="#why-us"
          className="navItem"
          data-text="Почему мы?"
          onClick={(e) => scrollToSection(e, "why-us")}
        >
          Почему мы?
        </Link>
        <Link
          href="#advantages"
          className="navItem"
          data-text="Преимущества"
          onClick={(e) => scrollToSection(e, "advantages")}
        >
          Преимущества
        </Link>
        <Link
          href="#calculator"
          className="navItem"
          data-text="Расчет"
          onClick={(e) => scrollToSection(e, "calculator")}
        >
          Расчет
        </Link>
        <Link
          href="#contacts"
          className="navItem"
          data-text="Контакты"
          onClick={(e) => scrollToSection(e, "contacts")}
        >
          Контакты
        </Link>
      </div>

      <div className="navRight">
        <ThemeIcon />

        <a href="tel:+79252887582" className="phoneCallBtn">
          <span>8 (925) 288-75-82</span>
          <PhoneCallIcon />
        </a>

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
