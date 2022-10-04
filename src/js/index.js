import ".././css/style.css";
import ".././assets/arrow.svg";
import ".././assets/keyboard.svg";
import ".././assets/repeatArrow.svg";
import ".././assets/github.svg";

import { moveToPlay, moveToConfig, moveToIndexFromPlay, moveToIndexFromConfig } from "./nav.js";

const main = document.getElementById('main');
const game = {
    word: '',
    mainStatus: 'index',
    words: ['GATO','PALETA','YOYO', 'PERRO', 'ALURA', 'PROGRAMACION', 'GIT', 'GITHUB', 'CSS', 'HTML', 'JAVASCRIPT', 'ORACLE', 'ANDROID', 'KOTLIN', 'JAVA', 'LINUX', 'UNIX', 'WEBPACK', 'MURCIELAGO', 'ELEFANTE', 'TOMATE', 'PIKACHU', 'PIRAÑA', 'ARAÑA', 'MANGO'],

    randomWord(){
        let random = Math.round(Math.random() * (this.words.length - 1));
        this.word = this.words[random];
    }
}

const navButton = target => {
    if(target === 'buttonPlay' && game.mainStatus === 'index'){
        moveToPlay();
        game.mainStatus = 'play';
    }else if(target === 'buttonConfig' && game.mainStatus === 'index'){
        moveToConfig();
        game.mainStatus = 'config';
    }
};
const navArrow = target => {
    if(target === 'backArrow' && game.mainStatus === 'play'){
        moveToIndexFromPlay();
        game.mainStatus = 'index';
    }else if(target === 'backArrow' && game.mainStatus === 'config'){
        moveToIndexFromConfig();
        game.mainStatus = 'index';
    }
};

main.addEventListener('click', e=>{
    let targetEvent = e.target.id;
    
    if ( /button*/.test(targetEvent) ) navButton(targetEvent);
    else if( / *Arrow/.test(targetEvent) ) navArrow(targetEvent);
});