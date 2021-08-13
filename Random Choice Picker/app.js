const tagsDiv = document.querySelector('#tags');
const textarea = document.querySelector('#textarea');

textarea.focus();

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());

    tagsDiv.innerHTML = '';

    tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.classList.add('tag');
        tagElement.innerText = tag;
        tagsDiv.appendChild(tagElement);
    });
};

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
};

function highlightTag(tag) {
    tag.classList.add('highlight');
};

function unHighlightTag(tag) {
    tag.classList.remove('highlight');
};

function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag);

        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag();

            randomTag.classList.add('highlight');
        }, 100);
    }, times * 100);
};

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    if (e.key === "Enter") {
        setTimeout(() => {
            e.target.value = '';
        }, 10);

        randomSelect();
    };
});