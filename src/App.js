// App.js

import { Routes, Route, NavLink, Link, Outlet } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import { Navigation } from './components/Navigation/Navigation';
import { Movies } from './components/Movies/Movies';
import MovieDetail from './components/MovieDetail/MovieDetail';
import Cast from './components/Cast/Cast';
import Rewiev from './components/Rewievs/Rewievs';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="" element={<HomePage />} />
        <Route path="Movies" element={<Movies />} />
        <Route path="Movies/:id" element={<MovieDetail />}>
          <Route path=":Rewiev" element={<Rewiev />} />
          <Route path="Cast" element={<Cast />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
