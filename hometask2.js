var input = prompt("Введіть кількість років", "18");
var number = parseInt(input);

if (!isNaN(number) && number >= 0) {
    var word;

    if (number === 1 || (number % 10 === 1 && number % 100 !== 11)) {
        word = "рік";
    } else if ((number >= 2 && number <= 4) || (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20))) {
        word = "роки";
    } else {
        word = "років";
    }

    console.log(number + " " + word);
} else {
    console.log("Будь ласка, введіть коректне, не від'ємне число.");
}