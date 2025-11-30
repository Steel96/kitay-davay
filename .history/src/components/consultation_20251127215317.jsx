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
          <form class="form">
  <div class="form-group">
    <label for="name">Ваше имя</label>
    <input type="text" id="name" name="name" placeholder="Введите имя" required>
  </div>

  <div class="form-group">
    <label for="phone">Телефон</label>
    <input type="tel" id="phone" name="phone" placeholder="+7 (___) ___-__-__" required>
  </div>

  <button type="submit" class="form-submit">Отправить</button>
</form>
          <button className="advantagesBtn">ОТПРАВИТЬ</button>
        </div>
      </div>
    </div>
  );
}
