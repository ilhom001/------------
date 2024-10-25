
let box=document.querySelector(".box")
let  deleteImg=document.querySelector(".deleteImg")
let api="https://66e583cf5cc7f9b6273d908c.mockapi.io/user"
let massiv=[]

async function getdata(){
    try {
        let response= await fetch(api)
        let data=await response.json()
        get (data)
    } catch (error) {
        console.error(error);
        
    }
}




function get(data) {
    box.innerHTML=""
    data.forEach((element )=> {

        let tr=document.createElement("tr")
       
         let tdId=document.createElement("td")
        tdId.innerHTML=element.id

        let tdChek=document.createElement("td")
        let checkbox=document.createElement("input")
        checkbox.type="checkbox"
        checkbox.onclick=()=>{
            if(checkbox.checked)
            {
                massiv.push(element.id)
            }
            else{
                massiv=massiv.filter(item=>item!=element.id)
            }
            deletChek.onclick=()=>{
                massiv.forEach((id)=>{
                    userDelete(id)
                    massiv=[]


                })
            }


                 
        }



        let td1=document.createElement("td")

        let divs=document.createElement("div")

        let userName=document.createElement("h3")
        userName.innerHTML=element.name
        let userPhone=document.createElement("p")
        userPhone.innerHTML=element.phone


        let content=document.createElement("td")

        let divs2=document.createElement("div")
        let userAddress=document.createElement("p")
        userAddress.innerHTML=element.city

        let userEmail=document.createElement("p")
        userEmail.innerHTML=element.email

        let userStatus=document.createElement("td")
        userStatus.innerHTML=element.status?"Active":"Disabled"

        let userPrice=document.createElement("td")
        userPrice.innerHTML=element.price

        let userAction=document.createElement("td")
        let images=document.createElement("img")
        images.src="./dfs.png"
        images.classList.add("images")
        images.onclick=()=>{
            dialogAction.showModal()
            imgEdit.onclick=()=>{
                userEdit(element)
            }
            deleteImg.onclick=()=>{
                userDelete(element.id)
            } 
        }


       

      



        td1.appendChild(divs)
        divs.append(userName,userPhone)

        divs2.append(userAddress,userEmail)
        content.appendChild(divs2)
   tdChek.appendChild(checkbox)
        userAction.appendChild(images)
        tr.append(tdChek,tdId,td1,content,userStatus,userPrice,userAction)

     

        box.appendChild(tr)
     
        
    });
}

getdata()   


let dialogAction=document.querySelector(".dialogAction")



//search
let search=document.querySelector(".search")


search.oninput= async()=>{
    try {
        let response= await fetch(`${api}?name=${search.value}`)
        let data=await response.json()
  
        get(data)
        
    } catch (error) {
        console.error(error);
        
    }
}

//delete



async function userDelete(id){
    try {
        let response=await fetch(`${api}/${id}`,{  method:"DELETE"})
      getdata()
            
    } catch (error) {
        console.error(error);
        
    }
}


//add

let addModal=document.querySelector(".addModal")

let  dialogAdd=document.querySelector(".dialogAdd")
let formAdd=document.querySelector(".formAdd")


addModal.onclick=()=>{
    dialogAdd.showModal()
    formAdd.onsubmit=(e)=>{
    e.preventDefault()
    let newUser={
    name:formAdd["inpName"].value,
    phone:typeof +formAdd["inpPhone"].value!="s" ? formAdd["inpPhone"].value : 0,
    city:formAdd["inpCity"].value,
    email:formAdd["inpEmail"].value,
    status:formAdd["selectAdd"].value=="Active"?true : false,
    price:formAdd["inpPrice"].value,
    }
    addUser(newUser)
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
        getdata()
    } catch (error) {
        console.error(error);
        
    }
}


//filter 
let selectSort=document.querySelector(".selectSort")


selectSort.onchange=async()=>
{
    try {
        let responce= await fetch(`${api}?status=${selectSort.value}`)
        let data=await responce.json();
        get(data)
    } catch (error) {
        console.error(error);
        
    }

        
    }



    //sort by

    let imgTH=document.querySelector(".imgTH")
    imgTH.onclick=async()=>{
        try {
            let responce= await fetch(`${api}?sort=name`)
            let data=await responce.json();
            get(data)
        } catch (error) {
            console.error(error);
            
        }
    }


    //edit

    let imgEdit=document.querySelector(".imgEdit")
    let  dialogEdit=document.querySelector(".dialogEdit")

    let formEdit=document.querySelector(".formEdit")

 
    
    function userEdit(user){
        dialogEdit.showModal()
        formEdit["inpNameEdit"].value=user.name
        formEdit["inpPhoneEdit"].value=user.contact
        formEdit["inpCityEdit"].value=user.city
        formEdit["inpEmailEdit"].value=user.email
        formEdit["selectEdit"].value=user.status?"Active":"Disabled"
        formEdit["inpPriceEdit"].value=user.prise
    
        formEdit.onsubmit=(e)=>{
            e.preventDefault()
            let editedUser={
               
                name:formEdit["inpNameEdit"].value,
                contact:formEdit["inpPhoneEdit"].value,
                city:formEdit["inpCityEdit"].value,
                email:formEdit["inpEmailEdit"].value,
                status:formEdit["selectEdit"].value=="Active"?true : false,
                prise:formEdit["inpPriceEdit"].value,
            }
            editUser(user.id,editedUser)
            dialogEdit.close()
            formEdit.reset()
        }
    }


   
    async function editUser (id,user){
        try {
            let responce=await fetch(`${api}/${id}`,{
                method:"PUT",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"},
                body:JSON.stringify(user)
            })
            getdata()
        } catch (error) {
            console.error(error);
            
        }
    }

    //chack

    let deletChek=document.querySelector(".deletChek")


    






