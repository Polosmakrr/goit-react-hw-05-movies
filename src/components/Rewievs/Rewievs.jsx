import { useState,useEffect } from 'react';
import *as FetchApi from '../FetchApi/FetchApi';
import { useParams,} from 'react-router-dom';

export default function Rewiev() {
    const { id } = useParams();
    // console.log('useParamRewiev:',id);
    
    const [rewiev, setRewiev] = useState(null);

   
    useEffect(() => {
        FetchApi.fetchRewiev(id).then(setRewiev)
    }, [])

    // console.log('Rewiev:', rewiev);
    

    return <>
        {rewiev && (
            (rewiev.results.length !=0) ? 
        (<ul>
          {rewiev.results.map((actor) => (
            <li key={actor.id}>
              <h2>author:</h2>
              <p>{actor.author}</p>
              <h2>content:</h2>
              <p>{actor.content}</p>
            </li>
          ))}
                </ul>)
                : (<h2>Don't have any rewiev
                </h2>)
      )}
</>
};