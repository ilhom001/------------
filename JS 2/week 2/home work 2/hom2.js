let box = document.querySelector(".box")
let Api = "https://66e583cf5cc7f9b6273d908c.mockapi.io/ToDo"
let butAddMember=document.querySelector(".butAddMember")
let dialog1=document.querySelector(".dialog1")
dialog1.classList.add("dialog1")
let input1=document.querySelector(".input1")


async function getData() {
    try {
        let response = await fetch(Api)
        let data = await response.json()
        get(data)
    } catch (error) {
        console.error(error);
    }
}


function get(data) {
    box.innerHTML = ""
    
    data.forEach(element => {

    
        let tr = document.createElement("tr")
        tr.classList.add("tr")

        let cart = document.createElement("td")
        cart.classList.add("cart")

        let img = document.createElement("img")
        img.classList.add("img")
        img.src = element.img

        let name = document.createElement("h1")
        name.innerHTML = element.name
        name.classList.add("name")

        let email = document.createElement("p")
        email.innerHTML = element.name
        email.classList.add("email")

        let butTD=document.createElement("td")
        let butEdit=document.createElement("button")
        butEdit.innerHTML= `<svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"></path>
</svg>`
       butEdit.classList.add("butEdit")
        let butDelete=document.createElement("button")
        butDelete.innerHTML=`<svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path>
</svg>`
butDelete.classList.add("butDelete")




    butDelete.onclick=()=>{
        delUser(element.id)
    }

    butEdit.onclick=()=>{
        dialog1.showModal()
    }


    


   
            

        let impSearch=document.querySelector(".impSearch")

        impSearch.oninput= async()=>
        {
            try {
                 let response=await fetch(`${Api}?name=${impSearch.value}`)
                 let data=await response.json()
                 get(data)
            } catch (error) {
                console.error(error);
                
            }
        }

           
        let tdNameEmail = document.createElement("div")
        tdNameEmail.classList.add("NameEmail")

        let avaDiv = document.createElement("div")
        avaDiv.classList.add("avaDiv")
        
        
        let tdJob = document.createElement("td")
        tdJob.classList.add("tdJob")
        tdJob.innerHTML = element.jobType
        
        
        let tdSTatus = document.createElement("td")
        tdSTatus.innerHTML = element.status ? "Active" : "Inactive"
        if (tdSTatus == true) {
            tdSTatus.classList.add("active")
        }
        else {
            tdSTatus.classList.add("inactive")
        }
        tdSTatus.classList.add("tdSTatus")
        
        let tdDate = document.createElement("td")
        tdDate.classList.add("tdDate")
        tdDate.innerHTML = element.date.slice(0, 10).replace("-", ":")
        
        tdNameEmail.append(name, email)
        avaDiv.append(img)
        cart.append(avaDiv,tdNameEmail)
        box.append(tr)
        butTD.append(butEdit,butDelete)
        butAddMember.append(dialog1)
        tr.append(cart, tdJob, tdSTatus, tdDate,butTD)

    });
}
getData();


///delete

async function delUser(id) 
{
   try {
      
    let response=await fetch(`${Api}/${id}`,{
            method:"DELETE"
   }) 
    
   getData()
    
   } catch (error) {
    console.log(error);
    
   }   
}




//add

// async function addUser(id) {
// try {
//     let response=await fetch(url,{
//         method:"POST",
//         headers {
//             Accept:"application/json",
//             "Content-Type:","application/json"
//         }

//     })
// } catch (error) {
    
// }
    
// }

//add// == POST

async function  poatuser(user) {
    try {
        await fetch(Api ,{
            method:"POST",
            headers :{
              Accept :"application/json",
             "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })  
        getData()
    } catch (error) {
        console.error(error);
        
    }
}



//edit

 async function  editUser(id,user) {
    try {
        const response =await fetch(`${Api}/${id}`,{
            method:"PUT",
            headers :{
                Accept :"application/json",
               " Content-Type": "application/json",
              },
              body: JSON.stringify(user),
        })
    } catch (error) {
        console.log(error);
        
    }
 }

 


 let  inpImg =document.querySelector(".inpImg")
 let  inpName=document.querySelector(".inpName")
 let inpEmail =document.querySelector(".inpEmail")
 let  inpJob=document.querySelector(".inpJob")
 let select=document.querySelector(".select")
 let  inpDate=document.querySelector(".inpDate")
 let Close1=document.querySelector(".Close1")







 Close1.onclick=()=>
    {
        dialog1.close()
    }



 butAddMember.onclick=()=>
    {
        dialog1.showModal()
    

    input1.onclick=()=>{
        let mewUser={
            img:inpImg.value,
            name:inpName.value,
            email:inpEmail.value,
            jobType:inpJob.value,
            status:select.value,
            date:inpDate.value,
        }         
        poatuser(mewUser) 
    }
   
} 




















 







