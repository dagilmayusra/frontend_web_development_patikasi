
//array olusturmak
let domain = "kodluyoruz"
let isActive = false
let items = [15, 25, 35, isActive, domain]
console.log(items)

let emptyArray =[] //boş list


//array içerisindeki eleman/öğe sayısını öğrenmek
console.log(
    items.length //array içindeki öğe sayısı
)
//document.querySelector('#info').innerHTML = items.length

//array içindeki ilk elemanın çağrılması
console.log( items[0] )

//array içindeki son elemanın çağrılması
console.log( items[items.length - 1] )

//array içindeki ortadaki elemanın çağrılması
console.log(
    "ortadki : ",
    items[ Math.floor(items.length / 2) ]
)

// değişken içindeki bilginin array olup olmadıgının kontrol edilmesi
console.log(
    typeof(items)  // object olarak cıktı verıyor
)

console.log(
    Array.isArray(items)
)

//hangısleri isArray  -> true verir
console.log(
    "[] : ",
    Array.isArray( [] )
)

console.log(
    "1 : ",
    Array.isArray( 1 )
)

console.log(
    "true : ",
    Array.isArray( true )
)
