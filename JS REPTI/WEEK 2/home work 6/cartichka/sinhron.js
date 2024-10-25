

let box=document.querySelector(".box")



export function get (data){
   data.forEach((element) => {
    let continer=document.createElement("div")
    continer.classList.add("continer")

    let divs1=document.createElement("div")
    divs1.classList.add("divs1")
    let userTitle=document.createElement("h2")
    userTitle.textContent=element.title

    let userLevel=document.createElement("p")
    userLevel.textContent=element.level

    let userCatigory=document.createElement("p")
    userCatigory.textContent=element.catigory
    userCatigory.classList.add("userCatigory")

    let divs2=document.createElement("div")
    divs2.classList.add("divs2")

    let btnMore=document.createElement("button")
     btnMore.textContent=" SEE MORE"
    btnMore.classList.add("btnMore")
    btnMore.onclick=()=>{
   
    window.location.href="../infoFile/info.html"
    localStorage.setItem("user",JSON.stringify(element))
    }
   

    let userLocation=document.createElement("p")
    userLocation.textContent=element.location
    

    divs1.append(userTitle,userLevel)
    divs2.append(btnMore,userLocation)
    continer.append(divs1,userCatigory,divs2)
    box.append(continer)
   });
}