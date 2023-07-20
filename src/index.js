import React from 'react';
import { createRoot } from 'react-dom/client';
import HeadTitle from './components/HeadTitle';
import Slider from './components/Slider';
import NavigationBar from './components/NavigationBar';
import ContactPage from './components/ContactPage';
import './styles/styles.css';
import Biography from './components/Biography';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <React.StrictMode>
      <Router>
        <div className="body-page">
          <HeadTitle />
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Slider />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </Router>
    </React.StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<App />);
