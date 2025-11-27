import PlaneIcon from "../../public/svg/planeIcon";
import DeliveryIcon from "../../public/svg/DeliveryIcon";

export default function Prices() {
  return (
    <div className="prices">
      <span className="priceText">
        Что по <br /> ценам?
      </span>
      <div className="deliveryCards">
        <div className="airDelivery">
          <PlaneIcon />
          <div className="textAirDelivery">
            <span className="textAvia">Авиаперевозка</span>
            <span className="context">Вес груза от 30 кг</span>
            <span className="context">От 9,5$ за 1 кг</span>
            <span className="context">От 7 дней</span>
          </div>
        </div>
        <div className="carDelivery">
          <DeliveryIcon />
          <div className="textCarDelivery">
            <span className="textAvia">Автоперевозка</span>
            <span className="context">Вес груза от 100 кг</span>
            <span className="context">От 3,5$ за 1 кг</span>
            <span className="context">От 14 дней</span>
          </div>
        </div>
      </div>
    </div>
  );
}
