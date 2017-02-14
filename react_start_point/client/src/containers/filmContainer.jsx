var React = require('react');

var FilmSelector = require('../components/filmSelector');
var FilmDetail = require('../components/filmDetail');
var ActorFilms = require('../components/actorFilms');

var FilmContainer = React.createClass({
  getInitialState: function() {
    return {
      films: [],
      selectedFilm: null,
      actorFilms: []
    };
  },

  componentDidMount: function(){
    var url = "http://netflixroulette.net/api/api.php?director=Ridley%20Scott";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      if (request.status === 200){
        var data = JSON.parse(request.responseText);
        this.setState({ films: data, selectedFilm: data[0] });
      }
    }.bind(this);
    request.send(null);

  },

  setSelectedFilm: function(film){
    this.setState({selectedFilm: film});
  },

 
    getActors: function(film){
      var cast = this.state.selectedFilm.show_cast;
      var actorsArray = cast.split(",");
      var actorName = actorsArray[0];
      var actorURL = "http://netflixroulette.net/api/api.php?actor=" + actorName;
        var request = new XMLHttpRequest();
        request.open('GET', actorURL);
        request.onload = function() {
          if (request.status === 200){
            var data = JSON.parse(request.responseText);
            this.setState({ actorFilms : data });
          }
        }.bind(this);
        request.send(null);
      },

      // handleClick: function(event){
      //     this.getActors();
      //     return (
      //       <div>
      //     <ActorFilms films={this.state.actorFilms}/>
      //     </div>
      //     )
      // },
    

render: function() {
  return (
    <div className="filmContainer">
      <h1>Welcome to Netflop</h1>
      <h2>Only information about some films directed by Sir Ridley Scott</h2>
      <FilmSelector films={this.state.films} selectFilm={this.setSelectedFilm} />
      <FilmDetail film={this.state.selectedFilm}/>
      <button onClick={this.getActors}>Click to get Lead Actor's Films</button>
      <ActorFilms films={this.state.actorFilms} />
    </div>

    );
}

});


module.exports = FilmContainer;