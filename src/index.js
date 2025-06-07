import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App';
import Song from './components/Song';
import Footer from './components/Footer';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/song/:album/:song' element={<Song />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);