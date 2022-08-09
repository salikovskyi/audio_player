import React from "react";
import { loginEndpoint } from "../../spotifyAPI";
import css from './Login.module.css'

function Login() {
  return (
    <div className={css.login_page}>
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="logo-spotify"
        className={css.logo}
      />
      <a href={loginEndpoint}>
        <div className={css.login_btn}>LOG IN</div>
      </a>
    </div>
  );
}

export default Login;
