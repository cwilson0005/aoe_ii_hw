const PubSub = require('../helpers/pub_sub.js');
const JokeView = require('../views/joke_view.js');

const JokeListView = function (element) {
  this.element = element;
  this.data = null;
};

JokeListView.prototype.bindEvents = function () {
  PubSub.subscribe('Jokes:data-loaded', (event) => {
    console.log(event.detail);
    this.data = event.detail;
    this.render();
  });
};

JokeListView.prototype.render = function () {
  this.clearData();
  this.data.forEach((link) => {
    // const dogImage = document.createElement('img');
    // dogImage.src = link;
    // this.element.appendChild(dogImage);
    const jokeList = new JokeView(link).render();
    this.element.appendChild(jokeList);
  });
};

JokeListView.prototype.clearData = function () {
  this.element.innerHTML = "";
  // while (this.element.hasChildren){
  //   this.element.removeLastChild();
  // }
};

module.exports = JokeListView;
