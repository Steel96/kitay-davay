import BrainIcon from "../../public/svg/brainIcon";
import BoxIcon from "../../public/svg/boxIcon";
import TrailerIcon from "../../public/svg/trailerIcon";
export default function StillThinking() {
  return (
    <div className="stillThinking">
      <span className="stillThinkingText">
        Ещё думаете? Мы всё продумали <BrainIcon className="brainIcon" /> ! Все
        сложности мы берем на себя <BoxIcon className="boxIcon" /> . Вам
        остается только принять товар и оплатить доставку <TrailerIcon /> .
      </span>
      <div className="stillThinkingTextLCR">
        <p className="stillThinkingTextLeft">Успешно работаем более 15 лет</p>
        <p className="stillThinkingTextCenter">
          Только "под ключ", с гарантией
        </p>
        <p className="stillThinkingTextRight">Любые риски исключены!</p>
      </div>
    </div>
  );
}
