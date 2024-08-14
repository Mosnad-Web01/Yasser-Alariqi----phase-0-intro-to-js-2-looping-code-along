function writeCards(names, gift) {
    let myGreetingArray = [];
    
    for (let i = 0; i < names.length; i++) {
        myGreetingArray.push(`Thank you, ${names[i]}, for the wonderful ${gift} gift!`);
    }
    return myGreetingArray;
}

function countDown(number){
    while(number >= 0){
        console.log(number);
        number--
    }
}

countDown(10)