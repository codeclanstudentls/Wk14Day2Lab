var React = require('react');

var ActorFilms = function(props){

  var options = props.films.map(function(film, index){
    return (
      <li value={index} key={index}>{film.show_title} </li>

      );
  });

  return (
    <ul> 
      {options}

    </ul>

    )
  };


module.exports = ActorFilms;