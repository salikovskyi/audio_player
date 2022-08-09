import React from "react";
import css from "./Controls.module.css";
import { IconContext } from "react-icons";
import {FaPause} from 'react-icons/fa'
import { IoPlaySkipBack, IoPlay, IoPlaySkipForward } from "react-icons/io5";

function Controls({ isPlaying, setIsPlaying, handleNext, handlePrev }) {
  return (
    <IconContext.Provider value={{ size: "35px", color: "#C4D0E3" }}>
      <div className={css.controls_wraper}>
        <div className={css.action_btn} onClick={handlePrev}>
          <IoPlaySkipBack />
        </div>
        <div
          className={
            isPlaying
              ? `${css.play_pause_btn} ${css.active}`
              : `${css.play_pause_btn}`
          }
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <FaPause/> : <IoPlay/>}
        </div>
        <div className={css.action_btn} onClick={handleNext}>
          <IoPlaySkipForward />
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Controls;
