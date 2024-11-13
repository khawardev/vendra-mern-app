import { useState } from "react";

const Api = () => {
    const [Result, setResult] = useState()
    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "d5033c1c00a06d0b58b699b37622044d");
    myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");
    console.log(Result);
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://v3.football.api-sports.io/leagues", requestOptions)
        .then(response => response.text())
        .then(result => setResult(result))
        .catch(error => console.log('error', error));
    return (
        <div>
            
            {Result}

        </div>
    )
}

export default Api