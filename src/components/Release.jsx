import { Link } from 'react-router-dom';

export function Song({ song, i }) {
  /**
   * song.unordered just indicates if a song's order number 
   * hasn't been decided yet; the release is under making
   *
  */ 
  return (
    <>
      ∟ {song.unordered ? '?' : i}. {song.songTitle} 
      {song.lyrics && (<Link to={`/lyrics/${song.lyrics}`}><span>lyrics</span></Link>)}
      {song.tabs?.map((t, i) => <a href={t}><span>tabs {i+1}</span></a>)}
      <br />
    </>
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