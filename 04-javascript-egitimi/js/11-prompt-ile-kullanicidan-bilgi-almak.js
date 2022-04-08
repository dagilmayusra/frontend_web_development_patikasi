let fullName=prompt("lütfen adınızı giriniz: ")
//console.log(fullName)

//id olanları css deki gıbı basına # bu koyulur
let greeting = document.querySelector("#greeting")

greeting.innerHTML=`${greeting.innerHTML} <small style="color:red">${fullName}</small>`

