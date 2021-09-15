import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import {
  getTenJokes,
  getAmountJokes,
  getTenJokesFromCategory,
  getAmountJokesFromCategory,
} from './controllers/jokesController.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT;

// Middlewares
app.use(cors());
app.use(express.json());

// fetch

// Staring server
app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));

// Routes
// GET
app.get('/api/jokes/', getTenJokes);
app.get('/api/jokes/:amount', getAmountJokes);
app.get('/api/joke/:category', getTenJokesFromCategory);
app.get('/api/jokes/:category/:amount', getAmountJokesFromCategory);
