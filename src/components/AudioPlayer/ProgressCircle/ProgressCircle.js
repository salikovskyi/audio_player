import React from "react";
import css from "./ProgressCircle.module.css";

const Circle = ({ color, percentage, size, strokeWidth }) => {
  const radius = size / 2 - 10;
  const circ = 2 * Math.PI * radius - 20;
  const strokePct = ((100 - Math.round(percentage)) * circ) / 100;

  return (
    <circle
      r={radius}
      cx="50%"
      cy="50%"
      fill="transparent"
      stroke={strokePct !== circ ? color : ""}
      strokeWidth={strokeWidth}
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

function ProgressCircle({ percentage, isPlaying, size, color, image }) {
  return (
    <div className={css.progress_circle}>
      <svg width={size} height={size}>
        <g>
          <Circle strokeWidth={"0.4rem"} color="#B5C7CC" size={size} />
          <Circle
            strokeWidth={"0.6rem"}
            color='#244C66'
            percentage={percentage}
            size={size}
          />
        </g>
        <defs>
          <clipPath id="myCircle">
            <circle cx="50%" cy="50%" r={size / 2 - 30} fill="#FFFFFF" />
          </clipPath>
          <clipPath id="myInnerCircle">
            <circle cx="50%" cy="50%" r={size / 2 - 100} fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image
          className={isPlaying ? css.active : ""}
          x={30}
          y={30}
          width={2 * (size / 2 - 30)}
          heigh={2 * (size / 2 - 30)}
          href="https://pngimg.com/uploads/vinyl/vinyl_PNG107.png"
          clipPath="url(#myCircle)"
        />
        <image
          className={isPlaying ? `${css.active}` : ""}
          x={100}
          y={100}
          width={2 * (size / 2 - 100)}
          heigh={2 * (size / 2 - 100)}
          href={image}
          clipPath="url(#myInnerCircle)"
        />
      </svg>
    </div>
  );
}

export default ProgressCircle;
