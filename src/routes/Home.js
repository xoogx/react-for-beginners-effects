import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMoives] = useState([]);
    const getMoives = async () => {
        const json = await (await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
        )).json();
        setMoives(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        getMoives();
    }, [])
    return (
        <div className={styles.container}>
        {loading? (<div className={styles.loader}><h1>Loading...</h1></div>) :
            <div className={styles.movies}>{movies.map(movie =>
            <Movie 
                key={movie.id}
                id={movie.id}
                coverImage={movie.medium_cover_image} 
                title={movie.title_english} 
                summary={movie.summary} 
                year={movie.year} 
                genres={movie.genres} 
            />
            )}</div>
        }
        </div>
    );
}

export default Home;