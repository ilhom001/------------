
let tbody=document.querySelector(".tbody")
let select=document.querySelector("#ActAndInact")

let data=
[
    {
        id:1,
        name:"Turazoda Muhammadamin",
        email:"muhammadamin@gmail.com",
        status:true,
    },
    {
        id:2,
        name:"Sharipov Shuhrat",
        email:"shuhrat@gmail.com",
        status:true,
    },
    {
        id:3,
        name:"Ishonkulov Ilhom",
        email:"ilhom@gmail.com",
        status:false,
    },
    {
        id:4,
        name:"Jurakhon Kholov",
        email:"jurakhon@gmail.com",
        status:false,
    },
    {
        id:5,
        name:"Nazarov Nazir",
        email:"nazir@gmail.com",
        status:false,
    },
    {
        id:6,
        name:"Karimov Shahzod",
        email:"shahzod@gmail.com",
        status:false,
    },
    {
        id:7,
        name:"Arbobzoda Muhammad",
        email:"muhammad@gmail.com",
        status:false,
    },
    {
        id:8,
        name:"Shaykhov Kamoliddin",
        email:"kamoliddin@gmai.com",
        status:false,
    },
];

function get(data) 
{
    tbody.innerHTML=""
    data.forEach((element) => 
        {
            let container=document.createElement("tr")

            let userid=document.createElement("td")
            userid.innerHTML=element.id

            let userName=document.createElement("td")
            userName.innerHTML=element.name

            let userEmail=document.createElement("td")
            userEmail.innerHTML=element.email

            let userStatus=document.createElement("td")
            userStatus.classList.add("acinac")
            if(element.status){userStatus.innerHTML="ACTIVE";userStatus.style.color="green"}
            else{userStatus.innerHTML="INACTIVE";userStatus.style.color="red"}


            let buttonsUser=document.createElement("td")

            let buttonDelete=document.createElement("button")
            buttonDelete.onclick=()=>{deleteStudent(element.id)}
            buttonDelete.classList.add("butdel")
            buttonDelete.innerHTML="DELETE"

            let buttonEdit=document.createElement("button")
            buttonEdit.onclick=()=>{EditStudent(element.id)}
            buttonEdit.classList.add("butedut")
            buttonEdit.innerHTML="EDIT"

            let buttonShow=document.createElement("button")
            buttonShow.classList.add("buttonshow")
            buttonShow.innerHTML="SHOW"

            let buttonCheckbox=document.createElement("input")
            buttonCheckbox.onclick=()=>{checkStudent(element)}
            buttonCheckbox.type="checkbox"
            buttonCheckbox.classList.add("checkboxbutton")
            buttonCheckbox.checked=element.status
            if(element.status){userName.style.textDecoration="Line-through"}

            buttonsUser.append(buttonDelete,buttonEdit,buttonShow,buttonCheckbox)
            container.append(userid,userName,userEmail,userStatus,buttonsUser)
            tbody.append(container)
            select.onclick=()=>
            {
              findActive(select.value)
            }
        })    
}
get(data)


// ADD STUDENT

let buttonAdd=document.querySelector(".adduserbutton")
let dialogadd=document.querySelector(".DialogAdd")
let inputName=document.querySelector(".inputForName")
let inputEmail=document.querySelector(".inputForEmail")
let AddButton=document.querySelector(".ADD")

buttonAdd.onclick=()=>
    {
        dialogadd.showModal()
    }

    AddButton.onclick=()=>
        {
            let element=
            {
                id:data.length+1,
                name:inputName.value,
                email:inputEmail.value+"@gmail.com",
                status:false,
            }
            data.push(element)
            get(data)
            dialogadd.close()
            inputName.value=""
            inputEmail.value=""
        };

// DELETE STUDENT

function deleteStudent(id) 
{
    data=data.filter((element)=>element.id!==id);
    get(data)
}

// CHECK STUDENT

function checkStudent(element) 
{
    element.status=!element.status
    get(data)
}

// EDIT STUDENTS


let DialogEdit=document.querySelector(".DialogEdit")
let editname=document.querySelector(".inputforNameEdit")
let editemil=document.querySelector(".inputForEmailEdit")
let btnEdit=document.querySelector(".EDIT")

function EditStudent(id) 
{
    let about=data.find((element)=>element.id===id)
        
    editname.value=about.name
    editemil.value=about.email
    DialogEdit.showModal() 
    btnEdit.onclick=()=>
    {
        about.name=editname.value
        about.email=editemil.value
        get(data)
        DialogEdit.close()
    }
}

// SEARCH STUDENTS


let searchInput=document.querySelector(".search")

searchInput.oninput=()=>
    {
        let searchLow=searchInput.value.toLowerCase()
        let filterData=data.filter((element)=>
            {
              return  element.name.toLowerCase().includes(searchLow) || element.email.toLowerCase().includes(searchLow)
            })
            get(filterData);
    }
    
    

// FIlter ACTIVE and INACTIVE

let allStudents=document.querySelector(".AllStudents")
let activeStudent=document.querySelector(".ActiveStudents")
let InactiveStudent=document.querySelector(".InactiveStudents")


function findActive(ib) 
{
    let filtet = null;
    if (ib == "all") 
    {
        filtet = data;
    } 
    else 
    {
        let statu = ib == "active"
        filtet = data.filter((el) => el.status === statu);
    }
    get(filtet)
}

get(data)