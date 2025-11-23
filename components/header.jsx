import Image from "next/image";
import LogoIcon from "../public/svg/logo";
import ThemIcon from "../public/svg/them";
import PhoneCall from "../public/svg/phoneCall";

export default function Header() {
  return (
    <div className="head">
      <LogoIcon />
      <div className="headerBtn">
        <a href="">Почему мы?</a>
        <a href="">Преимущества</a>
        <a href="">Расчет</a>
        <a href="">Контакты</a>
      </div>
      <div className="navRight">
        <ThemIcon />
        <div className="number">
          <span>8 (925) 288-75-82</span>
          <PhoneCall />
        </div>
        <button className="contactBtn">ПЕРЕЗВОНИТЬ</button>
      </div>
    </div>
  );
}
