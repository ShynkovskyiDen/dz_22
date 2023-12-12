
let Length = prompt('Place a length');
let array = [];

for (let i = 0; i < length; i++) {
    let element = prompt('Place elements');
    array.push(element);
}

console.log(array);

function sort(a, b) {
    array.sort = a - b;
    return array;
}

console.log(array);

array.splice(1, 3);
console.log(array)
