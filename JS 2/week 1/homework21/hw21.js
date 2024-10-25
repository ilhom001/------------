let inp1=document.querySelector(".inp1")
let inp2=document.querySelector(".inp2")
let but=document.querySelector(".but")

let h11 = document.querySelector(".h11")
but.onclick=()=>
{
if(+inp1.value>+inp2.value)
{
 h11.innerHTML="The big numder is "+inp1.value
}    
else if(inp1.value<inp2.value)
{
    h11.innerHTML="The big numder is "+inp2.value 
}
}

