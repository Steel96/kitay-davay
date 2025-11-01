export default function Prices() {
  return (
    <div className="prices">
      <span className="priceText">
        Что по <br /> ценам?
      </span>
      <div className="airDelivery">
        <img src="img/plane.svg" alt="" />
        <div className="textAirDelivery">
          <span>Авиаперевозка</span>
          <span>Вес груза от 30 кг</span>
          <span>От 9,5$ за 1 кг</span>
          <span>От 7 дней</span>
        </div>
      </div>
      <div className="carDelivery">
        <img src="img/roadDelivery.svg" alt="" />
        <div className="textCarDelivery">
          <span>Автоперевозка</span>
          <span>Вес груза от 100 к</span>
          <span>От 3,5$ за 1 кг</span>
          <span>От 14 дней</span>
        </div>
      </div>
    </div>
  );
}
