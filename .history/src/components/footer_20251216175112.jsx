"use client";
import { useState } from "react";
import LogoIcon from "../../public/svg/logoIcon";
import VkIcon from "../../public/svg/vkIcon";
import WhatsappIcon from "../../public/svg/whatsappIcon";
import ThemeIcon from "../../public/svg/themeIcon";
import PhoneCallIcon from "../../public/svg/phoneCallIcon";
import Image from "next/image";
import PopUpForm from "./popUpForm";
import Link from "next/link";

export default function Footer() {
  const [open, setOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 100;
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
    <div className="footer">
      <div className="footerLogo">
        <div onClick={scrollToTop} style={{ cursor: "pointer" }}>
          <LogoIcon />
        </div>
        <span className="footerLogoText">2010-2025 © KitayDavay.ru</span>
      </div>
      <div className="footerGroup">
        <div className="footerNav">
          <Link
            href="#why-us"
            className="footerNavItem"
            data-text="Почему мы?"
            onClick={(e) => scrollToSection(e, "why-us")}
          >
            Почему мы?
          </Link>
          <Link
            href="#advantages"
            className="footerNavItem"
            data-text="Преимущества"
            onClick={(e) => scrollToSection(e, "advantages")}
          >
            Преимущества
          </Link>
          <Link
            href="#calculator"
            className="footerNavItem"
            data-text="Расчет"
            onClick={(e) => scrollToSection(e, "calculator")}
          >
            Расчет
          </Link>
          <Link
            href="#contacts"
            className="footerNavItem"
            data-text="Контакты"
            onClick={(e) => scrollToSection(e, "contacts")}
          >
            Контакты
          </Link>
        </div>
        <div className="footerInfo">
          <span>Электронная почта:</span>
          <a href="mailto:info@kitaydavay.ru">info@kitaydavay.ru</a>
          <span>Телефон:</span>
          <a href="tel:+79252887582">+7 (925) 288-75-82</a>
        </div>
        <div className="footerSocialNetworks">
          <span>Наши соцсети:</span>
          <div className="footerSocialNetworksIcons">
            <VkIcon />
            <WhatsappIcon />
            <ThemeIcon />
          </div>
        </div>
      </div>
      <div className="footerRight">
        <div className="footerRightButtons">
          <a href="tel:+79252887582" className="phoneCallBtnFooter">
            <span>8 (925) 288-75-82</span>
            <PhoneCallIcon className="phoneCall" />
          </a>
          <button className="contactBtn" onClick={() => setOpen(true)}>
            ПЕРЕЗВОНИТЬ
          </button>
        </div>
        <a className="footerInteractMini" href="https://tenzorix.ru">
          <span className="footerInteractText">Сайт разработан</span>
          <Image
            alt="лого"
            loading="lazy"
            width="1000"
            height="1000"
            decoding="async"
            data-nimg="1"
            className="tenzorix"
            style={{ color: "transparent" }}
            src="/img/tenzorix.png"
          />
        </a>
      </div>
      <PopUpForm isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
