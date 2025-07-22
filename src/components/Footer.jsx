import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <Link to='/'>Releases</Link> ❉ <Link to='/bio'>Biography</Link>
        </footer>
    );
}