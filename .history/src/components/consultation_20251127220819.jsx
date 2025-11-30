import Image from "next/image";
import PlusIcon from "../../public/svg/plusIcon";

export default function Consultation() {
  return (
    <div className="consultationCont">
      <Image
        className="consultationContImg"
        src="/img/consultation.png"
        alt="consultationImg"
        width="500"
        height="300"
      />
      <div className="consultationContVisible">
        <div className="consultationContText">
          <h2 className="consultationContTextUp">
            Получите консультацию бесплатно
          </h2>
          <div className="consultationContMain">
            <PlusIcon />
            <span className="consultationContTextMain">
              Cписок из 100 проверенных поставщиков в Китае
            </span>
          </div>
        </div>
        <div className="consultationForm">
          <div className="inputBox">
            <label htmlFor="name">Ваше имя</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Введите имя"
            />
            <span className="line"></span>
          </div>

          <div className="inputBox">
            <label htmlFor="phone">Телефон</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+7 (___) ___-__-__"
            />
            <span className="line"></span>
          </div>

          <button className="consultationBtn">ОТПРАВИТЬ</button>
        </div>
      </div>
    </div>
  );
}
