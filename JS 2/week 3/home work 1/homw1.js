 let box=document.querySelector(".box")
 let api="https://66e583cf5cc7f9b6273d908c.mockapi.io/ToDo"

 async function getData() {
    try {
         let response=await fetch(api)
         let data=await response.json() 
         get(data)
    } catch (error) {
        console.error(error);
        
        
    }
    
 }

 async function get(data) {
    box.innerHTML=""
    data=data.forEach((element )=> {
        let tr=document.createElement("tr")


        let userChck=document.createElement("td")
        let userText=document.createElement("input")
        userText.type="checkbox"


        let userId=document.createElement("td")
        userId.innerHTML=element.id


        let userImg=document.createElement("td")
        let img=document.createElement("img")
        img.src=element.img
        img.classList.add("imggg")

       
        let userName=document.createElement("td")
        userName.innerHTML=element.name


        let userJob=document.createElement("td")
        userJob.innerHTML=element.job

        let userStatus=document.createElement("td")
        userStatus.innerHTML=element.status
        if( userStatus==true)
        {
            userStatus.style.color="green"
        }
        else{
             userStatus.style.color="red"
        }

        let userNumder=document.createElement("td")
        userNumder.innerHTML=element.PhoneNumbet

        let userAction=document.createElement("td")
       
        let imgEdit=document.createElement("img")
        imgEdit.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeTg1Cynopfl_fnDCceEtY8PGcR1Mb15OStQ&s"
        imgEdit.classList.add("imgEdit")


        let imgDelete=document.createElement("img")
        imgDelete.src="data:image/png;base64,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"
        imgDelete.classList.add("imgDelete")  


        // delete
        imgDelete.onclick=()=>{
            userDelete(element.id)
        }



        userChck.append(userText)
        userAction.append(imgEdit,imgDelete)
        userImg.append(img)
        tr.append(userId,userChck,userImg,userName,userJob,userStatus,userNumder,userAction)
        box.append(tr)
        
    });
    
    
 }
  getData()



  //delete

  async function userDelete(id) {
    try {
         let response=await fetch(`${api}/${id}`,{
            method:"DELETE"

         })
         getData()
    } catch (error) {
        console.error(error);
        
        
    }
    
  }


  // search

  let inpALL=document.querySelector(".inpALL")
  inpALL.oninput= async()=>
    {
        try {
             let response=await fetch(`${api}?name=${inpALL.value}`)
             let data=await response.json()
             get(data)
        } catch (error) {
            console.error(error);
            
        }
    }


    let selectAll=document.querySelector(".selectAll")
    selectAll.onclick= async ()=>{
        try {
            let repp=await fetch(`${api}?status=true`)
        let data=await repp.json()
        get(data)
        } catch (error) {
          console.error(error);
          
          
        }
      
    
    }


    let dialogAdd=document.querySelector(".dialogAdd")
    let  butAdd=document.querySelector(".butAdd")

    let inpImg=document.querySelector(".inpImg")
    let inpName=document.querySelector(".inpName")
    let inpJob=document.querySelector(".inpJob")
    let selectAdd=document.querySelector(".selectAdd")
    let inpPhone=document.querySelector(".inpPhone")
    let butADD=document.querySelector(".butADD")
    let butClose=document.querySelector(".butClose")
    butAdd.onclick=()=>
    {
        dialogAdd.showModal()   
    }
    butClose.onclick=()=>
    {
        dialogAdd.close()
    }





    // addd 

    butADD.onclick=()=>
    {
        let newUser={
            img:inpImg,value,
            name:inpName.value,
            job:inpJob.value
        }
    }