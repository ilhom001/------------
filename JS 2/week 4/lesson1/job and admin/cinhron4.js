
import { userDelete ,userAdd,putUser} from "./assinhron4.js";
let box=document.querySelector(".box")


export function get (data) {

    box.innerHTML=""
    data.forEach((element) => {
        let tr = document.createElement("tr");
        let userTitle=document.createElement("td");
        userTitle.innerHTML=element.Tittle


        let userCatigoty=document.createElement("td");
        userCatigoty.innerHTML=element.Caticory

        let userLevel=document.createElement("td");
        userLevel.innerHTML=element.Level

        let userLocation=document.createElement("td")
        userLocation.innerHTML=element.Location

        let userPhone=document.createElement("td");
        userPhone.innerHTML=element.PhoneNumber

        let userAPPlications=document.createElement("td");
        userAPPlications.innerHTML=element.Application

        let userClosing=document.createElement("td");
        userClosing.innerHTML=element.ClosingData 
        
        let userAction=document.createElement("td");

        let btnEdit=document.createElement("button");
        btnEdit.innerHTML="Edit";

        btnEdit.onclick=()=>{
            dialogEdit.showModal();
            editApp(element)
        }



    

        let btnDelete=document.createElement("button");
        btnDelete.innerHTML="Delete";

        btnDelete.onclick=()=>{
            userDelete(element.id)
        }

        userAction.append(btnEdit,btnDelete)
        tr.append(userTitle,userCatigoty,userLevel,userLocation,userPhone,userAPPlications,userClosing,userAction);
        box.append(tr);
    });
}


let  dialogAdds=document.querySelector(".dialogAdds")

let btnAdd=document.querySelector(".btnAdd")

let formADD=document.querySelector(".formADD")
btnAdd.onclick=()=>
 {

dialogAdds.showModal()
 }
 formADD.onsubmit=(event)=>{
     event.preventDefault();
     let newuser={
        Tittle:formADD["inpTitle"].value,
        Caticory:formADD["inpCatigori"].value,
        Level:formADD["inpLevel"].value,
        Location:formADD["inpLocation"].value,
        PhoneNumber:formADD["inpNumber"].value,
        Application:formADD["inpAppliction"].value,
     }
     userAdd(newuser)
     dialogAdds.close()
     formADD.reset()
 }





 //edit

 let dialogEdit=document.querySelector(".dialogEdit")
 let formEdit=document.querySelector(".formEdit")


 function editApp(user) {
    dialogEdit.showModal()
    formEdit["inpTitle"].value=user.Tittle
    formEdit["inpCatigori"].value=user.Caticory
    formEdit["inpLevel"].value=user.Level
    formEdit["inpLocation"].value=user.Location
    formEdit["inpNumber"].value=user.PhoneNumber
    formEdit["inpAppliction"].value=user.Application
 
 formEdit.onsubmit= (e)=>{
    e.preventDefault()
    let updatedUser={
        Tittle:formEdit["inpTitle"].value,
        Caticory:formEdit["inpCatigori"].value,
        Level:formEdit["inpLevel"].value,
        Location:formEdit["inpLocation"].value,
        PhoneNumber:formEdit["inpNumber"].value,
        Application:formEdit["inpAppliction"].value,
        
    }
    putUser(user.id,updatedUser)
    dialogEdit.close()
    formEdit.reset()
}
 }



