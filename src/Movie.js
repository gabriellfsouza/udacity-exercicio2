import React,{Component} from 'react';

class Movie extends Component{
  render(){
  	let movie = this.props.movie;
    
    return (
    	<div>
        	<h2>{movie.movie}</h2>
              {(movie.users.length>0)?(
                  <div>
                    <p>Liked By:</p>
                    <ul>
                        {movie.users.map(user=>(<li>{user}</li>))}
                    </ul>
      			  </div>
              ):(
    			<p>None of the current users liked this movie</p>
   			  )}
    		</div>
    );
  }
}

export default Movie;