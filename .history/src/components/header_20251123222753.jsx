import LogoIcon from "../../public/svg/logo";
import ThemIcon from "../../public/svg/them";
import PhoneCall from "../../public/svg/phoneCall";
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
