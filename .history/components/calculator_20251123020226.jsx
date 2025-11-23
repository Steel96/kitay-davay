export default function Calculator() {
  return (
    <div className="calculatorCont">
      <div className="calculatorContText">
        <span className="calculatorContTextUp">
          Какой груз нужно перевезти?
        </span>
        <span className="calculatorContTextDown">
          Давайте посчитаем оптимальную доставку!
        </span>
      </div>
      <button className="calculatorContBtn">Посчитать</button>
    </div>
  );
}
