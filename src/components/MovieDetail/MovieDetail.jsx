import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';

import * as FetchApi from '../FetchApi/FetchApi';

export default function HomePage() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    FetchApi.fetchMovieDetail(id).then(setMovie);
  }, []);

  return (
    <>
      {movie && (
        <>
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
