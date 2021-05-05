import { useParams } from "react-router-dom";
import styles from '../styles/components/Musics.module.css'
import axios from "axios";
import { useEffect, useState } from "react";

interface PlayList {
  id: number,
  name: string,
  image: string,
  link: string
}

interface ParamTypes {
  id: string,
}

export default function Musics(props: ParamTypes) {
  const { id } = useParams<ParamTypes>();
  const [playList, setPlayList] = useState<PlayList>();

  useEffect(() => {
    axios.get("http://localhost:3001/playlists/"+id).then((res) => {
      setPlayList(res.data);
    })
  },[]);

  return (
    <div className={styles.musicsPlaylists}>
      <div className={styles.musicsDiv} key={id}>
        <iframe className={styles.musicsIframe} src={playList?.link} width="720" height="100%" frameBorder="0" allow="encrypted-media"></iframe>
      </div>
    </div >
  );
}