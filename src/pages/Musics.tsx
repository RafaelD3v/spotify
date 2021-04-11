import React from 'react';
import { useParams } from "react-router-dom";
import styles from '../styles/components/Musics.module.css'
import Playlists from './Playlists';
import musics from '../musics.json';
import { Link, Route } from 'react-router-dom';
import albuns from '../albuns.json'


interface ParamTypes {
  id: string
}

function Musics() {
  const { id } = useParams<ParamTypes>();
  console.log(id)

  const playList = albuns.map((album) => {
    return (
      <Link to={"/playlists/:id" + album.id}>
        <div key={album.id}>
          <iframe src={album.link} width="300" height="380" frameBorder="0" allow="encrypted-media"></iframe>
        </div>
      </Link>
    );
  });

  return (
    <div className='Musics'>
      { playList}
    </div >
  );
}

export default Musics;