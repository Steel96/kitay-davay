export default function Header() {
  return (
    <div className="head">
      <img className="logo" src="img/logo.svg" alt="error" />
      <div className="headerBtn">
        <button>Почему мы?</button>
        <button>Преимущества</button>
        <button>Расчет</button>
        <button>Контакты</button>
      </div>
      <div className="navRight">
        <img className="them" src="img/them.svg" alt="none" />
        <div className="number">
          <span>8 (925) 288-75-82</span>
          <img className="phoneCall" src="img/phonecall.svg" alt="none" />
        </div>
        <button className="contactBtn">ПЕРЕЗВОНИТЬ</button>
      </div>
    </div>
  );
}
