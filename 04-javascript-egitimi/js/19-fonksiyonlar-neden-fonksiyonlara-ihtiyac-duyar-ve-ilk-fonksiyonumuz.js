//ilk fonksiyonu tanımlamak

function helloWorld(){
    console.log("hello world")
}

function hello(){
    console.log("merhaba")
    helloWorld()
}

//hata alarız
/* 
function userCheck(){
    if(userName && age >= 18){
        info.innerHTML="ehliyet alabilirsiniz"
    } else if( !userName){
        info.innerHTML="kullanıcı adınız yok"
    } else if( !(age >= 18) ){
        info.innerHTML="yas bilginiz yok veya 18 yasından kucuksunuz"
    }
}
*/

hello() //fonksiyonu çalıstırır


