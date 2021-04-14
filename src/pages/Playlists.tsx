import React from 'react';
import { Link } from 'react-router-dom';
import albuns from '../playlists.json'
import styles from '../styles/components/Playlists.module.css'

function Playlists() {
  return (
    <div className={styles.playlistsContainer}>
      <h1 className={styles.playlistsTitleContainer}>Grandes Playlists para melhorar seu dia!</h1>
      <div className={styles.playlistsList}>
        {albuns.map(function (album) {
          return (
            <Link to={"/playlists/" + album.id}>
              <div key={album.id}>
                <h2 className={styles.playlistsTitles} >{album.name}</h2>
                <img src={album.image} alt="Imagem RHCP" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Playlists;