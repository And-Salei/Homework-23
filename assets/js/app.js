
    let secret = Math.random();
    secret = secret * 100;
    secret = Math.floor(secret) + 1;
    return;


let counter = 1;
function play() {
        let variant = +userNumber.value;
    if (counter > 10) {placeNumber.innerHTML = `${secret}`;
        counter++;
        return;
    }
    else{   
    if(secret == variant) {
        win.innerHTML = `Вы выиграли!`;
        return;
    }
    else if (secret > variant){
        resultPlaceNumber.innerHTML = `${variant}. Загаданное число больше`;
    }
    else {
        resultPlaceNumber.innerHTML = `${variant}. Загаданное число меньше`; 
    }
}}
    



    