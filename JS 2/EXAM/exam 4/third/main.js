
let API=JSON.parse(localStorage.getItem("iconLoop"))

 let  box=document.querySelector(".box")


let img=document.querySelector(".img")

img.src=API.image
img.classList.add("imgs")

let h1Name=document.querySelector(".h1Name")

h1Name.innerHTML=API.name

let pPrice=document.querySelector(".pPrice")

pPrice.innerHTML="$"+API.price
pPrice.classList.add("pPrice")


let divColor=document.querySelector(".divColor")
let divColore=document.querySelector(".divColorer")
divColor.style.backgroundColor=API.colore
divColor.style.width="35px"
divColor.style.height="35px"
divColore.style.backgroundColor=API.colar2
divColore.style.width="35px"
divColore.style.height="35px"
divColor.classList.add("divColor")




let pDEscription=document.querySelector(".pDEscription")


let divColers=document.querySelector(".divColers")
divColers.classList.add("divColers")
pDEscription.innerHTML=API.description
box.append(img,h1Name,pPrice,divColor,divColore,pDEscription)