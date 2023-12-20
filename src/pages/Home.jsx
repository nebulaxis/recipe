// Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import Footer from '../components/Footer'; 

const Home = () => {
  const foodItems = [
    {
      name: 'Delicious Pizza',
      imageUrl: 'images/pizza.jpg',
    },
    {
      name: 'Burger Bliss',
      imageUrl: 'images/burger.jpg',
    },
    {
      name: 'Sweet Treats',
      imageUrl: 'images/sweet.jpg',
    },
    {
      name: 'Sushi Delight',
      imageUrl: 'images/sushi.jpg',
    },
    {
      name: 'Refreshing Drinks',
      imageUrl: 'images/refreshing.jpg',
    },
    {
      name: 'Dosa',
      imageUrl: 'images/dosa.jpg',
    },
    {
      name: 'Rasgulla',
      imageUrl: 'images/rasgulla.jpg',
    },
    {
      name: 'Jalebi',
      imageUrl: 'images/jalebi.jpg',
    },
    {
      name: 'Punjabi',
      imageUrl: 'images/punjabi.jpg',
    },
    {
      name: 'Gulabjamun',
      imageUrl: 'images/gulabjamun.jpg',
    },
    {
      name: 'patasi',
      imageUrl: 'images/patasi.jpg',
    },
    {
      name: 'family',
      imageUrl: 'images/family.jpg',
    },

    // Add more food items as needed
  ];

  return (
    <div className="home-container">
      <h2>Order Delicious Food</h2>
      <div className="food-images">
        {foodItems.map((item, index) => (
          <div key={index} className="food-item">
            <Link to={`/order-now/${index}`}>
              <img src={item.imageUrl} alt={item.name} />
            </Link>
            <div className="food-details">
              <p className="food-name">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Include the Footer component at the bottom of the Home page */}
      <Footer />
    </div>
  );
};

export default Home;
