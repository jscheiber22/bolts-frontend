import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import NavBar from './components/NavBar';
import Projects from './pages/Projects';
import Settings from './pages/Settings';
import Footer from './components/Footer';
import Sections from './pages/Sections';

export default function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Projects />} />
            <Route path="settings" element={<Settings />} />
            <Route path="sections/:id" element={<Sections />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);