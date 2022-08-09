import React from "react";
import css from "./Queue.module.css";

function Queue({ tracks, setCurrentIndex }) {
  return (

      <div className={css.queue_container}>
        <div className={css.queue}>
          <p className={css.upNext}>Up Next</p>
          <div className={css.queue_list}>
            {tracks?.map((track, index) => (
              <div
                key={index + "key"}
                className={`${css.queue_item} flex`}
                onClick={() => setCurrentIndex(index)}
              >
                <p className={css.track_name}>{track?.track?.name}</p>
                <p>0:30</p>
              </div>
            ))}
          </div>
        </div>  
      </div>
  );
}

export default Queue;
