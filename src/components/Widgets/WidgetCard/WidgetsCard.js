import React from "react";
import css from "./WidgetCard.module.css";
import WidgetEntry from "../WidgetEntry/WidgetEntry";
import { IconContext } from "react-icons";
import { FiChevronRight } from "react-icons/fi";

function WidgetCard({ title, similar, featured, newRelease }) {
  return (
    <div className={css.widgetCard_body}>
      <p className={css.widget_title}>{title}</p>
      {similar
        ? similar.map((artist) => (
            <WidgetEntry
              title={artist?.name}
              subtitle={artist?.followers?.total + " Followers"}
              image={artist?.images[2]?.url}
            />
          ))
        : featured
        ? featured.map((playlist) => (
            <WidgetEntry
              title={playlist?.name}
              subtitle={playlist?.tracks?.total + "Songs"}
              image={playlist?.images[0]?.url}
            />
          ))
        : newRelease
        ? newRelease.map((album) => (
            <WidgetEntry
              title={album?.name}
              subtitle={album?.artists[0]?.name}
              image={album?.images[2]?.url}
            />
          ))
        : null}
      <div className={css.widget_fade}>
        <div className={css.fade_button}>
          <IconContext.Provider value={{ size: "24px", color: "#c4d0e3" }}>
            <FiChevronRight />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default WidgetCard;
