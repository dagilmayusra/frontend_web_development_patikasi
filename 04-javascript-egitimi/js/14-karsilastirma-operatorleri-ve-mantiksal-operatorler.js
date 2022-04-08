let price = "0" //100
let user ="yusra" //guest

// == Eşitse
console.log( price == 1 )  //false
console.log( price == 100 )  //true

// === Hem değeri hem de türü eşitse
console.log( price === 1 )  // false
console.log( price === 100 ) // false

// != Eşit değilse
console.log( price != 1 ) // true
console.log( user != "guest" )  // false

// < Küçükse
console.log("price <1000", price < 1000 ) // true

// <= Küçük veya eşitse
console.log("price <100", price <= 100 ) // true

// > Büyükse
console.log("price <200", price > 200 ) // false

// >= Büyük veya eşitse
console.log("price <100", price >= 100 )  // true

// && ve 
price=0
console.log( price >0 && user != "guest")

//  || veya
console.log( price >0 || user != "guest") 

// ! değil (tersi)
user="guest"
price=1
console.log( price >0 && !user == "guest")
