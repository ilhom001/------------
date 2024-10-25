 let box=document.querySelector(".box")
 let  massiv =[]
 let deleteCeck=document.querySelector(".deleteCeck")
  let api="https://66e583cf5cc7f9b6273d908c.mockapi.io/user"

 
 


  


 deleteCeck.onclick=()=>{

 }

async function getData(){
    try {
        let response=await fetch(api)
        let data=await response.json()
        get (data)
        
    } catch (error) {
        console.log(error)
        
    }
}


function get(data){
    box.innerHTML = ""
    data=data.forEach((element) => {
        let tr=document.createElement("tr")
        let userChck=document.createElement("td")
        let userText=document.createElement("input")
        userText.type="checkbox"

        userText.value=element.id
        userText.onchange=(event) => {
            if(event.target.checked){
                massiv.push(element.id)
            }
            else{
                massiv=massiv.filter(id => id!==element.id,)
            }
        }





        let userId=document.createElement("td")
        userId.innerHTML=element.id


        let userDetail=document.createElement("h3")
        userDetail.innerHTML=element.ProductDetail

        let divAll=document.createElement("td")
        divAll.className="divAll"
        let divBox1=document.createElement("div")
        let img=document.createElement("img")
        img.src=element.img
        img.classList.add("img")
        let divBox2=document.createElement("div")
      
        let userDescriptions=document.createElement("h5")
        userDescriptions.innerHTML=element.description.slice(0,20)+"..."

        let userCatigories=document.createElement("td")
        userCatigories.innerHTML=element.catigories

        let userPraice=document.createElement("td")
        userPraice.innerHTML=element.praice

        let userQTY =document.createElement("td")
        userQTY.innerHTML=element.QTY

        let userStatus=document.createElement("td")
        userStatus.innerHTML=element.status 
        if(element.status == 'true'){
            userStatus.style.color="green"
        }
        else{
            userStatus.style.color="red"
        }

           


        let userAction=document.createElement("td")
        let userEdit=document.createElement("button")
        userEdit.innerHTML="Edit"
        userEdit.classList.add("userEdit")

        let butInfo=document.createElement("button")
        butInfo.innerHTML="Info"
        butInfo.classList.add("butInfo")
       

         // info
         butInfo.onclick=()=>{
          infoProduct(element.id)
        }


        //edit
        
        userEdit.onclick=()=>{
            dialogEdit.showModal()
        }



        let userDelete=document.createElement("button")
        userDelete.innerHTML="Delete"
        userDelete.classList=("userDelete")
         


        // delete
        userDelete.onclick=()=>{
            deleteUser(element.id)
        }
        

        
        
        userAction.append(userEdit,userDelete,butInfo)
          userChck.append(userText)
        divBox1.append(img)
        divBox2.append(userDetail,userDescriptions)
        divAll.append(divBox1,divBox2)
        tr.append(userChck,userId,divAll,userCatigories,userPraice,userQTY,userStatus,userAction)
        box.append(tr)


        userEdit.onclick=()=>
            {
                editPost(element)
            }
    });
  
    
}

getData()

let butОТМЕНА=document.querySelector(".butОТМЕНА")
let dialogCheak=document.querySelector(".dialogCheak")
deleteCeck.onclick=()=>{
    dialogCheak.showModal()
}

butОТМЕНА.onclick=()=>{
    dialogCheak.close()
}


async function deleteUser(id){
    try {
        let response=await fetch(`${api}/${id}`,{
            method:"DELETE"
        })
        if(response.ok){
            getData()
        }
    } catch (error) {
        console.log(error)
        
    }
}



//search

