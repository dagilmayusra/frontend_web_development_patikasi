
// temel kurallar
// 1: bir fonksiyon bir veya birden fazla parametre alabilir veya hiç almayabilir
// 2: bir fonksiyon dışarı bilgi gönderebilir(return) veya gönderemeyebilir
// 3: mümkünse fonksiyonun bağımlılıklarını azaltmak gerekir



let firstName="lorem"

function greetings(firstName="", lastName=""){   // default parametre alıyor...
    //console.log(`Merhaba ${firstName ? firstName : ""}`)
    console.log(`Merhaba ${firstName}`)
    console.log(`Merhaba ${firstName} ${lastName}`)
} 

console.log(firstName) // let ile verilen değişken
greetings()  // fonksiyona parametre gondermedik ??
greetings("parametre")

//--------------------------------

function greetings2(firstName, lastName){
    let info=`Merhaba ${firstName} ${lastName}`
    return info
}

let greetingsInfo = greetings2("ad", "soyad")
console.log(greetingsInfo)


function domIdWriteInfo(id, info){
    let domObject= document.querySelector(`#${id}`)
    domObject.innerHTML= info
}

let htmlInfo=`<span style="color:red">Color Red</span>`

domIdWriteInfo('greeting', htmlInfo)
domIdWriteInfo('info', greetings2("lorem", "ipsum"))

