import YandexMap from "./YandexMap";

export default function ContactsMain() {
  return (
    <div className="contactsMain">
      <h1 className="contactsMainTitle">Контакты</h1>
      <div className="contactsMainContent">
        <div className="contactsMainContentLeft">
          <h2 className="contactsMainContentLeftHead">Адрес:</h2>
          <span className="contactsMainContentLeftText">
            Москва, Комсомольский проспект, 28 подъезд 11
          </span>
        </div>
        <div className="contactsMainContentCenter">
          <h2 className="contactsMainContentCenterHead">Телефон:</h2>
          <span className="contactsMainContentCenterText">
            +7 (925) 288-75-82
          </span>
        </div>
        <div className="contactsMainContentRight">
          <h2 className="contactsMainContentRightHead">Электронная почта:</h2>
          <span className="contactsMainContentRightText">
            info@kitaydavay.ru
          </span>
        </div>
      </div>
      <YandexMap />
    </div>
  );
}
