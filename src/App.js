// App.js

import { Routes, Route, NavLink, Link, Outlet } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { Navigation } from './components/Navigation/Navigation';
import { Movies } from './components/Movies/Movies';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Movies" element={<Movies />} />
      </Route>
    </Routes>
  );
}

export default App;
