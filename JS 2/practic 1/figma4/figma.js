// let all1=document.querySelector(".container")
// let h1=document.querySelector(".h1")
// let but1=document.querySelector(".btn1")
// let but2=document.querySelector(".btn2")
// let but3=document.querySelector(".btn")
// let h2=document.querySelector(".h2")
// let cnt=0
// but1.onclick=()=>{
//     h2.innerHTML=++cnt
//     if(cnt>0)
//     {
//         h2.style.color="green"
//        all1.style.border="5px,solid,green"
//     }
// }
// but3.onclick=()=>{
//     h2.innerHTML=--cnt
//     if(cnt<0)
//     {
//         h2.style.color="red"
//         all1.style.border="5px,solid,red"   
//     }
// }
// but2.onclick=()=>
//     {
//         h2.innerHTML=0
//         h2.style.color='black'
//         all1.style.border="5px,solid,black"
    
    
//     }

///////////////////////////////////////////////////////////////figma 2

// let bigNum=document.querySelector(".bigNum")
// let  inp1=document.querySelector(".inp1")
// let inp2=document.querySelector(".inp2")
// let h1=document.querySelector(".h1")
// let but=document.querySelector(".but")

// but.onclick=()=>{


// if(+inp1.value>+inp2.value)
// {
//     h1.innerHTML="This is the big number"+inp1.value
// }
// else{
//     h1.innerHTML="This is the big number"+inp2.value
// }
// }

///////////////////////////////////////////////////////////////////////////figma 3

let but=document.querySelector(".but")
let collor=["red","blue","green","black","aqua","yelow"]
let all=document.querySelector(".body")
function ilh(arr)
{
    return Math.floor(Math.random()*arr.length)
}
but.onclick=()=>
{
    let random= ilh(collor)
    all.style.backgroundColor=collor(random)
}

    