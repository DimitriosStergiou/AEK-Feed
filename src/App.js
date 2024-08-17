import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import News from './pages/News';
import Team from './pages/Team';

const App = () => {
  const news = [
    // Sample news data
  ];

  const team = [
    // Sample team data
  ];

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home news={news} />} />
        <Route path="/news" element={<News news={news} />} />
        <Route path="/team" element={<Team team={team} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
