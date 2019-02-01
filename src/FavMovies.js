import React,{Component} from 'react';

import Movie from './Movie';

class FavMovies extends Component{
  render(){
    let movies = this.props.movies;
    debugger;
    
  	return (
      <div>
        {movies.map(movie=>(
         	<Movie movie={movie} />
        ))}
	  </div>
   )   	
  }
}

export default FavMovies;