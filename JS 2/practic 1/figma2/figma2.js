let all=document.querySelector(".all")
let inp1=document.querySelector(".imp1")
let inp2=document.querySelector(".imp2")
let but =document.querySelector(".but")
let h1=document.querySelector(".h1")

but.onclick=()=>{
    if(+inp1.value>+inp2.value)
    {
        h1.innerHTML="This is number the big"+inp1.value
    }
    else{
        h1.innerHTML="This is number the big"+inp2.value
    }
    }
