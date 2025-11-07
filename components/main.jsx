import Image from "next/image";

export default function Main() {
  return (
    <div className="main">
      <div className="mainContent">
        <span className="mainHeader">
          Как сэкономить
          <br />
          на доставке из
          <br />
          Китая
        </span>
        <span className="mainText">Без посредников</span>
        <button className="moredetailsBtn">ПОДРОБНЕЕ</button>
      </div>
      <div className="logisticWrapper">
        <Image
          className="logisticImg"
          src="/img/logistic.png"
          alt="logistic"
          fill
          style={{ objectFit: "cover", objectPosition: "cover top" }}
        />
      </div>
    </div>
  );
}
