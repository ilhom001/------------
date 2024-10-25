
let all2=document.querySelector(".all2")
let close = document.querySelector(".close")
let addImg = document.querySelector(".addImg")
let addName = document.querySelector(".addName")
let addCity = document.querySelector(".addCity")
let addStatus = document.querySelector(".addStatus")
let Add = document.querySelector(".Add")
let search = document.querySelector(".search")
let select = document.querySelector(".select")
 let diaEdite=document.querySelector(".diaEdite")

let api="https://66e583cf5cc7f9b6273d908c.mockapi.io/user"

async function  gerData() 
{
  try {
    const response =await fetch(api)
    const data =await response.json()
    get(data)
  } catch (error) {
    console.error(error);
    
      console.log(data);
  }   

   
}


gerData()
 

  function  get(data) 

{
    all2.innerHTML = ""
    data.forEach((element )=> {
    
        

   let contenit=document.createElement("tr")
   let userImg=document.createElement("td")
   let img = document.createElement("img")
   img.classList.add("img")
   img.src = element.img

   let userName= document.createElement("td")
   userName.innerHTML=element.name
   let userSity=document.createElement("td")
   userSity.innerHTML=element.city
   let userStatus=document.createElement("td")
   userStatus.innerHTML=element.status ? "Active":"Inactive"
   if(element.status == true){
    userStatus.style.color = "green"
   }
  else{
    userStatus.style.color = "red"
  }


  let Delete = document.createElement("button")
   Delete.classList.add("delete")
   Delete.innerHTML="Delete"


   Delete.onclick=()=>{
    deleteUser(element.id)
  }
  
  


   let Edit = document.createElement("button")
   Edit.classList.add("edit")
   Edit.innerHTML="Edit"
   

   Edit.onclick=()=>{
     editUser(element)
   }
    

   let butCheng=document.querySelector(".butCheng")
   
   butCheng.onclick=()=>{
    diaEdite.close()
   }





   userImg.append(img)
   contenit.append(userImg,userName,userSity,userStatus, Delete, Edit
   )
   all2.append(contenit)

       }); 
}
gerData()

let plus=document.querySelector(".plus")
let dialog1=document.querySelector(".dialog1")

plus.onclick=()=>
{
  dialog1.showModal()
}

close.onclick=()=>{
  dialog1.close()
}





//post dabavit  fun

async function  poatuser(user) {
  try {
      await fetch(api ,{
          method:"POST",
          headers :{
            Accept :"application/json",
           "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
      })  
      gerData()
  } catch (error) {
      console.error(error);
      
  }
}


//post logica
Add.onclick=()=>{
  let mewUser={
      img:addImg.value,
      name:addName.value,
      city:addCity.value,
      status:addStatus.value ? "Active": "Inactive",
  }         
  poatuser(mewUser) 
  dialog1.close()
  addImg.value=""
  addName.value=""
  addCity.value=""
  addStatus.value=""
}



// Delete


async function deleteUser(id){
  try {
    await fetch(`${api}/${id}`, {
      method: 'DELETE',
    });
    gerData()
  } catch (error) {
    console.error(error);
  }
}



// Search


search.oninput= async()=>
  {
      try {
           let response=await fetch(`${api}?name=${search.value}`)
           let data=await response.json()
           get(data)
      } catch (error) {
          console.error(error);
          
      }
  }


  let true1=document.querySelector(".true1")


  true1.onclick= async ()=>{
    try {
        let repp=await fetch(`${api}?status=true`)
    let data=await repp.json()
    get(data)
    } catch (error) {
      console.error(error);
      
      
    }
  

  }

  let false1=document.querySelector(".false1")
  false1.onclick= async ()=>{
    try {
        let repp=await fetch(`${api}?status=false`)
    let data=await repp.json()
    get(data)
    } catch (error) {
      console.error(error);
      
      
    }
  

  }


  let allMember=document.querySelector(".allMember")
  allMember.onclick=()=>
    {
      gerData()
    }


 


  //edit   put
   
  let inpEditImg=document.querySelector(".inpEditImg")
  let inpnameEdit=document.querySelector(".inpnameEdit")
  let InpEditCity=document.querySelector(".InpEditCity")
  let butCheng=document.querySelector(".butCheng")
  function editUser (user)
  {
    diaEdite.showModal()
    inpEditImg.value=user.img
    inpnameEdit.value=user.name
    InpEditCity.value=user.city
    butCheng.onclick=()=>{
         let newUser=
    {
      img:inpEditImg.value,
      name:inpnameEdit.value,
      city:InpEditCity.value,
    }
    putUser(user.id,newUser) 
    }

  }

  async function putUser(id,user) {
    try {
        await fetch(`${api}/${id}`,{
            method:"PUT",
            headers :{
              Accept :"application/json",
             "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })  
        gerData()
    } catch (error) {
        console.error(error);
        
    }
  }





