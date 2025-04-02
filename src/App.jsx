import './App.css';
import Release from './components/Release';

export default function App() {
  return (
    <>
      <div className='releasesContainer'>
        <Release
          title='Ultra Vesaniam'
          year='2025'
          songs={[
            { songTitle: 'Intro', lyrics: null, tabs: null },
            {
              songTitle: 'Prodome',
              lyrics: 'ultra_vesaniam/prodome',
              tabs: ['/files/Tegara_-_Prodome_rhythm_guitar_tabs.pdf', '/files/Tegara_-_Prodome_trash_guitar_tabs.pdf'],
            },
          ]}
        />

        <Release
          title='Threnodist'
          year='2025'
          songs={[
            {
              songTitle: 'Threnodist',
              lyrics: 'threnodist/threnodist',
              tabs: ['/files/Tegara_-_Threnodist_rhythm_guitar_tabs.pdf', '/files/Tegara_-_Threnodist_lead_guitar_tabs.pdf'],
            },
            {
              songTitle: 'Avalanche',
              lyrics: 'threnodist/avalanche',
              tabs: ['/files/Tegara_-_Avalanche_rhythm_guitar_tabs.pdf', '/files/Tegara_-_Avalanche_solo_guitar_tabs.pdf'],
            },
            {
              songTitle: 'Enantiodromia',
              lyrics: 'threnodist/enantiodromia',
              tabs: null,
            },
            {
              songTitle: 'Maze Exterior',
              lyrics: 'threnodist/maze_exterior',
              tabs: null,
            },
            {
              songTitle: 'Black Sky Sunbath',
              lyrics: 'threnodist/black_sky_sunbath',
              tabs: ['/files/Tegara_-_Black_Sky_Sunbath_rhythm_guitar_tabs.pdf', '/files/Tegara_-_Black_Sky_Sunbath_solo_guitar_tabs.pdf'],
            },
            {
              songTitle: 'Supermirage',
              lyrics: 'threnodist/supermirage',
              tabs: ['/files/Tegara_-_Supermirage_rhythm_guitar_tabs.pdf'],
            },
            {
              songTitle: 'The Paramount Tenor',
              lyrics: 'threnodist/the_paramount_tenor',
              tabs: ['/files/Tegara_-_The_Paramount_Tenor_rhythm_guitar.pdf', '/files/Tegara_-_The_Paramount_Tenor_clean_and_trash_guitar.pdf'],
            },
            {
              songTitle: 'Triangular Hour',
              lyrics: 'threnodist/triangular_hour',
              tabs: ['/files/Tegara_-_Triangular_Hour_rhythm_guitar_tabs.pdf'],
            },
            {
              songTitle: 'Elysium',
              lyrics: null,
              tabs: null,
            }
          ]}
        />

        <Release
          title='Thousand Mile Stare'
          year='2023'
          songs={[
            {
              songTitle: 'Congested Tortuosa',
              lyrics: 'thousand_mile_stare/congested_tortuosa',
              tabs: null,
            },
            {
              songTitle: 'Macrocosm',
              lyrics: 'thousand_mile_stare/macrocosm',
              tabs: null,
            },
            {
              songTitle: 'Moribundity',
              lyrics: 'thousand_mile_stare/moribundity',
              tabs: null,
            },
            {
              songTitle: 'Coil To Strike',
              lyrics: 'thousand_mile_stare/coil_to_strike',
              tabs: null,
            },
          ]}
        />

        <Release
          title='Stochasticity'
          year='2021'
          songs={[
            {
              songTitle: 'Stochasticity',
              lyrics: 'stochasticity/stochasticity',
              tabs: ['/files/Tegara_-_Stochasticity_Part_I_rhythm_guitar.pdf'],
            },
            {
              songTitle: 'Triangular Mutineers',
              lyrics: 'stochasticity/triangular_mutineers',
              tabs: ['/files/Tegara_-_Stochasticity_Part_II_rhythm_guitar.pdf'],
            },
            {
              songTitle: 'Blackened',
              lyrics: 'stochasticity/blackened',
              tabs: ['/files/Tegara_-_Stochasticity_Part_III_rhythm_guitar.pdf'],
            },
            {
              songTitle: 'Stygian Corner',
              lyrics: 'stochasticity/stygian_corner',
              tabs: ['/files/Tegara_-_Stochasticity_Part_IV_rhythm_guitar.pdf'],
            },
            {
              songTitle: 'Dishonest Shapes',
              lyrics: 'stochasticity/dishonest_shapes',
              tabs: null,
            },
          ]}
        />
      </div>

      <div style={{ marginTop: '2em' }}>
        <a href='https://tegara.bandcamp.com' rel='noreferrer' target='_blank'>
          <img alt='Bandcamp logo' src='img/bc.png' />
        </a>
        <a
          href='https://www.youtube.com/channel/UCpsAMSv_ebDxEEjgkyy435g'
          rel='noreferrer'
          target='_blank'
        >
          <img alt='YouTube logo' src='img/yt.png' />
        </a>
        {/**<a href='https://paypal.me/vrescendo?locale.x=en_US' rel='noreferrer' target='_blank'>
      <img alt='PayPal donate button' src='img/donatebtn.png' />
    </a>*/}
      </div>
    </>
  );
}
