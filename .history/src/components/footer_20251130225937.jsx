import LogoIcon from "../../public/svg/logoIcon";
import VkIcon from "../../public/svg/vkIcon";
import WhatsappIcon from "../../public/svg/whatsappIcon";

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
        <span>info@kitaydavay.ru</span>
        <span>Телефон:</span>
        <span>+7 (925) 288-75-82</span>
      </div>
      <div className="footerSocialNetworks">
        <span>Наши соцсети:</span>
        <VkIcon />
      </div>
    </div>
  );
}
