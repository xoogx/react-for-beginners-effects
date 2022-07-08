
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMoive] = useState([]);
    const {id} = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMoive(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    }, []);
    return (
     <div>
        <button>
            <Link to="/">Go to Home</Link>
        </button>
        {loading? <h1>Loading...</h1> :
            <div>
                <img src={movie.medium_cover_image} alt={movie.title} />
                <h2>{movie.title_english} ({movie.year}) (reating: {movie.rating})</h2>
                <p>{movie.description_intro}</p>
                <p>{movie.genres.map(genre =>
                    <li key={genre}>{genre}</li>
                    )}
                </p>
            </div>
        }
        </div>);
}

export default Detail;