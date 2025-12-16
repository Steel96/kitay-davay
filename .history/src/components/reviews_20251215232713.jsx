import Image from "next/image";
import ReviewButton from "./reviewButton";
import Arrow from "../../public/svg/arrowRight";

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
          <span className="reviewContentText">
            Очень доволен как качеством услуг, так и скоростью обработки заказа.
            Всегда все четко, товар не мятый, не мокрый, отличная упаковка. А
            главное, они всегда держат клиента в курсе всех этапов отправки
            груза. Когда твой перевозчик контролирует все процессы, это очень
            успокаивает, рекомендую.
          </span>
        </div>

        <div className="reviewCounter">
          <span className="reviewCounterNumLeft">1</span>
          <div className="reviewCounterLine"></div>
          <span className="reviewCounterNumRight">3</span>
        </div>
        <ReviewButton />
      </div>
    </div>
  );
}
