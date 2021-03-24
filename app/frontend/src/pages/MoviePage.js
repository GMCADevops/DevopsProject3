import React, { useState, useEffect, useContext } from 'react';
import {useHistory} from 'react-router-dom'
import { Movies } from '../components/Movies';
import { MovieForm } from '../components/MovieForm';
import { Container, Segment,} from 'semantic-ui-react';
import { UserContext } from '../components/userContext';
import Cookies from 'js-cookie';

const MoviePage = () => {
    const[movies, setMovies] = useState([]);
    const history = useHistory();
    const {setUser} = useContext(UserContext);
    if (Cookies.get("login") == null) {
      setUser(null)
    } else {
      setUser("true")
    }
    useEffect(() => {
      const fetchData = async () => {

        const response = await fetch("/backend/movies/" + Cookies.get("id") + "/" ,{
          method: 'GET',
          headers : {
              "Authorization": Cookies.get("login")
          }
      })
          if (!response.ok) {
              history.push("/login");
              console.error("something went wrong")
          } else {
              let data = await response.json();
              console.log(data)
              setMovies(data)
          }
        }
        fetchData();
        },[] );
  return (
    <div>
      <Segment>
        <Container>
          <MovieForm onNewMovie={movie => setMovies(currentMovies => [movie, ...currentMovies])}></MovieForm>
          <Movies movies={movies}/>
        </Container>
      </Segment>
    </div>

  );
}
export default MoviePage;


