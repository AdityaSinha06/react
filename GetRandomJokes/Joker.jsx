import { useState , useEffect } from "react";

export default function Joker() {
    const URL = "https://official-joke-api.appspot.com/random_joke";

    let [joke , setJoke] = useState({});
    
    const getJoke = async () => {
        let res = await fetch(URL);
        let jsonRes = await res.json();
        // console.log(jsonRes);
        setJoke(jsonRes);
    }

    useEffect(() => {
        async function getFirstJoke() {
            let res = await fetch(URL);
            let jsonRes = await res.json();
            setJoke(jsonRes);
        }

        getFirstJoke();
    }, [])

    return (
        <div>
            <h3>Joker!</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getJoke}>Get New Joke</button>
        </div>
    );
}
