
let box=document.querySelector(".box")

let api="https://66e583cf5cc7f9b6273d908c.mockapi.io/user"


async function getData(){
    try {
        const responce=await fetch(api)
        const data=await responce.json()
        get(data)
    } catch (error) {
        console.error(error);
        
    }
    }




function get (data) {
    box.innerHTML=""
    data.forEach((element) => {

        let tr=document.createElement("tr")
        let userChak=document.createElement("td")
         let  cheack=document.createElement("input")
         cheack.type="checkbox"


        let usersName=document.createElement("td")
        usersName.classList.add("usersName")
        let continer=document.createElement("div")
        continer.classList.add("continer")
        let imgs=document.createElement("img")
        imgs.src=element.img
        imgs.classList.add("img")


        let div=document.createElement("div")
        div.classList.add("div")
        let name=document.createElement("h3")
        name.textContent=element.name


        let email=document.createElement("p")
        email.textContent=element.email


        let userStatus=document.createElement("td")
        userStatus.textContent=element.status?"Active":"Inactive"
        if(element.status==true)
        {
            userStatus.style.color="green"

        }
        else{
            userStatus.style.color="red"
        }

        let userSity=document.createElement("td")
        userSity.textContent=element.city

        let userPhone=document.createElement("td")
        userPhone.textContent=element.contact

        let userAction=document.createElement("td")

        let btnInfo=document.createElement("img")
        btnInfo.src="./info.png"
        btnInfo.classList.add("btnImg")
        let btnEdit=document.createElement("img")
        btnEdit.src="./edit.png"
        btnEdit.classList.add("btnImg")

        btnEdit.onclick=() =>
        {
            editUser(element)
        }

        let deleteBtn=document.createElement("img")
        deleteBtn.src="./delete.png"
        deleteBtn.classList.add("btnImg")
        deleteBtn.onclick=()=>{
            deleteUser(element.id)

        }



        userChak.append(cheack)
        userAction.append(btnInfo,btnEdit,deleteBtn)
        div.append(name,email)
        continer.append(imgs,div)
        usersName.append(continer)
        tr.append(userChak,usersName,userStatus,userSity,userStatus,userPhone,userAction)
        box.append(tr)
    });
}

getData()


//search for

let searchInp=document.querySelector(".searchInp")
searchInp.oninput=async()=>{
    try {
        const responce=await fetch(`${api}?name=${searchInp.value}`);
        const data=await responce.json()  
        get(data) 
    } catch (error) {
        console.error(error);
    }
}


//delete
async function deleteUser(id){
    try {
       let responce= await fetch (`${api}/${id}` ,{method:"DELETE"});

    getData()   
    } catch (error) {
        console.error(error);
        
    }
}


//filter

let selectStatus=document.querySelector(".selectStatus")
selectStatus.onchange=async()=>
{
    try {
        let responce= await fetch(`${api}?status=${selectStatus.value}`)
        let data=await responce.json();
        get(data)
    } catch (error) {
        console.error(error);
        
    }

        
    }


    //add

    let addModal=document.querySelector(".addModal")
    let dialogAdd=document.querySelector(".dialogAdd")
    let formAdd=document.querySelector(".formAdd")


    addModal.onclick=()=>{
        dialogAdd.showModal();
        formAdd.onsubmit=(event)=>{
            event.preventDefault()
            let newUsers={
                img:formAdd["inpImg"].value,
                name:formAdd["inpName"].value,
                email:formAdd["inpEmail"].value,
                contact:formAdd["inpPhone"].value,
                city:formAdd["inpSity"].value,
                status:formAdd["selAdd"].value=="Active"?true:false,
            }
            addUser(newUsers)
            dialogAdd.close()
            formAdd.reset()
        }
    }


    async function addUser(user){
        try {
            let responce=await fetch(api,{
                method:"POST",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"},
                body:JSON.stringify(user)
            })
            getData()
        } catch (error) {
            console.error(error);
            
        }
    }



    //edit


    let dialogEdit=document.querySelector(".dialogEdit")

    let formEdit=document.querySelector(".formEdit")


    function editUser(user)
        {
            
                dialogEdit.showModal();
               
                formEdit["inpEditImg"].value=user.img
                formEdit["inpEditName"].value=user.name
                formEdit["inpEditEmail"].value=user.email
                formEdit["inpEditPhone"].value=user.contact
                formEdit["inpEditSity"].value=user.city
                formEdit["selEdit"].value=user.status?"Active":"Inactive"
                
                formEdit.onsubmit=(event)=>{
                    event.preventDefault()
                    let editedUser={
                        img:formEdit["inpEditImg"].value,
                        name:formEdit["inpEditName"].value,
                        email:formEdit["inpEditEmail"].value,
                        contact:formEdit["inpEditPhone"].value,
                        city:formEdit["inpEditSity"].value,
                        status:formEdit["selEdit"].value=="Active"?true:false,
                    }
                    editUserr(user.id,editedUser)
                    dialogEdit.close()
                }
                
            

        }


    async function editUserr(id,user){
        try {
            let responce=await fetch(`${api}/${id}`,{
                method:"PUT",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"},
                body:JSON.stringify(user)
            })
            getData()
        } catch (error) {
            console.error(error);
            
        }
    }
    

    //dark
    
    let btnDark=document.querySelector(".btnDark")
    let body=document.querySelector(".body")
    let table=document.querySelector(".table")

    btnDark.onclick=()=>{
        body.style.backgroundColor="black"
        table.style.backgroundColor="white"
    }


    //
    let btnLith=document.querySelector(".btnLith")
    btnLith.onclick=()=>{
        body.style.backgroundColor="white"
    }



    //sort 

    let imgSort=document.querySelector(".imgSort")
    imgSort.onclick=async()=>{
        try {
            let responce=await fetch(`${api}?_sort=name`)
            let data=await responce.json();
            get(data)
            
        } catch (error) {
            console.error(error);
            
        }
    }





