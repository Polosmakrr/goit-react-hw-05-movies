import { useState,useEffect } from 'react';
import *as FetchApi from '../FetchApi/FetchApi';
import { useParams,} from 'react-router-dom';

export default function Cast() {
    const { id } = useParams();
    // console.log('useParamCast:',id);
    
    const [cast, setCast] = useState(null);

   
    useEffect(() => {
        FetchApi.fetchCast(id).then(setCast)
    }, [])

    // console.log('Cast:', cast);
    

    return <>
        {cast && (
        <ul>
          {cast.cast.map((actor) => (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                    : `https://st4.depositphotos.com/14953852/22772/v/200/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg`
                }
                alt={actor.original_name}
              />
              <p>{actor.original_name}</p>
              <p>{actor.character}</p>
            </li>
          ))}
        </ul>
      )}
</>
};
