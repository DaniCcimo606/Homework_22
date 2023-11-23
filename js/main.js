// let arrLength = +prompt('Введите длину массива:');
// let newArr = [];

// if (!isNaN(arrLength) && arrLength > 0) {
//     newArr = new Array(arrLength);
// } else {
//     console.log('Должно быть положительное число(Больше нуля)');
// }

// for (let i = 0; i < arrLength; i++) {
//     let arrItem = prompt('Введите элемент массива:');
//     newArr[i] = arrItem;
// }

// console.log(newArr);


let arrLength = +prompt('Введите длину массива:');
let newArr = [];

if (!isNaN(arrLength) && arrLength > 0) {
    for (let i = 0; i < arrLength; i++) {
        let arrItem = prompt('Введите элемент массива:');
        newArr[i] = arrItem;
    }
} else {
    console.log('Должно быть положительное число(Больше нуля)');
}

newArr.sort((a, b) => a - b);

newArr.splice(1, 4);
    
document.write('<b>' + newArr + '</b>');