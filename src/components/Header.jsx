import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to='/'>
        <img src='/img/TEGARA.png' alt='Tegara logo' height='30' width='238' />
      </Link>
      <br />
      <nav>
        <Link to='/'>Discography</Link> ❉ <Link to='/bio'>Biography</Link>
      </nav>
    </header>
  );
}
