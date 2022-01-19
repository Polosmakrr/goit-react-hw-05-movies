import { Link, Outlet} from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Movies from "../Movies/Movies";

export const Navigation = () => {
    return  <>
        
            <nav>
            <Link to="/HomePage" >HomePage</Link>
            <Link to="/Movies" >Movies</Link>
        </nav>
            <Outlet/>
    </>

}