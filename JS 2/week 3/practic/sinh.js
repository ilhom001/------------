import { deletUser,postUser,putUser } from "./assin.js";



let box=document.querySelector(".box")



export function get (data)
{
    box.innerHTML=""
    data.forEach((element) => {
        let tr=document.createElement("tr")
        let userId=document.createElement("td")
        userId.innerHTML=element.id
        let userName=document.createElement("td")
        userName.innerHTML=element.name
        let userAge=document.createElement("td")
        userAge.innerHTML=Math.abs(2024-new Date(element.age).getFullYear())

        let userCitu=document.createElement("td")
        userCitu.innerHTML=element.city

        let userStatus=document.createElement("td")
        userStatus.innerHTML=element.status ? true: false

        let userAction=document.createElement("td")

        let imgEdit=document.createElement("img")
        imgEdit.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlJhfoB2gcSqgAAv5kkvzrk-NKEJBiGKY0Yw&s"
        imgEdit.classList.add("imgEdit")
    
        imgEdit.onclick=()=>
        {
            dialogEdit.showModal()
            editApp(element)
        }




        let imgDelete=document.createElement("img")
        imgDelete.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrYR0IkFjrZpo_0F8sRxBVOYYhpcIFadLlbw&s"
        imgDelete.classList.add("imgDelete")

 
        imgDelete.onclick=()=>
        {
            deletUser(element.id)
        }

        userAction.append(imgEdit,imgDelete)
        tr.append(userId,userName,userAge,userCitu,userStatus,userAction)
        box.append(tr)
    });
}



//add

let btnAdd=document.querySelector(".btnAdd")
let dialogADD=document.querySelector(".dialogADD")
let formADD=document.querySelector(".formADD")

btnAdd.onclick=()=>
{
    dialogADD.showModal()
}

formADD.onsubmit=(event)=>
{
 event.preventDefault()

 let newUser={
    name:formADD["inpName"].value,
    age:formADD["inpAge"].value,
    city:formADD["inpCity"].value,
    status:formADD["selectADD"].value,
        "action": "Diesel",
    "id": "21"

 }
 postUser(newUser)
 dialogADD.close()
 formADD.reset()
}





//edit

let dialogEdit=document.querySelector(".dialogEdit")
let formEdit=document.querySelector(".formEdit")



function editApp(user)
{
    formADD["inpName"].value=user.name,
    formADD["inpAge"].value=user.age,
    formADD["inpCity"].value=user.city
    
   
    formEdit.onsubmit=(event)=>{
      event.preventDefault()
      let newTask= {
        name: formADD["inpName"].value,
        age:formADD["inpAge"].value,
        city: formADD["inpCity"].value,
        status:formADD["selectEdit"].value
      }
      putUser(user.id,newTask)
      dialogEdit.close()
    }
}