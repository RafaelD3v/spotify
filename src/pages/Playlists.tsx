import { Link } from 'react-router-dom';
import styles from '../styles/components/Playlists.module.css'
import axios from "axios";
import React, { useEffect, useState } from "react";

interface PlayLists {
  id: number,
  name: string,
  image: string,
}

export default function Playlists() {
  const [playLists, setPlayLists] = useState<PlayLists[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3001/playlists").then((res) => {
      setPlayLists(res.data);
    })
  },[]);

    const albunsList = playLists.map((playList: PlayLists) => {
    return (
      <Link to={"/playlists/" + playList.id} key={playList.id}>
        <div key={playList.id}>
          <h2>{playList.name}</h2>
          <img src={playList.image} alt={playList.name} />
        </div>
      </Link>
    );
  });

  return (
    <div className={styles.playlistsContainer}>
      <h1 className={styles.playlistsTitle}>Grandes Playlists para melhorar seu dia!</h1>
      <div className={styles.playlistsList}>
        {albunsList}
      </div>
    </div>
  );
}