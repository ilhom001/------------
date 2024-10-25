
import { userDelete } from "./adAssinhron.js";
let box=document.querySelector(".box")




export function get(data){
      box.innerHTML=""
    data.forEach((element) => {
        let tr=document.createElement("tr")

        let userTitle=document.createElement("td")
        userTitle.textContent=element.title
        

        let userCatigory=document.createElement("td")
        userCatigory.textContent=element.catigory

        let userLevel=document.createElement("td")
        userLevel.textContent=element.level

        let userLocation=document.createElement("td")
        userLocation.innerHTML=element.location

        let userPhone=document.createElement("td")
        userPhone.textContent=element.phone

        let userApplication=document.createElement("td")
        userApplication.textContent=element.nameAppli

        let userDataClosest=document.createElement("td")
        userDataClosest.textContent= new Date (element.closingData).toLocaleDateString()

        let userAction=document.createElement("td")

         let btnEdit=document.createElement("button")
         btnEdit.textContent="Edit"
         

         let btnDelete=document.createElement("button")
         btnDelete.textContent="Delete"

         btnDelete.onclick=()=>{
            userDelete(element.id)
         }


         userAction.append(btnEdit,btnDelete)
        tr.append(userTitle, userCatigory,userLevel,userLocation,userPhone,userApplication,userDataClosest,userAction)
        box.appendChild(tr)
        
    });
  

}


let addModal=document.querySelector(".addModal")
addModal.onclick=()=>
    {
    window.location.href="../Add+Edit file/add.html"
    }