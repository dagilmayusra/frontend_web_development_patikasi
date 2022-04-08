let email="yusra@gmail.com"
let firstName="yusra"
let lastName="dağılma"

//string karakter sayısı -> length
console.log( email.length )

//ilk karakteri bulmak -> [0]
console.log(firstName[0])
console.log(firstName.charAt(1))

//buyuk harf / kucuk harf
firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)

//String içinde istediğimiz bilgiyi aramak ve yerini bulmak -> search
console.log(email.search("@"))
console.log(email[10])

email.search('olmayan') //-1 ... olamayan bir sey aratırsak -1 doner

//belli bir yere kadar al -> slice (domain bilgisi)
let DOMAIN = email.slice( email.search("@") + 1)
console.log(DOMAIN)

console.log(
    DOMAIN.slice(0, DOMAIN.indexOf('.')) // sadece gmail kısmı alındı
    //slice ile parçalandı ve indexof ile nokta gorene kadar 
)

//bilgiyi değiştir -> replace
email = email.replace('gmail.com', 'kodluyoruz.org')
console.log(email)

//istediğim bilgi var mı -> includes
email.includes('ahaha') //false
email.includes('@') //true      

//istediğim bilgiyle başladı mi ? bitti mi -> startsWidth, endsWidth
console.log(
    email.endsWith('kodluyoruz.org')
)

//ilk harflerini buyuk yapmak
lastname="lastname"
firstName= "firstname"
let fullName=`${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`
console.log(fullName)