import LogoIcon from "../../public/svg/logoIcon";
import ThemeIcon from "../../public/svg/themeIcon";
import PhoneCallIcon from "../../public/svg/phoneCallIcon";
import Link from "next/link";

export default function Header() {
  return (
    <div className="head">
      <LogoIcon />
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
        <button className="contactBtn">ПЕРЕЗВОНИТЬ</button>
        <PopUpForm />
      </div>
    </div>
  );
}
