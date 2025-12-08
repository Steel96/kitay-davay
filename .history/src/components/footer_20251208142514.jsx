"use client";
import { useState } from "react";
import LogoIcon from "../../public/svg/logoIcon";
import VkIcon from "../../public/svg/vkIcon";
import WhatsappIcon from "../../public/svg/whatsappIcon";
import ThemeIcon from "../../public/svg/themeIcon";
import PhoneCallIcon from "../../public/svg/phoneCallIcon";
import Image from "next/image";
import PopUpForm from "./popUpForm";

export default function Footer() {
  const [open, setOpen] = useState(false);
  return (
    <div className="footer">
      <div className="footerLogo">
        <LogoIcon />
        <span className="footerLogoText">2010-2025 © KitayDavay.ru</span>
      </div>
      <div className="footerNav">
        <span>Почему мы?</span>
        <span>Преимущества</span>
        <span>Расчет</span>
        <span>Контакты</span>
      </div>
      <div className="footerInfo">
        <span>Электронная почта:</span>
        <a href="">info@kitaydavay.ru</a>
        <span>Телефон:</span>
        <a href="">+7 (925) 288-75-82</a>
      </div>
      <div className="footerSocialNetworks">
        <span>Наши соцсети:</span>
        <div className="footerSocialNetworksIcons">
          <VkIcon />
          <WhatsappIcon />
          <ThemeIcon />
        </div>
      </div>
      <div className="footerRight">
        <div className="footerRightButtons">
          <div className="phoneCallBtnFooter">
            <span>8 (925) 288-75-82</span>
            <PhoneCallIcon className="phoneCall" />
          </div>
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
