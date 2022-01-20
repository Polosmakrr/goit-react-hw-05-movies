
const API_KEY = '0556b87ba267edab76fd3e7e8d7e5097';
const BASE_URL = 'https://api.themoviedb.org/3';
const TREND_URL = 'https://api.themoviedb.org/3/trending/movie/week';
const ID_URL = 'https://api.themoviedb.org/3/movie/';


async function fetchMovie(url = '', config = {}) {
    const response = await fetch(url, config);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));
}

export function fetchTrend() {
    return fetchMovie(`${TREND_URL}?api_key=${API_KEY}&page=1`);
}

export function fetchMovieDetail(movieId) {
    return fetchMovie(`${ID_URL}${movieId}?api_key=${API_KEY}&language=en-US`)
}

export function fetchCast(movieId) {
    return fetchMovie(`${ID_URL}${movieId}/credits?api_key=${API_KEY}&language=en-US`)
}

export function fetchRewiev(movieId) {
    return fetchMovie(`${ID_URL}${movieId}/reviews?api_key=${API_KEY}&language=en-US`)
}