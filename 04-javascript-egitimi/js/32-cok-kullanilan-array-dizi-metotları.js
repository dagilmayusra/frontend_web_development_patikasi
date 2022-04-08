
let items= [1, 2, 3, 4, 5]

//Array içinde Array:
let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]

items.unshift(femaleUsers)

items.push(maleUsers)

console.log(items)

console.log(items.length)
console.log(items[0].length)   //array içindeki istediğimiz Arrayın length bilgisini aldık
console.log(items[0][0])  //ayse bilgisine ulastık

//Array içerisinden öge ayırmak -> spllice(pos, item?)
let newItems = items.splice(2,3)

console.log("newItems: ", newItems)
console.log("items: ", items)

//Array içerisindeki ögenin index bilgisini bulmak -> indexOf('value')
items.unshift("lorem")
items.unshift("ipsum")

console.log( items[items.indexOf("ipsum")] )

//Array kopyalamak -> slice [...ES6]
let copyItems=items
console.log(items)

copyItems.pop() //son öğeyi cıkarttık
console.log("copyItems",copyItems)
console.log("items",items)

console.log("kopyalandıktan sonraki hali")
copyItems = items.slice() //kopyalama yaptı
copyItems.pop() //son öğeyi cıkarttık
console.log("copyItems",copyItems)
console.log("items",items)

let es6Items = [...items] //es6 ve sonrasında gelen kopyalama işlemi
console.log(es6Items)

//Array içerisindeki bilgiyi String'e çevirmek -> toString, join
console.log(allUsers.toString())
console.log(allUsers.join(" --- "))

//İki Array bilgisini birleştirmek -> [..ES6, ES6]
let allUsers = [...femaleUsers, ...maleUsers] // es6 birden fazla array yapısını birleştirmek
console.log(allUsers)

//istediğimiz index bilgisine öğre eklemek -> splice(index, 0, value)
allUsers.splice(allUsers.length-1, 0, "Melissa")
allUsers.splice(Math.floor( allUsers.length /2), 0, "Lorem")
console.log(allUser)
