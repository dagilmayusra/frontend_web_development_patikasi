let username= "yusra"
const DOMAIN="kodluyoruz.org"

let email= username + "@" + DOMAIN
console.log(
    "Merhaba", username,
    "sitemize hoşgeldin, mail adresin: ", email
)

// `` bu ıfade alt virgul tuşlarına basınca oluyor
let info = ` 
    Merhaba ${username} sitemize hoşgeldin.. 
    mail adresin: ${email}
    mail adresinin uzunlugu: ${email.length}
    borcunuz: ${(2+3)*10} TL
    gunun saat bilgisi: ${new Date().getHours()}
    kısa isminiz: ${username[0]}.
    `
console.log(info)