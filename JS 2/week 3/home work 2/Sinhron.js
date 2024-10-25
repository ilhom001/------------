
import {deletUser} from "./asinhron.js"
import { postUser ,putUser} from "./asinhron.js";

   let box= document.querySelector(".box")

 export function get (data)
{
    box.innerHTML=""
    data.forEach((element) => {
         let tr =document.createElement("tr")
         let userId= document.createElement("td")
         userId.innerHTML=element.id

         let userImg=document.createElement("td")
         userImg.style.display="flex"
         let img=document.createElement("img")
         img.src=element.img
         img.classList.add("img1")
         let div=document.createElement("div")
         div.classList.add("div")

         let userName =document.createElement("h3")
         userName.innerHTML=element.name
         let userGmail=document.createElement("p")

         userGmail.innerHTML=element.gmail
         let userNumber=document.createElement("td")
         userNumber.innerHTML=element.PhoneNumbet

         let userAge=document.createElement("td")
         userAge.innerHTML=Math.abs(2024-new Date(element.age).getFullYear())

         let userCity=document.createElement("td")
         userCity.innerHTML=element.coutry

         let userStatus=document.createElement("td")
         userStatus.innerHTML=element.status ?"Active" :"Inactive" 
         userStatus.classList.add("userStatus")
    

         let userAction=document.createElement("td")

        let btnInfo=document.createElement("button")
        btnInfo.innerHTML="INFO"
        btnInfo.classList.add("btnInfo")
        let btnEdit=document.createElement("button")
        btnEdit.innerHTML="EDIT"
        btnEdit.classList.add("btnEdit")


        btnEdit.onclick=()=>{
         dialogEdit.showModal()
         editApp(element)

      }

        let btnDelete=document.createElement("button")
        btnDelete.innerHTML="DELETE"
        btnDelete.classList.add("btnDelete")
          
         btnDelete.onclick=()=>
        {
            deletUser(element.id)
        }

       
       
         

        userAction.append(btnInfo,btnEdit,btnDelete)
         div.append(userName,userGmail)
         userImg.append(img,div)
         tr.append(userId,userImg,userNumber,userAge,userCity,userStatus,userAction)
         box.append(tr)
            });

        
}




let dialogADD=document.querySelector(".dialogADD")
let btnADD=document.querySelector(".btnADD")

let formADD=document.querySelector(".formADD")
 btnADD.onclick=()=>{
    dialogADD.showModal()
    
}

formADD.onsubmit=(event)=>{
 event.preventDefault()

 let newUsers=
 {
    "img": formADD["inpImg"].value,
    "name": formADD["inpName"].value,
    "gmail":  "Zane.Collier@hotmail.com",
    "PhoneNumbet": "336-980-6479 x8902",
    "age": formADD["inpAge"].value,
    "coutry": formADD["inpCountry"].value,
    "status": formADD["selectADDS"].value=="Active"?true:false,
    "action": "action 18",
    "id": "18"
 }
 postUser(newUsers)
 dialogADD.close()
 formADD.reset()
}
    




//edit

let dialogEdit=document.querySelector(".dialogEdit")
let formEdit=document.querySelector(".formEdit")
function editApp (user){
   formEdit["inpImg"].value=user.img,
   formEdit["inpName"].value=user.name,
   formEdit["inpAge"].value=user.age,
   formEdit["selectADDS"].value=user.status,
   formEdit["inpCountry"].value=user.coutry,

formEdit.onsubmit=(event)=>{
   event.preventDefault()
   let newTask=
   {
      img:formEdit["inpImg"].value,
      name:formEdit["inpName"].value,
      age:formEdit["inpAge"].value,
      status: formEdit["selectADDS"].value,
      coutry:formEdit["inpCountry"].value,
   }
   putUser(user.id,newTask)
   dialogEdit.close()
}
}


