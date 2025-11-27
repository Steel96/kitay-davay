import Image from "next/image";
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
      <div className="consultationContText">
        <h2 className="consultationContTextUp">
          Получите консультацию бесплатно
        </h2>
        <div className="consultationContMain">
          <span className="consultationContTextMain"></span>
        </div>
      </div>
    </div>
  );
}
