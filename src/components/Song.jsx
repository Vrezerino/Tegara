import { useParams } from 'react-router-dom';
import { releases } from '../data/releases';
import { capitalize } from '../utils';
import { Link } from 'react-router-dom';

export default function Song() {
  const { album, song } = useParams();
  const albumTitle = capitalize(album.replaceAll('_', ' '));
  const songTitle = capitalize(song.replaceAll('_', ' '));

  const songResult = releases
    .find((r) => r.title === albumTitle)
    ?.songs.find((s) => s.title === songTitle);

  return (
    <>
      <div className='lyricsContainer'>{songResult.lyrics}</div>
      <div style={{ marginTop: '2em' }}>
        <Link to='/'>← Index</Link>
      </div>
      <div style={{ height: '3em' }}></div>

      {songResult.tabs?.map((t, i) => (
        <a href={t.url} key={i}>
          <p className='songItemLink' key={i}>
            <img
              className='PdfDocIconImg'
              alt='PDF document icon'
              src='/img/pdf-doc-icon.png'
            />
            {t.desc}
          </p>
        </a>
      ))}
    </>
  );
}
