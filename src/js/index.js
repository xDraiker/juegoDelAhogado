import ".././css/style.css";
import ".././assets/arrow.svg";
import ".././assets/keyboard.svg";
import ".././assets/repeatArrow.svg";
import ".././assets/github.svg";

import { moveToPlay, moveToConfig, moveToIndexFromPlay, moveToIndexFromConfig } from "./nav.js";
import { randomWord } from "./wordGestor.js";
import { addMessage, addText, addWord } from "./addWord.js";

const main = document.getElementById('main');
const game = {
    word: '',
    mainStatus: 'index',
    words: ['GATO','PALETA','YOYO', 'PERRO', 'ALURA', 'PROGRAMACION', 'GIT', 'GITHUB', 'CSS', 'HTML', 'JAVASCRIPT', 'ORACLE', 'ANDROID', 'KOTLIN', 'JAVA', 'LINUX', 'UNIX', 'WEBPACK', 'MURCIELAGO', 'ELEFANTE', 'TOMATE', 'PIKACHU', 'PIRAÑA', 'ARAÑA', 'MANGO']
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
    else if ((targetEvent === 'add') && addText.value){
        let word = addText.value.toUpperCase();
        if(addWord(word, game.words)) game.words.push(word);   
    } 
});