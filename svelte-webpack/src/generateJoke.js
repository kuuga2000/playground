import axios from 'axios';
function generateJoke()
{
    var x = 'sx';
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    const data = axios.get('https://icanhazdadjoke.com', config);
    const dataPromise = data.then((response) => {
        x = response.data.joke;
    });

    // return it
    
    return x
}

export default generateJoke