let greeting = document.querySelector("#greeting")

greeting.classList.add("text-primary") //classListe ekleme yapar
greeting.classList.add("title")
greeting.classList.add("new-info", "second-class", "third-class") //birden fazla class eklemek

greeting.classList.remove("title", "second-class") //birden fazla class silmek 

console.log(greeting.classList)