let inpSearch=document.querySelector(".inpSearch")
inpSearch.oninput= async()=>
    {
        try {
             let response=await fetch(`${api}?ProductDetail=${inpSearch.value}`)
             let data=await response.json()
             get(data)
        } catch (error) {
            console.error(error);
            
        }
    }


    //add

    let dialogAdd=document.querySelector(".dialogAdd")
    let inpImg=document.querySelector(".inpImg")
    let  inpProduct=document.querySelector(".inpProduct")
    let inpDescription=document.querySelector(".inpDescription")
    let inpCategories=document.querySelector(".inpCategories")
    let inpPrice=document.querySelector(".inpPrice")
    let inpQTY=document.querySelector(".inpQTY")
    let selectStatus=document.querySelector(".selectStatus")

    let butSave=document.querySelector(".butSave")
    let butClose=document.querySelector(".butClose")


      let  butAdd=document.querySelector(".butAdd")
      butAdd.onclick=()=>{
          dialogAdd.showModal()
      }
      
      butClose.onclick=()=>{
          dialogAdd.close()
      }
 
      
      butSave.onclick= async()=>{
        try {
            let response=await fetch(api,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    img:inpImg.value,
                    ProductDetail:inpProduct.value,
                    description:inpDescription.value,
                    catigories:inpCategories.value,
                    praice:inpPrice.value,
                    QTY:inpQTY.value,
                    status:selectStatus.value   
                })
            })
            if(response.ok){
                getData()
                dialogAdd.close()
            }
        } catch (error) {
            console.log(error)
            
        }
      }


      //edit

      let dialogEdit=document.querySelector(".dialogEdit")
      let editProduct=document.querySelector(".editProduct")
      let editCategories=document.querySelector(".editCategories")
      let editPrice=document.querySelector(".editPrice")
      let editQTY=document.querySelector(".editQTY")
      let selectEdit=document.querySelector(".selectEdit")
      let butEdit=document.querySelector(".butEdit")
      let butCloseEdit=document.querySelector(".butCloseEdit")
       

        function editPost (user)
        {

          

            dialogEdit.showModal()
            editProduct.value=user.ProductDetail
            editCategories.value=user.catigories
            editPrice.value=user.praice
            editQTY.value=user.QTY
            selectEdit.value=user.status

            butEdit.onclick=()=>{
                let editUser={
                    ProductDetail:editProduct.value,
                    catigories:editCategories.value,
                    praice:editPrice.value,
                    QTY:editQTY.value,
                    status:selectEdit.value
                }
                putUser(user.id,editUser)
            
              }
              
              
        }

     
       
      
      async function putUser(id,User) {
        try {
            await fetch(`${api}/${id}`,{
                method:"PUT",
                headers :{
                  Accept :"application/json",
                 "Content-Type": "application/json",
                },
                body: JSON.stringify(User),
            })  
            getData()
            dialogEdit.close()
        } catch (error) {
            console.error(error);
            
        }
      }

      butCloseEdit.onclick=()=>{
        dialogEdit.close()
    }
 

 
      
      //for filter
    let selectSort=document.querySelector(".selectSort")
  

    let checkUncheck=document.querySelector(".checkUncheck")

    let checForm=document.querySelector(".checForm")
    let butOk=document.querySelector(".butOk")


///checkbox
    butOk.onclick= async()=>{
        try {
            for(let id of  massiv )
            {
                await fetch(`${api}/${id}`,{method:"DELETE"})



            }
            massiv=[]
            getData()
            dialogCheak.close()
        } catch (error) {
            console.error(error)

            
        }
    }
     
  
   
    // for sort

   let dialogInfo=document.querySelector(".dialogInfo")
   let butInfoClos=document.querySelector(".butInfoClose")



   /////   //info 
    let spanCati=document.querySelector(".spanCati")
    let spanPrice=document.querySelector(".spanPrice")
    let spanQTY=document.querySelector(".spanQTY")
     
    let imgInfo= document.querySelector(".imgInfo")
   

 
   function  infoProduct (elem)
   {
    dialogInfo.showModal()
    spanCati.innerHTML=elem.catigories
    spanPrice.innerHTML=elem.praice
    spanQTY.innerHTML=elem.QTY
    imgInfo.src=elem.img

   }
    butInfoClos.onclick=()=>{
        dialogInfo.close()
    }








 











