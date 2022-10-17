const card = document.querySelector('.card');
const cardBack = document.querySelector('.card-back');

const rates = document.querySelectorAll('.rate');
const button = document.querySelector('.button');
const interactive = document.querySelector('.interactive');

button.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
})

cardBack.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
})

rates.forEach(rate => {
    rate.addEventListener('click', () => {
        let x = rate.innerHTML;
        interactive.innerHTML = x
    })
})