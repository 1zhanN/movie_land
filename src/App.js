import React from "react";
import { useEffect } from "react";


// API key = c35a5ed8

const API_URL = 'http://www.omdbapi.com?apikey=c35a5ed8'

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data);
    }
    useEffect(()=>{
        searchMovies('Spiderman')

    }, []);

    return(
        //react fragment
        <>
        <h1>Hello, React</h1>
        </>
    );
};

export default App;
