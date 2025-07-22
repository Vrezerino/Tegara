import { Link } from 'react-router-dom';

export function SongTitle({ songTitle, albumTitle, i }) {
  return (
    <article key={`${songTitle}TitleDiv`} className='songTitleDiv'>
      <span className='rightAngle'>∟</span> {i + 1}.&nbsp;
      <Link to={`/song/${albumTitle}/${songTitle.replaceAll(' ', '_')}`}>
        {songTitle}
      </Link>
    </article>
  );
}

export default function Release({ title, year, songs }) {
  const albumTitle = title.replaceAll(' ', '_');

  return (
    <article>
      <b className='releaseTitle'>
        {title} ({year})
      </b>
      <br />
      {songs?.map((s, i) => (
        <SongTitle key={s.title} songTitle={s.title} albumTitle={albumTitle} i={i} />
      ))}
      <hr />
    </article>
  );
}
