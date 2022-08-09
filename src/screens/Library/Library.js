import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import APIKit from "../../spotifyAPI";
import css from "./Library.module.css";
import {AiFillPlayCircle} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import photo from '../../assets/photo.png'

function Library() {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    APIKit.get("me/playlists").then(function (response) {
      setPlaylists(response.data.items);
      console.log(response.data.items);
    });
  }, []);

  const navigate = useNavigate()

  const playPlaylist = (id) => {
navigate('/player', {state: {id: id}})
  }

  return (
    <div className="screen_container">
      <div className={css.library_body}>
        {playlists?.map((playlist) => (
          <div className={css.playlist_card} key={playlist.id} onClick={() => {playPlaylist(playlist.id)}}>
            <img
              src={playlist?.images[0]?.url || photo}
              className={css.playlist_image}
              alt="playlist-art"
            />
            <p className={css.playlist_title}>{playlist.name}</p>
            <p className={css.playlist_subtitle}>{playlist.tracks.total} Songs</p>
            <div className={css.playlist_fade}>
              <IconContext.Provider value={{size:'50px' , color:'#8BA1AD'}}>
                <AiFillPlayCircle/>
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Library;
