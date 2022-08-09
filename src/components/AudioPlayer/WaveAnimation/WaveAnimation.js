import React from "react";
import css from "./WaveAnimation.module.css";

function WaveAnimation({ isPlaying }) {
  const waveClass = isPlaying ? `${css.box} ${css.active}` : `${css.box}`;
  return (
    <div className={css.box_container}>
      <div className={`${waveClass} ${css.box1}`}></div>
      <div className={`${waveClass} ${css.box2}`}></div>
      <div className={`${waveClass} ${css.box3}`}></div>
      <div className={`${waveClass} ${css.box4}`}></div>
      <div className={`${waveClass} ${css.box5}`}></div>
      <div className={`${waveClass} ${css.box6}`}></div>
      <div className={`${waveClass} ${css.box7}`}></div>
      <div className={`${waveClass} ${css.box2}`}></div>
      <div className={`${waveClass} ${css.box3}`}></div>
      <div className={`${waveClass} ${css.box4}`}></div>
      <div className={`${waveClass} ${css.box5}`}></div>
      <div className={`${waveClass} ${css.box6}`}></div>
      <div className={`${waveClass} ${css.box7}`}></div>
    </div>
  );
}

export default WaveAnimation;
