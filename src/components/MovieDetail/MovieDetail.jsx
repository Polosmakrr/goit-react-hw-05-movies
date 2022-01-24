import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
// import SearchMovie from '../SearchMovie/SearchMovie'

import * as FetchApi from '../FetchApi/FetchApi';

export default function HomePage() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);

  // console.log('location:', location);
  // console.log('navigate:', navigate);

  useEffect(() => {
    FetchApi.fetchMovieDetail(id).then(setMovie);
    console.log(location.pathname);
  }, []);

  const goBack = () => {
    navigate(-1);
    console.log('click Back');
    //   console.log('location:', location);
    // console.log('navigate:', navigate);
    // console.log(SearchMovie.arguments)
  };
  return (
    <>
      {movie && (
        <>
          <button type="button" onClick={goBack}>
            Go back
          </button>
          <div>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                  : `https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg`
              }
              alt={movie.original_title}
            />
          </div>
          <div>
            <h2>{movie.original_title}</h2>
            <p>{`Rating ${movie.vote_average}`}</p>
            <h3>Owerview:</h3>
            <p>{movie.overview}</p>
            <h4>Ganres:</h4>
            <div>
              {movie.genres.map(({ id, name }) => (
                <p key={id}>{name}</p>
              ))}
            </div>
          </div>
        </>
      )}
      <h2>Additional information</h2>
      <Link to={'Cast'}>Cast</Link>
      <br />
      <Link to={'Reviev'}>Rewiev</Link>

      <Outlet />
    </>
  );
}
