import { useParams } from 'react-router-dom';
import { lyrics } from '../data/lyrics';
import { capitalize } from '../utils';
import { Link } from 'react-router-dom';

export function Lyrics() {
  const { album, song } = useParams();
  const albumTitle = capitalize(album.replaceAll('_', ' '));
  const songTitle = capitalize(song.replaceAll('_', ' '));

  return (
    <>
      <div class='lyricsContainer'>{lyrics[albumTitle][songTitle]}</div>
      <div style={{ marginTop: '2em' }}><Link to='/'>← Index</Link></div>
      <div style={{ height: '3em' }}></div>
    </>
  );
}
