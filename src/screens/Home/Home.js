import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { setClientToken } from "../../spotifyAPI";
import Login from "../auth/Login";
import Favorites from "../Favorites/Favorites";
import Feed from "../Feed/Feed";
import Library from "../Library/Library";
import Player from "../Player/Player";
import Trending from "../Tranding/Trending";
import css from "./Home.module.css";

function Home() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token)
    } else {
      setToken(token);
      setClientToken(token)
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
    <Router>
      <div className={css.main_body}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Home;
