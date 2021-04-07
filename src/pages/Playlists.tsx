import albuns from '../../albuns.json'

interface Album {
  nome: string,
  image: string
}

function Playlists() {
  return (
    <div>
      <h1>Playlist</h1>
      <div>
        <h2>Nome</h2>
        <img src={albuns.image} alt="Imagem RHCP"/>
      </div>
    </div>
  );
}

export default Playlists;