import { NavLink, Outlet } from 'react-router-dom';
import '../../index.css';

export const Navigation = () => {
  return (
    <>
      <nav>
        <NavLink to="">HomePage</NavLink>
        <NavLink to="Movies">Movies</NavLink>
      </nav>
      <Outlet />
    </>
  );
};
