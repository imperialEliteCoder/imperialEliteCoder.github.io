/*
Конечная цель: создание динамического бэкграунда с
использованием технологии линейного, радиального и 
конического градиента.
Надо дать пользователю возможность выбирать один из
этих вариантов, после чего при нажатии кнопки генерировать
рандомные два цвета и сливать их в градиент с учётом предпочтени пользователя.
Опционально: реализовать адептовские настройки цвета:
1. Палитра.
2. Оттенки. 
3. И прочие аспекты, относящиеся скорее к теории
цвета.
*/

//Инициализация всех элементов управления и вычислительных данных.
const mainHeader = document.getElementById('main-header').innerHTML;
const generateButtonColor = document.getElementById('generate-color');
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                'A', 'B', 'C', 'D', 'E', 'F'];

//Случайное число от min до max.
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

//Развернуть строку.
function reverseString(str) {
    return str.split("").reverse().join("");
  }   

//Перевод из десятичной СС в шестнадцатеричную.
function fromDecimalToHexadecimal(numberToConvert) {
    let answer = '';
    while(numberToConvert > 0) {
        const digit = numberToConvert % 16;
        if(digit % 16 == 0) {
            answer += digits[0];
        } else if(digit % 16 == 1) {
            answer += digits[1];
        } else if(digit % 16 == 2) {
            answer += digits[2];
        } else if(digit % 16 == 3) {
            answer += digits[3];
        } else if(digit % 16 == 4) {
            answer += digits[4];
        } else if(digit % 16 == 5) {
            answer += digits[5];
        } else if(digit % 16 == 6) {
            answer += digits[6];
        } else if(digit % 16 == 7) {
            answer += digits[7];
        } else if(digit % 16 == 8) {
            answer += digits[8];
        } else if(digit % 16 == 9) {
            answer += digits[9];
        } else if(digit % 16 == 10) {
            answer += digits[10];
        } else if(digit % 16 == 11) {
            answer += digits[11];
        } else if(digit % 16 == 12) {
            answer += digits[12];
        } else if(digit % 16 == 13) {
            answer += digits[13];
        } else if(digit % 16 == 14) {
            answer += digits[14];
        } else if(digit % 16 == 15) {
            answer += digits[15];
        }
        numberToConvert = Math.floor(numberToConvert / 16);
    }
    return reverseString(answer);
}

//Создать HEX-код цвета.
function generateHEXCode(R, G, B) {
    return fromDecimalToHexadecimal(R) + fromDecimalToHexadecimal(G) + fromDecimalToHexadecimal(B);
}

//Создать бэк для тела html-документа.
function generateHEXBackground() {
    const R = randomInteger(0, 255);
    const G = randomInteger(0, 255);
    const B = randomInteger(0, 255);
    const HEXColor = generateHEXCode(R, G, B);
    document.body.style.backgroundColor = '#' + HEXColor;
}

//Создать бэк в стиле линейного градиента.
function generateHEXLinearGradientBackground() {
    const R = randomInteger(0, 255);
    const G = randomInteger(0, 255);
    const B = randomInteger(0, 255);
    const HEXColorOne = generateHEXCode(R, G, B);
    console.log(HEXColorOne);
    const R1 = randomInteger(0, 255);
    const G1 = randomInteger(0, 255);
    const B1 = randomInteger(0, 255);
    const HEXColorTwo = generateHEXCode(R1, G1, B1);
    console.log(HEXColorTwo);
    document.body.style.background = 'linear-gradient(to left, #' + HEXColorOne + ', #' + HEXColorTwo + ')';
    console.log('linear-gradient(#' + HEXColorOne + ', #' + HEXColorTwo + ')'); 
}

function generateHEXCircleGradientBackground(R, G, B) {

}

function generateHEXConicGradientBackground(R, G, B) {

}

//Повесить обработчик события на кнопку.
generateButtonColor.addEventListener('click', function(e) {
    generateHEXLinearGradientBackground();
});

class Letter {
    constructor(val) {
        this.Val = val;
        //this.R = r;
        //this.G = g;
        //this.B = b;
    }
}

function fillTextWhite() {

}

function fillTextGrey() {

}

function fillTextBlack() {

}


