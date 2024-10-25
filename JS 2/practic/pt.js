let option=document.querySelector(".option");

let api="https://66e583cf5cc7f9b6273d908c.mockapi.io/user"
let addModal = document.querySelector(".addModal");
let madalka = document.querySelector(".madalka");
let close = document.querySelector(".close");



async function getData() {
    try {
        const response = await fetch(api);
        const data = await response.json();
        get(data);

    } catch (error) {
        console.error(error);
        
    }
}


close.onclick =() => {
    madalka.close()
}

addModal.onclick =() => {
    madalka.showModal()
}



function get(data) {
    option.innerHTML = ""
    data.forEach((element )=> {
         let tr=document.createElement("tr")
         let img=document.createElement("img")
         img.src=element.img
         img.classList.add("img")
         

         let userName=document.createElement("td")
         userName.innerHTML=element.name

         let userAge=document.createElement("td")
         userAge.innerHTML=element.age

         let userCity=document.createElement("td")
         userCity.innerHTML=element.city


         let userStatus=document.createElement("td")
         userStatus.innerHTML=element.status  ? "Active"  : "Inactive"

         let butDelete=document.createElement("button")
         butDelete.innerHTML="Delete"
         butDelete.classList.add("butDelete")

         butDelete.onclick=()=>{
             userDEl(element.id)

         }
           






         let butEdite=document.createElement("button")
         butEdite.innerHTML="Edit"
         butEdite.classList.add("butEdite")
           


         userStatus.append(butDelete,butEdite)
         tr.append(img,userName,userAge,userCity,userStatus)
         option.append(tr)
         

    });
}

getData()






//Delete

async function userDEl(id) {
    try {
        await fetch(`${api}/${id}`, {
            method: 'DELETE',
        });
        getData()
    } catch (error) {
        console.error(error);
    }
    
}



//post 

let Add = document.querySelector(".Add")
let addImg = document.querySelector(".AddImg")
let addName = document.querySelector(".AddName")
let addCity = document.querySelector(".AddCity")



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
        age:addAge.value,
        status:addStatus.value ? "Active": "Inactive",
    }         
    poatuser(mewUser) 
    dialog1.close()
    addImg.value=""
    addName.value=""
    addCity.value=""
    addAge.value=""
    addStatus.value=""
  }



