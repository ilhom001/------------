
let box=document.querySelector(".box")

let api="https://66e583cf5cc7f9b6273d908c.mockapi.io/ToDo"
let massiv=[]

async function getData(){
    try {
        let response= await fetch(api)
        let data=await response.json()
        get (data)
    } catch (error) {
        console.error(error);
        
    }
}



function get (data) {
    box.innerHTML = ""
    data.forEach((element) => {
        let tr=document.createElement('tr')

        let th1=document.createElement('td')
        let inpChek=document.createElement('input')
        inpChek.type='checkbox'

        inpChek.onclick=()=>{
            if(inpChek.checked)
            {
                massiv.push(element.id)
            }
            else{
                massiv=massiv.filter(item=>item!=element.id)
            }
            deleteShek.onclick=()=>{
                massiv.forEach((id)=>{
                    userDelete(id)
                    massiv=[]
                
                    


                })
            }


                 
        }

        let userJob = document.createElement('td')
        userJob.innerHTML=element.job
        let userFormData=document.createElement('td')
        userFormData.innerHTML= new Date (element.Formdata).toLocaleDateString()

        let userToData=document.createElement('td')
        userToData.innerHTML= new Date (element.Todata).toLocaleDateString()


        let userPrice=document.createElement('td')
        userPrice.innerHTML=element.price

        let userSmolPrice=document.createElement('td')
        userSmolPrice.innerHTML=element.smolPrice

        let userStatus=document.createElement('td')
        userStatus.innerHTML=element.status?"Active":"Inactive"

        let userAction=document.createElement('td')


        let btnEdit=document.createElement('button')
        btnEdit.innerHTML='Edit'
        btnEdit.classList.add("btnEdit")
        btnEdit.onclick=()=>{
            userEdit(element)
        }



        let btnDelete=document.createElement('button')
        btnDelete.innerHTML='Delete'
        btnDelete.classList.add("btnDelete")
        btnDelete.onclick=()=>{
            userDelete(element.id)
        }



        let btnInfo=document.createElement('button')
        btnInfo.innerHTML='Info'
        btnInfo.classList.add("btnInfo")
        btnInfo.onclick=()=>{
            infoUser(element)
            
        }


        th1.append(inpChek)
        userAction.append(btnEdit,btnDelete,btnInfo)

        tr.append(th1,userJob,userFormData,userToData,userPrice,userSmolPrice,userStatus,userAction)
        box.append(tr)
        
    });
}

getData()



//delete

async function userDelete(id){
    try {
        let response= await fetch(`${api}/${id}`,{ method:'DELETE' })
           getData()
       
        
    } catch (error) {
        console.error(error);
        
    }
}


//search

let search=document.querySelector(".search")

search.oninput=async()=>{
    let searchTerm=search.value
    let response= await fetch(`${api}?job=${searchTerm}`)
    let data=await response.json()
    get (data)
}

//add

let addModal=document.querySelector(".addModal")
let dialogAdd=document.querySelector(".dialogAdd")
let formAdd=document.querySelector(".formAdd")

addModal.onclick=()=>{
    dialogAdd.showModal()
    formAdd.onsubmit=(ev)=>{
        ev.preventDefault()
        let  newUser={
            job: formAdd["inpJob"].value,
            Formdata: formAdd["inpFormDate"].value,
            Todata: formAdd["inpToData"].value,
            price: formAdd["inpPrice"].value,
            smolPrice: formAdd["inpSmolPrice"].value,
            status: formAdd["selAdd"].value=="Active" ? true:false,
          

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
        getData()
    } catch (error) {
        console.error(error);
        
    }
}


// new Date(user.Todata).toISOString().split("T")[0],
//edit

let dialogEdit=document.querySelector(".dialogEdit")
let formEdit=document.querySelector(".formEdit")

function userEdit(user){
    dialogEdit.showModal()
    formEdit["inpJobEdit"].value=user.job
    formEdit["inpFormDateEdit"].value= new Date(user.Formdata).toISOString().split("T")[0],
    formEdit["inpToDataEdit"].value=new Date(user.Todata).toISOString().split("T")[0],
    formEdit["inpPriceEdit"].value=user.price
    formEdit["inpSmolPriceEdit"].value=user.smolPrice
    formEdit["selEdit"].value=user.status?"Active":"Inactive"

    formEdit.onsubmit=(ev)=>{
        ev.preventDefault()
        let updatedUser={
            id: user.id,
            job: formEdit["inpJobEdit"].value,
            Formdata: formEdit["inpFormDateEdit"].value,
            Todata: formEdit["inpToDataEdit"].value,
            price: formEdit["inpPriceEdit"].value,
            smolPrice: formEdit["inpSmolPriceEdit"].value,
            status: formEdit["selEdit"].value=="Active" ? true:false,
        }
        editUser(user.id,updatedUser)
        dialogEdit.close()
    }
}



async function editUser(id,user){
    try {
        let response=await fetch(`${api}/${id}`,{
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






    //cheak

    let deleteShek=document.querySelector(".deleteShek")



    //info

    let dialogInfo=document.querySelector(".dialogInfo")
    let h1InfoJob=document.querySelector(".h1InfoJob")
    let formInfo=document.querySelector(".formInfo")
    let toInfo=document.querySelector(".toInfo")


    async function infoUser(user) 
    {
        dialogInfo.showModal()
        h1InfoJob.innerHTML=user.job
        formInfo.innerHTML=new Date (user.Formdata).toLocaleDateString() 
        toInfo.innerHTML= new Date (user.Todata).toLocaleDateString()

        
    }

    //sort by
 

    let btnSorted= document.querySelector(".btnSorted")


    btnSorted.onclick=async()=>{
        try {
            let responce=await fetch (`${api}?sortBy=job`,)
            let data= await responce.json()
            get(data)
            
        } catch (error) {
            console.error(error);
            
        }
    }
