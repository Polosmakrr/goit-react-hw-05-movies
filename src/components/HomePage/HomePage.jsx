import { useState,useEffect } from 'react';
import *as FetchApi from '../FetchApi/FetchApi';
import {Link} from 'react-router-dom';

export default function HomePage () {
    
    const [trendMovies, setTrendMovies] = useState(null);

   
    useEffect(() => {
        FetchApi.fetchTrend().then(setTrendMovies)
    }, [])

    // console.log('TrendMovie:', trendMovies);
    

    return <div>
        <h1>Trending Movie</h1>
        {trendMovies && trendMovies.results.map(movieName =>
            <li key={movieName.id}>
            <Link to={`Movies/${movieName.id}`}> {movieName.original_title}</Link>
            </li>)}
</div>
};
