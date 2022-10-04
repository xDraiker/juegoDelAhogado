import { wordLength, validationWord, wordNoRepeat } from "./wordGestor.js";

const addMessage = document.getElementById('addMessage');
const addText = document.getElementById('addText');
addMessage.textContent='La palabra no debe de contener caracteres especiales ni tener más de 20 caracteres';

const addWord = (word, words) => {
    if(wordLength(word)){
        addMessage.textContent='¡¡¡UPS!!! Número de caracteres excedido';
        return false;
    }
    if(validationWord(word)){
        addMessage.textContent='¡¡¡UPS!!! Carácter especial detectado';
        return false;
    }
    if(wordNoRepeat(word, words)){
        addMessage.textContent='¡¡¡UPS!!! Palabra existente';
        return false;
    }
    addMessage.textContent='¡¡¡EXCELENTE!!! Palabra añadida correctamente';
    addText.value='';
    return true;
};

export { addMessage, addText, addWord }
