//local storage işlemleri

let user={userName: "yusradagilma", isActive: true }
console.log(user)
localStorage.setItem('userInfo', JSON.stringify(user) )

let userInfo= localStorage.getItem('userInfo')
console.log(userInfo)

