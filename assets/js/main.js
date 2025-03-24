//1 задача

let tovar = Number(prompt("Введите стоимость товара?"));
let money = Number(prompt("Введите кол-во денег"));

if (tovar === money) {
    console.log("Покупка успешно совершена");
} else if (tovar > money) {
    let n = tovar - money;
    console.log("Вам не хватает " + n + " рублей");
} else { 
    let s = money - tovar;
    console.log("Ваша сдача " + s + " рублей");
}

//2 задача

let number = Number(prompt("Введите число"));

if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else {
    alert(0);
}

//3 задача

let a = Number(prompt("Введите a"));
let b = Number(prompt("Введите b"));

let result = (a + b < 4) ? 'Мало' : 'Много';
console.log(result);
