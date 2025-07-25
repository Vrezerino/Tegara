import '../App.css'
import Release from '../components/Release';
import { releases } from '../data/releases';

export default function Home() {
  return (
    <main className='page'>
      <section className='discographyContainer'>
        {releases.map((r) => (
          <Release key={r.title} title={r.title} year={r.year} songs={r.songs} comments={r.comments} />
        ))}
      </section>

      <section style={{ marginTop: '2em' }}>
        <a href='https://tegara.bandcamp.com' rel='noreferrer' target='_blank'>
          <img
            className='streamingServiceImg'
            alt='Bandcamp logo'
            src='img/bc_logo.png'
          />
        </a>
        <a
          href='https://www.youtube.com/channel/UCpsAMSv_ebDxEEjgkyy435g'
          rel='noreferrer'
          target='_blank'
        >
          <img
            className='streamingServiceImg'
            alt='YouTube logo'
            src='img/yt_logo.png'
          />
        </a>
        <a
          href='https://open.spotify.com/artist/7FDUzb8gHQ45DZX9ubj2pp?si=eOfBPNk9RGyjwjQP_UkCHw'
          rel='noreferrer'
          target='_blank'
        >
          <img
            className='streamingServiceImg'
            alt='Spotify logo'
            src='img/spotify_logo.png'
          />
        </a>
        {/**<a href='https://paypal.me/vrescendo?locale.x=en_US' rel='noreferrer' target='_blank'>
      <img alt='PayPal donate button' src='img/donatebtn.png' />
    </a>*/}
      </section>
    </main>
  );
}
