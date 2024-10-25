import { deleteUser,postUser,putUser } from "./assin.js";

let box=document.querySelector(".box")

export function get(data)
{
    box.innerHTML = ""
    data.forEach((element )=> {
        let tr=document.createElement("tr")

        let userId=document.createElement("td")
        userId.innerHTML=element.id


        let userImg=document.createElement("td")
        let img=document.createElement("img")
        img.src=element.img
        img.classList.add("img1")

        let userName=document.createElement("td")
        userName.innerHTML=element.name
        let userPhone=document.createElement("td")
        userPhone.innerHTML=element.PhoneNumbet

        let userAge=document.createElement("td")
        userAge.innerHTML=element.age

        let userCity=document.createElement("td")
        userCity.innerHTML=element.coutry

        let userStatus=document.createElement("td")
        userStatus.innerHTML=element.status?"Active":"Inactive"

        let userAction=document.createElement("td")

        let btnEdit=document.createElement("button")
        btnEdit.innerHTML="Edit"
        btnEdit.classList.add("btnEdit")

        btnEdit.onclick=()=>{
            dialogEdit.showModal()
            editApp(element)

        }



        let btnDelete=document.createElement("button")
        btnDelete.innerHTML="Delete"
        btnDelete.classList.add("btnDelete")
        btnDelete.onclick=()=>{
            deleteUser(element.id)
        }

        userAction.append(btnEdit,btnDelete)
        userImg.append(img)
        tr.append(userId,userImg,userName,userAge,userCity,userPhone,userStatus,userAction)
        box.append(tr)


        
    });
}

let btnADD=document.querySelector(".btnADD")
let dialogAdd=document.querySelector(".dialogAdd")
let formAdd=document.querySelector(".formAdd")

btnADD.onclick= ()=>{
    dialogAdd.showModal()
}

formAdd.onsubmit= (e)=>{
    e.preventDefault()
    let newUser={
        img:formAdd["inpImg"].value,
        name:formAdd["inpName"].value,
        PhoneNumbet:formAdd["inpPhone"].value,
         age:formAdd["inpAge"].value,
         coutry:formAdd["inpCity"].value,
        status:formAdd["selectAdd"].value,
         "action": "Diesel",
         "id": "21"
    
      
      
    }
    postUser(newUser)
    dialogAdd.close()
    formAdd.reset()

}




// edit
let dialogEdit=document.querySelector(".dialogEdit")
let formEdit=document.querySelector(".formEdit")
 function editApp(user) {
    dialogEdit.showModal()
    formEdit["inpImgEdit"].value=user.img
    formEdit["inpNameEdit"].value=user.name
    formEdit["inpAgeEdit"].value=user.age
    formEdit["inpCityEdit"].value=user.coutry
    formEdit["inpPhoneEdit"].value=user.PhoneNumbet
    formEdit["selectEdit"].value=user.status
 
 formEdit.onsubmit= (e)=>{
    e.preventDefault()
    let updatedUser={
        img:formEdit["inpImgEdit"].value,
        name:formEdit["inpNameEdit"].value,
        PhoneNumbet:formEdit["inpPhoneEdit"].value,
        age:formEdit["inpAgeEdit"].value,
        coutry:formEdit["inpCityEdit"].value,
        status:formEdit["selectEdit"].value,
        "action": "Diesel",
    }
    putUser(user.id,updatedUser)
    dialogEdit.close()
}
 }





