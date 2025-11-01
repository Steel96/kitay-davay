export default function Header() {
  return (
    <div className="head">
      <img className="logo" src="img/logo.svg" alt="error" /> 
      {/* alt неправильный, нужно чтобы по смыслу совпадал с картинкой, здесь: logo */}
      {/* <Image /> надо использовать, забудь про <img /> */}
      <div className="headerBtn">
        <button>Почему мы?</button>
        <button>Преимущества</button>
        <button>Расчет</button>
        <button>Контакты</button>
        {/* заместо button тут надо <a> для якорей */}
      </div>
      <div className="navRight">
        <img className="them" src="img/them.svg" alt="none" />
         {/* здесь надо код свг писать, а не вставлять его как картинку. для этого свг файл перенеси у гугл и в режиме разраба скопируй код свг. Его вставь в компонент! как хедер вообщем */}
        <div className="number">
          <span>8 (925) 288-75-82</span>
          <img className="phoneCall" src="img/phonecall.svg" alt="none" />
          {/* здесь надо код свг писать, а не вставлять его как картинку. для этого свг файл перенеси у гугл и в режиме разраба скопируй код свг. Его вставь в компонент! как хедер вообщем */}
        </div>
        <button className="contactBtn">ПЕРЕЗВОНИТЬ</button>
      </div>
    </div>
  );
}
