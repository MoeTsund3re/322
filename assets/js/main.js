//1 задача

let price = Number(prompt("введите стоимость товара"));
let money = Number(prompt("введите количество денег"));

if (price === money) {
    console.log("покупка успешно совершена");
} else if (price > money) {
    let n =price - money;
    console.log("вам не хватает " + n + " рублей");
} else { 
    let s = money -price;
    console.log("ваша сдача " + s + " рублей");
}

//2 задача
let n = Number(prompt("введите число"));

if (n > 0) {
    alert(1);
} else if (n < 0) {
    alert(-1);
} else {
    alert(0);
}

//3 задача
let a = Number(prompt("введите a"));
let b = Number(prompt("введите b"));
let result = (a + b < 4) ? 'мало' : 'много';
console.log(result);
