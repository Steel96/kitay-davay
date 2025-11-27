import Image from "next/image";
export default function Reviews() {
  return (
    <div className="reviews">
      <h2 className="reviewsLeftText">Отзывы</h2>
      <div className="reviewContent">
        <div className="reviewClient">
          <Image
            className="reviewClientImg"
            src="/img/faceIcon.svg"
            width="75"
            height="75"
            alt="client"
          />
          <span className="reviewClientNName">Павел Тарасов</span>
        </div>
      </div>
    </div>
  );
}
