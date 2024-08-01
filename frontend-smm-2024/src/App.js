import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DocumentPage from './pages/DocumentPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import GovPage from './pages/GovPage';
import AboutPage from './pages/AboutPage';
import Tourism from './pages/Tourism';
import FasumPage from './pages/FasumPage';
import MapPage from './pages/MapPage';
import KKNPage from './pages/KKNPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/home" element={<HomePage />} exact />
          <Route path="/tentang-desa" element={<AboutPage />} />
          <Route path="/documents" element={<DocumentPage />} />
          <Route path="/struktur-pemerintahan" element={<GovPage />} />
          <Route path="/wisata" element={<Tourism />} />
          <Route path="/fasilitas-umum" element={<FasumPage />} />
          <Route path="/berita" element={<NewsPage />} exact />
          <Route path="/berita/:_id" element={<NewsDetailPage />} />
          <Route path="/peta" element={<MapPage />} />
          <Route path="/kkn" element={<KKNPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;