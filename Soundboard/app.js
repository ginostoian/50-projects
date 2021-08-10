const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const stopSongs = () => {
    sounds.forEach(sound => {
        document.getElementById(sound).pause();
        sound.currentTime = 0;
    })
}

sounds.forEach(sounds => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sounds

    btn.addEventListener('click', () => {
        stopSongs()
        document.getElementById(sounds).play()
    })

    document.querySelector('#buttons').appendChild(btn)
})