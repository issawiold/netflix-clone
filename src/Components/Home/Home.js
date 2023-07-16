import "./Home.css"
import { Routes, Route } from "react-router-dom";
import MovieList from "../MovieList/MovieList";
import Movie from "../Movie/Movie";
import { useEffect, useState } from "react";
function Home() {
    const [data, setData] = useState([])
    async function getData() {
        let url = process.env.REACT_APP_BACKEND_URL
        const response = await fetch(`${url}/trending`);
        const movies = await response.json();
        //e.id, e.title, e.release_date, e.poster_path, e.overview
        setData(movies)
    }
    useEffect(() => { getData() }, [])
    const [id, setId] = useState("123")
    const getValue = (value) => {
        return setId(value)
    }
    let obj = data.filter(e => e.id === id)
    return (
        <section>
            <nav className="nav1">
                <h1>NetBlex</h1>
                <h3>for copyrights reasons</h3>
            </nav>
            <main>
                <Routes>
                    <Route>
                        <Route path="/" element={data.map(e => <  MovieList id={e.id} title={e.title} date={e.release_date} img={e.poster_path} callback={getValue} />)} />
                        <Route path="/movie/:id" element={< Movie id={obj[0].id} title={obj[0].title} date={obj[0].release_date} img={obj[0].poster_path} overview={obj[0].overview} />} />
                    </Route>
                </Routes>
            </main>
            <nav className="nav2">
                <h3>Join us now</h3>
                <h3>Exclusive movies and tv shows</h3>
            </nav>
        </section>
    );
}
export default Home