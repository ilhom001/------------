
let hTitle=document.querySelector(".hTitle")

let user=JSON.parse(localStorage.getItem("user"));
hTitle.innerHTML=user.title


let pTitle=document.querySelector(".pTitle")

pTitle.innerHTML=user.title

let DateP=document.querySelector(".DateP")

DateP.innerHTML=new Date(user.closingData).toLocaleString()

let PCatigory=document.querySelector(".PCatigory")

PCatigory.innerHTML=user.catigory

let PLocation=document.querySelector(".PLocation")

PLocation.innerHTML=user.location