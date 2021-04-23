import { Link } from 'react-router-dom';
import styles from '../styles/components/Playlists.module.css'
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Playlists() {
  const [playLists, setPlayLists] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/playlists").then((res) => {
      setPlayLists(res.data);
    })
  });

  return (
    <div className={styles.playlistsContainer}>
      <h1 className={styles.playlistsTitleContainer}>Grandes Playlists para melhorar seu dia!</h1>
      <div className={styles.playlistsList}>
        <Link to={"/playlists/"}>
          <div key={  }>
            <h2 className={styles.playlistsTitles} >{ }</h2>
            <img src={  } alt="Imagem RHCP" />
          </div>
        </Link>
      </div>
    </div>
  );
}
