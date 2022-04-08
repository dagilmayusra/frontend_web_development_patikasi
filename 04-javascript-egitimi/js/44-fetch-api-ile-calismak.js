
//JSOn dosyadan veri çekmek
fetch("data/settings.json").then(
    response => {
        //console.log(response)
        return response.json()
    }
).then(responseJson => {
    console.log(responseJson)
})

let userListDOM = document.querySelector("#userList")
//API üzerinden veri çekmek
fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
).then(responseJson => {
    //console.log(responseJson[0])
    responseJson.forEach(item =>{
        let liDOM = document.createElement('li')
        liDOM.innerHTML=item.title
        userListDOM.appendChild(liDOM)
    })
})
