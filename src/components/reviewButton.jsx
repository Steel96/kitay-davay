"use client";

import { useState, useEffect } from "react";
import Arrow from "../../public/svg/arrowRight";

export default function ReviewButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [size, setSize] = useState(-40);

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth <= 800) setSize(0.86);
      else if (window.innerWidth <= 1050) setSize(-2.14);
      else setSize(-3.42);
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
          <Arrow margin={`0 ${size}rem 0 0.86rem`} />
        </span>
      </button>

      <button
        className="reviewArrowRight"
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      >
        <span className="arrowIcon">
          <Arrow margin={`0 ${size}rem 0 0.86rem`} />
        </span>
      </button>
    </div>
  );
}
