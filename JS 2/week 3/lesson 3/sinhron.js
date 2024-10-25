let  box=document.querySelector(".all")
let lenguig="ara"
 export function get(data)
{
    box.innerHTML=""
    data.forEach((element )=> {

        let div=document.createElement("div")
        div.classList.add("div")

        let img=document.createElement("img")
        img.src=element.flags.png
        img.classList.add("flags")

        let h1=document.createElement("h1")
        h1.innerHTML=element. translations ?.[lenguig] ?.common || element. name.common.


        let h21=document.createElement("h2")
        h21.innerHTML="Populetion : "+element.population

        let h22=document.createElement("h2")
        h22.innerHTML="Region   "+element.region.slice(0 ,15)

        let h23=document.createElement("h2")
        h23.innerHTML="Capital"+element.capital.slice(0 ,15)


        let btnSearsh=document.createElement("button")
        btnSearsh.classList.add("btnSearsh")
        btnSearsh.innerHTML="LEAREN MORE"
       

        div.append(img,h1,h21,h22,h23,btnSearsh)
        box.append(div)
    });
}




let selectRegion=document.querySelector(".selectRegion")
selectRegion.onchange=(event)=>{
    console.log(event.target.value);
    
}


let selectLanguge=document.querySelector(".selectLanguge")
selectLanguge.onchenge=()=>{
    lenguig=selectLanguge.value
    get(data)
}
{/* <img src="" alt="">
<h1></h1>
<span>Populetion</span> <span class="numder"></span><br>
<span>Region</span> <span class="region"></span><br>
<span> Capital</span> <span class="Name "></span><br>
<button class="btnA">LEARE MORE</button> */}


