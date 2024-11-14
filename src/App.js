import './static/css/bootstrap.css';
import './static/css/style.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Query } from "./pages/Query";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/query" element={<Query />} />
        </Routes>
    </Router>
  );
}

export default App;
