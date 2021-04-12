import React from 'react';
import { Link, Route, useParams } from 'react-router-dom';
import albuns from '../playlists.json'
import styles from '../styles/components/Playlists.module.css'
import Musics from './Musics';

interface ParamTypes {
  id: string
}

function Playlists() {
  const { id } = useParams<ParamTypes>();
  console.log(id);

  const Playlists = albuns.map((album) => {
    return (
      <Link to={"/playlists/:id" + album.id}>
        <div key={album.id}>
          <h2>{album.name}</h2>
          <img src={album.image} alt="Imagem RHCP" />
        </div>
      </Link>
    );
  });

  return (
    <div className={styles.playlistsContainer}>
      <h1 className={styles.playlistsTitle}>Grandes Playlists para melhorar seu dia!</h1>
      <div className={styles.playlistsList}>
        {Playlists}
      </div>
    </div>
  );
}

export default Playlists;