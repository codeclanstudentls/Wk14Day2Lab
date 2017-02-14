var React = require('react');

var FilmDetail = function(props) {

  if (!props.film){
    return <h4>No Film Selected</h4>
  }


  return (

    <div className="filmDetail">
        <h4>{props.film.show_title}</h4>

        <p>Year of Release: {props.film.release_year}</p>
        <p>Summary: {props.film.summary}</p>
        <p>Film Cast: {props.film.show_cast}</p>
        <img src={props.film.poster}></img>


    </div>


    )
};

module.exports = FilmDetail;