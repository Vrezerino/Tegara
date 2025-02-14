import './App.css';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <>
    {/**<div className='bioContainer'>
      hehe
    </div>*/}
    <div className='songsContainer'>
      <b className='releaseTitle'>Ultra Vesaniam (2025)</b>
      <br />∟ 2. Prodome <Link to='/lyrics/ultra_vesaniam/prodome'><span>lyrics</span></Link>
      <a href='/files/Tegara_-_Prodome_tabs.zip'><span>tabs</span></a>
      <br />
      <hr />

      <b className='releaseTitle'>Threnodist (2025)</b>
      <br />∟ 1. Threnodist <Link to='/lyrics/threnodist/threnodist'><span>lyrics</span></Link>
      <a href='/files/Tegara_-_Threnodist_tabs.zip'><span>tabs</span></a>
      <a href='/files/Tegara_-_Threnodist_stems.zip'><span>stems</span></a>
      <br />∟ 2. Avalanche
      <a href='/files/Tegara_-_Avalanche_tabs.zip'><span>tabs</span></a>
      <a href='/files/Tegara_-_Avalanche_stems.zip'><span>stems</span></a>
      <br />∟ ?. Black Sky Sunbath <Link to='/lyrics/threnodist/black_sky_sunbath'><span>lyrics</span></Link>
      <a href='/files/Tegara_-_Black_Sky_Sunbath_tabs.zip'><span>tabs</span></a>
      <a href='/files/Tegara_-_Black_Sky_Sunbath_instr_stems.zip'><span>stems</span></a>
      <br />∟ ?. The Paramount Tenor <Link to='/lyrics/threnodist/the_paramount_tenor'><span>lyrics</span></Link>
      <a href='/files/Tegara_-_The_Paramount_Tenor_tabs.zip'><span>tabs</span></a>
      <a href='/files/Tegara_-_The_Paramount_Tenor_stems.zip'><span>stems</span></a>
      <br />
      <hr />

      <b className='releaseTitle'>Thousand Mile Stare (2023)</b>
      <br />∟ 1. Congested Tortuosa <Link to='/lyrics/thousand_mile_stare/congested_tortuosa'><span>lyrics</span></Link>
      <br />∟ 2. Macrocosm <Link to='/lyrics/thousand_mile_stare/macrocosm'><span>lyrics</span></Link>
      <br />∟ 3. Moribundity <Link to='/lyrics/thousand_mile_stare/moribundity'><span>lyrics</span></Link>
      <br />∟ 4. Coil To Strike <Link to='/lyrics/thousand_mile_stare/coil_to_strike'><span>lyrics</span></Link>
      <br />
      <hr />

      <b className='releaseTitle'>Stochasticity (2021)</b>
      <br />∟ 1. Stochasticity <Link to='/lyrics/stochasticity/stochasticity'><span>lyrics</span></Link>
      <a href='/files/Tegara_-_Stochasticity_Part_I_rhythm_guitar.pdf'><span>tabs</span></a>
      <br />∟ 2. Triangular Mutineers <Link to='/lyrics/stochasticity/triangular_mutineers'><span>lyrics</span></Link>
      <a href='/files/Tegara_-_Stochasticity_Part_II_rhythm_guitar.pdf'><span>tabs</span></a>
      <br />∟ 3. Blackened <Link to='/lyrics/stochasticity/blackened'><span>lyrics</span></Link>
      <a href='/files/Tegara_-_Stochasticity_Part_III_rhythm_guitar.pdf'><span>tabs</span></a>
      <br />∟ 4. Stygian Corner <Link to='/lyrics/stochasticity/stygian_corner'><span>lyrics</span></Link>
      <a href='/files/Tegara_-_Stochasticity_Part_IV_rhythm_guitar.pdf'><span>tabs</span></a>
      <br />∟ 5. Dishonest Shapes <Link to='/lyrics/stochasticity/dishonest_shapes'><span>lyrics</span></Link>
      <br />
    </div>

    <div style={{ marginTop: '2em' }}>
    <a href='https://tegara.bandcamp.com' rel='noreferrer' target='_blank'>
      <img alt='Bandcamp logo' src='img/bc.png' />
    </a>
    <a href='https://www.youtube.com/channel/UCpsAMSv_ebDxEEjgkyy435g' rel='noreferrer' target='_blank'>
      <img alt='YouTube logo' src='img/yt.png' />
    </a>
    {/**<a href='https://paypal.me/vrescendo?locale.x=en_US' rel='noreferrer' target='_blank'>
      <img alt='PayPal donate button' src='img/donatebtn.png' />
    </a>*/}
    </div>
    </>
  );
}
