let username = prompt("kullanici adinizi giriniz: ")

// eğer  kullanici bilgisleri varsa ekrana ismini yazdır
// eger (username.length >0) {console.log(username)} degilse {console.log("bilgi yok")}
// if (username.length >0) {console.log(username)} else {console.log("bilgi yok")}

if(username.length>0){   //if kısmı her zaman true ise çalışır
    console.log(`kullanici bilginiz ${username}`)
} else{
    console.log("bilgi yok")
}
