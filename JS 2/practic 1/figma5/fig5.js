let tbody=document.querySelector(".tbody")

let data=[
    {
        id:1,
        TaskName:"ilhom",
        Status:false
    },
    {
        id:2,
        TaskName:"ilhom",
        Status:false
    },
    {
        id:3,
        TaskName:"ilhom",
        Status:false
    }
   
   
] 
function get (data)
{
    tbody.innerHTML=""
    data.forEach((elem )=> {

        let tr1=document. createElement("tr")
        let usreId=document.createElement("td")
        usreId.innerHTML=elem.id
        let userName=document.createElement("td")
        userName.innerHTML=elem.TaskName
        let userStatus=document.createElement("td")
        userStatus.innerHTML=elem.Status ? "Active" : "Inactive"


        let userEdit=document.createElement("td")
        let butEdit=document.createElement("button")
        butEdit.innerHTML="EDIT"
        let userRemove=document.createElement("td")
        let butRemove=document.createElement("button")
       butRemove.innerHTML="DELTE"

         
       
         
         let userChack=document.createElement("td")
         let userChackBox=document.createElement("input")
         userChackBox.type="checkbox"
       
           
         userRemove.appendChild(butRemove)
tr1.append(usreId, userName, userStatus,userEdit, userRemove, userChack)
tbody.append(tr1)
userEdit.appendChild(butEdit)
userChack.appendChild(userChackBox)

      butRemove=onclick=()=>
      {
        deleteId(elem.id)
      }

    });
}

get(data)

//delete 

function deleteId(elem)
{
    data=data.filter((el)=>el.id!==elem)
    get(data)
}

//edit

