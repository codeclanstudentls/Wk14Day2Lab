var React = require('react');

var FilmSelector = React.createClass({

getInitialState: function() {
  return {selectedIndex: undefined};
},

handleChange: function(event) {
  var newIndex = event.target.value;
  this.setState({selectedIndex: newIndex});
  this.props.selectFilm(this.props.films[newIndex]);
},

render: function() {
  var options = this.props.films.map(function(film, index){
    return (
      <option value={index} key={index}>{film.show_title}</option>
      );

  });
  return (
    <select id="films" value={this.state.selectedIndex} onChange={this.handleChange}>
    {options}
    </select>
    )
}




});

module.exports = FilmSelector;