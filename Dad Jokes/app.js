const jokeEl = document.querySelector('#joke')
const jokeBtn = document.querySelector('#jokeBtn')

function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com/', config)
        .then(res => res.json())
        .then(data => {
            jokeEl.innerHTML = data.joke
        })
}

generateJoke()

jokeBtn.addEventListener('click', generateJoke)