const Jokes = require('./models/jokes.js');
const JokeListView = require('./views/jokes_list_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const jokeContainer = document.querySelector('.info-display');
  const jokeListView = new JokeListView(jokeContainer);
  jokeListView.bindEvents();

  const jokes = new Jokes();
  jokes.getData();
});
