import { Link } from 'react-router-dom';

export function Song({ song, i }) {
  /**
   * song.unordered just indicates if a song's order number 
   * hasn't been decided yet; the release is under making
   *
  */ 
  return (
    <div className='songDiv'>
      <span className='rightAngle'>∟</span> {song.unordered ? '?' : i}. {song.songTitle} 
      {song.lyrics && (<Link to={`/lyrics/${song.lyrics}`}><span className='songItemLink'>lyrics</span></Link>)}
      {song.tabs?.map((t, i) => <a href={t}><span className='songItemLink'>tabs {i+1}</span></a>)}
      <br />
    </div>
  )
}

export default function Release({ title, year, songs }) {
  return (
    <>
      <b className='releaseTitle'>{title} ({year})</b><br />
      {songs.map((s, i) => <Song song={s} i={i+1} key={s.songTitle} />) }
      <hr />
    </>
  )
}