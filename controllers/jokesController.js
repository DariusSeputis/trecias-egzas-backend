import fetch from 'node-fetch';

export const getTenJokes = async (req, res) => {
  let jokes = [];
  for (let i = 0; i < 10; i++) {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    jokes.push(data.value);
  }
  return res.json(jokes);
};
export const getAmountJokes = async (req, res) => {
  let jokes = [];
  let z = req.params.amount;
  for (let i = 0; i < z; i++) {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    jokes.push(data.value);
  }
  return res.json(jokes);
};
export const getTenJokesFromCategory = async (req, res) => {
  let jokes = [];

  for (let i = 0; i < 10; i++) {
    const response = await fetch(
      `https://api.chucknorris.io/jokes/random?category=${req.params.category}`
    );
    const data = await response.json();
    jokes.push(data.value);
  }
  return res.json(jokes);
};
export const getAmountJokesFromCategory = async (req, res) => {
  let z = req.params.amount;

  let jokes = [];
  for (let i = 0; i < z; i++) {
    const response = await fetch(
      `https://api.chucknorris.io/jokes/random?category=${req.params.category}`
    );
    const data = await response.json();
    jokes.push(data.value);
  }
  return res.json(jokes);
};
