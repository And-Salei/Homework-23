function gen() {
    let secret = Math.random();
    secret = secret * 100;
    secret = Math.floor(secret) + 1;
    return secret;
}

let counter = 1;
function play() {
    let variant = +userNumber.value;
    if (counter > 10) {placeNumber.innerHTML = `${counter}`;
    counter++;
    return counter;
    }

   
   if(secret == variant) {
        win.innerHTML = `Вы выиграли!`;
        return variant;
    }
    else if (secret > variant){
        resultPlaceNumber.innerHTML = `${variant} больше`;
    }
    else {
        resultPlaceNumber.innerHTML = `${variant} меньше`; 
    }
}
    



    