import LogoIcon from "../../public/svg/logoIcon";
import ThemeIcon from "../../public/svg/themeIcon";
import PhoneCallIcon from "../../public/svg/phoneCallIcon";
import Link from "next/link";

export default function Header() {
  return (
    <div className="head">
      <LogoIcon />
      <div className="headerBtn">
        <Link href="">Почему мы?</Link>
        <Link href="">Преимущества</Link>
        <Link href="">Расчет</Link>
        <Link href="">Контакты</Link>
      </div>
      <div className="navRight">
        <ThemeIcon />
        <div className="phoneCallBtn">
          <span>8 (925) 288-75-82</span>
          <PhoneCallIcon />
        </div>
        <button className="contactBtn">ПЕРЕЗВОНИТЬ</button>
      </div>
    </div>
  );
}
