import { NavLink, Outlet,} from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Movies from "../Movies/Movies";

export const Navigation = () => {
    
    return  <>
            <nav>
            <NavLink to="/" >HomePage</NavLink>
            <NavLink to="/Movies" >Movies</NavLink>
        </nav>
            <Outlet/>
    </>

}