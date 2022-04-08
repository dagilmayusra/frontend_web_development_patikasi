
let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)


function formSubmit(event){
    event.preventDefault() // default işlemi engellendi
    console.log("işlem gerçekleşti")
    let scoreInputDOM = document.querySelector('#sore')
    console.log(scoreInputDOM.value)
    localStorage.setItem('score', scoreInputDOM.value)
}


