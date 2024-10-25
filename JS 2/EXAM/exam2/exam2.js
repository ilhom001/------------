
 let box=document.querySelector(".box");
 let api="https://66e583cf5cc7f9b6273d908c.mockapi.io/ToDo"
 let dialog1=document.querySelector(".dialog1")
 let inpSearch=document.querySelector(".inpSearch")
 let dialog2=document.querySelector(".dialog2")
 let but1=document.querySelector(".but1")
async function  gerData() 
{
  try {
    const response =await fetch(api)
    const data =await response.json()
    get(data)
  } catch (error) {
    console.error(error);
    
     
  }   

   
}

function get(data)
{
    box.innerHTML = ""
    data=data.forEach((element )=> {
        
        let tr=document.createElement("tr");
        let title=document.createElement("td")
        title.innerHTML=element.title
        let  usercatigoriya=document.createElement("td")
        usercatigoriya.innerHTML=element.catigoriya
        let userlevel=document.createElement("td")
        userlevel.innerHTML=element.level
        let userlocation=document.createElement("td")
        userlocation.innerHTML=element.location
        let userphone=document.createElement("td")
        userphone.innerHTML=element.PhoneNumbet
        let userAction=document.createElement("td")
       
        let deleteButton=document.createElement("button")
        deleteButton.innerHTML="Delete"

        deleteButton.onclick=()=>{
            deleteUser(element.id)
          }


        let editButton=document.createElement("button")
        editButton.innerHTML="Edit"

        editButton.onclick=()=>{
          onInput.showModal()
      
         }
         


        userAction.append(editButton,deleteButton)
        tr.append(title,usercatigoriya,userlevel,userlocation,userphone,userAction)
        box.append(tr)
        console.log(box);
        
    });

}
   but1.onclick=()=>{
            dialog1.showModal()
          }

gerData()



let inpTitle=document.querySelector(".inpTitle")
let inpCatigoriya=document.querySelector(".inpCategory")
let inpLevel=document.querySelector(".inpLevel")
let inpLocation=document.querySelector(".inpLocation")
let inpPhone=document.querySelector(".inpPhone")
let butAdd=document.querySelector(".butAdd")




// delete

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




 


  
  







  //search
  inpSearch.oninput= async()=>
    {
        try {
             let response=await fetch(`${api}?title=${inpSearch.value}`)
             let data=await response.json()
             get(data)
        } catch (error) {
            console.error(error);
            
        }
    }
 

//post
butAdd .onclick=()=>{
        let mewUser={
            title:inpTitle.value,
            catigoriya:inpCatigoriya.value,
            level:inpLevel.value,
            location:inpLocation.value,
            PhoneNumbet:inpPhone.value,
           
        } 
        dialog1.close()
        poatuser(mewUser)
        dialog1.close()
        inpTitle.value=""
        inpCatigoriya.value=""
        inpLevel.value=""
        inpLocation.value=""
        inpPhone.value=""

       
      }

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




      let btnsort=document.querySelector(".btnsort")
      btnsort.onclick=async()=>{
     
        try {
             let response=await fetch(`${api}?sortBy=title`)
             let data=await response.json()
             get(data)
        } catch (error) {
            console.error(error);
            
        }
      }
        
      //filter

      let selectCati=document.querySelector(".selectCati")
      selectCati.onclick=async()=>{
      if(selectCati.value=="Backend"){
        try {
             let response=await fetch(`${api}?catigoriya=Backend`)
             let data=await response.json()
             get(data)
        } catch (error) {
            console.error(error);
            
        }
    }
        else if(selectCati.value=="Frontend"){
             try {
                 let response=await fetch(`${api}?catigoriya=Frontend`)
                 let data=await response.json()
                 get(data)
             } catch (error) {
                 console.error(error);
                 
             }
        }
        else{
            gerData()
        }
      
    }



  


  let  butChoice=document.querySelector(".butChoice");
   let   dialogChoice = document.querySelector(".dialogChoice");
   butChoice.onclick =  () => {
    dialogChoice.showModal();
    }



   let butChuse=document.querySelector(".butChuse");
   let butCloseAll=document.querySelector(".butCloseAll");
   let dialogLevel=document.querySelector(".dialogLevel");
   butChuse.onclick =  () => {
    dialogLevel.showModal();
    }
    butCloseAll.onclick =  () => {
    dialogChoice.close();
    
    }

    let butLevelClose=document.querySelector(".butLevelClose");
    butLevelClose.onclick =  () => {
     dialogLevel.close();
     }

     let butLevelCloseAll=document.querySelector(".butLevelCloseAll");
     butLevelCloseAll.onclick =  () => {
     dialogChoice.close();
     dialogLevel.close();
     }
   


     let selectLevel=document.querySelector(".selectLevel")
     selectLevel.onclick=async()=>{
     if(selectLevel.value=="Junior"){
       try {
            let response=await fetch(`${api}?level=Junior`)
            let data=await response.json()
            get(data)
       } catch (error) {
           console.error(error);
           
       }
   }
       else if(selectLevel.value=="Midle"){
            try {
                let response=await fetch(`${api}?level=Midle`)
                let data=await response.json()
                get(data)
            } catch (error) {
                console.error(error);
                
            }

       }
       else if(selectLevel.value=="Senior"){
        try {
             let response=await fetch(`${api}?level=Senior`)
             let data=await response.json()
             get(data)
       } catch (error) {
         console.error(error);
           
       }
      }
       else{
           gerData()
       }
     
     
   }
   
   let onInput=document.querySelector(".onInput")
