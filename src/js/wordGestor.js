const wordLength = word => {
    if(word.length > 20) return true;
    return false; 
}
const validationWord = word => {
    const regex = /[^\wñ]/gi;
    return regex.test(word);
};
const wordNoRepeat = (word, words) => {
    for(let i =0; i < words.length; i++){
        if(word === words[i]) return true;
    }
    return false;
};
const randomWord = words => {
    const random = Math.round(Math.random() * (words.length - 1));
    return words[random];
};

export{ wordLength, validationWord, wordNoRepeat, randomWord }