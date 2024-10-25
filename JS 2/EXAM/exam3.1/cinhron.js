import { deleteUser, postUser, putUser } from "./assinh.js";

let box = document.querySelector(".box")

export function get(data) {
    box.innerHTML = "";
    data.forEach((element) => {

        let tr = document.createElement("tr")

        let userCheckbox = document.createElement("td")
        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"





        let userImg = document.createElement("td")
        let img = document.createElement("img")
        img.src = element.img
        img.classList.add("imggg")


        let div = document.createElement("div")
        div.classList.add("divv")
        let userName = document.createElement("td")
        userName.innerHTML = element.name

        let userEmail = document.createElement("td")
        userEmail.innerHTML = element.email

        let userStatus = document.createElement("td")
        userStatus.innerHTML = element.status ? "Active" : "Inactive"

        let userPayment = document.createElement("td")
        userPayment.innerHTML = element.payment ? "paid" : "unpaid"

        let userAmount = document.createElement("td")
        userAmount.innerHTML = element.amount

        let userAction = document.createElement("td")

        let madal = document.createElement("button")
        madal.innerHTML = ">>>>>>>"




        madal.onclick = () => {
            dialogAll.showModal()

            btnDelete.onclick = () => {
                deleteUser(element.id)
                dialogAll.close()
            }

            btnEdit.onclick = () => {
                editUser(element)
                dialogAll.close()
            }

        }




        userAction.append(madal)
        userCheckbox.append(checkbox)

        div.append(userName, userEmail)
        userImg.append(img, div)
        tr.append(userCheckbox, userImg, userStatus, userPayment, userAmount, userAction)
        box.append(tr)
    });

}

let btnDelete = document.querySelector(".btnDelete")

let dialogAll = document.querySelector(".dialogAll")



//ad

let btnAdd = document.querySelector(".btnAdd")
let dialogAdd = document.querySelector(".dialogAdd")
let formAdd = document.querySelector(".formAdd")

btnAdd.onclick = () => {
    dialogAdd.showModal()
}
formAdd.onsubmit = (e) => {
    e.preventDefault()
    let newUser = {
        img: formAdd["inpImg"].value,
        name: formAdd["inpName"].value,
        email: formAdd["inpEmail"].value,
        status: formAdd["selectActiv"].value == "Active" ? true : false,
        payment: formAdd["selectPaid"].value == "paid" ? true : false,
        amount: formAdd["inpAmount"].value,

    }
    postUser(newUser)
    dialogAdd.close()
}




//edit

let dialogEdit = document.querySelector(".dialogEdit")
let formEdit = document.querySelector(".formEdit")

let btnEdit = document.querySelector(".btnEdit")


function editUser(user) {
    dialogEdit.showModal()

    formEdit["inpImg"].value=user.img
    formEdit["inpName"].value=user.name
    formEdit["inpEmail"].value=user.email
    formEdit["inpAmount"].value=user.amount
    formEdit["selectActiv"].value=user.status?"Active":"Inactive"
    formEdit["selectPaid"].value=user.payment ?"paid":"unpaid"

    formEdit.onsubmit=(e)=>{

        e.preventDefault()
        let newUser={
        img:formEdit["inpImg"].value,
        name:formEdit["inpName"].value,
        email:formEdit["inpEmail"].value,
        status:formEdit["selectActiv"].value=="Active"?true:false,
        payment:formEdit["selectPaid"].value=="paid"?true:false,
        amount:formEdit["inpAmount"].value,
    }
    putUser(user.id,newUser)
    dialogEdit.close()
    }

}