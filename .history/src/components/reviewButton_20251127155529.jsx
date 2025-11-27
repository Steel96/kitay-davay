export default fucntion ReviewButton () {
    return (
        "use client"

import { useState, useEffect } from "react";
import Arrow from "./Arrow"; // если твой компонент стрелки в другом месте — поправь путь

export default function ReviewButtons() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [size, setSize] = useState(-40);

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth <= 800) setSize(10);
      else if (window.innerWidth <= 1050) setSize(-25);
      else setSize(-40);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="reviewBtn">
      <div
        className={`reviewRound ${isHovered ? "hovered" : ""} ${
          isHovered2 ? "hovered2" : ""
        }`}
      ></div>

      <button
        className="reviewArrow"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="arrowIcon">
          <Arrow margin={`0px ${size}px 0px 10px`} />
        </span>
      </button>

      <button
        className="reviewArrowRight"
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      >
        <span className="arrowIcon">
          <Arrow margin={`0px ${size}px 0px 10px`} />
        </span>
      </button>
    </div>
  );
}

    );
}