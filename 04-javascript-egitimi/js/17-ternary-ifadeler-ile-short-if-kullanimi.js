
//eger kullanıcı adın varsa yazdır yoksa kullanıcı bılgınız bulunamadı yaz

let userName = prompt("kullanici bilginizi yazınız")
let info = document.querySelector("#info")

//ternary kullanımı
//kosul ? dogruysa : yanlıssa
info.innerHTML= `${userName.length >0 ? userName : "kullanıcı bılgınız bulunamadı"}`
