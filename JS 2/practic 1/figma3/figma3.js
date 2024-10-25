let all=document.querySelector(".all1")
let h1=document.querySelector(".h1")
let but=document.querySelector(".but")
let collor=["red","green","blue","black","yellow"]
function ilh(arr)
{
    return Math.floor(Math.random()*arr.length)
}
but.onclick=()=>
{
    let random =ilh(collor)
    all.style.backgroundColor=collor[random]
}