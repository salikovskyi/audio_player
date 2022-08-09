import React, { useState } from "react";
import css from "./AlbumInfo.module.css";

function AlbumInfo({ album }) {
  const artists = [];
  album?.artists?.forEach((element) => {
    artists.push(element.name);
  });

  console.log(album);
  return (
    <div className={css.albumInfo_card}>
      <div className={css.albumName_container}>
        <div className={css.marquee}>
          <p>{album?.name + "-" + artists?.join(", ")}</p>
        </div>
      </div>
      <div className={css.albumInfo}>
        <p>{`${album?.name} is an ${album?.album_type} by ${artists?.join(
          ", "
        )} with ${album?.total_tracks} track(s)`}</p>
      </div>
      <div className={css.album_release}>
        <p>Release Date: {album?.release_date}</p>
      </div>
    </div>
  );
}

export default AlbumInfo;
