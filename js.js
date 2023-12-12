
let length = +prompt('Введіть довжину масиву');
const array = [];

if (!isNaN(length)) {
    for (let i = 0; i <= length; i++) {
        array.push(prompt('Введіть елемент масиву' + i));
    }
} else {
    alert('Некоректне значення довжини')
}

console.log('Початковий масив', array);

function sort(a, b) {
    array.sort = a - b;
    return array;
}

console.log('Відсортований масив', array);

array.splice(1, 3);
console.log('Видалення елементів з 2 по 4 включно', array);
