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
    <main className='page'>
      {songResult ? (
        <>
          <section className='lyricsContainer'>
            {songResult.lyrics ?? '[instrumental]'}
          </section>

          <section className='tabsContainer'>
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
          </section>
        </>
      ) : (
        <>[not available]</>
      )}

      <section className='backToIndexDiv'>
        <Link to='/'>← Index</Link>
      </section>
    </main>
  );
}
