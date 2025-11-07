import Image from "next/image";

export default function Header() {
  return (
    <div className="head">
      <Image src="/img/logo.svg" alt="logo" width={110} height={80} />
      {/* КОМПОНЕНТОМ, как хедер! без этого не приму. так с каждой иконкой (нужен <svg>!) */}
      <div className="headerBtn">
        <a href="">Почему мы?</a>
        <a href="">Преимущества</a>
        <a href="">Расчет</a>
        <a href="">Контакты</a>
      </div>
      <div className="navRight">
        <Image
          className="them"
          src="/img/them.svg"
          alt="them"
          width={24}
          height={24}
        />
        <div className="number">
          <span>8 (925) 288-75-82</span>
          <Image
            className="phoneCall"
            src="/img/phonecall.svg"
            alt="phonecall"
            width={25}
            height={25}
          />
        </div>
        <button className="contactBtn">ПЕРЕЗВОНИТЬ</button>
      </div>
    </div>
  );
}
