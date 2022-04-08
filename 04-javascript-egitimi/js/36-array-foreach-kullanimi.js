
const PRODUCTS = ["Laptop", "Phone", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

PRODUCTS.forEach((product, index, array) => console.log(product, index, array) )

const userListDOM=document.querySelector('#userList')
PRODUCTS.forEach( item => {
    const LiDOM=document.createElement('li')
    LiDOM.innerHTML=item
    userListDOM.append(LiDOM)
})
