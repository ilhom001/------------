let h11=document.querySelector(".h11")
let but = document.querySelector(".but")
let  collor =["red","blue","green","yellow","black"]
let body= document.querySelector("body")
function ilh(arr)
{
    return Math.floor(Math.random()*arr.length)
}
but.onclick=()=>
{
    let random = ilh(collor)
    body.style.backgroundColor=collor[random]
}