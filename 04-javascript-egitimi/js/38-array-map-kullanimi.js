
const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"]

//userName içindeki orijinal isim kalsin
//shortName içindeki ilk harf buyuk  (A.)
// newName içindeki ilk harf buyuk olsun

const NEW_USERS = USERS.map( user => user.toLowerCase() )  //isimler kucuk harflerle gelir
console.log(NEW_USERS)

//const USERS_OBJ = USERS.map( item => 
//    {
//        return { 
//            userName: item, 
//            shortName: `${item[0]}.` ,
//            newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}` 
//        }
//    }
//)
//console.log(USERS_OBJ)

const USERS_OBJ = USERS.map( item => (
    {
        userName: item, 
        shortName: `${item[0]}.` ,
        newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}` 
    }
    )
)
console.log(USERS_OBJ)
