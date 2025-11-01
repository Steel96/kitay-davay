export default function Main() {
  return (
    <div className="main">
      <div className="mainContent">
        <span className="mainText1">
          {/* старайся избегать цифр 1/2 в классах, лучше бы написал mainHeader и mainText */}
          Как сэкономить
          <br />
          на доставке из
          <br />
          Китая
        </span>
        <span className="mainText2">Без посредников</span>
        <button className="styles.moredetailsBtn">ПОДРОБНЕЕ</button>
        {/* класс неправильно написан, не должно быть точек */}
      </div>
      <div className="logisticImg">
        <img src="img/logistic.png" alt="" />
         {/* нету альта */}
      </div>
    </div>
  );
}
