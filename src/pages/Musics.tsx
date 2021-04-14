import { useParams } from "react-router-dom";
import styles from '../styles/components/Musics.module.css'
import albuns from '../playlists.json'

interface ParamTypes {
  id: string
}

function Musics(props: ParamTypes) {
  const { id } = useParams<ParamTypes>();
  console.log(id);

  const album = albuns.filter((album) => parseInt(id) === album.id)[0];

  return (
    <div className={styles.musicsPlaylists}>
      <div className={styles.musicsDiv} key={album.id}>
        <iframe className={styles.musicsIframe} src={album.link} width="720" height="100%" frameBorder="0" allow="encrypted-media"></iframe>
      </div>
    </div >
  );
}

export default Musics;