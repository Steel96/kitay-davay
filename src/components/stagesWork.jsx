export default function Stages() {
  return (
    <div className="stages">
      <span className="stageText">Этапы работы</span>
      <div className="cards">
        <div className="applicationCont">
          <div className="num">
            <span className="numDigit">01</span>
          </div>
          <p className="applicationText">
            Вы оставляете заявку или <br /> звоните по телефону <br />
            <span className="phone"> 8 (925) 288-75-82</span>
          </p>
        </div>
        <div className="conditionsCont">
          <div className="num">
            <span className="numDigit">02</span>
          </div>
          <p className="conditionsText">
            Мы обсуждаем условия и заключаем договор
          </p>
        </div>
        <div className="deliveryCont">
          <div className="num">
            <span className="numDigit">03</span>
          </div>
          <p className="deliveryText">
            Мы доставляем груз, отправляя Вам уведомления о прохождении по
            маршруту
          </p>
        </div>
        <div className="receivingCont">
          <div className="num">
            <span className="numDigit">04</span>
          </div>
          <p className="receivingText">Вы получаете груз и оплачиваете счёт</p>
        </div>
      </div>
    </div>
  );
}
