let all1=document.querySelector("all1")
let h1 =document.querySelector(".h1")
let box1=document.querySelector(".box1")
let but1=document.querySelector(".but1")
let but2=document.querySelector(".but2")
let but3=document.querySelector(".but3")
let h2=document.querySelector(".h2")

let cnt=0
but1.onclick=()=>{
    h2.innerHTML=++cnt
    if(cnt>0)
    {
        h2.style.color="green"
       all1.style.border="5px,solid,green"
    }
}
but3.onclick=()=>{
    h2.innerHTML=--cnt
    if(cnt<0)
    {
        h2.style.color="red"
        all1.style.border="5px,solid,red"   
    }
}
but2.onclick=()=>
    {
        h2.innerHTML=0
        h2.style.color='black'
        all1.style.border="5px,solid,black"
    
    
    }
    