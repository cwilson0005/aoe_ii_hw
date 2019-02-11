const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Jokes = function () {
  this.data = null;
};

Jokes.prototype.getData = function () {
  const url = "http://api.icndb.com/jokes/random";
  const request = new RequestHelper(url);
  request.get()
    .then((data) => {
      console.log(data.value.joke);
      this.data = data.value.joke;
      PubSub.publish('Jokes:data-loaded', this.data);
    })
    .catch((message) => {
      console.error(message);
    });
};

module.exports = Jokes;
