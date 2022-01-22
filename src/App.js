import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import { Navigation } from './components/Navigation/Navigation';
import SearchMovie from './components/SearchMovie/SearchMovie';
import MovieDetail from './components/MovieDetail/MovieDetail';
import Cast from './components/Cast/Cast';
import Rewiev from './components/Rewievs/Rewievs';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

function App() {
  return (
    <Routes>
      <Route path="goit-react-hw-05-movies/" element={<Navigation />}>
        <Route path="" element={<HomePage />} />
        <Route path="Movies" element={<SearchMovie />} />
        <Route path="Movies/:id" element={<MovieDetail />}>
          <Route path=":Rewiev" element={<Rewiev />} />
          <Route path="Cast" element={<Cast />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
