const PubSub = require('../helpers/pub_sub.js');

const JokeView = function (url) {
  this.url = url;
};

JokeView.prototype.renderList = function () {
  const jokeList = document.createElement("ul");
  jokeList.classList.add("joke-list");
  jokeList.appendChild("");
  return jokeList;
};

JokeView.prototype.renderListItem = function (jokeList) {
  const jokeItem = document.createElement("li");
  jokeItem.classList.add("joke-item");
  jokeList.textContent = this.joke;
};

module.exports = JokeView;
