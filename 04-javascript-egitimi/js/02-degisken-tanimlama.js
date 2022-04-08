 //değişken girdiğimiz veriyi içerisinde tutmaya yarar.
 
 //var ile değişken tanımlama
 //var serverName= "kodluyoruz.org"
 //console.log(serverName)

 //let ile değişkeni boş tanımlamak
 let serverName;
 console.log(serverName)

 //let ile değişkene bilgi atamak
 serverName= "https://kodluyoruz.org"
 console.log(serverName)

 //let ile değişkene bilgi atayarak tanımlamak
let password="1234";
console.log(password)

 //değişken atamasi yapmadan önce kullanmaya çalışmak
/* hatalı kullanım... let yerine var kullanılırsa undifended olur
 console.log(fullName)
 let fullName = "Yüsra Dağılma"; 
*/
let fullName = "Yüsra Dağılma"

//let ile tanımlanan değişkenin içindeki bilgiyi değiştirmek
fullName="Lorem ipsum dolor"
console.log(fullName)

//birleştirme ve ekleme
fullName= fullName + " yeni eklenen bilgi"
console.log(fullName);

 //const ile değişkeni boş tanımlamaya çalışmak
//const serverPassword; //değişken tanımlandı içi boş, hata verir

 //const ile değişken tanımlamak
const serverPassword="abc"  //BU ŞİFRE DEGİŞTİRİLEMEZ,ÇÜNKÜ CONST İLE TANIMLANMIS
console.log(serverPassword)


/*
!!!!!!!!!!!!!
BİR ŞEY DEĞİŞECEKSE BUNU LET İLE TANIMLIYORUZ
BİR ŞEY DEĞİŞMEYECEKSE BUNU CONST İLE TANIMLARIZ

VAR, LET İLE DEĞİŞTİRİLEBİLİR
*/
