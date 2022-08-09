import React from "react";
import css from "./AlbumImage.module.css";

function AlbumImage({ url }) {
    console.log(url);
  return (
    <div className={css.albumImage}>
      <img src={url} alt="album art" className={css.albumImage_art} />
      <div className={css.albumImage_shadow}>
        <img src={url} alt="shadow" className={css.albumImage_shadow} />
      </div>
    </div>
  );
}

export default AlbumImage;
