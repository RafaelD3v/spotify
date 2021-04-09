import React from 'react';
import { useParams } from "react-router-dom";
import styles from '../styles/components/Musics.module.css'
import Playlists from './Playlists';

interface ParamTypes {
  id: string
}

function Musics() {
  const {id} = useParams<ParamTypes>();
  console.log(id)

  return (
    <div></div>
  );
}

export default Musics;