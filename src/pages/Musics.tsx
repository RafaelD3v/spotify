import React from 'react';
import { useParams } from "react-router-dom";
import styles from '../styles/components/Musics.module.css'
import { Link, Route } from 'react-router-dom';
import albuns from '../playlists.json'
import { link } from 'node:fs';

interface ParamTypes {
  id: string
}

function Musics() {
  const { id } = useParams<ParamTypes>();
  console.log(id);

  const album = albuns.map((album) => {
    return (
      <Link to={"/playlists/:id" + album.link}>
        <div className={styles.musicsDiv} key={album.id}>
          <iframe className={styles.musicsIframe} src={album.link} width="300" height="700" frameBorder="0" allow="encrypted-media"></iframe>
        </div>
      </Link>
    );
  });

  return (
    <div className={styles.musicsPlaylists}>
      { album }
    </div >
  );
}

export default Musics;