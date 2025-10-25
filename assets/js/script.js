const barse =document.querySelector("#open")
const logo = document.querySelector("#logo")
const barseList =document.querySelector(".barseList")
const contaiBlogs = document.querySelector("#style-show")
const squer= document.querySelector("#cardsStyle")
const col =document.querySelector("#listStyle")
const courser = document.querySelector("#contain-courses")


barse.addEventListener("click" , ()=>{
    barseList.classList.toggle("active")
    if (barseList.classList.contains("active")) {
        barse.src="./assets/img/close.png";
        logo.src = "./assets/img/logo-list.png";
    }
    else{
        barse.src="./assets/img/bars.png";
        logo.src = "./assets/img/LOGO.png";
    }
})
squer.addEventListener("click" , ()=>{
    contaiBlogs.classList.remove("lists")
    contaiBlogs.classList.add("cards")
})
col.addEventListener("click" , ()=>{
    contaiBlogs.classList.remove("cards")
    contaiBlogs.classList.add("lists")
})
squer.addEventListener("click" , ()=>{
    courser.classList.remove("lists")
    courser.classList.add("cards")
})
col.addEventListener("click" , ()=>{
    courser.classList.remove("cards")
    courser.classList.add("lists")
})

