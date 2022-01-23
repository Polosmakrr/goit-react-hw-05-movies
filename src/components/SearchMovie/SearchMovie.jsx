import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as FetchApi from '../FetchApi/FetchApi';
import Button from '../Button/Button';
import { ThreeDots } from 'react-loader-spinner';

export default function MoviesPage() {
  const [queryName, setQueryName] = useState('');
  const [searchName, setSearchName] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    if (!searchName) {
      return;
    }

    setLoading(true);

    FetchApi.fetchSearch(searchName, page)
      .then(newArray => {
        if (newArray.total_results === 0) {
          alert(`Ничего не найдено`);
        }
        if (newArray) {
          console.log('array', newArray);
          setMoviesList([...moviesList, ...newArray.results]);
          const searchParams = new URLSearchParams(location.search).set('search', queryName);

          console.log('search:', searchParams);
          console.log(location);
        }
        if (page > 1) {
          window.scrollTo({ top: document.body.clientHeight, behavior: 'smooth' });
        }
      })
      .finally(() => setLoading(false));
  }, [searchName, page]);

  const handleChange = e => {
    setQueryName(e.target.value);
  };
  const onSubmit = e => {
    setSearchName(e);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (queryName.trim() === '') {
      alert(`Введите запрос`);
    } else {
      onSubmit(queryName);
      setMoviesList([]);
      setQueryName('');
      setPage(1);
    }
  };
  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={queryName}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search your Movies"
          name="name"
        />
        <button type="submit">search</button>
      </form>

      {loading && <ThreeDots color="gray" height={80} width={80} />}

      {moviesList &&
        moviesList.map(movieName => (
          <li key={movieName.id}>
            <Link to={`${movieName.id}`}> {movieName.original_title}</Link>
          </li>
        ))}

      {moviesList.length != 0 && <Button onClick={loadMore} />}
    </>
  );
}
