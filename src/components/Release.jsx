import { useEffect, useState, useRef } from 'react';
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

export default function Release({ title, year, songs, comments }) {
  const audioRef = useRef(null);
  const [audioAvailable, setAudioAvailable] = useState(false);
  const [checked, setChecked] = useState(false);
  const albumTitle = title.replaceAll(' ', '_');
  const audioSrc = `files/audio/${title}.mp3`;

  // Check if medley audio exists before rendering player
  useEffect(() => {
    const checkAudio = async () => {
      try {
        const res = await fetch(audioSrc, { method: 'HEAD' });
        const isAudio = res.headers.get('Content-Type')?.startsWith('audio');

        if (res.ok && isAudio) setAudioAvailable(true);
      } catch (e) {
        console.warn(`Audio file not found for ${title}!`);
      } finally {
        setChecked(true);
      }

    };
    checkAudio();
  }, [audioSrc, title]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, [audioAvailable]);

  return (
    <article>
      <b className='releaseTitle'>
        {title} ({year})
      </b>
      <br />
      {songs?.map((s, i) => (
        <SongTitle
          key={s.title}
          songTitle={s.title}
          albumTitle={albumTitle}
          i={i}
        />
      ))}

      <p className='commentText'>{comments}</p>

      {checked && audioAvailable && (
        <>
          <p className='medleyText'>
            Listen to <i><b>{title}</b></i> medley:
          </p>
          <audio ref={audioRef} controls>
            <source src={audioSrc} type='audio/mp3' />
            Your browser does not support the audio element.
          </audio>
        </>
      )}

      <hr />
    </article>
  );
}
