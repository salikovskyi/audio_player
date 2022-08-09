import React, { useEffect, useState } from "react";
import css from "./Player.module.css";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotifyAPI";
import SongCard from "../../components/SongCard/SongCard";
import Queue from "../../components/Queue/Queue";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import Widgets from "../../components/Widgets/Widgets";

function Player() {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTracks(res.data.items);
          setCurrentTrack(res.data.items[0].track);
        });
    }
  }, [location.state]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);
  return (
    <div className="screen_container flex">
      <div className={css.left_player_body}>
        <AudioPlayer
          currentTrack={currentTrack}
          total={tracks}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <Widgets artistID={currentTrack?.album?.artists[0]?.id}/>
      </div>
      <div className={css.right_player_body}>
        <SongCard album={currentTrack?.album} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  );
}

export default Player;
