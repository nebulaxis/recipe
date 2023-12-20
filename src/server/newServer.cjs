const express = require('express');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3007;

app.use(express.json());

// MongoDB Connection
async function connectToDatabase() {
  const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db(); // Return the database object
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

// Authentication Middleware
async function authenticateUser(email, password) {
  const db = await connectToDatabase();
  const usersCollection = db.collection('users');

  const user = await usersCollection.findOne({ email });

  if (user && await bcrypt.compare(password, user.password)) {
    return user;
  }

  return null;
}

// Routes

// SignIn
app.post('/api/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await authenticateUser(email, password);

    if (user) {
      res.status(200).json({ success: true, message: 'Authentication successful', user });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error during authentication:', error);
    res.status(500).json({ success: false, message: 'Error during authentication' });
  }
});

// SignUp
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const db = await connectToDatabase();
    const usersCollection = db.collection('users');

    const existingUser = await usersCollection.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await usersCollection.insertOne({
      name,
      email,
      password: hashedPassword,
    });

    console.log('User registered:', result.ops[0]);
    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during user registration:', error);
    res.status(500).json({ success: false, message: 'Error during user registration' });
  }
});

// OrderNow
app.post('/api/orders', async (req, res) => {
  const { foodItem, name, email, address } = req.body;

  try {
    const db = await connectToDatabase();
    const ordersCollection = db.collection('orders');

    const result = await ordersCollection.insertOne({
      foodItem,
      name,
      email,
      address,
      createdAt: new Date(),
    });

    console.log('Order placed:', result.ops[0]);
    res.status(201).json({ success: true, message: 'Order placed successfully' });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ success: false, message: 'Error placing order' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
