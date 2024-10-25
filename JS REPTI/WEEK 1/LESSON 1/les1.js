

let box=document.querySelector(".box");

let data=[
    {
        id:1,
        name:"Apple",
        
    },
    {
        id:2,
        name:"Appledhsfdhb",
        
    },
    {
        id:3,
        name:"Applefdg gsdvs g",
        
    },
    {
        id:4,
        name:"Applev  regr dgtw regrwg",
        
    },
]

let weekOfDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

function get (data)
{
    box.innerHTML=""
    data=data.forEach((element) => {
        let tr=document.createElement("tr");
        let userId=document.createElement("td");
        userId.innerHTML=element.id

        let userName=document.createElement("td");
        userName.innerHTML=element.name

        let userButton=document.createElement("td");

        let btnDelete=document.createElement("button");
        btnDelete.innerHTML="Delete";
         btnDelete.onclick=()=>deletUser(element.id)

        let btnEdit=document.createElement("button");
        btnEdit.innerHTML="Edit";
        btnEdit.onclick=()=>editUser(element.id)
        btnEdit.onclick=()=>
        {
            editUser(element)
        }

        let chek=document.createElement("input")
        chek.type="checkbox";

        userButton.append(btnDelete,btnEdit,chek)

        tr.append(userId,userName,userButton)
        box.append(tr);
        
    });
}

get(data);


//ddelete

function deletUser(id){
    data=data.filter((item)=>item.id!=id);
   
    get(data);
}
//edd
let nameInp =document.querySelector(".nameInp")
let Adduser=document.querySelector(".Adduser")
let dialAdd=document.querySelector(".dialAdd")
let ok=document.querySelector(".ok")
Adduser.onclick=()=>
{
    dialAdd.showModal();
}

ok.onclick=()=>
{
    let newUser={
        id:data.length+1,
        name:nameInp.value,

    }
    data.push(newUser);
    get(data);
    dialAdd.close();
    nameInp.value=""
}




//edit

let dialEdit=document.querySelector(".dialEdit")

let nameEdit=document.querySelector(".nameEdit")
let shange=document.querySelector(".shange")

function editUser(user)
{
    dialEdit.showModal();
    nameEdit.value=user.name
    shange.onclick=()=>
    {
        user.name=nameEdit.value
        get(data);
        dialEdit.close();
        
    }
}







let date = document.querySelector(".date");
date.innerHTML = `${weekOfDay[new Date().getDay()]} ${
  months[new Date().getMonth()]
} ${new Date().getDate()}`;

let time = document.querySelector(".time");

setInterval(() => {
  let date = new Date();
  time.innerHTML = `${date.toLocaleTimeString()}`;
}, 1000);

 










