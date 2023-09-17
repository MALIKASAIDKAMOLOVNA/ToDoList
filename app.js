let title = document.getElementById("title")
let author = document.getElementById("author")
let year = document.getElementById("year")
let btn = document.querySelector(".btn-block")
let book = document.getElementById("book-list")
let number = 1


btn.onclick = (e) =>{
    e.preventDefault();
    let  tr = document.createElement("tr")
    let td4 = document.createElement("td")
    td4.innerText = number++
    tr.appendChild(td4)

    let td1 = document.createElement("td")
    td1.innerText = title.value
    tr.appendChild(td1)

    let td2 = document.createElement("td")
    td2.innerText  = author.value
    tr.appendChild(td2)

    
    let td3 = document.createElement("td")
    td3.innerText = year.value
    tr.appendChild(td3)

    book.appendChild(tr)


    title.value = ""
    author.value = ""
    year.value = ""




    tr.innerText == i++
    for(let i = 0; i < tr.length; i++){
    }
}