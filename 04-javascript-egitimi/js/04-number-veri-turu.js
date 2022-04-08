//number veri türü tanımlamak
let price = 100
let tax=0.18
let priceTax = price *tax
let total = price + priceTax
console.log(
    "Fiyat:", price, 
    "KDV Oranı:", tax, 
    "KDV Tutarı:", priceTax,
    "Fiyat:", total
)

let stringNumber ="11"
console.log(stringNumber) //metinsel
let newNumber =Number(stringNumber)
console.log(newNumber)  //rakamsal
console.log("Number Constructor içine bilgi gönderildi:", Number("111"))

//arttırma ve azaltma işlemleri
let counter =320
counter = counter +1 //uzun yontem
counter +=1; //kısa yöntem
counter ++; //daha kısa yontem
counter --; //azaltma
counter -= 1; 
counter *=10; //10 ile çarpar
counter /=2;
console.log(counter)

//işlem önceliği
console.log(2+3*10) //sonucun 50 cıkmasını beklerken 32 cıktı
console.log( (2+3) * 10) //sonuc 50 olacaktır

//mod(kalan) alma %
//sayi tek mi çift mi
console.log(3 % 2)  //0 ise çift, 1 ise tek

//8 ürün alan koliye tum urunler sigiyor mu
console.log("Koli kalan örneği: ", 18 % 8)

//us lama
console.log(2 * 2 * 2 * 2)
console.log(2 ** 4)  //üs alma iki tane çarpı işareti ile yapılır

//asagı yuvarlama işlemi -> Math.floor
console.log( "Aşagı yuvarlama: ", Math.floor(1.7) ) //1 olur

//yukarı yuvarlama işlemi -> Math.ceil
console.log( "Yukarı yuvarlama: ", Math.ceil(1.1) )

//yakina yuvarlama işlemi -> Math.round
console.log( "Yakına yuvarlama: ", Math.round(1.5) )  //1.4 ->1 , 1.5 -> 2
