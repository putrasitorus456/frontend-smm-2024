import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DocumentPage from './pages/DocumentPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import GovPage from './pages/GovPage';
import AboutPage from './pages/AboutPage';
import Tourism from './pages/wisata/Tourism';
import Toga from './pages/fasum/toga/toga';
import TogaDetail from './pages/fasum/toga/tanaman/detail';
import First from  './pages/wisata/detail/1';
import FasumPage from './pages/fasum/FasumPage';
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
          <Route path="/wisata/detail/1" element={<First />} />
          <Route path="/fasilitas-umum" element={<FasumPage />} />
          <Route path="/berita" element={<NewsPage />} exact />
          <Route path="/berita/:_id" element={<NewsDetailPage />} />
          <Route path="/peta" element={<MapPage />} />
          <Route path="/kkn" element={<KKNPage />} />
          <Route path="/fasilitas-umum/toga" element={<Toga />} />
          <Route path="/fasilitas-umum/toga/tanaman/:_id" element={<TogaDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;