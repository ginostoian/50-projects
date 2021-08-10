const jokeEl = document.querySelector('#joke')
const jokeBtn = document.querySelector('#jokeBtn')


// implementation using async/await

async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    const res = await fetch('https://icanhazdadjoke.com/', config);

    const data = await res.json();

    jokeEl.innerHTML = data.joke;
}

// implementation using .then()

// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com/', config)
//         .then(res => res.json())
//         .then(data => {
//             jokeEl.innerHTML = data.joke
//         })
// }

generateJoke();

jokeBtn.addEventListener('click', generateJoke);