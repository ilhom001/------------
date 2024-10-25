let alll=document.querySelector(".all")
let boxes = document.querySelector(".box1")
let plus = document.querySelector(".cklik1")
let ooo = document.querySelector(".cklik2")
let min = document.querySelector(".cklik3")
let h11 = document.querySelector(".zero")
let cnt=0
plus.onclick =()=>{
 h11.innerHTML=++cnt
 if(cnt>0)
 {
    h11.style.color="green"
    alll.style.border="5px,solid,green"
 }

}
min.onclick=()=>{
    h11.innerHTML=--cnt
    if(cnt<0)
    {
        h11.style.color="red"
        alll.style.border="5px,solid,red"
    }
}
ooo.onclick=()=>
{
    h11.innerHTML=0
    h11.style.color='black'
    alll.style.border="5px,solid,black"


}



