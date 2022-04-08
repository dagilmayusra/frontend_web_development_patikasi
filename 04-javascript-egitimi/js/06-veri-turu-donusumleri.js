//veri turunu öğrenmek typeof
let price =111
let stringPrice ="111"
let hasPassword =true

console.log(
    "price:",
    typeof(price)
)

console.log(
    "stringPrice:",
    typeof(stringPrice)
)

console.log(
    "hasPassword:",
    typeof(hasPassword)
)

//string (metinsel) bilgileri int ve float a donusturmek
let number1="11"
number1 = parseInt(number1)
console.log(
    "number1:", number1, typeof(number1) //string olan ıfade rakam oldu
)

let number2="11px" //px 11 onunde olsaydı NaN dondururdu
number2 = parseInt(number2)
console.log(
    "number2:", number2, typeof(number2) //string olan ıfade rakam oldu
)

let number3="11.1" 
number3 = Number(number3)
console.log(
    "number3:", number3, typeof(number3) //string olan ıfade rakam oldu
)

//number verı tıpınden strıng e donusturmek
let number5= 55
number5 = number5.toString()
console.log(number5, typeof(number5))