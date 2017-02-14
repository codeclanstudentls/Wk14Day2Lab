var React = require('react');
var ReactDOM = require('react-dom');

var FilmContainer = require('./containers/filmContainer');

window.onload = function () {
  ReactDOM.render(
    <FilmContainer />,
    document.getElementById('app')
  );
}
