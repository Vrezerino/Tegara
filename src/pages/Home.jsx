import '../App.css';
import Release from '../components/Release';
import { releases } from '../data/releases';

export default function Home() {
  return (
    <main className='page'>
      <section className='discographyContainer'>
        {releases.map((r) => (
          <Release
            key={r.title}
            title={r.title}
            year={r.year}
            songs={r.songs}
            comments={r.comments}
          />
        ))}
      </section>
      
    </main>
  );
}
