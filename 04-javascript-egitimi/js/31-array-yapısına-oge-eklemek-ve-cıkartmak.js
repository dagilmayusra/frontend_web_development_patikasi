// array yapısına öğe eklemek ve array içerisinden istenilen öğenin çıkarılması

let items = [10, 20, 30, 40 ]
console.log("items - ilk hali : ", items)

// Array: sona oge/eleman eklemek -> push
items.push(50)
console.log("50 : ", items)

// Array: basa oge eklemek -> unshift
items.unshift(5)
console.log("5 : ", items)

// Arrray: sondaki ogeyi cıkartmak -> pop
let lastItem = items.pop() // son elemanı lastItem içerisine ekledik
console.log("lastItem : ",lastItem, ", items : ", items)

// Array: bastaki ogeyi cıkartmak -> shift
let firstItem = items.shift() // ilk elemanı firstItem içerisine ekledik
console.log("firstItem : ",firstItem, ", items : ", items)

//Array içindeki bir ogenin bilgisinin değiştirilmesi

//ilk elemanın degıstırılmesi
items[0] = 5;
console.log(items)

//son ogenın değişirilmesi
items[items.length - 1] = 1000
console.log(items)
