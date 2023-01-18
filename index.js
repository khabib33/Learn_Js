let number = 4.6;

console.log(-4/0);
console.log('string' * 9);

const obj = {
    name: "John",
    age: 25,
    isMarried: false,
    abc: {
        df: [{}, {}],
        def: {

        }
    } //obj ichida yana boshqa objlani ishlatse bo'ladi.
};
obj.a = '1234';

console.log(obj.a);
//console.log(obj.name);
console.log(obj["name"]);


const arr = ['a', 'b', 'c'];
arr[10] = '1234555';
console.log(arr); // orada 7 ta element empty bob qoladi.