
//5 harften fazla olanlar
const PRODUCTS = [ "Mic", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

const NEW_PRODUCTS = PRODUCTS.filter(item => item.length>5 )
console.log(NEW_PRODUCTS)


// aktif kullanicilar
const USERS = [
    {fullName: "Ayse Ayse", isActive: false},
    {fullName: "Asya Asya", isActive: true},
    {fullName: "Yusra Yusra", isActive: true},
    {fullName: "Dagilma Dagilma", isActive: false},
]

const ACTIVE_USERS = USERS.filter(user => user.isActive === false) // true istediğimizde false gibi yazmaya gerek yoktur.default olarak truedır
console.log(ACTIVE_USERS)

