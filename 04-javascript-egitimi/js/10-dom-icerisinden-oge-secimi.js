let title=document.getElementById('title')
title.innerHTML="değişen bilgi"
console.log(title.innerHTML)

//birden fazla olsade bır tane eleman secer
//let link= document.querySelector("ul#list>li>a")
let link= document.querySelector("#kodluyoruzLink")
link.innerHTML +=" değişti"
//console.log(link.innerHTML) //içerisindeki html bilgisini getırır
link.style.color="red"
link.classList.add('btn')