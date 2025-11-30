import LogoIcon from "../../public/svg/logoIcon";
import VkIcon from "../../public/svg/vkIcon";
import WhatsappIcon from "../../public/svg/whatsappIcon";
import ThemeIcon from "../../public/svg/themeIcon";
import PhoneCallIcon from "../../public/svg/phoneCallIcon";
import Image from "next/image";

export default function Footer() {
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
            <PhoneCallIcon />
          </div>
          <button className="contactBtn">ПЕРЕЗВОНИТЬ</button>
        </div>
        <a class="footerInteractMini" href="https://tenzorix.ru">
          <span className="footerInteractText">Сайт разработан</span>
          <Image
            alt="лого"
            loading="lazy"
            width="1000"
            height="1000"
            decoding="async"
            data-nimg="1"
            className="tenzorix"
            style="color:transparent"
            srcset="/_next/image?url=%2FtenzorixBlack.png&amp;w=1080&amp;q=75 1x, /_next/image?url=%2FtenzorixBlack.png&amp;w=2048&amp;q=75 2x"
            src="/img/tenzorix.png"
          />
        </a>
      </div>
    </div>
  );
}
