function gen() {
    let result = Math.random();
    result = result * 6;
    result = Math.floor(result) + 1;
    return result;
}

let balance = 10000;

function play() {
    let bet = +userBet.value;
    let option = +userOption.value;
    if (bet > balance) {
        messagePlace.innerHTML = 'Need More Money!';
        return;
    }

    let dice1 = gen ();
    let dice2 = gen ();

    dice1Image.src = `./assets/images/${dice1}.png`;
    dice2Image.src = `./assets/images/${dice2}.png`;

    if(option == (dice1 + dice2)) {
        balance = balance + bet;
        messagePlace.innerHTML = `Вы выиграли ${bet} грн.`;
    }
    else {
        balance = balance - bet;
        messagePlace.innerHTML = `Вы проиграли ${bet} грн.`;
    }
    
    userBalance.innerHTML = balance;
}


    