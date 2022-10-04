const mainWindows = document.getElementById('mainWindows');
const nav = document.getElementById('nav');
const backArrow = document.getElementById('backArrow');
const keyboard = document.getElementById('keyboard');
const repeatArrow = document.getElementById('repeatArrow');

const moveToPlay = () => {
    mainWindows.classList.add('mainStatus__play');
    nav.classList.remove('nav__active--config');
    nav.classList.add('nav__active');
    keyboard.classList.remove('keyboard--none');
    backArrow.classList.add('arrow__style--play');
    repeatArrow.classList.remove('repeat__arroy--none');
};
const moveToConfig = () => {
    mainWindows.classList.add('mainStatus__config');
    nav.classList.add('nav__active', 'nav__active--config');
    backArrow.classList.remove('arrow__style--play');
    keyboard.classList.add('keyboard--none');
    repeatArrow.classList.add('repeat__arroy--none');
};
const moveToIndexFromPlay = () => {
    nav.classList.remove('nav__active');
    mainWindows.classList.remove('mainStatus__play');
};
const moveToIndexFromConfig = () => {
    nav.classList.remove('nav__active');
    mainWindows.classList.remove('mainStatus__config');
};

export { moveToPlay, moveToConfig, moveToIndexFromPlay, moveToIndexFromConfig }