import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Song from './components/Song';
import Header from './components/Header';
import Footer from './components/Footer';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/bio' element={<Bio />} />
      <Route path='/song/:album/:song' element={<Song />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
