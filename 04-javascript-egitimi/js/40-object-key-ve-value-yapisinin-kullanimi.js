
let laptop1={
    brand: "apple",
    model: "macbook pro",
    "2kg": 2
}
console.log(laptop1)

// doğru anahtar bilgisi olusturmak
console.log(laptop1.brand)
console.log(laptop1["2kg"]) 

// anahtar bilgisine yeni değer eklemek
laptop1.brand= "Mac"
laptop1["brand"] ="Mac1"
console.log(laptop1)

//yeni bilgi eklemek
laptop1.version= "10.15.7"
console.log(laptop1)

// anahtar bilgilerine ulasmak (keys) -> Object.keys(item)
keys = Object.keys(laptop1)
console.log(keys)
console.log(Object.keys(laptop1))

keys.forEach(keyInfo => {
    console.log(keyInfo)
    console.log(laptop1[keyInfo])
})

// değer bilgilerine ulaşmak (value) -> Object.values(item) 
console.log(
    Object.values(laptop1)
)

let values= Object.values(laptop1)

keys.forEach(value => {
    console.log("value:", value)
})

