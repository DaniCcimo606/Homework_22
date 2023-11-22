let arrLength = +prompt('Введите длину массива:');
let newArr = [];

if (!isNaN(arrLength) && arrLength > 0) {
    newArr = new Array(arrLength);
} else {
    console.log('Должно быть положительное число(Больше нуля)');
}

for (let i = 0; i < arrLength; i++) {
    let arrItem = prompt('Введите элемент массива:');
    newArr[i] = arrItem;
}

console.log(newArr);