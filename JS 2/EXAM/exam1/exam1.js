let tbody=document.querySelector(".tbody")

let data=[
  {
    id:1,
    TaskName:"ilhom",
    Status:false,

  },
  {
    id:2,
    TaskName:"maga",
    Status:false,

  },
  {
    id:3,
    TaskName:"Akbar",
    Status:false,

  },

]

function get (data)
{ 
  tbody.innerHTML=""
  data.forEach((elem)=> {
    let tr1=document.createElement("tr")
    let userId=document.createElement("td")
    userId.innerHTML=elem.id
    let userName=document.createElement("td")
    userName.innerHTML=elem.TaskName
    let userStatus=document.createElement("td")
    userStatus.innerHTML=elem.Status?"Active":"Inactive"

  if(elem.Status){userStatus.style.color="green";userName.style.textDecoration="line-through"}
  else {userStatus.style.color="red"}


    let userEdit=document.createElement("td")
    let userBut=document.createElement("button")
    userBut.onclick=()=>{editId(elem.id)}
    userBut.innerHTML="EDIT"
    let userRemuve=document.createElement("td")
    let RemuveBut=document.createElement("button")
    RemuveBut.onclick=()=>{deleteName (elem.id)}
    RemuveBut.innerHTML="DELETE"
    let userCheck=document.createElement("td")
    let userCheckBox= document.createElement("input")
    userCheckBox.type="checkbox"
    userCheckBox.checked=elem.Status
    userCheckBox.onclick=()=>{checkElem(elem)}
      




    tr1.append(userId,userName,userStatus,userEdit,userRemuve,userCheck)
    userEdit.appendChild(userBut)
    userRemuve.appendChild(RemuveBut)
    userCheck.appendChild(userCheckBox)


    tbody.append(tr1)
  });

}
get (data)

//delete
function  deleteName (id)
{
  data=data.filter((elem)=>elem.id!==id)
  get(data)
}

// edit
let dialogForEdit=document.querySelector(".dialogForEdit")
let imputForEdit=document.querySelector(".imputForEdit")
let ButEdit=document.querySelector(".ButEdit")
function editId(id)
{
  dialogForEdit.showModal()
   let param=data.find((elem)=>elem.id==id)
   imputForEdit.value=param.TaskName
   ButEdit.onclick=()=>{param.TaskName=imputForEdit.value
    dialogForEdit.close()
    get(data)
   }
}


//add
let add=document.querySelector(".add")
let dialogForadd=document.querySelector(".dialogForadd")
let imputForadd=document.querySelector(".imputForadd")
let Butadd=document.querySelector(".Butadd")
add.onclick=()=>{
dialogForadd.showModal()

}
Butadd.onclick=()=>{
  let newTask={
    id:data.length+1,
    TaskName:imputForadd.value,
    Status:false,
  }
  data.push(newTask)
  dialogForadd.close()
  get (data)
}


//ckeck

function checkElem(elem)
{
  elem.Status=!elem.Status
  get (data)
}



//surch

let surch=document.querySelector(".surch")
surch.oninput=()=>
{
  let find=surch.value.toLowerCase()
  let filterData=data.filter((elem)=>{
    return elem.TaskName.toLowerCase().includes(find)

  })
  get (filterData)
}
