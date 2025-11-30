export default function ContactsMain() {
  return (
    <div className="contactsMain">
      <h1 className="contactsMainTitle">Контакты</h1>
      <div className="contactsMainContent">
        <div className="contactsMainContentLeft">
          <h2>Адрес:</h2>
          <span>Москва, Комсомольский проспект, 28 подъезд 11</span>
        </div>
        <div className="contactsMainContentCenter">
          <h2>Телефон:</h2>
          <span>+7 (925) 288-75-82</span>
        </div>
        <div className="contactsMainContentRight">
          <h2>Электронная почта:</h2>
          <span>info@kitaydavay.ru</span>
        </div>
      </div>
    </div>
  );
}
