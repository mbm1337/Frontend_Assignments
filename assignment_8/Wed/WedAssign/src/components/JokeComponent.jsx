import React, { useState, useEffect } from 'react';

function JokeComponent() {
    // State to store the joke
    const [joke, setJoke] = useState('');

    // useEffect to fetch the joke
    useEffect(() => {
        getJoke();
    }, []); // Empty dependency array means this runs once on mount

    function getJoke() {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => setJoke(data.value))
            .catch(error => console.error('Error fetching joke:', error));
    }

    // Render the joke
    return (
        <div>
            <button onClick={getJoke}>Get a new joke</button>
            <p>{joke}</p>
        
        </div>
    );




}






export default JokeComponent;
