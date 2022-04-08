
function hello(firstName){
    console.log(`merhaba ${firstName}`)
}

hello("javascript")

// => func işlemi oldugunu belırtır
const helloFuncV1 = (firstName) => {
    console.log(`merhaba ${firstName}`)
}
helloFuncV1("helloFuncV1")

// birden fazla değişken olmadığı için parantezler olmadan da çalışır
const helloFuncV2 = firstName => console.log(`merhaba ${firstName}`)  // bir parametre, bir dönüş
helloFuncV1("helloFuncV2")

//birden fazla değişken alırsa
const helloFuncV3 = (firstName, lastName) => console.log(
    `merhaba ${firstName} ${lastName}`
)  // console.log parantezi
helloFuncV3("helloFuncV3", "last name info")


const helloFuncV4 = (firstName, lastName) => {
    let info = `merhaba ${firstName} ${lastName}`
    console.log(info)
    return info
}
helloFuncV4("helloFuncV4", "last name info")


