import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/order-now.css';

const OrderNow = () => {
  const { index } = useParams();

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
  const selectedFoodItem = foodItems[parseInt(index, 10)];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const handleOrderNow = async () => {
    // Add your order submission logic here, for example, making an API call
    try {
      // Assuming an imaginary submitOrder API function that returns a response
      const response = await submitOrder({
        foodItem: selectedFoodItem.name,
        name,
        email,
        address,
      });

      // Check the response for successful order submission or failure
      if (response.success) {
        // Redirect to the order confirmation page or perform any other desired action
        console.log('Order placed successfully');
      } else {
        setError('Error submitting the order. Please try again.');
      }
    } catch (error) {
      console.error('Error during order submission:', error.message);
      setError('An error occurred during order submission. Please try again.');
    }
  };

  if (!selectedFoodItem) {
    return (
      <div>
        <p>Invalid food item selected. Please go back to the home page.</p>
        <Link to="/">Go Back</Link>
      </div>
    );
  }

  return (
    <div className="order-now-container">
      <h2>Order Now</h2>
      <div className="selected-item-container">
        <p>Selected Item: {selectedFoodItem.name}</p>
        {selectedFoodItem.imageUrl && (
          <img
            src={selectedFoodItem.imageUrl}
            alt={selectedFoodItem.name}
            className="selected-item-image"
            onError={() => console.error('Error loading image')}
          />
        )}
      </div>

      <form className="order-form" onSubmit={handleOrderNow}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-label="Name"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email"
          required
        />

        <label htmlFor="address">Delivery Address:</label>
        <textarea
          id="address"
          name="address"
          rows="4"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          aria-label="Delivery Address"
          required
        ></textarea>

        {error && <p className="error-message">{error}</p>}

        <button type="submit">Order Now</button>
      </form>

      <Link to="/">Go Back</Link>
    </div>
  );
};

export default OrderNow;
