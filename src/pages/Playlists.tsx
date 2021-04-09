import React from 'react';
import { Link, Route } from 'react-router-dom';
import albuns from '../albuns.json'
import styles from '../styles/components/Playlists.module.css'
import Musics from './Musics';

function Playlists() {
  const listAlbuns = albuns.map((album) => {
    return (
      <Link to={"/playlists/" + album.id}>
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
        {listAlbuns}
      </div>
    </div>
  );
}

export default Playlists;