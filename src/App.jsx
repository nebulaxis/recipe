

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import OrderNow from './pages/OrderNow';
import DinnerPage from './pages/DinnerPage';
import DessertPage from './pages/DessertPage';
import DrinksCocktailsPage from './pages/DrinksCocktailsPage';
import NotFound from './components/NotFound';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/order-now/:index" element={<OrderNow />} />
            <Route path="/" element={<Home />} />
            <Route path="/dinner" element={<DinnerPage />} />
            <Route path="/dessert" element={<DessertPage />} />
            <Route path="/drinks-cocktails" element={<DrinksCocktailsPage />} />
            {/* Catch-all route for 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
